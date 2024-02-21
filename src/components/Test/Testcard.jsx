import React from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import { TbClockHour8 } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";

export const Testcard = ({ title, Questions, Marks, take, difficultyLevel, bgcolor, Time, Negative, image, Times }) => {
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
    <div className="flex flex-col justify-around items-center bg-white rounded-3xl w-[350px] h-[350px] ">
      <div style={{ background: bgcolor }} className="w-[95%] h-[80%] mt-3 rounded-2xl text-white flex justify-center">
        <div className="w-[90%] h-full flex flex-col justify-around">
          <h5 className="font-bold text-3xl ">{title}</h5>
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
        <button className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center  text-lg font-bold min-h-0 h-10 px-8 my-3">
          Practice
        </button>
      </div>
    </div>
  );
};

export const Testcard1 = ({ title, Questions, Marks, take, difficultyLevel, bgcolor, Time, Negative, image, Times }) => {
  return (
    <div style={{ background: bgcolor }} className="flex flex-col justify-around items-center bg-white rounded-3xl w-[350px] h-[350px] ">
      <img src="https://i.ibb.co/XFnxJSS/practicetest.png" alt={title} className="w-[150px] h-[150px]" />
      <div className="rounded-[20px]  bg-white   mx-auto w-[80%] h-[45%] flex flex-col items-center justify-around px-4">
        <h5 className="w-full font-bold text-3xl pl-4 pt-2">{title}</h5>
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
        <button className="btn hover:bg-[#34A853] bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Take Test</button>
      </div>
    </div>
  );
};

export const Testcard2 = ({ title, Questions, Marks, take, difficultyLevel, bgcolor, Time, Negative, image, Times }) => {
  return (
    <div className=" flex flex-col  bg-white rounded-[20px]  items-center justify-around w-[350px] h-[350px]">
      <div className="w-full flex  flex-row items-center">
        <img src="https://i.ibb.co/p0WP2Ss/mocktest.png" alt={title} className="w-28 h-28" />
        <h5 className="font-bold text-3xl">
          Mock Test {title} <p className="text-sm text-[#00000099]">Free</p>
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
        <button className="btn btn-outline text-[#34A853] border-[#34A853] rounded-full shadow-none outline-none font-normal text-lg min-h-0 h-8 px-6">Take Test</button>
      </div>
    </div>
  );
  return (
    <div className="max-w-full mx-4 sm:max-w-[18vw] md:max-w-[34vw] lg:max-w-[22vw] flex-col lg:h-[42vh] md:h-[25vh] sm:h-[18vh] mb-5 bg-white rounded-[20px]  items-center">
      <div className="flex  flex-row items-center">
        <div>
          <img src="https://i.ibb.co/p0WP2Ss/mocktest.png" alt={title} className="md:w-[8vw] w-[25vw] h-auto rounded-md justify-start" />
        </div>
        <div className="ml-4">
          <h5 className="font-bold leading-3 text-[22px] mb-1">Mock Test {title}</h5>
          <h1 className="text-[14px] mb-2">FREE</h1>
        </div>
      </div>
      <div className="flex flex-col relative items-center justify-center flex-grow">
        <div className="mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-5 items-center mb-4 px-4">
              <div className="flex w-[150px] text-[14px] items-center">
                <FaQuestionCircle size={30} color="#5648FC" className="mr-1" />
                {Questions} <br />
                Questions
              </div>
              <div className="flex w-[150px] text-[14px] items-center">
                <FaQuestionCircle size={30} color="#5648FC" className="mr-1" />
                {Marks} <br />
                Marks
              </div>
              <div className="flex w-[150px] text-[14px] items-center">
                <FaQuestionCircle size={30} color="#5648FC" className="mr-1" />
                {Times} <br /> Minutes
              </div>
              <div className="flex w-[150px] text-[14px] items-center">
                <FaQuestionCircle size={30} color="#5648FC" className="mr-1" />
                {Negative} <br />
                Negative
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="px-6 py-2 mb-6 ml-[130px] border border-green-500 rounded-full text-green-500 text-sm font-semibold">Take Test</button>
        </div>
      </div>
    </div>
  );
};
