import React, { useEffect, useState } from "react";
import { MathText } from "../mathJax/MathText";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import locale from "rc-pagination/lib/locale/en_US";
import { useLocation } from "react-router-dom";

const PrepModulesMultipleSubquestion = ({ data }) => {
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
  const [explanationsVisiblePara, setExplanationsVisiblePara] = useState(
    Array(10)
      .fill(null)
      .map(() => Array(10).fill(false))
  );

  const location = useLocation();

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    const parsedPage = parseInt(storedPage, 10);
    if (!isNaN(parsedPage) && parsedPage >= 0) {
      setCurrentPage(parsedPage);
    } else {
      setCurrentPage(0);
    }

    // Cleanup function to remove currentPage from localStorage
    return () => {
      localStorage.removeItem("currentPage");
    };
  }, [location]);

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
    // const isExplanationVisible = explanationsVisible[questionIndex];
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
                {`P${questionIndex + 1} `}
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
                          {`${calculateQuestionNumber(
                            questionIndex,
                            subQuestionIndex,
                            currentPage
                          )} `}
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
                            <div className="flex flex-row gap-2 justify-start items-center">
                              <h6 className="mb-0 text-blueviolet-100 fw-bold">
                                <strong> Answer:</strong>
                              </h6>
                              <h6 className="mb-0  fw-bold text-salmon-200">
                                <strong>
                                  Option{" "}
                                  {subQuestion?.correctOptionIndex !== undefined
                                    ? alphabets[subQuestion?.correctOptionIndex]
                                    : ""}
                                </strong>
                              </h6>
                            </div>
                            <h6 className="text-blueviolet-100 fw-bold">
                              <strong> Solution: </strong>
                            </h6>
                            {subQuestion?.explanation?.map(
                              (explanation, explanationIndex) => (
                                <div
                                  key={explanationIndex}
                                  className="m-0 pt-3"
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
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    setExplanationsVisiblePara(
      Array(10)
        .fill(null)
        .map(() => Array(10).fill(false))
    );
    localStorage.setItem("currentPage", page - 1);

    window.scroll(0, 0);
  };

  return (
    <section className="question-practice question-practice-v2">
      <div className="w-100 flex justify-center mt-4 items-center flex-col">
        <div className="question-container">
          {renderQuestionWithMultipleSubquestions(
            data[currentPage],
            currentPage
          )}

          <div className="pagination">
            <Pagination
              locale={locale}
              current={currentPage + 1} // One-based indexing
              total={totalSubquestions}
              pageSize={5}
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
  );
};

export default PrepModulesMultipleSubquestion;
