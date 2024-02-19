import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import TopicContainer from "./TopicContainer";
import { DomainTopic } from "../../utils/courses";
const Courses = () => {
  return (
    <>
      <div className="max-w-[1380px] mx-auto">
        <div className="max-w-[180vh] mx-auto">
          <h1 className="text-[#5648FC] items-center flex">
            <Link className="text-[#5648FC]  items-center flex pr-2" to={"/"}>
              {" "}
              <IoArrowBack />
            </Link>
            Courses
          </h1>
          <div className="grid grid-cols-3  my-[70px] md:flex-row  gap-[100px] ">
            <TopicContainer
              brick={require("../../assets/images/signup/brick.png")}
              heading="General English"
            />
            <TopicContainer
              brick={require("../../assets/images/signup/test.png")}
              heading="General Test"
            />
          </div>
        </div>
        <div className="max-w-[180vh] mx-auto">
          <h1 className="text-[#5648FC] items-center flex">Domain Subjects</h1>
          <div className="grid grid-cols-3 my-[70px] md:flex-row gap-[100px]">
            {DomainTopic.map((subtopic, index) => (
              <div key={index}>
                <Link className="no-underline" to={`/courses/${subtopic.title}`}>
                  <TopicContainer
                    brick={subtopic.image}
                    heading={subtopic.title}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
