import React from "react";
import Vector from "../../src/assets/images/syllabus_vector.png";
import Vector2 from "../../src/assets/images/syllabus_vector2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SyllabusCard from "../components/Syllabus/SyllabusCard";

const Syllabus = () => {
  const subjects = [
    { subjectName: "Accounting", image: '/syllabusImages/amico.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/Final+Accountancy+12+March+2023.pdf" },
    { subjectName: "Agriculture", image: '/syllabusImages/rice-field/rafiki.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/302_AGRICULTURE.pdf" },
    { subjectName: "Anthropology", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/303_Anthropology.pdf" },
    { subjectName: "Art Education Sculpture", image: '/syllabusImages/art/cuate.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/312_ArtEducation_Painting&Sculpture.pdf" },
    { subjectName: "Biology", image: '/syllabusImages/biologist/rafiki.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/304_BIOLOGY.pdf" },
    { subjectName: "Business Studies", image: '/syllabusImages/Business startup statistics and insights.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/305_BusinessStudeis.pdf" },
    { subjectName: "Chemistry", image: '/syllabusImages/science/pana.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/306_Chemistry.pdf" },
    { subjectName: "Computer Science", image: '/syllabusImages/researching/amico.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/Final+Computer+Science+12+March+2023.pdf" },
    { subjectName: "Economics/Business Economics", image: '/syllabusImages/Financial growth.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/Final+Economics+12+March+2023.pdf" },
    { subjectName: "Languages (IA & IB)", image: '/syllabusImages/learning-languages/pana.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/LanguageSyllabus(IAandIB).pdf" },
    { subjectName: "Engineering Graphics", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/310_Eng.Graphics.pdf" },
    { subjectName: "Entrepreneurship", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/311_Entrepreneurship_.pdf" },
    { subjectName: "Environmental Studies", image: '/syllabusImages/nature/cuate.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/307_EnvironmentalStudies.pdf" },
    { subjectName: "General Test", image: '/syllabusImages/online-test/rafiki.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/501_General_Test.pdf" },
    { subjectName: "Legal Studies", image: '/syllabusImages/law-firm/amico.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/317_LegalStudies.pdf" },
    { subjectName: "Geography", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/313_GEOGRAPHYGEOLOGY.pdf" },
    { subjectName: "History", image: '/syllabusImages/time-machine/rafiki.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/314_History.pdf" },
    { subjectName: "Home Science", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/315_HOMESCIENCE.pdf" },
    { subjectName: "Knowledge Tradition -Practices India", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/316_KnowledgeTraditions.pdf" },
    { subjectName: "Mass Media/ Mass Communication", image: '/syllabusImages/marketing/rafiki.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/318_MassMedia.pdf" },
    { subjectName: "Mathematics", image: '/syllabusImages/mathematics/amico.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/Final_Mathematics+12+March+2023.pdf" },
    { subjectName: "Performing Arts", image: '/syllabusImages/acting/amico.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/Final+Performing+Arts+12+March+2023.pdf" },
    { subjectName: "Physical Education", image: '/syllabusImages/physical-education/pana.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/321_PhysicalEducation.pdf" },
    { subjectName: "Physics", image: '/syllabusImages/stationery and physics book for education.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/Final+Physics+12+March+2023.pdf" },
    { subjectName: "Political Science", image: '/syllabusImages/Political debates.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/323_politicalscience.pdf" },
    { subjectName: "Psychology", image: '/syllabusImages/group-therapy/rafiki.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/324_Psychology.pdf" },
    { subjectName: "Sanskrit", image: '/syllabusImages/Sandy_Edu-04_Single-03 4.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus+of+CUET+(UG)+-+2022/325_Sanskrit_Domain.pdf" },
    { subjectName: "Sociology", image: '/syllabusImages/Business statistics.png', link: "https://cdnasb.samarth.ac.in/site/Syllabus%20of%20CUET%20%28UG%29%20-%202022/326_sociology.pdf" },
    { subjectName: "Teaching Aptitide", image: '/syllabusImages/online-test/rafiki.png', link: "https://cdnasb.samarth.ac.in/site-admin23/syllabus/327_TeachingAptitude.pdf" },
  ];
  return (
    <>
      <div className="w-full  relative bg-[#c9d4ff] overflow-hidden flex flex-col items-center pb-0 box-border tracking-[normal]">
        <Navbar />
        <img src={Vector} className="absolute top-0 left-0 z-0 overflow-hidden" alt="" />
        <div className="relative z-10">
          <div className=" mt-10 mb-14 ml-5">
            <h2 className="pl-0 mb-1 text-blueviolet-100 text-21xl leading-none">Syllabus</h2>
            <hr className="w-10 m-0 mt-1 text-blueviolet-100" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-[20px] justify-center">
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