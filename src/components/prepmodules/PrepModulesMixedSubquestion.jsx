import React, { useState } from "react";
import { MathText } from "../mathJax/MathText";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import locale from "rc-pagination/lib/locale/en_US";

const PrepModulesMixedSubquestion = ({data}) => {
  const alphabets = "ABCDEFGHIJKL".split("");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(data?.length).fill([])
  );
  const [explanationsVisible, setExplanationsVisible] = useState(
    Array(data?.length).fill(false)
  );
  const [explanationsVisiblePara, setExplanationsVisiblePara] = useState(
    Array(10)
      .fill(null)
      .map(() => Array(10).fill(false))
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
    // console.log("question is", question);
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
                <div className="flex justify-between items-center">
                  <span className="option-alphabet">
                    {alphabets[optionIndex]}
                  </span>
                  <div className="flex justify-start  w-100 items-center ">
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
                        <h6 className="mb-0 text-blueviolet-100 fw-bold">
                          <strong> Answer:</strong>
                        </h6>
                        <h6 className="mb-0  fw-bold text-salmon-200">
                          <strong>
                            {" "}
                            Option{" "}
                            {question?.subQuestions[0]?.correctOptionIndex !==
                            undefined
                              ? alphabets[
                                  question?.subQuestions[0]?.correctOptionIndex
                                ]
                              : ""}
                          </strong>
                        </h6>
                      </div>
                      <h6 className="text-blueviolet-100 fw-bold">
                        {" "}
                        <strong>Solution:</strong>
                      </h6>
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
    updatedSelectedOptions[currentPage][questionIndex][
      subQuestionIndex
    ] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };
  const toggleExplanationVisibilityPara = (itemIndex, questionIndex) => {
    setExplanationsVisiblePara((prevExplanationsVisible) => {
      const updatedExplanationsVisible = [...prevExplanationsVisible];
      updatedExplanationsVisible[itemIndex] = [
        ...prevExplanationsVisible[itemIndex],
      ];
      updatedExplanationsVisible[itemIndex][
        questionIndex
      ] = !prevExplanationsVisible[itemIndex][questionIndex];
      return updatedExplanationsVisible;
    });
  };
  const renderQuestionWithMultipleSubquestions = (question, questionIndex) => {
    return (
      <div key={questionIndex} className="">
        {question?.questionTextAndImages[0]?.text[0] && (
          <div className="question-box paragraph">
            {question?.description[0] ? (
              <div className="mb-2">
                <strong>Direction:</strong>
                {question?.description?.map((desc, descIndex) => (
                  <MathText
                    className="question-text"
                    key={descIndex}
                    text={desc}
                    textTag="h6"
                  />
                ))}
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              <span className={`question-number id-${question?._id}`}>
              {`${questionIndex + 1 + currentPage * 5} `}
              </span>
              {question?.questionTextAndImages?.map(
                (textAndImages, textAndImagesIndex) => (
                  <div className="question-text" key={textAndImagesIndex}>
                    {textAndImages?.text?.map((text, textIndex) => (
                      <MathText
                        className=""
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
        )}

        {question?.subQuestions?.map((subQuestion, subQuestionIndex) => {
          return (
            <div>
              <div key={subQuestionIndex} className="options-container">
                <div className="options-grid">
                  <div className="question-box">
                    <div className="question-option">
                      <div className="flex items-center justify-start">
                        <span className={`question-number id-${question?._id}`}>
                          {`${String.fromCharCode(subQuestionIndex + 97)} `}
                        </span>
                        <div className="">
                          {subQuestion?.questionTextAndImages?.map(
                            (textAndImages, textAndImagesIndex) => (
                              <div
                                className="flex flex-col"
                                key={textAndImagesIndex}
                              >
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
                      {subQuestion?.options?.map((option, optionIndex) => (
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
                          <div className="flex items-center justify-between">
                            <span className="option-alphabet">
                              {alphabets[optionIndex]}
                            </span>
                            <div className="flex justify-start w-100 items-center ">
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
                                    <i className="fa-solid fa-xmark"></i>
                                  )}
                                </span>
                              )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-100 flex justify-center items-center  ">
                      <button
                        className="btn-tertiary"
                        onClick={() =>
                          toggleExplanationVisibilityPara(
                            questionIndex,
                            subQuestionIndex
                          )
                        }
                      >
                        {explanationsVisiblePara[questionIndex] &&
                        explanationsVisiblePara[questionIndex][subQuestionIndex]
                          ? "Hide Explanation"
                          : "Show Explanation"}
                      </button>
                    </div>
                    <div className="explanation-wrapper ">
                      {explanationsVisiblePara[questionIndex] &&
                        explanationsVisiblePara[questionIndex][
                          subQuestionIndex
                        ] && (
                          <div className="explanation">
                            {subQuestion?.explanation?.map(
                              (explanation, explanationIndex) => (
                                <div
                                  key={explanationIndex}
                                  className="m-0 pt-3"
                                >
                                  <div className="flex flex-row gap-2 justify-start items-center">
                                    <h6 className="mb-0 text-blueviolet-100 fw-bold">
                                      <strong> Answer:</strong>
                                    </h6>
                                    <h6 className="mb-0  fw-bold text-salmon-200">
                                      <strong>
                                        Option{" "}
                                        {subQuestion?.correctOptionIndex !==
                                        undefined
                                          ? alphabets[
                                              subQuestion?.correctOptionIndex
                                            ]
                                          : ""}
                                      </strong>
                                    </h6>
                                  </div>
                                  <h6 className="text-blueviolet-100 fw-bold">
                                    <strong> Solution: </strong>
                                  </h6>
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
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    setExplanationsVisible(Array(data.length).fill(false));
    window.scroll(0, 0);
  };

  return (
    <section className="question-practice question-practice-v2">
      <div className="w-100 flex justify-center mt-4 items-center flex-col">
        <div className="question-container">
        {data?.slice(currentPage * 5, (currentPage + 1) * 5)
            .map((question, questionIndex) => {
              if (question.subQuestions && question.subQuestions.length > 1) {
                return renderQuestionWithMultipleSubquestions(
                  question,
                  questionIndex
                );
              } else {
                return renderQuestion(question, questionIndex);
              }
            })}
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
      </div>
    </section>
  )
}

export default PrepModulesMixedSubquestion