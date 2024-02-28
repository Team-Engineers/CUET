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
import { topics } from "../../utils/constants";
function TestPage() {
  const { topic } = useParams();
  console.log(topic)
  const [isPackPageOpen, setIsPackPageOpen] = useState(false);
  const mainheading = topic.toLowerCase().replace(/\s/g, '_');
  const handleOpenPackPage = () => {
    setIsPackPageOpen(true);
  };
  const handleClosePackPage = () => {
    setIsPackPageOpen(false);
  };
  const subtopics = topics[topic];
  const subjects = subtopics.map(subtopic => {
    return {
      subTopic: subtopic,
      Marks: 60,
      Times: 60,
      Questions: 60,
      bgcolor: "#776CFF",
      Times: 60,
    };
  });

  const practice = Array.from({ length: 12 }, (_, index) => {
    const subtopicNumber = index + 1;
    return {
      subTopic: `Practice Test ${subtopicNumber}`,
      Marks: 60,
      Times: 120,
      Questions: 60,
      bgcolor: "#58B6C5",
      Times: 60,
    };
  });
  const mock = Array.from({ length: 12 }, (_, index) => {
    const subtopicNumber = index + 1;
    return {
      subTopic: `${topic} ${subtopicNumber}`,
      Marks: 60,
      Times: 120,
      Negative: 1,
      Questions: 50,
    };
  });

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
                  <Testcard heading={topic}{...subject} />
                ))}
              </div>
            ) : currentTab === "practice" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 mb-20 lg:grid-cols-3 gap-14">

                {practice.map((subject, index) => (
                  <Testcard1 topic={mainheading} {...subject} />
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