import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { MathText } from "../../components/mathJax/MathText";
import ShareButtons from '../Sharebutton';
import Sidebar from '../Sidebar';
import preparationData from './preparationData.json';

import { Link } from 'react-router-dom';




export default function Article1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768); // Change the breakpoint as per your requirement
    };

    // Initial check
    checkWindowSize();

    // Event listener for window resize
    window.addEventListener('resize', checkWindowSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div className='overflow-x-hidden '>
      <Navbar />
      <div className='leading-normal text-center font-poppins font-sans   md:px-[15vw] py-[8vw] md:py-[12vh]  bg-gray-50 flex-col justify-center items-center font-semibold mb-4 text-black'>
        <h1 className='font-normal text-[26px] md:text-[44px] font-poppins font-sans mb-[10px]' >{preparationData.Heading}</h1>
        <div className="breadcrumb flex items-center justify-center">
          <ul className="flex flex-wrap list-none rounded-md bg-transparent text-xs font-normal py-0 my-0 text-gray-400">
            <li>
              <Link href="/" className="text-[12px] no-underline uppercase text-gray-600 hover:text-blue-600">cuet testknock  </Link>
            </li>
            <p className='my-0 py-0 mx-[5px]'> {'    >  '}  </p>
            <li>

              <Link href="blogs" className='text-[12px] no-underline text-gray-600 hover:text-blue-600'>  Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='mx-[6vw] md:mx-[13vw] my-3 '>

        <div className='flex overflow-x-hidden   md:flex-row flex-col justify-center lg:justify-between  '>



          <div className='mb-8 md:w-[70%] ml-20vw'>
            {/* <p className="mb-3 text-gray-700"><b>Published on:</b> March 14, 2024</p> */}
            <div>
              <img src={preparationData.Topimage} alt="image" className='w-full mx-auto rounded' />
            </div>

            <h2 className='font-poppins font-sans text-[34px]  mt-8 font-bold mb-12 text-black'>{preparationData.Heading}</h2>



            <div className='bg-slate-200 mt-4 border-solid border-[1px] border-blue-800 font-sans mb-4' >
              <div className="bg-blue-900  text-white text-[15px] md:text-[1.5vw] p-[6px] md:p-[12px]  " >Table of Contents</div>
              <div className='list-none px-[15px] py-[10px]'>
                {preparationData.preparationStrategies.map((strategy, index) => (
                  strategy.hasOwnProperty('alsoread') ? (
                    <>
                    </>
                  ) : (
                    <div className="leading-7 text-[15px] md:text-[1vw] p-[.25vw]  text-blue-600 font-sans" >
                      ☛{strategy.title}
                    </div>
                  )




                ))}
              </div>
            </div>




            <div className=' text-base text-gray-500'>
              <div>
                {/* <h1>Preparation Strategies for CUET Biology</h1> */}
                <div>

                  {
                    preparationData.preparationStrategies.map((strategy, index) => (
                      strategy.hasOwnProperty('alsoread') ? (
                        <div key={index} className=''>
                          <p className='mb-[2rem] leading-7 text-black'>
                            <span className='font-poppins font-sans text-[16px] font-semibold'>ALSO READ-</span>
                            <Link to='' className='text-blue-600 font-semibold font-poppins font-sans text-[16px] no-underline '>{strategy.alsoread}</Link>
                          </p>
                        </div>
                      ) : (
                        <div key={index} className=''>
                          <div className="font-poppins font-sans mb-[8px] bg-blue-900 text-white text-[15px]  md:text-[1.5vw] p-[6px] md:p-[6px]" >{strategy.title}</div>
                          <p className='mb-[2rem] leading-7 text-black'>
                            <MathText
                              className="text-black leading-4 font-poppins font-sans  question-text  text-[15px]  "
                              text={strategy.description}
                            //  textTag="h6"
                            />
                          </p>
                        </div>
                      )

                    ))
                  }
                </div >


                {/* <h2 className='text-black'>Resource Links</h2>
                  {preparationData.preparationStrategies.map((strategy, index) => (
                    <div key={index}>
                      <h4 className="bg-blue-900 text-white text-[1.5vw] p-[.25vw]" >{strategy.title}</h4>
                      <p></p>
                      <MathText
                        className="question-text mb-2"
                        text={strategy.description}
                      //  textTag="h6"
                      />
                    </div>
                  ))}
                </div>
                <h2>Resource Links</h2>
                <ul>
                  {preparationData.resourceLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
                    </li>
                  ))}
                </ul> */}
              </div >

              {/* <p className='  text-black'>The preparation strategy for CUET Biology is no different from other entrance exam preparation. Biology being a vast subject,    candidates must strategically plan the preparation for the exam accordingly. Here we bring some of the salient preparation strategies for Biology.</p>
              <p><b>Understand the curriculum and test structure: </b></p>
              <p className='  text-black'>To gain an understanding of the types of questions and the significant areas that are given more weight, go through the analysis and question papers from past years. Give more attention to the areas that are more important.</p>
              <p><b>Determine your strengths and weaknesses: </b></p>
              <p className='  text-black'>At this point, you should have finished the syllabus and determined your strong and weak points. You will then need to choose which chapters to completely prepare and which to skip. Ideally, you should highlight your strong points and ignore any insecurities in those areas. However, consider the weights or relevance of those regions before choosing which ones to exclude. If there's a lot of weight on your weak regions, you should work on improving them. If the weight is lower, feel free to ignore them and focus on getting ready for the stronger places.</p>
              <p><b>Practice by taking frequent mock exams and completing previous year's question papers:</b></p>
              <p className="text-black">Following the completion of the syllabus, the next phase in <b className=" text-blue-800">CUET</b> Biology preparation is to put the material into practice by solving past year's question papers. Practice alone is insufficient. Obtain feedback from mentors or teachers on your test results after you take them to learn where you can improve and how to be more precise and efficient with your time.</p>
              <p><b>Check the Official Syllabus</b></p>
              <p className="text-black">Examining the <b className=" text-blue-800">official CUET 2024 syllabus</b> made available by NTA is one of the most crucial things to do before beginning biology study. Prior to the exam, students are required to review all of the crucial CUET 2024 Biology topics, broken down by unit. Before showing up for the final test, students must have completed every subject listed in the official syllabus. Aspiring biologists need to be aware of their strong and weak points so they can adjust their preparation. In order to finish the curriculum, they must allot enough time for the weaker subjects. </p>
              <p><b>Diagnose the CUET Exam Pattern.</b></p>
              <p className="text-black">The students must go through the examination pattern to understand the basic structure of entrance test. It facilitates a tentative idea about the nature and type of questions. The examination pattern also highlights about the number of questions and marking schemes of the entrance test. If a student understands  <b className=" text-blue-800">CUET 2024</b> exam pattern, the students will also understand the importance of time management and will get to know how much time to invest in each question. </p>
              <p><b>Preparation Strategy</b></p>
              <p className="text-black">To grasp the fundamental format of the entrance exam, students must go through the examination pattern. It helps to establish a rough notion of the kind and format of queries. The design of the exam also makes clear how many questions there are and how the entrance exam is graded. When students grasp the format of the CUET 2024 exam, they will also learn the value of time management and how much time to devote to each question. </p>
              <p><b>The Secret Is Practice.</b></p>
              <p className="text-black">Students need to practice a lot and never get too confident in their knowledge of the material or their thorough understanding of it. The adage "practice makes perfect" is appropriately used when taking an admission exam. In order to get mastery over all the subjects, pupils need to practice with an increasing number of sample papers. Students' speed in time management and attempted answer correctness are also improved by practice. </p>
              <p><b>Revision, Revision, and Revision</b></p>
              <p className="text-black">Students should dedicate their final two to three weeks exclusively to revision, as it is the most crucial activity. For entrance exams, the students prepare all year long. They have to design their plan so that they revisit the ideas and subjects they have already learned frequently. Students need to make sure they are not learning any new material when they are revising <b className=" text-blue-800">CUET 2024</b> Biology. While studying those subjects, the students are required to consult any significant notes they may have taken. A last review of the key points and subjects that are highlighted is always beneficial for doing well on the entrance exam. </p> */}
            </div >
            <ShareButtons />

          </div >



          <div className='w-[17vw]   float-right hidden md:block'>
            <Sidebar />
            <div className='mt-4'>
            </div >
          </div >


          <div className='w-[90vw] float-left flex-col justify-center items-center  md:hidden'>
            <Sidebar />
            <div className='mt-4'>

            </div>
          </div>

        </div>
      </div>
    </div >
  );
}
