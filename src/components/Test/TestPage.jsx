import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { topics2 } from "../../utils/constants";
import Footer from "../Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Navbar from "../Navbar";
import { Testcard, Testcard1, Testcard2 } from "../Test/Testcard";
import "./css/TestPage.css";

function TestPage() {
  const { topic } = useParams();
  const mainheading = topic.toLowerCase().replace(/\s/g, "_");
  const [currentTab, setCurrentTab] = useState("prep");
  const [selectedCategory, setSelectedCategory] = useState("Mathematics");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subtopics = topics2[selectedCategory];

  const prep = subtopics.map((subtopic, index) => {
    const backgroundColors = [
      "#776CFF",
      "#FF887E",
      "#940B92",
      "#FFC726",
      "#4797FF",
      "#FF9A4F",
      "#FF9A4F",
      "#58B6C5",
      "#FF7A7A"
    ];
    const colorIndex = index % backgroundColors.length;

    return {
      subTopic: subtopic,
      Questions: 60,
      bgcolor: backgroundColors[colorIndex]
    };
  });

  const practice = Array.from({ length: 12 }, (_, index) => {
    const backgroundColors = [
      "#776CFF",
      "#FF887E",
      "#940B92",
      "#FFC726",
      "#4797FF",
      "#FF9A4F",
      "#FF9A4F",
      "#58B6C5",
      "#FF7A7A"
    ];
    const colorIndex = index % backgroundColors.length;
    const subtopicNumber = index + 1;
    return {
      topic: topic,
      subTopic: `Practice Test ${subtopicNumber}`,
      Marks: 60,
      Times: 120,
      Questions: 60,
      bgcolor: backgroundColors[colorIndex]
    };
  });
  const mock = Array.from({ length: 12 }, (_, index) => {
    const mocksubtopicNumber = index + 1;
    return {
      subTopic: `${topic} ${mocksubtopicNumber}`,
      Marks: 60,
      Times: 120,
      Negative: 1,
      Questions: 50
    };
  });
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="md:mx-10 mx-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="flex flex-row text-7xl md:text-[35px]">
              <h2>
                <Link className="text-[#5648FC]" to={"/courses"}>
                  <IoArrowBack />
                </Link>
              </h2>
              <h3 className="py-0 md:text-[40px] text-[#5648FC]">
                One Stop for your <br /> complete Learning
                <br />
                <span className="text-[#5648FC] mt-1 flex text-4xl opacity-[70%] md:my-7">
                  CUET
                </span>
                <Link
                  to={"/purchase"}
                  className="mt-5 no-underline mx-auto max-md:flex max-md:justify-center  max-md:items-center max-w-72 btn hover:bg-[#FF7468] bg-[#FF7468] shadow-none outline-none border-none rounded-[10px] text-white font-normal md:text-3xl p-1 px-8"
                >
                  Access Now
                </Link>
              </h3>
            </div>
            <img
              alt=""
              src={require("../../assets/coursesbanner.png")}
              className="w-[300px] h-[300px] md:w-[450px] md:h-[400px] flex justify-center items-center mx-auto md:mr-4 lg:mr-14"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[1150px] flex flex-col items-center md:flex-row justify-between md:text-lg text-center text-[15px] text-[#5648FC] md:my-14">
              <h1
                className="cursor-pointer leading-5 my-3 relative"
                onClick={() => {
                  setCurrentTab("prep");
                }}
              >
                Preparatory Modules

              </h1>
              <h1
                className="cursor-pointer my-3"
                onClick={() => {
                  setCurrentTab("practice");
                }}
              >
                Practice Tests
                {currentTab === "practice" && (
                  <div className="w-20 m-0 mt-2 max-md:mx-auto h-[2px] bg-blueviolet-400 text-blueviolet-100" />
                )}
              </h1>
              <h1
                className="cursor-pointer my-3"
                onClick={() => {
                  setCurrentTab("mock");
                }}
              >
                Mock Tests
                {currentTab === "mock" && (
                  <div className="w-20 max-md:mx-auto m-0 mt-2 h-[2px] bg-blueviolet-400 text-blueviolet-100" />
                )}
              </h1>
            </div>
            {currentTab === "prep" && (
              <>
                <h onClick={() => {
                  setCurrentTab("prep");
                  toggleDropdown();
                }} className="text-[30px] cursor-pointer gradient-text2 relative top-[-30px] font-bold">{selectedCategory}</h>
                <span className="relative text-blue-800 top-[-30px]  ">
                  {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  {currentTab === "prep" && isDropdownOpen && (
                    <div className="absolute z-50 left-0 mt-1 w-full flex justify-center">
                      <div className="bg-white py-2 px-4 shadow-md  rounded-md w-56">
                        {Object.keys(topics2).map(category => (
                          <div
                            key={category}
                            className={`cursor-pointer leading-7  hover:text-white text-center text-[20px] py-1 hover:bg-gray-400 ${category === selectedCategory ? "font-bold text-red-300" : "font-medium whitespace-nowrap text-blue-800"
                              }`}
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">
                  {prep.map((subject, index) => (
                    <Testcard
                      key={index}
                      heading={topic}
                      {...subject}
                      index={index}
                    />
                  ))}
                </div>
              </>

            )}
            {currentTab === "practice" && (
              <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">
                {practice.map((subject, index) => (
                  <Testcard1
                    key={index}
                    topic={topic}
                    subtopicNumber={index + 1}
                    {...subject}
                    index={index}
                  />
                ))}
              </div>
            )}
            {currentTab === "mock" && (
              <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">
                {mock.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard2
                      heading={mainheading}
                      topic={topic}
                      {...subject}
                      index={index}
                      mocksubtopicNumber={index + 1}
                    />
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
