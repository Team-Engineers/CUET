import { useMediaQuery } from "@react-hook/media-query";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DomainTopic } from "../../utils/courses";
import TopicContainer from "./TopicContainer";

const Courses = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const gridColumns = isMobile ? "grid-cols-1" : "grid-cols-3";
  const gridGap = isMobile ? "gap-4" : "gap-32";
  const flexDirection = isMobile ? "flex-col" : "flex-row";

  return (
    <div className="w-full  h-full  relative">
      <div className=" mx-auto overflow-hidden mt-14">
        <div className="left-0 top-0 z-[0] absolute">
          <svg
            width="162"
            height="222"
            viewBox="0 0 162 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="120.516"
              height="112.816"
              rx="8"
              transform="matrix(0.883699 -0.468055 0 1 55.5 108.511)"
              fill="#65E1C6"
            />
            <rect
              width="120.516"
              height="90.2531"
              transform="matrix(0.883699 0.468055 0 1 -51 63.3841)"
              fill="#93FCE5"
            />
            <rect
              width="96.4129"
              height="120.516"
              transform="matrix(0.883699 -0.468055 0.883699 0.468055 -40.3501 46.4616)"
              fill="#BDFDEF"
            />
            <path
              d="M55.5 210.045C55.5 212.933 56.5398 215.269 58.6193 216.371L-47.8807 159.962C-49.9602 158.861 -51 156.524 -51 153.637L55.5 210.045Z"
              fill="#93FCE5"
            />
            <path
              d="M55.5 119.792C55.5 113.562 60.2682 105.985 66.15 102.87L-40.35 46.4616C-46.2318 49.5769 -51 57.1534 -51 63.3841L55.5 119.792Z"
              fill="#BDFDEF"
            />
            <path
              d="M158.881 57.0589C156.801 55.9575 154.076 56.2996 151.35 57.7432L44.8501 1.33504C47.5757 -0.108573 50.3012 -0.450746 52.3808 0.650693L158.881 57.0589Z"
              fill="#BDFDEF"
            />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto">
        <Link
          className="text-[#5648FC] md:mx-20 mx-10 relative top-[20px] flex items-center  z-20 pr-2 "
          to={"/"}
        >
          <IoArrowBack size={40} />
        </Link>
        <div className="relative z-10 flex  items-center  flex-col  mt-[-40px] ">
          <h1 className="text-[#5648FC] items-center flex ">Courses</h1>
        </div>

        <div className="max-w-[180vh] relative z-10 mx-auto flex flex-col items-center mt-[-40px]">
          <div className="flex flex-col items-center justify-center mt-[50px] ">
            <div className={`my-6 flex md:flex-row flex-col gap-[70px] `}>
              
              <TopicContainer
                brick={require("../../assets/images/signup/brick.png")}
                heading="General English"
                color="#FF6868"
              />
              <TopicContainer
                brick={require("../../assets/images/signup/test.png")}
                heading="General Test"
                color="#80BCBD"
              />
            </div>
          </div>
        </div>

        <h1 className="text-[#5648FC] relative z-10 md:mx-[50px] mx-[0] md:justify-start justify-center items-center flex flex-col mt-10 ">
          Domain Subjects
        </h1>

        <div className="max-w-[180vh] pb-60  relative z-30 mx-auto  flex flex-col items-center ">
          <div className=" mt-[20px] mb-[-80px]">
            <div
              className={`grid ${gridColumns}  my-6 ${flexDirection} ${gridGap}`}
            >
              {DomainTopic.map((subtopic, index) => (
                <div key={index}>
                  <Link
                    className="no-underline"
                    to={`/courses/${subtopic.title}`}
                  >
                    <TopicContainer
                      brick={subtopic.image}
                      heading={subtopic.title}
                      color={subtopic.color}
                      subheading="domain"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      <div className="relative top-[-20vh]  ">
        <svg
          width="189"
          height="222"
          viewBox="0 0 189 222"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 z-[0]"
        >
          <rect
            width="120.516"
            height="112.816"
            rx="8"
            transform="matrix(0.883699 -0.468055 0 1 106.5 108.511)"
            fill="#E16580"
          />
          <rect
            width="120.516"
            height="90.2531"
            transform="matrix(0.883699 0.468055 0 1 0 63.384)"
            fill="#FC93AA"
          />
          <rect
            width="96.4129"
            height="120.516"
            transform="matrix(0.883699 -0.468055 0.883699 0.468055 10.6499 46.4615)"
            fill="#FDBDCB"
          />
          <path
            d="M106.5 210.045C106.5 212.933 107.54 215.269 109.619 216.371L3.11931 159.962C1.03977 158.861 0 156.524 0 153.637L106.5 210.045Z"
            fill="#FC93AA"
          />
          <path
            d="M106.5 119.792C106.5 113.562 111.268 105.985 117.15 102.87L10.65 46.4615C4.76817 49.5769 0 57.1533 0 63.384L106.5 119.792Z"
            fill="#FDBDCB"
          />
          <path
            d="M209.881 57.0589C207.801 55.9575 205.076 56.2996 202.35 57.7432L95.8501 1.33504C98.5757 -0.108573 101.301 -0.450746 103.381 0.650693L209.881 57.0589Z"
            fill="#FDBDCB"
          />
        </svg>
      </div>
    </div>
  );
};

export default Courses;
