import React, { useState, useEffect } from "react";
import "./testplatform.css";
import { MathText } from "../mathJax/MathText";
import CuetLoader from "../Loader/Loader";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { Link } from "react-router-dom/dist";
const MockTest = ({ data }) => {
  const alphabets = "12345678910".split("");
  const [selectedOptions, setSelectedOptions] = useState(Array(data.length).fill([]));
  const [currentPage, setCurrentPage] = useState(0);
  const [explanationsVisible, setExplanationsVisible] = useState(Array(data.length).fill(false));
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedQuestions, setSavedQuestions] = useState([]);
  let intervalId;
  const [timer, setTimer] = useState(30 * 60);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [totalAttempted, setTotalAttempted] = useState(0);
  const [notAttempted, setNotAttempted] = useState(0); 
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    const parsedPage = parseInt(storedPage, 10);
    if (!isNaN(parsedPage) && parsedPage >= 0) {
      setCurrentPage(parsedPage);
    } else {
      setCurrentPage(0);
    }
  }, []);

  useEffect(() => {
    let timerReachedZero = false;
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0 && !timerReachedZero) {
          clearInterval(intervalId);
          timerReachedZero = true;
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!isSubmitted) {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentPage] = updatedSelectedOptions[currentPage] || []; // Ensure selectedOptions[currentPage] is initialized as an array
      updatedSelectedOptions[currentPage][questionIndex] = optionIndex;
      setSelectedOptions(updatedSelectedOptions);
    }
  };

  const handleSubmit = () => {
    setTimer(0)
    let correct = 0;
    let incorrect = 0;
    data.data.forEach((question, questionIndex) => {
      const selectedOptionIndex = selectedOptions[currentPage] && selectedOptions[currentPage][questionIndex];
      const correctOptionIndex = question.subQuestions[0].correctOptionIndex - 1;
      if (selectedOptionIndex === correctOptionIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });
    setCorrectAnswers(correct);
    setIncorrectAnswers(incorrect);
    setShowResultPopup(true);

    setIsSubmitted(true);
    setIsLoading(true);

    clearInterval(intervalId);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  
  
  const handleSaveQuestion = (questionIndex) => {
    const questionAbsoluteIndex = questionIndex + currentPage * 1;
    const updatedSavedQuestions = [...savedQuestions];
    if (!updatedSavedQuestions.includes(questionAbsoluteIndex)) {
      updatedSavedQuestions.push(questionAbsoluteIndex);
    } else {
      updatedSavedQuestions.splice(updatedSavedQuestions.indexOf(questionAbsoluteIndex), 1);
    }
    setSavedQuestions(updatedSavedQuestions);
  };

  const toggleExplanationVisibility = (questionIndex) => {
    if (isSubmitted) {
      const updatedExplanationsVisible = [...explanationsVisible];
      updatedExplanationsVisible[questionIndex] = !updatedExplanationsVisible[questionIndex];
      setExplanationsVisible(updatedExplanationsVisible);
    }
  };

  const renderQuestion = (question, questionIndex) => (
    <div key={questionIndex} className="options-grid">
      <div className="question-box ">
        <div className="flex  flex-col">
          <div className="flex justify-between">
            <div className="px-4 py-5">
              <span className={`question-number id-${question._id}`}>
                {`${questionIndex + 1 + currentPage * 1} `}
              </span>
            </div>
            <div
              className={` question-number2 cursor-pointer z-50  m-2  ${savedQuestions.includes(questionIndex + currentPage * 1) ? 'saved' : ''}`}
              onClick={() => handleSaveQuestion(questionIndex)}
            >
              {savedQuestions.includes(questionIndex + currentPage * 1) ? (
                <>
                  <IoBookmark className="text-[25px]" />
                </>
              ) : (
                <>
                  <IoBookmarkOutline className="text-[25px]" />
                </>
              )}
            </div>
          </div>
          <div className="text-[20px]  relative pl-8 flex items-center top-[-25px] px-4   ">
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
          className={`option-box  bg-white ${!isSubmitted &&
            selectedOptions[currentPage] &&
            selectedOptions[currentPage][questionIndex] === optionIndex
            ? "bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white"
            : isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex &&
              question.subQuestions[0].correctOptionIndex - 1 === optionIndex
              ? "correct"
              : isSubmitted &&
                selectedOptions[currentPage] &&
                selectedOptions[currentPage][questionIndex] === optionIndex &&
                question.subQuestions[0].correctOptionIndex - 1 !== optionIndex
                ? "incorrect"
                : ""
            }`}
          onClick={() => handleOptionClick(questionIndex, optionIndex)}
        >
          <span className="option-alphabet ">
            {alphabets[optionIndex]}
          </span>
          <div className="flex mx-8 text-[20px] top-[-13px] relative  justify-start gap-3 w-100 items-center ">
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
          <div className="flex relative left-1/3 ">
            {question.subQuestions[0].correctOptionIndex - 1 === optionIndex &&
              isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex && (
                <span className="relative  ">
                  <i className="fa-solid fa-check "></i>
                </span>
              )}
            {isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex &&
              question.subQuestions[0].correctOptionIndex - 1 !== optionIndex && (
                <span className=" relative ">
                  <i className="fa-solid fa-xmark"></i>
                </span>
              )}
          </div>
        </div>
      ))}
      <div className="w-100 flex justify-center items-center">
        {isSubmitted && (
          <button
            className=" btn btn-outline btn-tertiary text-capitalize  flex justify-center"
            onClick={() => toggleExplanationVisibility(questionIndex)}
          >
            {explanationsVisible[questionIndex]
              ? "Hide Explanation"
              : "Show Explanation"}
          </button>
        )}
      </div>
      <div className="explanation-wrapper ">
        {explanationsVisible[questionIndex] && (
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
  );

  const generatePageNumbers = () => {
    const totalPages = Math.ceil(data.data.length / 1);
    const pages = [];
  
    for (let i = 1; i <= totalPages; i++) {
      const isSelected = selectedOptions[i - 1]?.length > 0;
      pages.push({ number: i, isSelected });
    }
  
    return pages;
  };
  

  return (
    <section className="mx-auto mb-8 max-w-[1280px] ">
      <div className={`flex px-5 top-[-25px] lg:hidden rounded  text-black  relative items-center`}>
        <div className={`text-[20px] gap-1 rounded-xl px-10 border-[1px] border-black border-solid py-3 bg-gradient-to-br overflow-hidden  flex justify-center items-center `}>
          <div className="text-[20px] ">
            <TfiTimer />
          </div>
          {Math.floor(timer / 60)
            .toString()
            .padStart(2, "0")}
          :
          {(timer % 60).toString().padStart(2, "0")}

        </div>
        <div className="w-full ml-6 flex justify-center items-center">
          {isLoading ? (
            <CuetLoader />
          ) : (
            <>
              {!isSubmitted ? (
                <button
                  className="border-none cursor-pointer shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="border-none cursor-pointer shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                  onClick={() => window.location.reload()}
                >
                  Retake Test
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex md:mx-10 gap-5 justify-between">
        <div className="w-full ">
          {data.data
            .slice(currentPage, currentPage + 1)
            .map((question, questionIndex) =>
              renderQuestion(question, questionIndex)
            )}
          <div className="flex items-center mt-8 justify-between">
            <button
              className=" border-none cursor-pointer shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 0}

            >
              Prev
            </button>
            <button className=" border-none md:hidden shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={handlePopupOpen}>All Questions</button>

            <button
              className=" border-none cursor-pointer shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === 29}

            >
              Next
            </button>
          </div>
        </div>
        <div className="max-w-[400px] scroll-kit max-h-[630px] overflow-y-scroll relative left-8 border-solid border-[1px] rounded-2xl   border-black mx-8 max-lg:hidden  flex flex-col items-center justify-center ">
          <div className={`flex px-5 max-lg:hidden rounded-xl mt-2 border border-white border-solid py-3 bg-gradient-to-br overflow-hidden  text-black justify-center relative items-center`}>
            <div className="text-[20px] flex justify-center items-center px-2">
              <TfiTimer />
            </div>
            <div>
              {Math.floor(timer / 60)
                .toString()
                .padStart(2, "0")}
              :
              {(timer % 60).toString().padStart(2, "0")}
            </div>
          </div>
          <div className="my-4 max-w-[400px]   justify-center items-center mx-auto flex flex-wrap  ">
            {generatePageNumbers().map(({ number, isSelected }) => (
              <button
                key={number}
                className={`rounded border-none cursor-pointer shadow-xl w-[50px] h-[50px] m-1 ${currentPage === number - 1
                  ? "bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white"
                  : isSelected

                    ? "bg-green-500 text-white"
                    : savedQuestions.includes(number - 1)
                      ? "bg-red-900 text-white"
                      : "bg-white"
                  }`}
                onClick={() => setCurrentPage(number - 1)}
              >
                {number}
              </button>
            ))}
          </div>
          <div className="w-[70%] mx-auto max-lg:hidden flex justify-center items-center">
            {isLoading ? (
              <CuetLoader />
            ) : (
              <>
              {!isSubmitted ? (
                <button
                  className="border-none shadow-2xl mb-2 cursor-pointer relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                  onClick={() => window.location.reload()}
                >
                  Retake Test
                </button>
              )}
            </>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed popupquestion inset-0  flex flex-col items-center justify-center overflow-hidden">
          <div className="backdrop-blur backdrop-filter bg-[#0000004f] absolute inset-0"></div>
          <div className="relative z-10 mx-10">
            {generatePageNumbers().map(({ number, isSelected }) => (
              <button
                key={number}
                className={`rounded border-none shadow-2xl w-[50px] h-[50px] lg:w-[5vw] lg:h-[8vh] p-[1vw] m-[0.6vw] ${currentPage === number - 1
                  ? "bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white"
                  : isSelected
                    ? "bg-green-500 text-white"
                    : savedQuestions.includes(number - 1)
                      ? "bg-red-900 text-white"
                      : "bg-[#ffffff6e] backdrop-blur-[100px]"
                  }`}
                onClick={() => setCurrentPage(number - 1)}
              >
                {number}
              </button>
            ))}
            <button className=" border-none shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={handlePopupClose}>Close</button>
          </div>
        </div>

      )}

{showResultPopup && (
  <div className="popup-overlay">
    <div className="result-popup p-5">
      <h2 className="font-bold text-[30px]">Results</h2>
      <p className="text-yellow-400 text-[20px]">Total attempted questions: {totalAttempted}</p>
      <p className="text-yellow-400 text-[20px]">Total not attempted questions: {notAttempted}</p>

      <p className="text-green-400 text-[20px]">Total correct options: {correctAnswers}</p>
      <p className="text-red-500 text-[20px]">Total incorrect options: {incorrectAnswers}</p>
      <div className="flex justify-between">
        <h className=" border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
          onClick={() => setShowResultPopup(false)}>Reveiw Test</h>
        <Link to= "/" className="no-underline border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
        >Home</Link>
      </div>
    </div>
  </div>
)}


    </section>
  );
};

export default MockTest;
