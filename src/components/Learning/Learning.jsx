import React, { useState } from "react";
import { Testcard1, Testcard, Testcard2 } from "../Test/Testcard";
function Learning() {
  const [selectedTab, setSelectedTab] = useState("preparatory");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const subjects = [
    {
      title: "Algebra",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      title: "Mechanics",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Algebra",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "Mechanics",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Algebra",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      title: "Mechanics",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Algebra",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "Mechanics",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Mechanics",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
  ];

  const practice = [
    {
      title: "Practice Test 1",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      title: "Practice Test 2",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Practice Test 3",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "Practice Test 4",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Practice Test 5",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      title: "Practice Test 6",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Practice Test 7",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "Practice Test 8",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Practice Test 9",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
  ];
  const mock = [
    {
      title: "1",
      Marks: 60,
      Times: 60,
      Negative: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      title: "2",
      Marks: 90,
      Questions: 60,
      Times: 60,
      Negative: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "3",
      Marks: 60,
      Questions: 60,
      Times: 60,

      Negative: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "4",
      Marks: 90,
      Negative: 60,

      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "5",
      Marks: 60,
      Times: 60,
      Negative: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      title: "6",
      Marks: 90,
      Questions: 60,
      Times: 60,
      Negative: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "7",
      Marks: 60,
      Questions: 60,
      Times: 60,

      Negative: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "8",
      Marks: 90,
      Negative: 60,

      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "9",
      Marks: 90,
      Negative: 60,

      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
  ];
  return (
    <>
      <div className="w-full relative bg-[#ACBCFF] overflow-hidden flex flex-col items-center pt-5 px-0 pb-0 box-border gap-[81px] tracking-[normal]">
        <div className="flex flex-row gap-[100px] items-start justify-between mx-auto box-border text-left text-13xl text-blueviolet-100 font-inter">
          <div className="flex flex-col items-start gap-[42px] max-w-full">
            <div className="flex flex-col items-start box-border gap-[17px] max-w-full">
              <b className="h-[89px] relative inline-block max-w-full mq750:text-7xl mq450:text-lgi">
                <p className="m-0">One Stop Solution for your </p>
                <p className="m-0">
                  <span>complete Learning </span>
                </p>
              </b>
              <div className="flex flex-col items-start justify-start max-w-full text-xl">
                <p className="m-0">CUET</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[22px] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-[7px] pr-[41px] pl-[39px] bg-salmon rounded-xl flex flex-row items-center justify-center whitespace-nowrap bg-firebrick">
                  <div className="h-[38px] w-[155px] relative rounded-xl bg-salmon hidden" />
                  <div className="relative text-xl font-medium font-inter text-white text-left z-[1]">
                    Access Now
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start  text-10xl mt-6 mx-auto "
        >
          <p
            className={`m-0 font-bold cursor-pointer ${
              selectedTab === "preparatory" && "text-blue-500"
            }`}
            onClick={() => handleTabClick("preparatory")}
          >
            Preparatory Modules
          </p>
          <p
            className={`m-0 pl-10 cursor-pointer font-bold  text-[]${
              selectedTab === "practice" && "text-blue-500"
            }`}
            onClick={() => handleTabClick("practice")}
          >
            Practice Test
          </p>
          <p
            className={`m-0 pl-10 cursor-pointer font-bold ${
              selectedTab === "mock" && "text-blue-500"
            }`}
            onClick={() => handleTabClick("mock")}
          >
            Mock Test
          </p>
        </div>
        <div className="w-screen mt-2">
          <div className="">
            {selectedTab === "preparatory" && (
              <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2">
                {subjects.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard {...subject} />
                  </div>
                ))}
              </div>
            )}
            {selectedTab === "practice" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {practice.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard1 {...subject} />
                  </div>
                ))}
              </div>
            )}
            {selectedTab === "mock" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {mock.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard2 {...subject} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Learning;
