import React from "react";
import Navbar from "../components/Navbar";
import SyllabusCard from "../components/Syllabus/SyllabusCard";
import Footer from "../components/Footer";
import { FiArrowLeft } from "react-icons/fi";

const Syllabus = () => {
  const subjects = [
    "Accountancy",
    "Agriculture",
    "Anthropology",
    "Art Education Sculpture",
    "Biology",
    "Business Studies",
    "Chemistry",
    "Computer Science",
    "Econimics/Business Economics",
    "Languages (IA & IB)",
    "Engineering Graphics",
    "Entrepreneurship",
    "Environmental Studies",
    "General Test",
    "Legal Studies",
    "Geography",
    "History",
    "Home Science",
    "Knowledge Tradition -Practices India",
    "Mass Media/ Mass Communication",
    "Mathematics",
    "Performing Arts",
    "Physical Education",
    "Physics",
    "Political Science",
    "Psychology",
    "Sanskrit",
    "Sociology",
    "Teaching Aptitide",
  ];
  return (
    <div className="w-full  relative bg-[#c9d4ff] overflow-hidden flex flex-col items-center px-0 pb-0 box-border tracking-[normal]">
      <Navbar />
      <div>
        <div className=" mt-10 mb-14 ml-5">
          <h2 className="pl-0 mb-1 text-blueviolet-100 text-21xl leading-none">Syllabus</h2>
          <hr className="w-10 m-0 mt-1 text-blueviolet-100" />
        </div>
        {/* <div className="flex flex-wrap justify-center mt-10 gap-8 mb-20">
          {subjects.map((subject) => (
            <SyllabusCard subject={subject} />
          ))}
        </div> */}
        <div className="grid 2xl:grid-cols-5 2xl:gap-16 xl:grid-cols-4 xl:gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
          {subjects.map((subject) => (
            <SyllabusCard subject={subject} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Syllabus;
