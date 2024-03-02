import React from "react";
import { CiCircleMinus, CiSquareCheck } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { TbClockHour8 } from "react-icons/tb";
import { Link } from "react-router-dom";
import freeicon from "../../assets/images/courses/freeicon.gif";
import { useAuth } from "../../utils/context";
export const Testcard = ({ subTopic, heading, Questions, bgcolor, index }) => {
  const [auth] = useAuth();
  const allow = auth?.user?.packageId;
  console.log(allow)
  return (
    <div style={{ boxShadow: `0 4px 6px ${bgcolor}, 0 1px 3px rgba(0, 0, 0, 0.1)` }} className={`flex transition-all duration-100 border-solid border-[0.5px] shadow-xl hover:scale-[105%]  border-black flex-col justify-around items-center  bg-white rounded-3xl`}>
      <div style={{ background: bgcolor }} className="w-[95%] h-[300px] mt-3 rounded-2xl text-white flex justify-center relative">
        {index === 0 && !auth.user && (
          <img src={freeicon} className="absolute top-[-40px] right-[-20px] w-[80px] h-[80px]" alt="Free Icon" />
        )}
        <div className="w-[90%] h-full relative top-[-10px] flex flex-col justify-around">
          <h5 className="font-bold text-center text-3xl ">{subTopic}</h5>
          <img src={require("../../assets/images/courses/prepmodules.png")} className="w-[150px] mx-auto h-[150px] flex justify-center items-center" alt="" />
          <div className="flex items-center justify-center pr-8">
            <div className="flex justify-center items-center">
              <FaQuestion size={30} className="mr-3 text-white bg-[#5648FC] rounded-full p-2" />
              {Questions}
              &nbsp; Questions
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center w-[90%]">
        {index === 0 ? (
          <Link to={`/test/prep/${heading}/${subTopic}`} className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center text-lg font-bold min-h-0 h-10 px-8 my-3">
            Practice
          </Link>
        ) : (
          <>
            {auth.user ? (
              allow === "65d93ff1aaf8ebc47c522ced" ? (
                <Link to={`/test/prep/${heading}/${subTopic}`} className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center text-lg font-bold min-h-0 h-10 px-8 my-3">
                  Practice
                </Link>
              ) : (
                index <= 4 ? (
                  <Link to={`/test/prep/${heading}/${subTopic}`} className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center text-lg font-bold min-h-0 h-10 px-8 my-3">
                    Practice
                  </Link>
                ) : (
                  <Link to={`/purchase`} className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center text-lg font-bold min-h-0 h-10 px-8 my-3">
                    Purchase Course
                  </Link>
                )
              )
            ) : (
              <Link to={`/login`} className="btn hover:bg-[#34A853] bg-[#34A853] text-white flex justify-center rounded-full items-center text-lg font-bold min-h-0 h-10 px-8 my-3">
                Login to Practice
              </Link>
            )}
          </>
        )}
      </div>


    </div>
  );
};



export const Testcard1 = ({ subTopic, topic, Questions, Marks, bgcolor, Times, index }) => {
  const [auth] = useAuth();
  const allow = auth?.user?.packageId;

  return (
    <div style={{ boxShadow: `0 4px 6px ${bgcolor}, 0 1px 3px rgba(0, 0, 0, 0.1)`, background: bgcolor }} className="transition-all duration-100 hover:scale-[105%] rounded-3xl">
      <div className="flex flex-col p-5 items-center py-3 justify-center relative h-[350px]">
        {index === 0 && !auth.user && (
          <img src={freeicon} className="absolute top-[-30px] right-[-20px] w-[80px] h-[80px]" alt="Free Icon" />
        )}
        <img src="https://i.ibb.co/XFnxJSS/practicetest.png" alt={subTopic} className="w-[150px] h-[150px]" />
        <div className="rounded-[20px] px-7 pb-4 mt-2 bg-white w-[70%] mx-auto h-[45%] flex flex-col items-center justify-center">
          <h5 className="w-full font-bold text-3xl pl-4 pt-2">{subTopic}</h5>
          <div className="w-full flex gap-3 items-center justify-around">
            <div className="flex justify-center items-center text-[10px]">
              <FaQuestion size={16} className="mr-1 text-white bg-[#5648FC] rounded-full p-2" />
              {Questions} <br />
              Questions
            </div>
            <div className="flex justify-center items-center text-[10px]">
              <CiSquareCheck size={20} className="mr-1 text-white bg-[#5648FC] rounded-full p-2" />
              {Marks} <br />
              Marks
            </div>
            <div className="flex justify-center items-center text-[10px]">
              <TbClockHour8 size={20} className="mr-1 text-white bg-[#5648FC] rounded-full p-2" />
              {Times} <br /> Minutes
            </div>
          </div>
          {index === 0 || (index <= 4 && auth.user) ? (
            <Link to={`/test/practice/${topic}/${subTopic}`}>
              <button className="btn hover:bg-[#34A853] my-3 bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Take Test</button>
            </Link>
          ) : (
            <>
              {auth.user ? (
                allow === "65d93ff1aaf8ebc47c522ced" ? (
                  <Link to={`/test/practice/${topic}/${subTopic}`}>
                    <button className="btn hover:bg-[#34A853] my-3 bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Take Test</button>
                  </Link>
                ) : (
                  index <= 4 ? (
                    <Link to={`/test/practice/${topic}/${subTopic}`}>
                      <button className="btn hover:bg-[#34A853] my-3 bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Take Test</button>
                    </Link>
                  ) : (
                    <Link to={`/purchase`}>
                      <button className="btn hover:bg-[#34A853] my-3 bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Purchase Course</button>
                    </Link>
                  )
                )
              ) : (
                <Link to={`/login`}>
                  <button className="btn hover:bg-[#34A853] my-3 bg-[#34A853] rounded-full text-white min-h-0 h-8 px-8">Login to Take Test</button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export const Testcard2 = ({ subTopic, Questions, mocksubtopicNumber, Marks, Negative, Times, index }) => {
  const [auth] = useAuth();
  console.log(subTopic);
  const allow = auth?.user?.packageId;
  const subtopic2 = subTopic === "General English" ? "general_english_mock_test" : "general_test_mock_test";

  return (
    <div className="flex flex-col shadow-blue-500 transition-all duration-100 border-solid border-[0.5px] shadow-lg hover:scale-[105%] border-black bg-white rounded-[20px] items-center justify-around w-full md:w-[350px] h-[350px]">

      <div className="w-full flex relative flex-row items-center">
        {index === 0 && !auth.user && (
          <img src={freeicon} className="absolute top-[-25px] right-[-20px] w-[80px] h-[80px]" alt="Free Icon" />
        )}
        <img src="https://i.ibb.co/p0WP2Ss/mocktest.png" alt={subTopic} className="w-28 h-28" />
        <h5 className="font-bold md:text-3xl text-xl ">
          {subTopic}
        </h5>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[90%] grid grid-cols-2 gap-x-7 gap-y-10 pl-3">
          <div className="flex justify-start items-center text-lg">
            <FaQuestion size={36} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Questions} <br />
            Questions
          </div>
          <div className="flex justify-start items-center text-lg">
            <CiSquareCheck size={40} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Marks} <br />
            Marks
          </div>
          <div className="flex justify-start items-center text-lg ">
            <TbClockHour8 size={40} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Times} <br /> Minutes
          </div>
          <div className="flex justify-start items-center text-lg">
            <CiCircleMinus size={40} className="mr-2 text-white bg-[#5648FC] rounded-full p-2" />
            {Negative} <br />
            Negative
          </div>
        </div>
      </div>
      <div className="w-full flex items-center py-3 justify-end h-16 pr-10">
        {auth.user ? (
          <>
            {allow === "65d93ff1aaf8ebc47c522ced" || index <= 4 ? (
              <Link
                target="_blank"
                to={`https://mock-test-platform.vercel.app/${subtopic2}/${mocksubtopicNumber}/${auth?.user?._id}`}
              >
                <button className="btn btn-outline text-[#34A853] border-[#34A853] rounded-full shadow-none my-3 outline-none font-normal text-lg min-h-0 h-8 px-6">Take Test</button>
              </Link>
            ) : (
              <Link to={`/purchase`}>
                <button className="btn btn-outline text-[#34A853] border-[#34A853] rounded-full shadow-none my-3 outline-none font-normal text-lg min-h-0 h-8 px-6">Purchase Course</button>
              </Link>
            )}
          </>
        ) : (
          <>
            {index === 0 ? (
              <Link
                target="_blank"
                to={`https://mock-test-platform.vercel.app/${subtopic2}/${mocksubtopicNumber}/free`}
              >
                <button className="btn btn-outline text-[#34A853] border-[#34A853] rounded-full shadow-none my-3 outline-none font-normal text-lg min-h-0 h-8 px-6">Take Test</button>
              </Link>
            ) : (
              <Link to={`/login`}>
                <button className="btn btn-outline text-[#34A853] border-[#34A853] rounded-full shadow-none my-3 outline-none font-normal text-lg min-h-0 h-8 px-6">
                  Login to Take Test
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

