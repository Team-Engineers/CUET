import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./css/TestPage.css";
import { Testcard1, Testcard, Testcard2 } from "../Test/Testcard";
import { useState } from "react";
import Footer from "../Footer";

function TestPage() {
  const subjects = [
    {
      title: "Algebra",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#776CFF",
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

  const [currentTab, setCurrentTab] = useState("prep");

  return (
    <div className="bg-gradient-to-br from-[#ACBCFF] to-white flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <div className="w-full flex flex-col-reverse md:flex-row justify-between">
        <div id="" className="flex md:mr-[80px] ml-4  flex-col justify-start items-start">
          <div className="text-[#5648FC] flex  text-[3vw] mt-10">
            <Link className="hidden md:block text-[#5648FC]  mr-2 " to={"/courses"}>
              <IoArrowBack className="md:text-[40px]  text-[20px] flex item mt-2 item-start" />
            </Link>
            <div className="flex flex-col text-13xl">
              <h3 className="py-0">
                One Step for your <br /> complete Learning
              </h3>
              <br />
              <h3 className="text-[#5648FC] md:mb-5 flex text-3xl opacity-50">CUET</h3>
              <button className="mt-14 max-w-72 btn hover:bg-[#FF7468] bg-[#FF7468] shadow-none outline-none border-none rounded-[10px] text-white font-normal text-3xl p-3 px-8">
                Access Now
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/bcb7/1722/18523a084e62fca4abf99df9aeb0d2c8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqNR2zH1XwTymeeR2uamO5nlRdn5k7WbencRG6Fw5IkPosCTt1~y9Om0Aww2dVunFxZv3LwIzjkoTe7jYBUOgDjX3hce97LGcQNnitMAd1hcbl-rYXuqeOdPo5muxGRKkBog0piHEU4mbknkBDCLmvYI2ohi0mHKdQt0E2d9OZI8VaETV4k1IU7U1PCKegrAisPmgC6gcTfhFwNO7FHEbjnHHnPhyXgaN3wYKqdinhfIXzOjCwUu1r3f65kYN~IjkXUncekgyIQzw4kUTJ8lpuIMnvcHW30JSRK7dxr1kJr-H18v146HlAYwhTTuHnY2YOc~PRBgPkniJRyhiMIoXw__"
          className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex justify-center mx-auto md:mr-4 lg:mr-14"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-screen-xl w-full flex flex-col items-center md:flex-row md:justify-evenly md:text-lg text-[#5648FC] my-14">
          <h1
            className="cursor-pointer my-3"
            onClick={() => {
              setCurrentTab("prep");
            }}
          >
            Preparatory Modules
            {currentTab == "prep" && <hr className="w-20 m-0 mt-2 text-blueviolet-100" />}
          </h1>
          <h1
            className="cursor-pointer my-3"
            onClick={() => {
              setCurrentTab("practice");
            }}
          >
            Practice Tests
            {currentTab == "practice" && <hr className="w-20 m-0 mt-2 text-blueviolet-100" />}
          </h1>
          <h1
            className="cursor-pointer my-3"
            onClick={() => {
              setCurrentTab("mock");
            }}
          >
            Mock Tests
            {currentTab == "mock" && <hr className="w-20 m-0 mt-2 text-blueviolet-100" />}
          </h1>
        </div>

        {currentTab == "prep" ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {subjects.map((subject, index) => (
              <Testcard {...subject} />
            ))}
          </div>
        ) : currentTab == "practice" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {practice.map((subject, index) => (
              <Testcard1 {...subject} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {mock.map((subject, index) => (
              <div key={index} className="col-md-4">
                <Testcard2 {...subject} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );

}

export default TestPage;
