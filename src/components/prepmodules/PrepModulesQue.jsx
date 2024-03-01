import React, { useState } from "react";
import { MathText } from "../mathJax/MathText";

const PrepModulesQue = ({ data }) => {
  const alphabets = "12345678910".split("");
  const [selectedOptions, setSelectedOptions] = useState(Array(data.length).fill([]));
  const [currentPage, setCurrentPage] = useState(0);
  const [explanationsVisible, setExplanationsVisible] = useState(Array(data.length).fill(false));

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentPage] = [...updatedSelectedOptions[currentPage]];
    updatedSelectedOptions[currentPage][questionIndex] = optionIndex;

    setSelectedOptions(updatedSelectedOptions);
  };



  const toggleExplanationVisibility = (questionIndex) => {
    const updatedExplanationsVisible = [...explanationsVisible];
    updatedExplanationsVisible[questionIndex] = !updatedExplanationsVisible[questionIndex];
    setExplanationsVisible(updatedExplanationsVisible);
  };

  const renderQuestion = (question, questionIndex) => {
    const isExplanationVisible = explanationsVisible[questionIndex];

    return (
      <div key={questionIndex} className="options-grid">
        <div className="question-box ">
          <div className="flex  flex-col">
            {/* Render question content */}
            <div className="flex justify-between">
              <div className="px-4 py-5">
                <span className={`question-number id-${question._id}`}>
                  {`${questionIndex + 1 + currentPage * 1} `}
                </span>

              </div>
            </div>
            <div className="text-[20px]  relative pl-8 flex items-center top-[-40px] px-4   ">
              <div>
                {question.subQuestions[0].questionTextAndImages.map((textData, textIndex) => (
                  <MathText
                    className="question-text mb-2"
                    key={textIndex}
                    text={textData.text}
                    textTag="h6"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {question.subQuestions[0].options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            className={`option-box   
    ${selectedOptions[currentPage] && selectedOptions[currentPage][questionIndex] === optionIndex ? (question.subQuestions[0].correctOptionIndex === optionIndex ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleOptionClick(questionIndex, optionIndex)}
          >
            <span className="option-alphabet px-2">
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
                selectedOptions[currentPage][questionIndex] === optionIndex && (
                  <span>
                    {question.subQuestions[0].correctOptionIndex  === optionIndex ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-xmark"></i>
                    )}
                  </span>
                )
              }
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
              {question.subQuestions[0].explanation.map((explanationData, index) => (
                <p className="m-0 pt-3" key={index}>
                  <h6>
                    <span dangerouslySetInnerHTML={{ __html: explanationData.text[0] }} />
                    <div dangerouslySetInnerHTML={{ __html: explanationData.text[1] }} />
                    <div />
                    <span dangerouslySetInnerHTML={{ __html: explanationData.text[2] }} />
                  </h6>
                  {explanationData.text.slice(3).map((text, index) => (
                    <MathText key={index} text={text} textTag="h6" />
                  ))}
                </p>
              ))}
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

    startPage = Math.max(0, startPage);
    endPage = Math.min(totalPages - 1, endPage);

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

  return (
    <section className="question-practice question-practice-v2">
      <div className="w-100 d-flex justify-content-center mt-4 align-items-center flex-column">
        <div className="options-container">
          {data
            .slice(currentPage * 5, (currentPage + 1) * 5)
            .map((question, questionIndex) =>
              renderQuestion(question, questionIndex)
            )}
          <div className="pagination">
            <button
              className={`page-button ${currentPage === 0 ? "disabled" : ""}`}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>
            {generatePageNumbers().map((pageIndex) => (
              <button
                key={pageIndex}
                className={`page-button ${currentPage === pageIndex ? "active" : ""}`}
                onClick={() => setCurrentPage(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            ))}
            <button
              className={`page-button ${currentPage === Math.ceil(data.length / 5) - 1 ? "disabled" : ""}`}
              onClick={() => setCurrentPage((prev) => prev + 1)}
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
