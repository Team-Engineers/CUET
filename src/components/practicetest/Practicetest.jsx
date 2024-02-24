import React, { useState, useEffect } from "react";
import "./testplatform.css";
import { MathText } from "../mathJax/MathText";
import { useLocation } from "react-router-dom";
import CuetLoader from "../Loader/Loader";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";

const Practicetest = ({ data,subtopic }) => {
  const alphabets = "12345678910".split("");
  const [selectedOptions, setSelectedOptions] = useState(Array(data.length).fill([])); 
  const [currentPage, setCurrentPage] = useState(0);
  const [explanationsVisible, setExplanationsVisible] = useState(Array(data.length).fill(false));
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();
  const [savedQuestions, setSavedQuestions] = useState([]);
  let intervalId; 
  const [timer, setTimer] = useState(30 * 60);
  const [timerColor, setTimerColor] = useState("from-[#1ee80c]"); 
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
    intervalId = setInterval(() => { 
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      setTimerColor("from-[#ff0800] to-[#ff0800]");
      handleSubmit(); 
    }
  }, [timer]);
  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!isSubmitted) {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentPage] = [...updatedSelectedOptions[currentPage]];
      updatedSelectedOptions[currentPage][questionIndex] = optionIndex;
      setSelectedOptions(updatedSelectedOptions);
    }
  };

  const handleSubmit = () => {
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
          <span className={`p-[0.5vw] m-3 rounded-full bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white text-white id-${question._id}`}>
              {`${questionIndex + 1 + currentPage * 1} `}
            </span>
            of
            <span className={`p-2 id-${question._id}`}>
              {`${questionIndex + 1 + 30 - 1} `}
            </span>
          </div>
           
             <h1 className="bg-gradient-to-br overflow-hidden from-[#617cea] to-[#2e2323] absolute right-0 text-white px-4 py-5">{subtopic}</h1>
          </div>
          <div className="text-[20px] flex justify-between px-10 pb-6 p-4  relative">
            <div>
              {question.text.map((text, textIndex) => (
                <MathText
                  className="question-text mb-2"
                  key={textIndex}
                  text={text}
                  textTag="h6"
                />
              ))}
            </div>
            <div
              className={` relative flex justify-center items-center  ${savedQuestions.includes(questionIndex + currentPage * 1) ? 'saved' : ''}`}
              onClick={() => handleSaveQuestion(questionIndex)}
            >
             
              {savedQuestions.includes(questionIndex + currentPage * 1) ? (
                <>
                  <IoBookmark />
                  <h1 className="text-[10px]">Saved</h1>
                </>
              ) : (
                <>
                  <IoBookmarkOutline />
                  <h1 className="text-[10px]">Save</h1>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
      {question.options.map((option, optionIndex) => (
        <div
          key={optionIndex}
          className={`option-box bg-white ${!isSubmitted &&
            selectedOptions[currentPage] &&
            selectedOptions[currentPage][questionIndex] === optionIndex
            ? "bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white"
            : isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex &&
              question.correctOptionIndex - 1 === optionIndex
              ? "correct"
              : isSubmitted &&
                selectedOptions[currentPage] &&
                selectedOptions[currentPage][questionIndex] === optionIndex &&
                question.correctOptionIndex - 1 !== optionIndex
                ? "incorrect"
                : ""
            }`}
          onClick={() => handleOptionClick(questionIndex, optionIndex)}
        >
          <span className="font-bold rounded-[150px] px-3 p-2 border-solid border-black border-[0.5px] mx-6">
            {alphabets[optionIndex]}
          </span>
          <div className="flex mx-8 text-[20px]  justify-start gap-3 w-100 items-center ">
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
            {question.correctOptionIndex - 1 === optionIndex &&
              isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex && (
                <span className="correct-answer">
                  <i className="fa-solid fa-check"></i>
                </span>
              )}
            {isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex &&
              question.correctOptionIndex - 1 !== optionIndex && (
                <span className="incorrect-answer">
                  <i className="fa-solid fa-xmark"></i>
                </span>
              )}
          </div>
        </div>
      ))}
      <div className="w-100 flex justify-content-center align-items-center">
            {isSubmitted && (
              <button
                className="bg-gradient-to-br overflow-hidden from-[#617cea] to-white rounded-xl text-white text-center p-2 flex justify-center"
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
                <p className="m-0 pt-3">
                  <h6>
                    <span className="text-default">Answer:</span>{" "}
                    <strong>{`Option ${alphabets[question.correctOptionIndex - 1]} `}</strong>
                    <div />
                    <span className="text-default">Solution:</span>
                  </h6>
                  {question.explanation.text.map((text, index) => (
                    <MathText key={index} text={text} textTag="h6" />
                  ))}
                </p>
                <div className="flex justify-content-center items-center gap-3">
                  <div className="multiple-image-container">
                    {question.explanation.images &&
                      question.explanation.images.map(
                        (explanationImage, explanationImageIndex) => (
                          <img
                            className="question-image"
                            key={explanationImageIndex}
                            src={explanationImage}
                            alt={`Explanation Img ${explanationImageIndex + 1}`}
                          />
                        )
                      )}
                  </div>
                </div>
              </div>
            )}
          </div>
    </div>
  );
  
  const generatePageNumbers = () => {
    const totalPages = 30;
    const pages = [];
  
    for (let i = 1; i <= totalPages; i++) {
      const isSelected = selectedOptions[i - 1]?.length > 0; // Check if any option is selected on this page
      pages.push({ number: i, isSelected });
    }
  
    return pages;
  };

  return (
    <section className="flex lg:flex-row flex-col mb-20 items-center justify-center lg:justify-between">
    <div className="  lg:w-[70vw] w-full ">
            {data
              .slice(currentPage, currentPage + 1)
              .map((question, questionIndex) =>
                renderQuestion(question, questionIndex)
              )}
            <div className="flex justify-between">
              <button
                className={`top-[20px] relative flex justify-center items-center rounded  bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white px-7 p-3 ${currentPage === 0 ? "disabled" : ""}`}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 0} 

              >
                Prev
              </button>
             
              <button
                className={`top-[20px] relative flex justify-center items-center rounded  bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white px-7 p-3 ${currentPage === 29 ? "disabled" : ""}`}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === 29} 

              >
                Next
              </button>
            </div>
          </div>
    <div className="lg:max-w-[30vw] h-[80vh] flex flex-col items-center justify-between max-w-full">
      <div className={`flex px-5 rounded border border-black border-solid py-3 bg-gradient-to-br overflow-hidden ${timerColor} text-white justify-center relative items-center`}>
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
      <div>
  {generatePageNumbers().map(({ number, isSelected }) => (
    <button
      key={number}
      className={`rounded w-[50px] h-[50px] lg:w-[5vw] lg:h-[8vh] p-[1vw] m-[0.4vw] ${
        currentPage === number - 1
          ? "bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white"
          : isSelected
          ? "bg-green-500 text-white" // Set to green if selected
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
      <div className="w-full flex justify-center items-center">
        {isLoading ? (
          <CuetLoader />
        ) : (
          <button
            className="w-[70%] mr-5 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-white text-white px-7 p-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  </section>
  );
};

export default Practicetest;
