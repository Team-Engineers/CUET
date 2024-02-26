import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./css/TestPage.css";
import { Testcard1, Testcard, Testcard2 } from "../Test/Testcard";
import { useState } from "react";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import PackPage from "../Packs/PacksPage";
function TestPage() {
  const { heading } = useParams();
  const [isPackPageOpen, setIsPackPageOpen] = useState(false);
  const mainheading = heading.toLowerCase().replace(/\s/g, '_');

  const handleOpenPackPage = () => {
    setIsPackPageOpen(true);
  };

  const handleClosePackPage = () => {
    setIsPackPageOpen(false);
  };
  const subjects = [
    {
      subTopic: "NUMBER SYSTEM",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "AVERAGE",
      bgcolor: "#776CFF",
      Times: 60,
    },
    {
      subTopic: "PERCENTAGE",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "PROFIT AND LOSS",
      bgcolor: "#FF887E",
    },
    {
      subTopic: "SIMPLE INTEREST AND COMPOUND INTEREST",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#940B92",
    },
    {
      subTopic: "RATIO AND PROPORTION",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#FFC726",
    },
    {
      subTopic: "TIME AND WORK",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Medium",
      bgcolor: "#4797FF",
      Times: 60,
    },
    {
      subTopic: "PROBABILITY",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Medium",
      bgcolor: "#FF9A4F",
    },
    {
      subTopic: "PARTNERSHIP",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FF9A4F",
    },
    {
      subTopic: "PERMUTATION AND COMBINATION",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#58B6C5",
    },
    {
      subTopic: "TIME, SPEED AND DISTANCE",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#FF7A7A",
    },


  ];

  const practice = [
    {
      subTopic: "Practice Test 1",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#58B6C5",
      Times: 60,
    },
    {
      subTopic: "Practice Test 2",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#FF7A7A",
    },
    {
      subTopic: "Practice Test 3",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      subTopic: "Practice Test 4",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Practice Test 5",
      Marks: 60,
      Times: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      subTopic: "Practice Test 6",
      Marks: 90,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Practice Test 7",
      Marks: 60,
      Questions: 60,
      Times: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      subTopic: "Practice Test 8",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Practice Test 9",
      Marks: 90,
      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
  ];
  const mock = [
    {
      subTopic: "Mock Test 1",
      Marks: 60,
      Times: 60,
      Negative: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      subTopic: "Mock Test 2",
      Marks: 90,
      Questions: 60,
      Times: 60,
      Negative: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Mock Test 3",
      Marks: 60,
      Questions: 60,
      Times: 60,

      Negative: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      subTopic: "Mock Test 4",
      Marks: 90,
      Negative: 60,

      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Mock Test 5",
      Marks: 60,
      Times: 60,
      Negative: 60,

      Questions: 60,
      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
      Times: 60,
    },
    {
      subTopic: "Mock Test 6",
      Marks: 90,
      Questions: 60,
      Times: 60,
      Negative: 60,

      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Mock Test 7",
      Marks: 60,
      Questions: 60,
      Times: 60,

      Negative: 60,

      difficultyLevel: "Advanced",
      bgcolor: "#FFB6C1",
    },
    {
      subTopic: "Mock Test 8",
      Marks: 90,
      Negative: 60,

      Questions: 60,
      Times: 60,
      difficultyLevel: "Intermediate",
      bgcolor: "#98FB98",
    },
    {
      subTopic: "Mock Test 9",
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
    <div className="bg-gradient-to-br from-[#ACBCFF] to-white  overflow-x-hidden">
      <Navbar />
      <div className="md:mx-10 mx-4 ">
        <div className="max-w-[1280px] mx-auto ">
          <div className="w-full  flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="flex flex-row text-7xl md:text-13xl">
              <h2>
                <Link className="hidden md:block text-[#5648FC]  " to={"/courses"}>
                  <IoArrowBack className="" />
                </Link>
              </h2>
              <h3 className="py-0 text-[#5648FC]">
                One Step for your <br /> complete Learning
                <br />
                <span className="text-[#5648FC] mt-1 flex text-3xl opacity-[70%]" >CUET</span>
                <button onClick={handleOpenPackPage}   className="mt-5 max-md:ml-28 max-w-72 btn hover:bg-[#FF7468] bg-[#FF7468] shadow-none outline-none border-none rounded-[10px] text-white font-normal md:text-3xl  p-3 px-8">
                  Access Now
                </button>
              </h3>
              <div className=" z-50">
      <PackPage isOpen={isPackPageOpen} onClose={handleClosePackPage} />

      </div>
            </div>
            <img
              alt=""
              src="https://s3-alpha-sig.figma.com/img/bcb7/1722/18523a084e62fca4abf99df9aeb0d2c8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqNR2zH1XwTymeeR2uamO5nlRdn5k7WbencRG6Fw5IkPosCTt1~y9Om0Aww2dVunFxZv3LwIzjkoTe7jYBUOgDjX3hce97LGcQNnitMAd1hcbl-rYXuqeOdPo5muxGRKkBog0piHEU4mbknkBDCLmvYI2ohi0mHKdQt0E2d9OZI8VaETV4k1IU7U1PCKegrAisPmgC6gcTfhFwNO7FHEbjnHHnPhyXgaN3wYKqdinhfIXzOjCwUu1r3f65kYN~IjkXUncekgyIQzw4kUTJ8lpuIMnvcHW30JSRK7dxr1kJr-H18v146HlAYwhTTuHnY2YOc~PRBgPkniJRyhiMIoXw__"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center mx-auto md:mr-4 lg:mr-14"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-screen-xl w-full flex flex-col items-center md:flex-row md:justify-evenly md:text-lg text-center text-[15px] text-[#5648FC] md:my-14">
              <h1
                className="cursor-pointer  my-3"
                onClick={() => {
                  setCurrentTab("prep");
                }}
              >
                Preparatory Modules
                {currentTab === "prep" && <div className="w-20 m-0  max-md:mx-auto mt-2 h-[2px] bg-blueviolet-400 text-blueviolet-100" />}
              </h1>
              <h1
                className="cursor-pointer my-3"
                onClick={() => {
                  setCurrentTab("practice");
                }}
              >
                Practice Tests
                {currentTab === "practice" && <div className="w-20 m-0 mt-2 max-md:mx-auto h-[2px] bg-blueviolet-400 text-blueviolet-100" />}
              </h1>
              <h1
                className="cursor-pointer my-3"
                onClick={() => {
                  setCurrentTab("mock");
                }}
              >
                Mock Tests
                {currentTab === "mock" && <div className="w-20 max-md:mx-auto m-0 mt-2 h-[2px] bg-blueviolet-400 text-blueviolet-100" />}
              </h1>
            </div>

            {currentTab === "prep" ? (
              <div className=" grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">
                {subjects.map((subject, index) => (
                  <Testcard heading={mainheading}{...subject} />
                ))}
              </div>
            ) : currentTab === "practice" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">

                {practice.map((subject, index) => (
                  <Testcard1 heading={mainheading} {...subject} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">
                {mock.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard2 heading={mainheading} {...subject} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );

}

export default TestPage;