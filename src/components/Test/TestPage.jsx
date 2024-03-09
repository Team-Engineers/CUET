import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { topics, topics2 } from "../../utils/constants";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Testcard, Testcard1, Testcard2 } from "../Test/Testcard";
import "./css/TestPage.css";

function TestPage() {
  let { topic } = useParams();
  topic = topic.split("_").join(" ");

  let subtopics = [];
  const [selectedCategory, setSelectedCategory] = useState("Mathematics");
  if (topic === "General Test") {
    subtopics = topics2[selectedCategory];
  } else {
    subtopics = topics[topic];
  }

  console.log("subtopci is", topic);

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
      "#FF7A7A",
    ];
    const colorIndex = index % backgroundColors.length;
    let questionsValues;
    if (topic === "General Test") {
      if (selectedCategory === "Mathematics") {
        questionsValues = [
          50,
          60,
          70,
          80,
          90,
          100,
          110,
          120,
          130,
          140,
          150,
          160,
        ];
      } else if (selectedCategory === "Logical Reasoning") {
        questionsValues = [
          70,
          80,
          90,
          100,
          110,
          120,
          130,
          140,
          150,
          160,
          170,
          180,
        ];
      } else if (selectedCategory === "General Awareness") {
        questionsValues = [
          60,
          70,
          80,
          90,
          100,
          110,
          120,
          130,
          140,
          150,
          160,
          170,
        ];
      }
    } else {
      questionsValues = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    }

    return {
      subTopic: subtopic,
      Questions: questionsValues[index % questionsValues.length],
      bgcolor: backgroundColors[colorIndex],
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
      "#FF7A7A",
    ];
    const colorIndex = index % backgroundColors.length;
    const subtopicNumber = index + 1;
    let marksValues, timesValues, questionsValues;

    if (topic === "General Test") {
      marksValues = [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170];
      timesValues = [
        110,
        120,
        130,
        140,
        150,
        160,
        170,
        180,
        190,
        200,
        210,
        220,
      ];
      questionsValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
    } else {
      marksValues = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
      timesValues = [
        100,
        110,
        120,
        130,
        140,
        150,
        160,
        170,
        180,
        190,
        200,
        210,
      ];
      questionsValues = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    }

    return {
      subTopic: `Practice Test ${subtopicNumber}`,
      Marks: marksValues[index % marksValues.length],
      Times: timesValues[index % timesValues.length],
      Questions: questionsValues[index % questionsValues.length],
      bgcolor: backgroundColors[colorIndex],
    };
  });

  const mock = Array.from({ length: 12 }, (_, index) => {
    const mocksubtopicNumber = index + 1;
    let marksValues, timesValues, negativeValues, questionsValues;

    if (topic === "General Test") {
      marksValues = [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170];
      timesValues = [
        110,
        120,
        130,
        140,
        150,
        160,
        170,
        180,
        190,
        200,
        210,
        220,
      ];
      questionsValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
      negativeValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    } else {
      marksValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
      timesValues = [
        100,
        110,
        120,
        130,
        140,
        150,
        160,
        170,
        180,
        190,
        200,
        210,
      ];
      questionsValues = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
      negativeValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }

    return {
      subTopic: `${topic} ${mocksubtopicNumber}`,
      Marks: marksValues[index % marksValues.length],
      Times: timesValues[index % timesValues.length],
      Negative: negativeValues[index % negativeValues.length],
      Questions: questionsValues[index % questionsValues.length],
    };
  });

  const [currentTab, setCurrentTab] = useState("prep");

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
            <div className="w-[98%]  flex flex-col items-center md:flex-row justify-between md:text-lg text-center text-[15px] text-[#5648FC] md:my-14">
              <h1
                className="cursor-pointer my-3"
                onClick={() => setCurrentTab("prep")}
              >
                Preparatory Modules
                {currentTab === "prep" && (
                  <div className="w-20 m-0 mt-2 max-md:mx-auto h-[3px] bg-blueviolet-400 text-blueviolet-100" />
                )}
              </h1>
              <h1
                className="cursor-pointer my-3"
                onClick={() => setCurrentTab("practice")}
              >
                Practice Tests
                {currentTab === "practice" && (
                  <div className="w-20 m-0 mt-2 max-md:mx-auto h-[3px] bg-blueviolet-400 text-blueviolet-100" />
                )}
              </h1>
              <h1
                className="cursor-pointer my-3"
                onClick={() => setCurrentTab("mock")}
              >
                Mock Tests
                {currentTab === "mock" && (
                  <div className="w-20 m-0 mt-2 max-md:mx-auto h-[3px] bg-blueviolet-400 text-blueviolet-100" />
                )}
              </h1>
            </div>
            {currentTab === "prep" && (
              <>
                {topic === "General Test" && (
                  <div className="md:mx-10 max-md:mt-7 mx-4">
                    <div className=" py-2 mb-6 top-[-20px] relative  px-4 md:shadow-md flex flex-col lg:flex-row   rounded-md ">
                      {Object.keys(topics2).map((category) => (
                        <div
                          key={category}
                          className={`text-[30px] mx-3  whitespace-nowrap flex flex-col lg:flex-row  cursor-pointer relative  font-bold leading-7  text-center  p-2 rounded ${
                            category === selectedCategory
                              ? "font-medium bg-red-400 text-white "
                              : " font-normal  text-blue-800"
                          }`}
                          onClick={() => {
                            setSelectedCategory(category);
                          }}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">
              {currentTab === "prep" &&
                prep.map((subject, index) => (
                  <Testcard
                    key={index}
                    heading={topic}
                    {...subject}
                    index={index}
                    selectedCategory = {selectedCategory}
                  />
                ))}
              {currentTab === "practice" &&
                practice.map((subject, index) => (
                  <Testcard1
                    key={index}
                    subtopicNumber={index + 1}
                    topic={topic}
                    {...subject}
                    index={index}
                  />
                ))}
              {currentTab === "mock" &&
                mock.map((subject, index) => (
                  <div key={index} className="col-md-4">
                    <Testcard2
                      topicNumber={index + 1}
                      topic={topic}
                      {...subject}
                      index={index}
                      mocksubtopicNumber={index + 1}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestPage;
