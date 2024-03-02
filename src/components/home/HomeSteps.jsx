import { useState } from "react";
import Lottie from "react-lottie";
import Step1AnimatiionData from "../../assets/animation_step1.json";
import Step2AnimatiionData from "../../assets/images/step_4.json";
import Step3AnimatiionData from "../../assets/animation_step3.json";
import StepGuide from "./StepGuide";

const HomeSteps = () => {
  const [currStep, setCurrStep] = useState(1);
  return (
    <section className="max-w-[1280px] mt-5 mx-auto relative z-10  ">
      <div className="f ">
            </div>
      <div className=" flex md:flex-row flex-col  md:justify-between  md:mx-10 items-center">
      
        <div className=" sm:w-[450px] w-[350px] object-cover ">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: currStep === 1 ? Step1AnimatiionData : currStep === 2 ? Step2AnimatiionData : Step3AnimatiionData,
            }}
          />
        </div>
        <div className="flex flex-col mx-auto sm:w-[750px] w-[350px]  max-md:mx-2 justify-between ">
          <div className=" md:justify-evenly ">
          <h1 className="md:text-left text-center gradient-text  text-13xl font-bold ">May We Help You</h1>

          <h3 className="md:text-left gradient-text2 text-center font-bold text-7xl mt-2 text-[#000000CC]">3 Simple steps for Assured Success at CUET</h3>

            <ul className="timeline timeline-compact timeline-snap-icon md:pl-0  timeline-vertical flex-none ">
              <li
                className="group cursor-pointer"
                onClick={() => {
                  setCurrStep(1);
                }}
              >
                <div className="timeline-middle ">
                  <div
                    className={`w-10 h-10 rounded-full  flex justify-center items-center text-3xl font-bold group-hover:bg-blueviolet-100 group-hover:text-white  ${currStep === 1 ? "bg-blueviolet-100 text-white" : "text-gray-200 bg-gray-400"
                      }  `}
                  >
                    1
                  </div>
                </div>
                <div className="timeline-end relative top-3  ">
                  <StepGuide
                    selected={currStep === 1}
                    step="Step 01"
                    stepHeading="APPEAR FOR MOCK TEST"
                    description1="At TestKnock we strongly believe that students need to take tests regularly to know where they stand in today’s competitive environment."
                  />
                </div>

                <hr className="bg-transparent" style={{ borderRight: "3px dashed rgba(86, 72, 252, 0.65)" }} />
              </li>
              <li
                className="group cursor-pointer"
                onClick={() => {
                  setCurrStep(2);
                }}
              >
                <hr className="bg-transparent" style={{ borderRight: "3px dashed rgba(86, 72, 252, 0.65)" }} />
                <div className="timeline-middle">
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-3xl font-bold   group-hover:bg-blueviolet-100 group-hover:text-white ${currStep === 2 ? "bg-blueviolet-100 text-white" : "text-gray-200 bg-gray-400"
                      }`}
                  >
                    2
                  </div>
                </div>
                <div className="timeline-end relative top-3">
                  <StepGuide
                    selected={currStep === 2}
                    step="Step 01"
                    stepHeading={"PRACTICE QUESTION FROM PREPARATORY MODULES"}
                    description1="The content team at TestKnock has executed thousands interactive Multiple Choice Questions with detailed explanation to help you improve tremendously."
                  />
                </div>
                <hr className="bg-transparent" style={{ borderRight: "3px dashed rgba(86, 72, 252, 0.65)" }} />
              </li>
              <li
                className="group cursor-pointer"
                onClick={() => {
                  setCurrStep(3);
                }}
              >
                <hr className="bg-transparent" style={{ borderRight: "3px dashed rgba(86, 72, 252, 0.65)" }} />
                <div className="timeline-middle">
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-3xl font-bold   group-hover:bg-blueviolet-100 group-hover:text-white ${currStep === 3 ? "bg-blueviolet-100 text-white" : "text-gray-200 bg-gray-400"
                      }`}
                  >
                    3
                  </div>
                </div>
                <div className="timeline-end relative top-3">
                  <StepGuide
                    selected={currStep === 3}
                    step="Step 01"
                    stepHeading="PLAN, REVIEW AND EXECUTE"
                    description1="We strongly recommend that students spend 4-5 hrs every week for extensive practice and observe considerable growth over a period of time. "
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
