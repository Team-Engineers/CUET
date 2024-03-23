import React from "react";
import Vector from "../../src/assets/images/syllabus_vector.png";
import Vector2 from "../../src/assets/images/syllabus_vector2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SyllabusCard from "../components/Syllabus/SyllabusCard";
import { subjects } from "../utils/constants";
import Header from "../components/Header";
const Syllabus = () => {

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full overflow-hidden relative pb-0 box-border tracking-[normal]">
        <img src={Vector} className="absolute top-0 left-0 z-0 overflow-hidden" alt="" />
        {/* <Navbar /> */}
        <Header/>
        <div className="relative max-w-[1280px] *:  mx-auto  z-10">
          <div className=" mt-10 mb-14 ml-5">
          <h2 className="pl-0 mb-1 gradient-text text-21xl leading-none sm:justify-center md:text-left lg:text-left">Syllabus</h2>
            <div className="w-10 m-0 h-[2px] my-2 bg-white " />
          </div>
          <div className="grid grid-cols-1 mb-8  lg:grid-cols-5 md:grid-cols-3  justify-center mx-[80px] md:w-[80rem] lg:w-[80rem] lg:m-[6px]">
            {subjects.map((subject) => (
              <SyllabusCard subject={subject} />
            ))}
          </div>
        </div>
        <img src={Vector2} className="absolute bottom-0 right-0 z-0 overflow-hidden" alt="" />
        <Footer />
      </div>
    </>
  );
};

export default Syllabus;