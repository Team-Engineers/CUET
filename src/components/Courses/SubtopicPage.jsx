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

      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 my-8">
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
