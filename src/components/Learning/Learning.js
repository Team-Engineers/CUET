import React from 'react'
import TestCard from '../Test/TestCard';
import Layout from '../layout/Layout';


function Learning() {
    const subjects = [
        {
          title: 'Algebra',
          questions: 25,
          totalMarks: 120,
          difficultyLevel: 'Advanced',
        },
        {
          title: 'Mechanics',
          questions: 18,
          totalMarks: 90,
          difficultyLevel: 'Intermediate',
        },
        {
          title: 'Organic Chemistry',
          questions: 22,
          totalMarks: 110,
          difficultyLevel: 'Beginner',
        },
        {
            title: 'Algebra',
            questions: 25,
            totalMarks: 120,
            difficultyLevel: 'Advanced',
          },
          {
            title: 'Mechanics',
            questions: 18,
            totalMarks: 90,
            difficultyLevel: 'Intermediate',
          },
          {
            title: 'Organic Chemistry',
            questions: 22,
            totalMarks: 110,
            difficultyLevel: 'Beginner',
          },   {
            title: 'Algebra',
            questions: 25,
            totalMarks: 120,
            difficultyLevel: 'Advanced',
          },
          {
            title: 'Mechanics',
            questions: 18,
            totalMarks: 90,
            difficultyLevel: 'Intermediate',
          },
          {
            title: 'Organic Chemistry',
            questions: 22,
            totalMarks: 110,
            difficultyLevel: 'Beginner',
          },
          {
            title: 'Algebra',
            questions: 25,
            totalMarks: 120,
            difficultyLevel: 'Advanced',
          },
          {
            title: 'Mechanics',
            questions: 18,
            totalMarks: 90,
            difficultyLevel: 'Intermediate',
          },
          {
            title: 'Organic Chemistry',
            questions: 22,
            totalMarks: 110,
            difficultyLevel: 'Beginner',
          },
      ];
      
    
    
  return (
    <>
      <Layout>
        <div className="w-full  relative bg-[#ACBCFF]  overflow-hidden flex flex-col items-center  pt-5 px-0 pb-0 box-border gap-[81px] tracking-[normal]">
          <div className="flex flex-row gap-[100px] items-start justify-between mx-auto box-border  text-left text-13xl text-blueviolet-100 font-inter">
            <div className="flex flex-col items-start gap-[42px] max-w-full">
              <div className="flex flex-col items-start box-border gap-[17px] max-w-full">
                <b className="h-[89px] relative inline-block max-w-full mq750:text-7xl mq450:text-lgi">
                  <p className="m-0">One Stop Solution for your </p>
                  <p className="m-0">
                    <span>complete Learning </span>
                  </p>
                </b>
                <div className="flex flex-col items-start justify-start max-w-full text-xl">
                  <p className="m-0">CUET</p>
                </div>
                <div className="flex flex-row items-start justify-start gap-[22px] max-w-full mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] py-[7px] pr-[41px] pl-[39px] bg-salmon rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-firebrick">
                    <div className="h-[38px] w-[155px] relative rounded-xl bg-salmon hidden" />
                    <div className="relative text-xl font-medium font-inter text-white text-left z-[1]">
                      Access Now
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start max-w-full text-10xl mt-6 col-md-12 ">
                <p className="m-0 font-bold">Prepartory Modules</p>
                <p className="m-0 pl-10 font-bold"> Practice Test</p>
                <p className="m-0 pl-10 font-bold">Mock Test</p>
              </div>
              <div className="container mt-2">
                <div className="row">
                  {subjects.map((subject, index) => (
                    <div key={index} className="col-md-4">
                      <TestCard {...subject} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Learning