import React from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import { TbClockHour8 } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Testcard = ({ subTopic, heading, Questions, Marks, take, difficultyLevel, bgcolor, Time, Negative, image, Times }) => {

  const renderDifficultyBtn = (level) => {
    let btnClassName = `p-1 rounded-full mx-1 mt-2 ${level === difficultyLevel ? "bg-white text-black" : "bg-white text-black"} text-sm`;

    if (level === "Beginner" || level === "Intermediate" || level === "Advanced") {
      btnClassName += " border-black border";
    }

    return (
      <button className={btnClassName} disabled>
        {level}
      </button>
    );
  };
  return (
    <div className="flex flex-col justify-around items-center bg-white rounded-3xl  ">
      <div style={{ background: bgcolor }} className="w-[95%] h-[300px] mt-3 rounded-2xl text-white flex justify-center">
        <div className="w-[90%] h-full flex flex-col justify-around">
          <h5 className="font-bold text-3xl ">{subTopic}</h5>
          <div className="flex items-center justify-between pr-8">
            <div className="flex justify-center items-center">
              <FaQuestion size={30} className="mr-3 text-white bg-[#5648FC] rounded-full p-2" />
              {Questions} <br />
              Questions
            </div>
            <div className="flex ustify-center items-center">
              <CiSquareCheck size={30} className="mr-3 text-white bg-[#5648FC] rounded-full p-2" />
              {Marks} <br />
              Marks
            </div>
          </div>

          <div className="flex flex-col justify-start  h-[40%]">
            <h1 className="mb-4 text-lg font-normal">Difficulty Level:</h1>
            <div className="flex justify-between">
              {/* {renderDifficultyBtn("Beginner")}
              {renderDifficultyBtn("Intermediate")}
              {renderDifficultyBtn("Advanced")} */}
              <p className="text-xs px-2 py-1 border-2 border-solid border-white rounded-full">Beginner</p>
              <p className="text-xs px-2 py-1 border-2 border-solid border-white rounded-full">Intermediate</p>
              <p className="text-xs px-2 py-1 border-2 border-solid border-white rounded-full">Advanced</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-[90%]">
        <Link to={`/test/practice/${heading}/${subTopic}`} className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center  text-lg font-bold min-h-0 h-10 px-8 my-3">
          Practice
        </Link>
      </div>
    </div>
  );
};

export const Testcard1 = ({ subTopic, heading, Questions, Marks, take, difficultyLevel, bgcolor, Time, Negative, image, Times }) => {
  return (
    <div className=" rounded-3xl " style={{ background: bgcolor }} >
      <div className="flex flex-col p-5 items-center py-3 justify-center     h-[350px] ">
        <img src="https://i.ibb.co/XFnxJSS/practicetest.png" alt={subTopic} className="w-[150px] h-[150px]" />
        <div className="rounded-[20px] px-10 pb-4 mt-2  bg-white    w-[70%] mx-auto h-[45%] flex flex-col items-center justify-center ">
          <h5 className="w-full font-bold text-3xl pl-4 pt-2">{subTopic}</h5>
          <div className="w-full flex items-center justify-around">
            <div className="flex justify-center items-center text-[10px]">
              <FaQuestion size={16} className="mr-1 text-white bg-[#5648FC] rounded-full p-2" />
              {Questions} <br />
              Questions
            </div>
            <div className="flex justify-center items-center text-[10px]">
              <CiSquareCheck size={20} className="mr-1 text-white bg-[#5648FC] rounded-full p-2" />
              {Marks} <br />
              Marks
            </div>
            <div className="flex  justify-center  items-center text-[10px]">
              <TbClockHour8 size={20} className="mr-1 text-white bg-[#5648FC] rounded-full p-2" />
              {Times} <br /> Minutes
            </div>
          </div>
          <Link to={`/test/practice_test/${subTopic}`}><button className="btn hover:bg-[#34A853] my-3 bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Take Test</button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export const Testcard2 = ({ subTopic, heading, Questions, Marks, take, difficultyLevel, bgcolor, Time, Negative, image, Times }) => {
  return (
    <div className=" flex flex-col  bg-white rounded-[20px]  items-center justify-around w-full md:w-[350px] h-[350px]">
      <div className="w-full flex  flex-row items-center">
        <img src="https://i.ibb.co/p0WP2Ss/mocktest.png" alt={subTopic} className="w-28 h-28" />
        <h5 className="font-bold text-3xl">
          {subTopic} <p className="text-sm text-[#00000099]">Free</p>
        </h5>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] grid grid-cols-2 gap-x-7 gap-y-10 pl-3">
          <div className="flex justify-start items-center text-lg">
            <FaQuestion size={36} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Questions} <br />
            Questions
          </div>
          <div className="flex justify-start items-center text-lg">
            <CiSquareCheck size={40} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Marks} <br />
            Marks
          </div>
          <div className="flex  justify-start items-center text-lg ">
            <TbClockHour8 size={40} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Times} <br /> Minutes
          </div>
          <div className="flex  justify-start items-center text-lg">
            <CiCircleMinus size={40} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Negative} <br />
            Negative
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end h-16 pr-10">
        <Link to={`/test/practice/${subTopic = "Mock_Test"}`}>
          <button className="btn btn-outline text-[#34A853] border-[#34A853] rounded-full shadow-none outline-none font-normal text-lg min-h-0 h-8 px-6">Take Test</button>
        </Link>
      </div>
    </div>
  );

};
