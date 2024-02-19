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
      level === difficultyLevel ? "bg-white text-black" : "bg-white text-black"
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
    <div className="card flex flex-col justify-center lg:mx-[20px] md:mx-[20px]  mt-3 lg:max-w-[28vw] lg:h-[50vh]    mb-3 bg-white rounded-3xl ">
      <div
        style={{ background: bgcolor }}
        className="flex relative top-[2vh] mx-2 items-center justify-center lg:w-[22vw] lg:h-[40vh]   rounded-2xl "
      >
        <div className="card-body">
          <h5 className="font-bold flex  justify-start mb-6 text-3xl px-9">
            {title}
          </h5>
          <div className="flex items-center justify-center">
            <div className="flex w-[150px] text-[14px] m-1  justify-center items-center ">
              <FaQuestionCircle size={30} color="#5648FC" className="mr-1" />
              {Questions} <br />
              Questions
            </div>
            <div className="flex w-[150px] text-[14px] m-1  justify-center items-center ">
              <FaCheckCircle size={30} color="#5648FC" className="mr-1" />
              {Marks} <br />
              Marks
            </div>
          </div>

          <div className="flex flex-col justify-start px-8 space-x-2 mt-3">
            <h1 className="mb-4 text-lg font-semibold">Difficulty Level:</h1>
            <div className="flex">
              {renderDifficultyBtn("Beginner")}
              {renderDifficultyBtn("Intermediate")}
              {renderDifficultyBtn("Advanced")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end mr-6 mt-5  pl-4">
        <button className="px-8 relative py-1 lg:mb-4 mb-2 mt-1 flex justify-items-end place-items-end  border border-green-500 rounded-full text-white bg-[#34A853] text-lg">
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
      className=" lg:max-w-[35vw] md:max-w-[35vw] sm:max-w-[24vw] md:mx-[20px]  lg:h-[50vh] md:h-[25vh]  sm:h-[30px] mb-3 bg-white rounded-[20px]  flex justify-center items-center "
    >
      <div className="flex px-4 flex-col relative top-[2vh] left-[1vw] mb-10 items-center justify-center  lg:h-[50vh] md:h-[40vh] h-[30vh] rounded-[50px] ">
        <img
          src="https://i.ibb.co/XFnxJSS/practicetest.png"
          alt={title}
          className="md:w-[10vw] w-[25vw] my-[4vh] sm:my-[2vh] h-auto  rounded-lg "
        />
        <div className="rounded-[20px] right-[1vw] relative lg:max-h-[15vh]  lg:max-w-[18vw] sm:max-h-[12vh] max-w-[65vw] md:max-h-[15vh] md:max-w-[29vw] bg-white   mx-auto py-[1vw] px-[1.5vw] mb-4">
          <h5 className="font-bold text-[15px] flex items-start justify-start mb-4">
            {title}
          </h5>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <div className="flex  justify-center text-[14px] items-center ">
                <FaQuestionCircle size={20} color="#5648FC" className="mr-1" />
                {Questions} <br />
                Questions
              </div>
              <div className="flex  justify-center items-center text-[14px]  ml-1">
                <FaQuestionCircle size={20} color="#5648FC" className="mr-1" />
                {Marks} <br />
                Marks
              </div>
              <div className="flex  justify-center text-[14px] items-center ml-1">
                <FaQuestionCircle size={20} color="#5648FC" className="mr-1" />
                {Times} <br /> Minutes
              </div>
            </div>
            <div>
              <button className="px-6 relative py-1 mt-1 flex justify-items-end place-items-end  bg-[#34A853] rounded-full text-white text-sm max-w[10vw]">
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
    <div className="max-w-full mx-4 sm:max-w-[18vw] md:max-w-[34vw] lg:max-w-[22vw] flex-col lg:h-[42vh] md:h-[25vh] sm:h-[18vh] mb-5 bg-white rounded-[20px]  items-center">
      <div className="flex  flex-row items-center">
        <div>
          <img
            src="https://i.ibb.co/p0WP2Ss/mocktest.png"
            alt={title}
            className="md:w-[8vw] w-[25vw] h-auto rounded-md justify-start"
          />
        </div>
        <div className="ml-4">
          <h5 className="font-bold leading-3 text-[22px] mb-1">
            Mock Test {title}
          </h5>
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
          <button className="px-6 py-2 mb-6 ml-[130px] border border-green-500 rounded-full text-green-500 text-sm font-semibold">
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
};
