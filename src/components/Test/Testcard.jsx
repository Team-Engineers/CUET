import React, { useState } from "react";
import { CiCircleMinus, CiSquareCheck } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { TbClockHour8 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import freeicon from "../../assets/images/courses/freeicon.gif";
import { useAuth } from "../../utils/context";
import { MOCKAPI } from "../../utils/constants";
import png from "../../assets/icons8-lock-48.png";
import Nta from "../../assets/nta.png";

export const Testcard = ({
  subTopic,
  heading,
  selectedCategory,
  Questions,
  bgcolor,
  index,
}) => {
  const [auth] = useAuth();
  const allow = auth?.user?.packageId;
  let navigation = `/test/prep/${heading.split(" ").join("_")}`;
  if (heading === "General Test") {
    navigation += `/${selectedCategory.split(" ").join("_")}`;
  }
  const [buttonBgColor, setButtonBgColor] = useState("linear-gradient(to right,#ffffff,#ffffff)");
  const [buttonTextColor, setButtonTextColor] = useState("#ff7468");

  const handleMouseEnter = () => {
    setButtonBgColor("linear-gradient(to right,#3B82F6,#8B5CF6)");
    setButtonTextColor("white");

    // Change this to whatever color you want
  };

  const handleMouseLeave = () => {
    setButtonBgColor("linear-gradient(to right,#ffffff,#ffffff)");
    setButtonTextColor("#ff7468");

  };
  // const sanitizedSubTopic = subTopic
  //   .replace(/&/g, "and")
  //   .replace(/\./g, "")
  //   .replace(/,/g, "");

  return (
    <Link style={{textDecoration:"none"}} to={`${navigation}/${subTopic.split(" ").join("_")}`}>

    <div
      style={{
      }}
      className={`flex transition-all duration-300 hover:shadow-2xl  border-solid border-[0.5px] border-black flex-col justify-around items-center bg-white rounded-3xl cursor-pointer relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ background: bgcolor }}
        className="w-[95%] h-[300px] mt-3 rounded-2xl text-white flex justify-center "
      >
        {index === 0 && !auth.user && (
          <img
            src={freeicon}
            className="absolute top-[-40px] right-[-20px] w-[80px] h-[80px]"
            alt="Free Icon"
          />
        )}
        <div className="w-[90%] h-full relative top-[-10px] flex flex-col justify-around">
          <h5 className="font-bold text-center text-3xl ">{subTopic}</h5>
          <img
            src={require("../../assets/images/courses/prepmodules.png")}
            className="w-[150px] mx-auto h-[150px] flex justify-center items-center"
            alt=""
          />
          <div className="flex items-center justify-center pr-8">
            <div className="flex justify-center items-center">
              <FaQuestion
                size={30}
                className="mr-3 text-white bg-[#5648FC] rounded-full p-2"
              />
              {Questions}
              &nbsp; Questions
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-[90%]">
        {index === 0 ? (
          <Link
            to={`${navigation}/${subTopic.split(" ").join("_")}`}>
            <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                
                  Practice
                  </button>
          </Link>
        ) : (
          <>
            {auth.user ? (
              allow === "65d93ff1aaf8ebc47c522ced" ? (
                <Link
                  to={`${navigation}/${subTopic.split(" ").join("_")}`}>
                  <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>

                
                  Practice
                  </button>
                </Link>
              ) : index <= 4 ? (
                <Link
                  to={`${navigation}/${subTopic.split(" ").join("_")}`}>
                  <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>

                
                  Practice
                  </button>
                </Link>
              ) : (
                <Link
                  to={`/purchase`}>
                  <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                  Purchase Course
                  </button>
                </Link>
              )
            ) : (
              <Link
                to={`/login`}>
                <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                      <img src={png} alt="Lock Icon" className="w-5 h-5" />

                Login
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
    </Link>
  );
};

export const Testcard1 = ({
  subTopic,
  topic,
  subtopicNumber,
  Questions,
  Marks,
  bgcolor,
  Times,
  index,
}) => {
  const [auth] = useAuth();
  const allow = auth?.user?.packageId;
  // console.log(topic, "hello");
  // console.log(subtopicNumber, "hello2");
  const topic2 =
    topic === "General English"
      ? "general_english_practice_test"
      : "general_test_practice_test";
  const [buttonBgColor, setButtonBgColor] = useState("linear-gradient(to right,#ffffff,#ffffff)");
  const [buttonTextColor, setButtonTextColor] = useState("#ff7468");

  const handleMouseEnter = () => {
    setButtonBgColor("linear-gradient(to right,#3B82F6,#8B5CF6)");
    setButtonTextColor("white");

    // Change this to whatever color you want
  };

  const handleMouseLeave = () => {
    setButtonBgColor("linear-gradient(to right,#ffffff,#ffffff)");
    setButtonTextColor("#ff7468");

  };

  return (
    <Link style={{textDecoration:"none"}} to={`/test/practice/${topic2}/${subtopicNumber}`}>
    <div
      style={{
        // boxShadow: `0 4px 6px ${bgcolor}, 0 1px 3px rgba(0, 0, 0, 0.1)`,
         background: bgcolor,
      }}
      className="transition-all duration-300 hover:shadow-2xl rounded-3xl text-black  border-black cursor-pointer px-[1rem] py-[0px] relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col p-5 items-center justify-center ">
        {index === 0 && !auth.user && (
          <img
            src={freeicon}
            className="absolute top-[-30px] right-[-20px] w-[80px] h-[80px]"
            alt="Free Icon"
          />
        )}
        <img
          src="https://i.ibb.co/XFnxJSS/practicetest.png"
          alt={subTopic}
          className="w-[5rem] h-[5rem]"
        />
        <div className="rounded-[20px] mt-2 bg-white  py-[0rem] px-[2rem] flex flex-col items-center justify-center">
          <h5 className="w-fit flex items-center text-center font-bold text-3xl p-[10px] m-0 ">{subTopic}</h5>
          <div className="w-fit flex flex-col gap-3 justify-between items-start  ">
            <div className="flex justify-between items-center text-center text-[18px]">
              <FaQuestion
                size={16}
                className="mr-[1.25rem] text-white bg-[#5648FC] rounded-full p-2"
              />
              {Questions} Questions
            </div>
            <div className="flex justify-between items-center text-center text-[18px]">
              <CiSquareCheck
                size={20}
                className=" mr-[1.25rem] text-white bg-[#5648FC] rounded-full p-2"
              />
              {Marks} Marks
            </div>
            <div className="flex justify-between items-center text-centre text-[18px]">
              <TbClockHour8
                size={20}
                className="mr-[1.25rem] text-white bg-[#5648FC] rounded-full p-2"
              />
              {Times} Minutes
            </div>
          </div>
          {index === 0 || (index <= 4 && auth.user) ? (
            <Link style={{textDecoration:"none"}} to={`/test/practice/${topic2}/${subtopicNumber}`}>
            <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                Take Test
              </button>
            </Link>
          ) : (
            <>
              {auth.user ? (
                allow === "65d93ff1aaf8ebc47c522ced" ? (
                  <Link style={{textDecoration:"none"}} to={`/test/practice/${topic2}/${subtopicNumber}`}>
                   <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                      Take Test
                    </button>
                  </Link>
                ) : index <= 4 ? (
                  <Link style={{textDecoration:"none"}} to={`/test/practice/${topic2}/${subtopicNumber}`}>
                 <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                   Take Test
                    </button>
                  </Link>
                ) : (
                  <Link style={{textDecoration:"none"}} to={`/purchase`}>
                 <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                      Purchase Course
                    </button>
                  </Link>
                )
              ) : (
                <Link style={{textDecoration:"none"}} to={`/login`}>
                 <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                  <img src={png} alt="Lock Icon" className="w-5 h-5" />

                    Login 
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
};

export const Testcard2 = ({
  subTopic,
  topic,
  Questions,
  mocksubtopicNumber,
  Marks,
  Negative,
  Times,
  index,
}) => {
  const [auth] = useAuth();
  const allow = auth?.user?.packageId;
  const subtopic2 =
    topic === "General English"
      ? "general_english_mock_test"
      : "general_test_mock_test";
  const [buttonBgColor, setButtonBgColor] = useState("linear-gradient(to right,#ffffff,#ffffff)");
  const [buttonTextColor, setButtonTextColor] = useState("#ff7468");

  const handleMouseEnter = () => {
    setButtonBgColor("linear-gradient(to right,#3B82F6,#8B5CF6)");
    setButtonTextColor("white");

    // Change this to whatever color you want
  };

  const handleMouseLeave = () => {
    setButtonBgColor("linear-gradient(to right,#ffffff,#ffffff)");
    setButtonTextColor("#ff7468");

  };

      return (
        <Link style={{textDecoration:"none"}}  target="_blank"
        to={`${MOCKAPI}/${subtopic2}/${mocksubtopicNumber}/free`}>
        <div className="flex flex-col transition-all duration-300 hover:shadow-2xl border-solid border-[0.5px] border-gray-700 text-black bg-white rounded-[20px] items-center justify-around cursor-pointer p-[10px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          
          <div className="w-full flex relative flex-row items-center">
            {index === 0 && !auth.user && (
              <img
                src={freeicon}
                className="absolute top-[-38px] right-[-38px] w-[80px] h-[80px]"
                alt="Free Icon"
              />
            )}
            <img
              src={Nta}
              alt="icon"
              className="w-[3.5rem] h-[3.5rem] ml-[8px]"
            />
            <h5 className="font-bold md:text-3xl text-xl ml-[0.45rem]">{subTopic}</h5>
          </div>
    
          <div className="w-full flex flex-col justify-between items-center">
            <div className="w-[100%]  gap-y-2 pl-3 flex flex-col items-start	">
              <div className="flex justify-start items-center text-lg gap-[8px]">
                <FaQuestion
                  size={36}
                  className="mr-2 text-white bg-[#5648FC] rounded-full p-2 h-[19px] w-[19px] ml-[13px]"
                />
                {Questions} Questions
              </div>
              <div className="flex justify-start items-center text-lg gap-[8px]">
                <CiSquareCheck
                  size={40}
                  className="mr-2 text-white bg-[#5648FC] rounded-full p-2 h-[19px] w-[19px] ml-[13px]"
                />
                {Marks} Marks
              </div>
              <div className="flex justify-start items-center text-lg gap-[8px]">
                <TbClockHour8
                  size={40}
                  className="mr-2 text-white bg-[#5648FC] rounded-full p-2 h-[19px] w-[19px] ml-[13px]"
                />
                {Times}  Minutes
              </div>
              <div className="flex justify-start items-center text-lg gap-[8px]">
                <CiCircleMinus
                  size={40}
                  className="mr-2 text-white bg-[#5648FC] rounded-full p-2 h-[19px] w-[19px] ml-[13px]"
                />
                {Negative} Negative
              </div>
            </div>
          </div>
          <div className="w-fit flex items-center justify-end h-16  ">
            {auth.user ? (
              <>
                {allow === "65d93ff1aaf8ebc47c522ced" || index <= 4 ? (
                  <Link style={{textDecoration:"none"}}
                    target="_blank"
                    to={`${MOCKAPI}/${subtopic2}/${mocksubtopicNumber}/${auth?.user?._id}`}
                  >
                  <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                      Take Test
                    </button>
                  </Link>
                ) : (
                  <Link style={{textDecoration:"none"}} to={`/purchase`}>
                  <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                      Purchase Course
                    </button>
                  </Link>
                )}
              </>
            ) : (
              <>
                {index === 0 ? (
                  <Link style={{textDecoration:"none"}}
                    target="_blank"
                    to={`${MOCKAPI}/${subtopic2}/${mocksubtopicNumber}/free`}
                  >
                 <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                      Take Test
                    </button>
                  </Link>
                ) : (
                  <Link style={{textDecoration:"none"}} to={`/login`}>
                 <button className="btn my-3   rounded-full  px-8 text-lg " style={{ backgroundImage: buttonBgColor, color: buttonTextColor}}>
                    <img src={png} alt="Lock Icon" className="w-5 h-5" />
                      Login
                    </button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
        </Link>

      );
    }; 