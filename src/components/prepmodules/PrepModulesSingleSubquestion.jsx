import React, { useState } from "react";
import { MathText } from "../mathJax/MathText";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import locale from "rc-pagination/lib/locale/en_US";

const PrepModulesSingleSubquestion = ({ data }) => {
  const alphabets = "ABCDEFGHIJKL".split("");
  const [selectedOptions, setSelectedOptions] = useState(
    Array(data.length).fill([])
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [explanationsVisible, setExplanationsVisible] = useState(
    Array(data.length).fill(false)
  );

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentPage] = [
      ...updatedSelectedOptions[currentPage],
    ];
    updatedSelectedOptions[currentPage][questionIndex] = optionIndex;

    setSelectedOptions(updatedSelectedOptions);
  };

  const toggleExplanationVisibility = (questionIndex) => {
    const updatedExplanationsVisible = [...explanationsVisible];
    updatedExplanationsVisible[questionIndex] = !updatedExplanationsVisible[
      questionIndex
    ];
    setExplanationsVisible(updatedExplanationsVisible);
  };

  const renderQuestion = (question, questionIndex) => {
    const isExplanationVisible = explanationsVisible[questionIndex];
    console.log("question is", question);
    return (
      <div className="options-grid">
        <div className="question-box">
          <div className="question-option">
            <div className="question">
              <div class="question-number-container">
                <span className={`question-number id-${question?._id}`}>
                  {`${questionIndex + 1 + currentPage * 5} `}
                </span>
              </div>
              <div class="question-text-container">
                {/* for paragraph rendering  */}
                {/* {question?.questionTextAndImages[0]?.text[0] ? (
                  <div className="pt-[2.5rem] pb-2 ">
                    <div className="text-[20px]   pl-8 flex items-center top-[-40px] px-4   ">
                      <div className="">
                        {question?.description[0] ? (
                          <strong>Direction:</strong>
                        ) : (
                          ""
                        )}
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
                          <div
                            className="flex flex-col"
                            key={textAndImagesIndex}
                          >
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
                  </div>
                ) : (
                  ""
                )} */}

                {question?.subQuestions[0]?.questionTextAndImages?.map(
                  (textAndImages, textAndImagesIndex) => (
                    <div className="" key={textAndImagesIndex}>
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
            </div>
            {question?.subQuestions[0]?.options?.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`option-box   
    ${
      selectedOptions[currentPage] &&
      selectedOptions[currentPage][questionIndex] === optionIndex
        ? question?.subQuestions[0]?.correctOptionIndex === optionIndex
          ? "correct"
          : "incorrect"
        : ""
    }`}
                onClick={() => handleOptionClick(questionIndex, optionIndex)}
              >
                <span className="option-alphabet px-2">
                  {alphabets[optionIndex]}
                </span>
                <div className="flex mx-3 text-[20px]  relative  justify-start gap-3 w-100 items-center ">
                  <MathText text={option?.text} textTag="h6" />
                  <div className="single-image-container">
                    {option?.image && (
                      <img
                        className="question-image"
                        src={option?.image}
                        alt={`Img ${optionIndex + 1}`}
                      />
                    )}
                  </div>
                </div>
                <div className="flex">
                  {selectedOptions[currentPage] &&
                    selectedOptions[currentPage][questionIndex] ===
                      optionIndex && (
                      <span>
                        {question?.subQuestions[0]?.correctOptionIndex ===
                        optionIndex ? (
                          <i className="fa-solid fa-check"></i>
                        ) : (
                          <i className="fa-solid fa-xmark"></i>
                        )}
                      </span>
                    )}
                </div>
              </div>
            ))}
          </div>

          <div className="w-100 flex justify-center items-center">
            <button
              className="btn-tertiary"
              onClick={() => toggleExplanationVisibility(questionIndex)}
            >
              {isExplanationVisible ? "Hide Explanation" : "Show Explanation"}
            </button>
          </div>
          <div className="explanation-wrapper ">
            {isExplanationVisible && (
              <div className="explanation">
                {question?.subQuestions[0]?.explanation?.map(
                  (explanation, explanationIndex) => (
                    <div
                      key={explanationIndex}
                      className="explanation-box"
                      style={{ margin: "0 10px" }}
                    >
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <h6 className="mb-0 text-primary fw-bold">Answer:</h6>
                        <h6 className="mb-0  fw-bold text-secondary">
                          Option{" "}
                          {question?.subQuestions[0]?.correctOptionIndex !==
                          undefined
                            ? alphabets[
                                question?.subQuestions[0]?.correctOptionIndex
                              ]
                            : ""}
                        </h6>
                      </div>
                      <h6 className="text-primary fw-bold">Solution:</h6>
                      {explanation.text.map((text, textIndex) => (
                        <MathText
                          className="explanation-text mb-2"
                          key={textIndex}
                          text={text}
                          textTag="h6"
                        />
                      ))}
                      {explanation?.image ? (
                        <img
                          className="question-image"
                          src={explanation?.image}
                          alt={`Img ${explanationIndex + 1}`}
                        />
                      ) : (
                        ""
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
  };

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    window.scroll(0, 0);
  };

  return (
    <section className="question-practice  question-practice-v2">
      <div className="w-100 flex justify-center mt-4 items-center flex-col">
        <div className="options-container">
          {data
            .slice(currentPage * 5, (currentPage + 1) * 5)
            .map((question, questionIndex) =>
              renderQuestion(question, questionIndex)
            )}
        </div>
        <div className="pagination">
          <Pagination
            defaultCurrent={currentPage + 1}
            locale={locale}
            total={data.length}
            pageSize={5} // Display 5 questions per page
            onChange={handlePageChange}
            showPrevNextJumpers
            showQuickJumper
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PrepModulesSingleSubquestion;
