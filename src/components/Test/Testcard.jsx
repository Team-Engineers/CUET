import React from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

export const Testcard = ({
  title,
  Questions,
  Marks,
  take,
  difficultyLevel,
  bgcolor,
  Time,
  Negative,
  image,
  Times,
}) => {
  const renderDifficultyBtn = (level) => {
    let btnClassName = `p-1 rounded-full mx-1 mt-2 ${
      level === difficultyLevel
        ? "bg-white text-black"
        : "bg-white text-black"
    } text-sm`;

    if (
      level === "Beginner" ||
      level === "Intermediate" ||
      level === "Advanced"
    ) {
      btnClassName += " border-black border";
    }

    return (
      <button className={btnClassName} disabled>
        {level}
      </button>
    );
  };
  return (
    <div className="card flex flex-col justify-center  mt-3 w-[25vw] h-[60vh] mb-3 bg-white rounded-3xl m-[50px]">
      <div
        style={{ background: bgcolor }}
        className="flex relative top-[1vh] left-[1.5vw] items-center justify-center w-[22vw] h-[45vh] rounded-2xl "
      >
        <div className="card-body">
          <h5 className="font-bold flex items-center justify-center mb-8 text-3xl">
            {title}
          </h5>
          <div className="flex items-center justify-center">
            <div className="flex w-[150px] text-[16px] m-1  justify-center items-center ">
              <FaQuestionCircle size={40} color="#5648FC" className="mr-1" />
              {Questions} <br />
              Questions
            </div>
            <div className="flex w-[150px] text-[16px] m-1  justify-center items-center ">
              <FaCheckCircle size={40} color="#5648FC" className="mr-1" />
              {Marks} <br />
              Marks
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-x-2 mt-3">
            <h1 className="mb-4 text-lg font-semibold">Difficulty Level:</h1>
            <div className="flex">
              {renderDifficultyBtn("Beginner")}
              {renderDifficultyBtn("Intermediate")}
              {renderDifficultyBtn("Advanced")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end mr-6 mt-5 pr-4 pl-4">
        <button className="px-6 relative py-2 mt-3 flex justify-items-end place-items-end  border border-green-500 rounded-full text-white bg-green-500 text-lg">
          Practice
        </button>
      </div>
    </div>
  );
};

export const Testcard1 = ({
  title,
  Questions,
  Marks,
  take,
  difficultyLevel,
  bgcolor,
  Time,
  Negative,
  image,
  Times,
}) => {
  return (
    <div
      style={{ background: bgcolor }}
      className=" max-w-[35vw] mx-[20px]  h-[70vh] mb-3 bg-white rounded-[50px]  flex justify-center items-center "
    >
      <div className="flex flex-col relative top-[2vh] left-[1vw] mb-10 items-center justify-center  h-[50vh] rounded-[50px] ">
        <img
          src="https://i.ibb.co/XFnxJSS/practicetest.png"
          alt={title}
          className="w-[12vw]  my-[4vh] h-auto rounded-lg "
        />
        <div className="rounded-[50px] right-[1vw] relative max-h-[35vh] max-w-[25vw] bg-white   mx-auto py-[1vw] px-[2vw] ">
          <h5 className="font-bold text-[25px] flex items-start justify-start mb-4">
            {title}
          </h5>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <div className="flex  justify-center items-center ">
                <FaQuestionCircle size={50} color="#5648FC" className="mr-2" />
                {Questions} <br />
                Questions
              </div>
              <div className="flex  justify-center items-center  ml-1">
                <FaQuestionCircle size={50} color="#5648FC" className="mr-2" />
                {Marks} <br />
                Marks
              </div>
              <div className="flex  justify-center items-center ml-1">
                <FaQuestionCircle size={50} color="#5648FC" className="mr-2" />
                {Times} <br /> Minutes
              </div>
            </div>
            <div>
              <button className="px-6 relative py-2 mt-4 flex justify-items-end place-items-end  bg-green-500 rounded-full text-white text-lg">
                Take Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Testcard2 = ({
  title,
  Questions,
  Marks,
  take,
  difficultyLevel,
  bgcolor,
  Time,
  Negative,
  image,
  Times,
}) => {
  return (
    <div className=" max-w-[30vw] mx-[20px] flex-col  h-[60vh] mb-5 bg-white rounded-[50px]  flex justify-center items-center">
      <div className="flex items-center ">
        <div>
          <img
            src="https://i.ibb.co/p0WP2Ss/mocktest.png"
            alt={title}
            className="w-[12vw] rounded-lg "
          />
        </div>
        <div>
          <h5 className="font-bold leading-3 text-[35px] flex items-start justify-start mb-4">
            Mock Test {title}
          </h5>
          <h1 className=" text-[25px] ">FREE</h1>
        </div>
      </div>
      <div className="flex flex-col relative top-[2vh] left-[1vw] items-center justify-center  h-[50vh] rounded-[50px] ">
        <div className="rounded-[50px] right-[1vw] relative max-h-[35vh] bg-white   mx-auto py-[1vw] px-[2vw] ">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="flex w-[150px] text-[18px] m-1  justify-center items-center ">
                <FaQuestionCircle size={50} color="#5648FC" className="" />
                {Questions} <br />
                Questions
              </div>
              <div className="flex w-[150px] text-[18px] m-1  justify-center items-center ">
                <FaQuestionCircle size={50} color="#5648FC" className="" />{" "}
                {Marks} <br />
                Marks
              </div>
              <div className="flex w-[150px] text-[18px] m-1  justify-center items-center ">
                <FaQuestionCircle size={50} color="#5648FC" className="" />
                {Times} <br /> Minutes
              </div>
              <div className="flex w-[150px] text-[18px] m-1  justify-center items-center ">
                <FaQuestionCircle size={50} color="#5648FC" className="" />
                {Negative} <br />
                Negative
              </div>
            </div>
            <div>
              <button className="px-6 relative py-2 mt-4 flex justify-items-end place-items-end  border border-green-500 rounded-full text-green-500 text-lg">
                Take Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
