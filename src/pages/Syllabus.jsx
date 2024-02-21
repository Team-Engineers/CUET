import React from "react";
import Navbar from "../components/Navbar";
import SyllabusCard from "../components/Syllabus/SyllabusCard";
import Footer from "../components/Footer";
import { FiArrowLeft } from "react-icons/fi";

const Syllabus = () => {
  const subjects = [
    {subjectName:"Accounting",image:'/syllabusImages/amico.png'},
    {subjectName:"Agriculture",image:'/syllabusImages/rice-field/rafiki.png'},
   { subjectName:"Anthropology",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"Art Education Sculpture",image:'/syllabusImages/art/cuate.png'},
    {subjectName:"Biology",image:'/syllabusImages/biologist/rafiki.png'},
    {subjectName:"Business Studies",image:'/syllabusImages/Business startup statistics and insights.png'},
    {subjectName:"Chemistry",image:'/syllabusImages/science/pana.png'},
    {subjectName:"Computer Science",image:'/syllabusImages/researching/amico.png'},
    {subjectName:"Econimics/Business Economics",image:'/syllabusImages/Financial growth.png'},
   { subjectName:"Languages (IA & IB)",image:'/syllabusImages/learning-languages/pana.png'},
    {subjectName:"Engineering Graphics",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"Entrepreneurship",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"Environmental Studies",image:'/syllabusImages/nature/cuate.png'},
    {subjectName:"General Test",image:'/syllabusImages/online-test/rafiki.png'},
    {subjectName:"Legal Studies",image:'/syllabusImages/law-firm/amico.png'},
    {subjectName:"Geography",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"History",image:'/syllabusImages/time-machine/rafiki.png'},
    {subjectName:"Home Science",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"Knowledge Tradition -Practices India",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"Mass Media/ Mass Communication",image:'/syllabusImages/marketing/rafiki.png'},
    {subjectName:"Mathematics",image:'/syllabusImages/mathematics/amico.png'},
    {subjectName:"Performing Arts",image:'/syllabusImages/acting/amico.png'},
    {subjectName:"Physical Education",image:'/syllabusImages/physical-education/pana.png'},
    {subjectName:"Physics",image:'/syllabusImages/stationery and physics book for education.png'},
    {subjectName:"Political Science",image:'/syllabusImages/Political debates.png'},
    {subjectName:"Psychology",image:'/syllabusImages/group-therapy/rafiki.png'},
    {subjectName:"Sanskrit",image:'/syllabusImages/Sandy_Edu-04_Single-03 4.png'},
    {subjectName:"Sociology",image:'/syllabusImages/Business statistics.png'},
    {subjectName:"Teaching Aptitide",image:'/syllabusImages/online-test/rafiki.png'},
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
