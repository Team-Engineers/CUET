import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./css/TestPage.css";
import { Testcard1, Testcard, Testcard2 } from "../Test/Testcard";

function TestPage() {
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
  useEffect(() => {
    openTab("Preparatory Modules");
  }, []);

  function openTab(tabName) {
    var i;
    var tabContents = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }

    document.getElementById(tabName + "Tab").classList.add("active");
  }

  return (
    <div className="w-full  relative bg-[#ACBCFF] overflow-hidden flex flex-col items-center px-0 pb-0 box-border tracking-[normal] ">
      <Navbar />
      <div className=" md:w-[90vw] flex justify-between">
        <div className="flex mx-[10px]  justify-center">
          <div className="flex items-center">
            <div className="   relative md:top-[-90px] top-[-30px]">
              <Link
                className="text-[#5648FC] flex justify-center items-start"
                to={"/"}
              >
                <IoArrowBack className="text-[20px] md:text-[40px]" />
              </Link>
            </div>
            <div className=" md:text-[25px] text-[11px] font-medium text-[#5648FC] ">
              <h1 className=" whitespace-nowrap">
                One Step for your <br /> complete Learning
              </h1>
              <h3 className="opacity-[50%] md:text-[35px] text-[10px] my-3">
                CUET
              </h3>
              <button className="bg-[#FF7468] relative md:top-[50px] shadow-2xl md:text-[30px] text-[10px] text-white rounded-[5px] p-1 px-4">
                Access Now
              </button>
            </div>
          </div>
        </div>

        <div id="" className="">
          <img
            src="https://s3-alpha-sig.figma.com/img/bcb7/1722/18523a084e62fca4abf99df9aeb0d2c8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqNR2zH1XwTymeeR2uamO5nlRdn5k7WbencRG6Fw5IkPosCTt1~y9Om0Aww2dVunFxZv3LwIzjkoTe7jYBUOgDjX3hce97LGcQNnitMAd1hcbl-rYXuqeOdPo5muxGRKkBog0piHEU4mbknkBDCLmvYI2ohi0mHKdQt0E2d9OZI8VaETV4k1IU7U1PCKegrAisPmgC6gcTfhFwNO7FHEbjnHHnPhyXgaN3wYKqdinhfIXzOjCwUu1r3f65kYN~IjkXUncekgyIQzw4kUTJ8lpuIMnvcHW30JSRK7dxr1kJr-H18v146HlAYwhTTuHnY2YOc~PRBgPkniJRyhiMIoXw__"
            className="md:max-w-[70vw] max-w-[100px] md:flex justify-center mx-auto"
          />
        </div>
      </div>
      <div id="content">
        <div className=" font-bold text-[23px] my-4 md:m-5 md:flex-row flex-col text-center space-y-4 flex md:justify-between justify-center ">
          <div
            className="lg:ml-[15px] text-[#5648FC]"
            onClick={() => openTab("Preparatory Modules")}
          >
            Preparatory Modules
          </div>
          <div
            className="lg:mr-[45px] text-[#5648FC]"
            onClick={() => openTab("Practice Test")}
          >
            Practice Test
          </div>
          <div
            className="lg:mr-[95px] text-[#5648FC]"
            onClick={() => openTab("Mock Test")}
          >
            Mock Test
          </div>
        </div>

        <div id="test_cards_content ">
          <div id="Preparatory ModulesTab" className="tab-content">
            <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 md:mx-0 mx-6">
              {subjects.map((subject, index) => (
                <div key={index} className="col-md-4">
                  <Testcard {...subject} />
                </div>
              ))}
            </div>
          </div>
          <div id="Practice TestTab" className="tab-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
              {practice.map((subject, index) => (
                <div key={index} className="col-md-4">
                  <Testcard1 {...subject} />
                </div>
              ))}
            </div>
          </div>
          <div id="Mock TestTab" className="tab-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
              {mock.map((subject, index) => (
                <div key={index} className="col-md-4">
                  <Testcard2 {...subject} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
