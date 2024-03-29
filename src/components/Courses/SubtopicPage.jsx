import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { subtopicsData } from "../../utils/courses";
import Footer from "../Footer";
import Navbar from "../Navbar";
import DomainContainer from "./DomainContainer";
const SubtopicPage = () => {
  const { heading } = useParams();
  const decodedHeading = heading.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
  const subtopicCategory = Object.keys(subtopicsData).find((subtopicsData) => subtopicsData === decodedHeading);
  const subtopicData = subtopicsData[subtopicCategory];
  return (
    <>
      <div className=" overflow-x-hidden">
        <Navbar />
        <img src={require("../../assets/images/courses/Ellipsecommerce.png")} className="absolute top-0 z-0 left-0" alt="" />
        <div className="w-full relative z-10 max-w-[1280px] mx-auto mt-8">
          <div className="flex flex-col justify-center text-center my-5 ">
            <h1 className="gradient-text2 mx-8 items-center flex">
              <Link className="text-[#5648FC] items-center flex pr-2" to={"/courses"}>
                <IoArrowBack />
              </Link>
              <span>
                {subtopicCategory}
                <div className="w-20 h-[2px] bg-blueviolet-400 max-md:mx-auto m-0 mt-1 text-blueviolet-100" />
              </span>
            </h1>
            <div className="flex items-center justify-center">
              <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20   my-8">
                {subtopicData &&
                  subtopicData.map((item, index) => <DomainContainer key={index} brick={item.image} heading={item.title} color={item.color} />)}
              </div>
            </div>
          </div>

        </div>
        <div className="top-10 relative">
          <img src={require("../../assets/images/courses/commercecircle.png")} className="absolute bottom-0 right-0" alt="" />

        </div>

        <Footer />
      </div>
    </>

  );
};

export default SubtopicPage;
