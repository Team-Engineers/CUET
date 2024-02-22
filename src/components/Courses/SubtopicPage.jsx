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
  const subtopicCategory = Object.keys(subtopicsData).find((subtopicsData) => subtopicsData === subtopic);
  const subtopicData = subtopicsData[subtopicCategory];

  return (
    <div className="bg-gradient-to-br from-[#ACBCFF] to-white flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      <div className="w-full mx-auto px-8 mt-8">
        <div className="max-w-[180vh] mx-auto">
          <h1 className="text-[#5648FC] items-center flex">
            <Link className="text-[#5648FC] items-center flex pr-2" to={"/courses"}>
              <IoArrowBack />
            </Link>
            <span>
              {subtopicCategory}
              <hr className="w-20 m-0 mt-1 text-blueviolet-100" />
            </span>
          </h1>
          <div className="flex justify-center text-center my-5 ">

          <div className="max-w-[180vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20   my-8">
            {subtopicData &&
              subtopicData.map((item, index) => <TopicContainer key={index} brick={item.image} heading={item.title} color={item.color} />)}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubtopicPage;
