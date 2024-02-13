import React from "react";
import Testcard from "../Test/Testcard";

function Learning() {
  const subjects = [
    {
      title: "Algebra",
      Questions: 25,
      Marks: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      title: "Mechanics",
      Questions: 18,
      Marks: 90,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      title: "Organic Chemistry",
      Questions: 22,
      Marks: 40,
      difficultyLevel: "Beginner",
      bgcolor: "#87CEFA",
    },
    {
      title: "Algebra",
      Questions: 25,
      Marks: 120,
      difficultyLevel: "Advanced",
      bgcolor: "#FFA07A",
    },
    {
      title: "Mechanics",
      Questions: 18,
      Marks: 90,
      difficultyLevel: "Intermediate",
      bgcolor: "#DDA0DD",
    },
    {
      title: "Organic Chemistry",
      Questions: 22,
      Marks: 110,
      difficultyLevel: "Beginner",
      bgcolor: "#FFB6C1",
    },
    {
      title: "Algebra",
      Questions: 25,
      Marks: 120,
      difficultyLevel: "Advanced",
      bgcolor: "#FFD700",
    },
    {
      title: "Mechanics",
      Questions: 18,
      Marks: 90,
      difficultyLevel: "Intermediate",
      bgcolor: "#FFEDB9",
    },
    {
      title: "Organic Chemistry",
      Questions: 22,
      Marks: 110,
      difficultyLevel: "Beginner",
      bgcolor: "#9CC2F4",
    },
    {
      title: "Algebra",
      Questions: 25,
      Marks: 120,
      difficultyLevel: "Advanced",
      bgcolor: "#CDFADB",
    },
    {
      title: "Mechanics",
      Questions: 18,
      Marks: 90,
      difficultyLevel: "Intermediate",
      bgcolor: "#C3ACD0",
    },
    {
      title: "Organic Chemistry",
      Questions: 22,
      Marks: 110,
      difficultyLevel: "Beginner",
      bgcolor: "#F9B572",
    },
  ];

  return (
    <>
      <div className="w-full  relative bg-[#ACBCFF]  overflow-hidden flex flex-col items-center  pt-5 px-0 pb-0 box-border gap-[81px] tracking-[normal]">
        <div className="flex flex-row gap-[100px] items-start justify-between mx-auto box-border  text-left text-13xl text-blueviolet-100 font-inter">
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
            <div className="flex flex-row items-start justify-start max-w-full text-10xl mt-6 col-md-12 mx-auto ">
              <p className="m-0 font-bold">Prepartory Modules</p>
              <p className="m-0 pl-10 font-bold"> Practice Test</p>
              <p className="m-0 pl-10 font-bold">Mock Test</p>
            </div>
            <div className="container mt-2">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {subjects.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard {...subject} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learning;
