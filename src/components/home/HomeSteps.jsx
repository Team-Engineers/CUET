import StepGuide from "./StepGuide";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Step1AnimatiionData from "../../assets/animation_step1.json";
import Step2AnimatiionData from "../../assets/animation_step2.json";
import Step3AnimatiionData from "../../assets/animation_step3.json";

const HomeSteps = () => {
  const [currStep, setCurrStep] = useState(1);

  return (
    <div className="w-full  mt-56 ">
      <div className="flex flex-col-reverse items-center mx-3 lg:flex-row lg:justify-around">
        <div className="w-96 h-96 md:w-[600px] md:h-[600px] object-cover ">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: currStep == 1 ? Step1AnimatiionData : currStep == 2 ? Step2AnimatiionData : Step3AnimatiionData ,
            }}
          />
        </div>
        <div className="min-h-[60vh] h-full flex flex-col justify-between md:max-w-[50%]">
          <div className="flex flex-col justify-start my-6">
            <h1 className="text-left text-blueviolet-100  text-13xl font-bold m-0">May We Help You</h1>
              <h3 className="text-left font-bold text-7xl mt-2 text-[#000000CC]">3 Simple steps for Assured Success at CUET</h3>
          </div>
          <div className="flex-1 flex flex-col justify-evenly ">
            <ul className="timeline timeline-compact timeline-snap-icon  timeline-vertical flex-none pl-0">
              <li
                className="group cursor-pointer"
                onClick={() => {
                  setCurrStep(1);
                }}
              >
                <div className="timeline-middle">
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-3xl font-bold group-hover:bg-blueviolet-100 group-hover:text-white  ${
                      currStep == 1 ? "bg-blueviolet-100 text-white" : "text-gray-200 bg-gray-400"
                    }  `}
                  >
                    1
                  </div>
                </div>
                <div className="timeline-end">
                  <StepGuide
                    selected={currStep == 1}
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
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-3xl font-bold   group-hover:bg-blueviolet-100 group-hover:text-white ${
                      currStep == 2 ? "bg-blueviolet-100 text-white" : "text-gray-200 bg-gray-400"
                    }`}
                  >
                    2
                  </div>
                </div>
                <div className="timeline-end">
                  <StepGuide
                    selected={currStep == 2}
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
                    className={`w-10 h-10 rounded-full flex justify-center items-center text-3xl font-bold   group-hover:bg-blueviolet-100 group-hover:text-white ${
                      currStep == 3 ? "bg-blueviolet-100 text-white" : "text-gray-200 bg-gray-400"
                    }`}
                  >
                    3
                  </div>
                </div>
                <div className="timeline-end">
                  <StepGuide
                    selected={currStep == 3}
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
    </div>
  );
};

export default HomeSteps;
