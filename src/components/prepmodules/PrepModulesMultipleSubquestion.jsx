import React, { useState } from "react";
import { MathText } from "../mathJax/MathText";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import locale from "rc-pagination/lib/locale/en_US";

const PrepModulesMultipleSubquestion = ({ data }) => {
  console.log(data);
  const totalSubquestions = data.reduce((accumulator, question) => {
    if (question.subQuestions && question.subQuestions.length > 0) {
      return accumulator + question.subQuestions.length;
    }
    return accumulator;
  }, 0);
  const alphabets = "ABCDEFGHIJKL".split("");
  const [selectedOptions, setSelectedOptions] = useState(
    Array(totalSubquestions).fill([])
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [explanationsVisible, setExplanationsVisible] = useState(
    Array(data.length).fill(false)
  );

  const handleOptionClickMultiple = (
    questionIndex,
    subQuestionIndex,
    optionIndex
  ) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentPage] =
      updatedSelectedOptions[currentPage] || [];
    updatedSelectedOptions[currentPage][questionIndex] =
      updatedSelectedOptions[currentPage][questionIndex] || {};
    updatedSelectedOptions[currentPage][questionIndex][subQuestionIndex] =
      optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };
  const toggleExplanationVisibility = (questionIndex) => {
    const updatedExplanationsVisible = [...explanationsVisible];
    updatedExplanationsVisible[questionIndex] =
      !updatedExplanationsVisible[questionIndex];
    setExplanationsVisible(updatedExplanationsVisible);
  };
  const calculateQuestionNumber = (questionIndex, subQuestionIndex) => {
    let questionNumber = 0;
    for (let i = 0; i <= questionIndex; i++) {
      const question = data[i];
      if (question.subQuestions && question.subQuestions.length > 0) {
        for (let j = 0; j < question.subQuestions.length; j++) {
          questionNumber++;
          if (i === questionIndex && j === subQuestionIndex) {
            return questionNumber;
          }
        }
      } else {
        questionNumber++;
        if (i === questionIndex && subQuestionIndex === 0) {
          return questionNumber;
        }
      }
    }
    return questionNumber;
  };
  const renderQuestionWithMultipleSubquestions = (question, questionIndex) => {
    const isExplanationVisible = explanationsVisible[questionIndex];
    return (
      <div key={questionIndex} className="options-grid">
        {question?.questionTextAndImages[0]?.text[0] && (
          <div className="question-box">
            <div className="flex flex-col">
              <span className={`question-number id-${question?._id}`}>
                {`P${questionIndex + 1} `}
              </span>
              <div className="pt-[2.5rem] pb-2 ">
                <div className="text-[20px]   pl-8 flex items-center top-[-40px] px-4   ">
                  <div className="">
                    {question?.description[0] ? <strong>Direction:</strong> : ""}
                    {question?.description?.map((desc, descIndex) => (
                      <MathText
                        className="question-text mb-2"
                        key={descIndex}
                        text={desc}
                        textTag="h6"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-[20px]  pl-8 flex items-center top-[-40px] px-4 ">
                  {question?.questionTextAndImages?.map(
                    (textAndImages, textAndImagesIndex) => (
                      <div className="flex flex-col" key={textAndImagesIndex}>
                        {textAndImages?.text?.map((text, textIndex) => (
                          <MathText
                            className="question-text"
                            key={textIndex}
                            text={text}
                            textTag="h6"
                          />
                        ))}
                        {textAndImages?.image ? (
                          <img
                            className="question-image"
                            key={textAndImagesIndex}
                            src={textAndImages.image}
                            alt={`Img ${textAndImagesIndex + 1}`}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {question?.subQuestions?.map((subQuestion, subQuestionIndex) => {
          return (
            <div>
              <div key={subQuestionIndex} className="question-box">
                <div className="flex flex-col">
                  <div className="flex position-absolute top-0 left-0 items-center justify-between">
                    <div className="py-4 px-6">
                      <span className={`question-number id-${question?._id}`}>
                        {`${calculateQuestionNumber(
                          questionIndex,
                          subQuestionIndex,
                          currentPage
                        )} `}
                      </span>
                    </div>
                  </div>
                  <div className="flex ps-3 pt-[2.5rem] pb-2 justify-start flex-col">
                    {subQuestion?.questionTextAndImages?.map(
                      (textAndImages, textAndImagesIndex) => (
                        <div className="flex flex-col" key={textAndImagesIndex}>
                          {textAndImages?.text?.map((text, textIndex) => (
                            <MathText
                              className="question-text mb-2"
                              key={textIndex}
                              text={text}
                              textTag="h6"
                            />
                          ))}
                          {textAndImages?.image ? (
                            <img
                              className="question-image"
                              key={textAndImagesIndex}
                              src={textAndImages?.image}
                              alt={`Img ${textAndImagesIndex + 1}`}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      )
                    )}
                  </div>

                  {/* Render options */}
                  <div className="flex flex-col pl-3 mt-2">
                    {subQuestion.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`option-box ${
                          selectedOptions[currentPage] &&
                          selectedOptions[currentPage][questionIndex] &&
                          selectedOptions[currentPage][questionIndex][
                            subQuestionIndex
                          ] === optionIndex
                            ? subQuestion.correctOptionIndex === optionIndex
                              ? "correct"
                              : "incorrect"
                            : ""
                        }`}
                        onClick={() =>
                          handleOptionClickMultiple(
                            questionIndex,
                            subQuestionIndex,
                            optionIndex
                          )
                        }
                      >
                        <span className="option-alphabet text-black px-2">
                          {alphabets[optionIndex]}
                        </span>
                        <div className="flex mx-3 text-[20px]  relative  justify-start gap-3 w-100 items-center ">
                          <MathText text={option.text} textTag="h6" />
                          <div className="single-image-container">
                            {option.image && (
                              <img
                                className="question-image"
                                src={option.image}
                                alt={`Img ${optionIndex + 1}`}
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex">
                          {selectedOptions[currentPage] &&
                            selectedOptions[currentPage][questionIndex] &&
                            selectedOptions[currentPage][questionIndex][
                              subQuestionIndex
                            ] === optionIndex && (
                              <span>
                                {subQuestion.correctOptionIndex ===
                                optionIndex ? (
                                  <i className="fa-solid fa-check"></i>
                                ) : (
                                  <i className="fa-solid fa-xmark text-black"></i>
                                )}
                              </span>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Explanation Button and Explanation */}
              <div className="my-2 mb-5 ">
                <div className="w-100 flex justify-center items-center">
                  <button
                    className="text-capitalize border-solid rounded-3xl p-2 px-3 bg-white border-black flex justify-center"
                    onClick={() => toggleExplanationVisibility(questionIndex)}
                  >
                    {isExplanationVisible
                      ? "Hide Explanation"
                      : "Show Explanation"}
                  </button>
                </div>
                <div className="explanation-wrapper ">
                  {isExplanationVisible && (
                    <div className="explanation">
                      {subQuestion?.explanation?.map(
                        (explanation, explanationIndex) => (
                          <div
                            key={explanationIndex}
                            className="explanation-box"
                            style={{ margin: "0 20px" }}
                          >
                            {explanation?.text?.map((text, textIndex) => (
                              <MathText
                                className="explanation-text mb-2"
                                key={textIndex}
                                text={text}
                                textTag="h6"
                              />
                            ))}
                            {explanation?.image && (
                              <img
                                className="question-image"
                                src={explanation?.image}
                                alt={`Img ${explanationIndex + 1}`}
                              />
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    window.scroll(0, 0); 
  };

  return (
    <section className="question-practice question-practice-v2">
      <div className="w-100 d-flex justify-content-center mt-4 align-items-center flex-column">
        <div className="options-container">
          {renderQuestionWithMultipleSubquestions(
            data[currentPage],
            currentPage
          )}
        </div>
      </div>
        <Pagination
          locale={locale}
          current={currentPage} // Zero-based indexing
          total={data?.length}
          pageSize={1}
          onChange={handlePageChange}
          showPrevNextJumpers
          showQuickJumper
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
        />
    </section>
  );
};

export default PrepModulesMultipleSubquestion;