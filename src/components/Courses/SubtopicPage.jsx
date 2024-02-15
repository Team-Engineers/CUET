import React from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import TopicContainer from "./TopicContainer";
import { Link } from "react-router-dom";
import { subtopicsData } from "../../utils/courses";
import Navbar from "../Navbar";
import Footer from "../Footer";
const SubtopicPage = () => {
  const { subtopic } = useParams();
  const subtopicCategory = Object.keys(subtopicsData).find(
    (subtopicsData) => subtopicsData === subtopic
  );
  const subtopicData = subtopicsData[subtopicCategory];

  return (
    <>
      <Navbar />

      <div className="max-w-[1380px] mx-auto">
        <div className="max-w-[180vh] mx-auto">
          <h1 className="text-[#5648FC] items-center flex">
            <Link
              className="text-[#5648FC] items-center flex pr-2"
              to={"/courses"}
            >
              <IoArrowBack />
            </Link>
            {subtopicCategory}
          </h1>
          <div className="grid grid-cols-3 my-[70px] md:flex-row gap-[100px]">
            {subtopicData &&
              subtopicData.map((item, index) => (
                <TopicContainer
                  key={index}
                  brick={item.image}
                  heading={item.title}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubtopicPage;
