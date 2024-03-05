import React, { useState } from "react";
import { MathText } from "../mathJax/MathText";

const PrepModulesQue = ({ data }) => {
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
      <div key={questionIndex} className="options-grid">
        <div className="question-box ">
          <div className="flex  flex-col">
            <div className="flex position-absolute top-0 left-0 items-center justify-between">
              <div className="py-4 px-6">
                <span className={`question-number id-${question?._id}`}>
                  {`${questionIndex + 1 + currentPage * 5} `}
                </span>
              </div>
            </div>
            {question?.questionTextAndImages[0]?.text[0] ? (
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
            )}

            {question?.subQuestions[0]?.questionTextAndImages?.map(
              (textAndImages, textAndImagesIndex) => (
                <div
                  className="flex ps-3 pt-[2.5rem] pb-2 justify-start flex-col"
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
        {/* <div className=" question-box">
          <div>
            <div className="question-text ">
              {question?.subQuestions[0]?.questionTextAndImages?.map(
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
          </div>
        </div> */}
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
            <span className="option-alphabet text-black px-2">
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
                selectedOptions[currentPage][questionIndex] === optionIndex && (
                  <span>
                    {question?.subQuestions[0]?.correctOptionIndex ===
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
        <div className="my-2 mb-5 ">
          <div className="w-100 flex justify-center items-center">
            <button
              className="  text-capitalize border-solid rounded-3xl p-2 px-3 bg-white  border-black flex justify-center"
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
                      style={{ margin: "0 20px" }}
                    >
                      <div className="flex flex-row gap-2 justify-start items-center">
                        <h6 className="mb-0 text-primary fw-bold">Answer:</h6>
                        <h6 className="mb-0  fw-bold text-secondary">
                          Option{" "}
                          {question?.subQuestions[0]?.correctOptionIndex !==
                          undefined
                            ? alphabets[
                                data[currentPage]?.subQuestions[0]
                                  ?.correctOptionIndex
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
  const generatePageNumbers = () => {
    const totalPages = Math.ceil(data.length / 5);
    const maxPagesToShow = 5;
    const pages = [];
    let startPage = currentPage - Math.floor(maxPagesToShow / 2);
    let endPage = currentPage + Math.floor(maxPagesToShow / 2);

    if (startPage < 0) {
      endPage -= startPage;
      startPage = 0;
    }

    if (endPage > totalPages - 1) {
      startPage -= endPage - totalPages + 1;
      endPage = totalPages - 1;
    }

    startPage = Math.max(startPage, 0);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    while (pages.length > maxPagesToShow) {
      if (currentPage - startPage <= endPage - currentPage) {
        pages.pop();
      } else {
        pages.shift();
      }
    }

    return pages;
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    window.scrollTo(0, 0);
  };

  return (
    <section className="question-practice question-practice-v2">
      <div className="w-100 d-flex justify-content-center mt-4 align-items-center flex-column">
        <div className="options-container">
          {data
            .slice(currentPage * 5, (currentPage + 1) * 5)
            .map((question, questionIndex) =>
              renderQuestion(question, questionIndex)
            )}
          {/* <div className="pagination  mx-auto ">
            <button
              className={`page-button h-[50px] ${
                currentPage === 0 ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            <div className="content-center self-center align-center justify-center flex flex-wrap gap-1 mx-auto">
              {generatePageNumbers()?.map((pageIndex, index) => (
                <button
                  key={pageIndex}
                  className={`page-button ${
                    currentPage === pageIndex ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageIndex)}
                >
                  {pageIndex + 1}
                </button>
              ))}
            </div>

            <button
              className={`page-button h-[50px] ${
                currentPage === Math.ceil(data?.length / 5) - 1
                  ? "disabled"
                  : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div> */}

          <div className="pagination">
            <button
              className={`page-button ${currentPage === 0 ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            {generatePageNumbers().map((pageIndex) => (
              <button
                key={pageIndex}
                className={`page-button ${
                  currentPage === pageIndex ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            ))}
            <button
              className={`page-button ${
                currentPage === Math.ceil(data.length / 5) - 1 ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepModulesQue;
