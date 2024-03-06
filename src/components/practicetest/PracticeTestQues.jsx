import React, { useState, useEffect } from "react";
import "./testplatform.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RxCross1 } from "react-icons/rx";
import { MathText } from "../mathJax/MathText";
import CuetLoader from "../Loader/Loader";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { Link } from "react-router-dom/dist";
const PracticeTestQues = ({ data }) => {
  console.log(data);
  const alphabets = "ABCDEFGHIJ".split("");
  const [selectedOptions, setSelectedOptions] = useState(
    Array(data.length).fill([])
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [explanationsVisible, setExplanationsVisible] = useState(
    Array(data.length).fill(false)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedQuestions, setSavedQuestions] = useState([]);
  let intervalId;
  const [showWarningPopup, setShowWarningPopup] = useState(false);
  const [correctOptions, setCorrectOptions] = useState([]);
  const [incorrectOptions, setIncorrectOptions] = useState([]);
  const [timer, setTimer] = useState(30 * 60);
  const [showResultPopup, setShowResultPopup] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleWarningExam = () => {
    setShowWarningPopup(true);
  };

  const handleContinueExam = () => {
    setShowWarningPopup(false);
  };

  const handleSubmitWarning = () => {
    setShowWarningPopup(false);
    handleSubmit(); // Call the handleSubmit function to submit the test
  };

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

  const handleOptionClick = (question, questionIndex, optionIndex) => {
    if (!isSubmitted) {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentPage] =
        updatedSelectedOptions[currentPage] || [];
      updatedSelectedOptions[currentPage][questionIndex] = optionIndex;
      setSelectedOptions(updatedSelectedOptions);

      const isCorrect =
        question.subQuestions[0].correctOptionIndex - 1 === optionIndex;

      if (isCorrect) {
        setCorrectOptions([...correctOptions, { questionIndex, optionIndex }]);
      } else {
        setIncorrectOptions([
          ...incorrectOptions,
          { questionIndex, optionIndex },
        ]);
      }
    }
  };

  const handleSubmit = () => {
    setTimer(0);
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
      updatedSavedQuestions.splice(
        updatedSavedQuestions.indexOf(questionAbsoluteIndex),
        1
      );
    }
    setSavedQuestions(updatedSavedQuestions);
  };

  const toggleExplanationVisibility = (questionIndex) => {
    if (isSubmitted) {
      const updatedExplanationsVisible = [...explanationsVisible];
      updatedExplanationsVisible[questionIndex] =
        !updatedExplanationsVisible[questionIndex];
      setExplanationsVisible(updatedExplanationsVisible);
    }
  };

  const renderQuestion = (question, questionIndex) => (
    <div key={questionIndex} className="options-grid">
      {question?.questionTextAndImages[0]?.text[0] ?  
        (<div className="question-box">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="px-4 py-5">
                <span className={`question-number id-${question._id}`}>
                  {`P${currentPage+1}`}
                </span>
              </div>
            </div>
            <div className="text-[20px]  relative pl-8 flex items-center top-[-25px] px-4">
              <div>
                {question?.questionTextAndImages?.map(
                  (textData, textIndex) => (
                    <div key={textIndex}>
                      {textData.text && (
                        <MathText
                          className="question-text mb-2"
                          text={textData.text}
                          textTag="h6"
                        />
                      )}
                      {textData.imageUrl && (
                        <img
                          src={textData.imageUrl}
                          alt={`Img ${textIndex}+1`}
                          className="question-image"
                        />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>) : ""
      }

      <div className="question-box ">
        <div className="flex  flex-col">
          <div className="flex justify-between">
            <div className="px-4 py-5">
              <span className={`question-number id-${question._id}`}>
                {`${questionIndex + 1 + currentPage * 1} `}
              </span>
            </div>
            <div
              className={` question-number2 cursor-pointer z-50  m-2  ${
                savedQuestions.includes(questionIndex + currentPage * 1)
                  ? "saved"
                  : ""
              }`}
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
              {question?.subQuestions[0]?.questionTextAndImages?.map(
                (textData, textIndex) => (
                  <MathText
                    className="question-text mb-2"
                    key={textIndex}
                    text={textData.text}
                    textTag="h6"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {question?.subQuestions[0]?.options?.map((option, optionIndex) => (
        <div
          key={optionIndex}
          className={`option-box relative bg-white ${
            !isSubmitted &&
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
          onClick={() =>
            handleOptionClick(question, questionIndex, optionIndex)
          }
        >
          <span className="option-alphabet ">{alphabets[optionIndex]}</span>
          <div className="flex mx-2 text-[20px] top-[-15px] relative  justify-start gap-3 w-100 items-center ">
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
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {question?.subQuestions[0]?.correctOptionIndex - 1 === optionIndex &&
              isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex && (
                <span className="relative mx-2 ">
                  <i className="fa-solid fa-check "></i>
                </span>
              )}
            {isSubmitted &&
              selectedOptions[currentPage] &&
              selectedOptions[currentPage][questionIndex] === optionIndex &&
              question.subQuestions[0].correctOptionIndex - 1 !==
                optionIndex && (
                <span className=" relative mx-2  ">
                  <i className="fa-solid fa-xmark"></i>
                </span>
              )}
          </div>
        </div>
      ))}

      <div className="w-100 flex justify-center items-center">
        {isSubmitted && (
          <button
            className=" btn  btn-outline btn-tertiary text-capitalize  flex justify-center"
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
            {question?.subQuestions[0]?.explanation?.map(
              (explanationData, index) => (
                <p className="m-0 text-[23px] pb-6 font-thin pt-3" key={index}>
                  <h6>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: explanationData.text[0],
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: explanationData.text[1],
                      }}
                    />
                    <div />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: explanationData.text[2],
                      }}
                    />
                  </h6>
                  {explanationData.text.slice(3).map((text, index) => (
                    <MathText key={index} text={text} textTag="h6" />
                  ))}
                </p>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
  const generatePageNumbers = () => {
    const totalPages = Math.ceil(data.data.length / 1);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      let isSelected = false;
      if (!isSubmitted) {
        isSelected = selectedOptions[i - 1]?.length > 0;
      }
      const pageStatus = isSubmitted
        ? checkPageStatusAfterSubmission(i - 1)
        : null;
      pages.push({ number: i, isSelected, pageStatus });
    }

    return pages;
  };

  const checkPageStatusAfterSubmission = (pageIndex) => {
    const questionsOnPage = data.data.slice(pageIndex * 1, (pageIndex + 1) * 1);
    let correctCount = 0;
    let incorrectCount = 0;
    let notAttemptedCount = 0;

    questionsOnPage.forEach((question, index) => {
      const selectedOptionIndex = selectedOptions[pageIndex]
        ? selectedOptions[pageIndex][index]
        : null;
      if (selectedOptionIndex !== null) {
        const isCorrect =
          question.subQuestions[0].correctOptionIndex - 1 ===
          selectedOptionIndex;
        if (isCorrect) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      } else {
        notAttemptedCount++;
      }
    });

    if (correctCount > 0 && incorrectCount === 0 && notAttemptedCount === 0) {
      return "correct";
    } else if (incorrectCount > 0) {
      return "incorrect";
    } else if (
      notAttemptedCount > 0 &&
      correctCount === 0 &&
      incorrectCount === 0
    ) {
      return "notAttempted";
    }

    return null;
  };

  const totalQuestions = data.data.length;
  const totalAttempts = correctOptions.length + incorrectOptions.length;
  const correctPercentage = (correctOptions.length / totalQuestions) * 100;
  const incorrectPercentage = (incorrectOptions.length / totalQuestions) * 100;
  const attemptedPercentage = (totalAttempts / totalQuestions) * 100;
  return (
    <section className="mx-auto mb-8 max-w-[1280px] ">
      <div
        className={`flex px-5 top-[-25px] lg:hidden rounded  text-black  relative items-center`}
      >
        <div
          className={`text-[20px] gap-1 rounded-xl px-10 border-[1px] border-black border-solid py-3 bg-gradient-to-br overflow-hidden  flex justify-center items-center `}
        >
          <div className="text-[20px] ">
            <TfiTimer />
          </div>
          {Math.floor(timer / 60)
            .toString()
            .padStart(2, "0")}
          :{(timer % 60).toString().padStart(2, "0")}
        </div>
        <div className="w-full ml-6 flex justify-center items-center">
          {isLoading ? (
            <CuetLoader />
          ) : (
            <>
              {!isSubmitted ? (
                <button
                  className="border-none cursor-pointer shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                  onClick={handleWarningExam}
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
          {data?.data
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
            <button
              className=" border-none md:hidden shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={handlePopupOpen}
            >
              All Questions
            </button>

            <button
              className=" border-none cursor-pointer shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === data.data.length - 1}
            >
              Next
            </button>
          </div>
        </div>
        <div className="max-w-[400px] scroll-kit max-h-[630px] overflow-y-scroll relative left-8 border-solid border-[1px] rounded-2xl   border-black mx-8 max-lg:hidden  flex flex-col items-center justify-center ">
          <div
            className={`flex px-5 max-lg:hidden rounded-xl mt-2 border border-white border-solid py-3 bg-gradient-to-br overflow-hidden  text-black justify-center relative items-center`}
          >
            <div className="text-[20px] flex justify-center items-center px-2">
              <TfiTimer />
            </div>
            <div>
              {Math.floor(timer / 60)
                .toString()
                .padStart(2, "0")}
              :{(timer % 60).toString().padStart(2, "0")}
            </div>
          </div>
          <div className="my-4 max-w-[400px]   justify-center items-center mx-auto flex flex-wrap  ">
            {generatePageNumbers().map(({ number, isSelected, pageStatus }) => (
              <button
                key={number}
                className={`rounded border-none cursor-pointer shadow-xl w-[50px] h-[50px] m-1 ${
                  currentPage === number - 1
                    ? "bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white"
                    : isSelected
                    ? "bg-yellow-400 text-white"
                    : pageStatus === "correct"
                    ? "bg-green-500 text-white"
                    : pageStatus === "incorrect"
                    ? "bg-red-900 text-white"
                    : "bg-white"
                }`}
                onClick={() => setCurrentPage(number - 1)}
              >
                {number}
                {isSubmitted && (
                  <div className="bottom-[30px] left-[8px] relative">
                    {pageStatus === "correct" && (
                      <i className="fa-solid fa-check absolute ml-1"></i>
                    )}
                    {pageStatus === "incorrect" && (
                      <i className="fa-solid absolute fa-xmark  ml-1"></i>
                    )}
                    {pageStatus === "notAttempted" && (
                      <i className="fa-regular ml-1 absolute  fa-circle-question"></i>
                    )}
                  </div>
                )}
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
                    onClick={handleWarningExam}
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
                className={`rounded border-none shadow-2xl w-[50px] h-[50px] lg:w-[5vw] lg:h-[8vh] p-[1vw] m-[0.6vw] ${
                  currentPage === number - 1
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
            <button
              className=" border-none shadow-2xl relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showResultPopup && (
        <div className="popup-overlay">
          <div className="result-popup px-8 p-5">
            <h2 className="font-bold text-[30px]">Results</h2>
            <p className="text-yellow-400 text-[20px]">
              Total attempted questions: {totalAttempts} out of {totalQuestions}
            </p>
            <p className="text-green-400 text-[20px]">
              Total correct options: {correctOptions.length}
            </p>
            <p className="text-red-500 text-[20px]">
              Total incorrect options: {incorrectOptions.length}
            </p>

            <div className="flex justify-between">
              <div className="progress-bar">
                <CircularProgressbar
                  value={correctPercentage}
                  text={`${correctPercentage.toFixed(2)}%`}
                  styles={{
                    root: { width: 100 },
                    path: { stroke: "#4CAF50" },
                    text: { fill: "#4CAF50" },
                  }}
                />
                <p>Correct</p>
              </div>
              <div className="progress-bar">
                <CircularProgressbar
                  value={incorrectPercentage}
                  text={`${incorrectPercentage.toFixed(2)}%`}
                  styles={{
                    root: { width: 100 },
                    path: { stroke: "#FF5722" },
                    text: { fill: "#FF5722" },
                  }}
                />
                <p>Incorrect</p>
              </div>
              <div className="progress-bar">
                <CircularProgressbar
                  value={attemptedPercentage}
                  text={`${attemptedPercentage.toFixed(2)}%`}
                  styles={{
                    root: { width: 100 },
                    path: { stroke: "#FFEB3B" },
                    text: { fill: "#FFEB3B" },
                  }}
                />
                <p>Attempted</p>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                onClick={() => setShowResultPopup(false)}
              >
                Review Test
              </button>
              <Link
                to="/"
                className="no-underline border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      )}

      {showWarningPopup && (
        <div className="popup-overlay ">
          <div className="warning-popup bg-white    rounded">
            <div className="flex justify-between">
              <h2 className="font-bold mx-4 text-[20px]">Finish Test?</h2>
              <h2 className="mx-4 cursor-pointer" onClick={handleContinueExam}>
                <RxCross1 />
              </h2>
            </div>
            <hr className="my-1" />

            <div className="px-8 py-4">
              <p>Are you sure you want to finish this test?</p>
              <p className="text-red-500 text-[20px]">
                Time is running out! Only {Math.floor(timer / 60)}:
                {(timer % 60).toString().padStart(2, "0")} left.
              </p>
              <p>You will be unable to resume after you finish this test.</p>
            </div>
            <hr className="my-1" />

            <div className="flex mx-4 my-3  justify-end">
              <button
                className="border-none mr-2 cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                onClick={handleContinueExam}
              >
                Continue Exam
              </button>
              <button
                className="border-none cursor-pointer shadow-2xl mb-2 relative flex justify-center items-center rounded bg-gradient-to-br overflow-hidden from-[#617cea] to-black text-white px-7 p-3"
                onClick={handleSubmitWarning}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PracticeTestQues;