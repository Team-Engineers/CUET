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
    <div className="h-full bg-[#c9d4ff]">
      <Navbar />
      <div className=" mt-10 mx-24">
          <h2 className="pl-0 mb-1 text-blueviolet-100 text-5xl xl:text-10xl leading-none">
            Syllabus
          </h2>
          <hr className="bg-blueviolet-100 h-1 border-none w-9 m-0 mb-3" />
        </div>
      <div className="flex flex-wrap justify-center mt-10 gap-8 mb-20">
        {subjects.map((subject) => (
          <SyllabusCard subject={subject} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Syllabus;
