import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/context';

const TopicContainer = ({ brick, heading, text, color, subheading }) => {
  const [auth] = useAuth();
  const selectedSubjects = auth?.user?.selectedSubjects || [];
  const selectedSubject = selectedSubjects.find(
    (subject) => subject.subjectName === heading
  );
  const validTills = selectedSubject?.validTill || 'Not Available';
  const validTill = validTills ? new Date(validTills).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : null;

  return (
    <Link
      to={
        subheading === "domain"
          ? `/courses/${subheading.split(" ").join("_")}/${heading
            .split(" ")
            .join("_")}`
          : heading === "General Test"
            ? `/courses/${heading.split(" ").join("_")}/Mathematics`
            : heading === "Economics"
              ? `/courses/${heading.split(" ").join("_")}/Macro Economics`
              : `/courses/${heading.split(" ").join("_")}`
      }
      style={{
        background: color,
      }}
      className="sm:w-[290px] no-underline transition-all duration-100 hover:scale-[105%] sm:h-[300px] w-[250px] h-[270px]  flex justify-center items-center relative z-10 rounded-2xl shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)]"
    >
      <div className="no-underline w-full flex flex-col items-center">
        <img
          className="w-[100px] h-[100px] relative z-10"
          loading="eager"
          alt=""
          src={brick}
        />
        <h1 className="text-5xl md:text-[30px] flex justify-center items-center text-white md:w-40 w-20 text-center">
          {heading}
        </h1>
        {selectedSubject && (
          <div className="text-white text-[15px] text-center justify-center w-full flex bg-[#e1d982e7] absolute bottom-6 border-dashed border-white border-t-[1.5px] whitespace-nowrap border-l-0 border-r-0 border-b-[1.5px] py-1 ">
            <span> Valid upto: &nbsp;</span>{" "}
            <span className="font-bold">{validTill}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default TopicContainer;