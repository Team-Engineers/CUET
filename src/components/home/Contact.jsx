import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import SupportAnimationData from "../../assets/animation_support.json";
import Lottie from "react-lottie";

const ContactForm = () => {
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const handleNeedHelpClick = () => {
    setisPopupOpen(!isPopupOpen);
  };

  const ContactInputStyles =
    "w-full min-h-10 border-2 border-solid border-white rounded-full bg-transparent placeholder:text-white placeholder:opacity-100 placeholder:text-xl  pl-8  text-white text-xl focus:ring-0 focus:outline-none";
  return (
    <div className="min-h-[70vh] 2xl:min-h-[60vh] w-full md:w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="font-bold text-13xl text-left ">Request a Call back</h1>
      <div className="flex flex-col items-center justify-evenly w-[80%] md:w-[65%] min-h-[50vh] 2xl:min-h-[40vh]">
        <input className={ContactInputStyles} placeholder="Your Name" type="text" />
        <input className={ContactInputStyles} placeholder="Email" type="email" />
        <input className={ContactInputStyles} placeholder="Phone Number" type="text" />
        <input
          className={`w-full min-h-10 border-2 border-solid border-white rounded-2xl bg-transparent placeholder:text-white placeholder:opacity-100 placeholder:text-xl pl-8 text-white text-xl focus:ring-0 focus:outline-none h-40`}
          placeholder="Resaon"
          type="textarea"
        />
      </div>
      <div className="flex justify-around w-full">
        <button className="btn bg-[#EA4335] hover:bg-[#EA4335] text-white text-lg min-h-0 h-10 min-w-40 2xl:min-w-54 rounded-full border-none mx-2">Submit</button>
        <button
          onClick={handleNeedHelpClick}
          className="btn bg-[#EA4335] hover:bg-[#EA4335] text-white text-lg min-h-0 h-10 min-w-40 2xl:min-w-54 rounded-full border-none mx-2 "
        >
          Need Help
        </button>
        {isPopupOpen && (
          <div onClick={handleNeedHelpClick} className="absolute flex bg-opacity-50 z-50">
            <Needhelppopup />
          </div>
        )}
      </div>
    </div>
  );
};

const Needhelppopup = () => {
  return (
    <div className="bg-[#FFFBEE]  rounded-xl ">
      <div className="">
        <h1 className="py-3 px-4 text-[15px] ">Need Guidance or Help in Filling Form?</h1>
        <h1 className="mx-8 pb-4">
          <p className="text-sm flex justify-between ">
            <span>Sachin Rana</span>{" "}
            <span>
              {" "}
              <IoMdCall /> 91+ 9560443520
            </span>{" "}
          </p>
          <p className=" flex text-sm justify-between   ">
            <span>Virendra Pratap</span>{" "}
            <span>
              {" "}
              <IoMdCall /> 91+ 8279662680
            </span>{" "}
          </p>
        </h1>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="">
      <div
        style={{
          background: "linear-gradient(110.83deg, rgba(0, 124, 236, 0.6) -2.04%, rgba(0, 124, 236, 0) 126.65%)",
        }}
        className="min-w-[80vw] min-h-[100vh] md:min-h-[70vh] 2xl:min-h-[70vh] rounded-2xl mb-10 flex flex-col items-center justify-evenly md:flex-row md:justify-evenly mx-8"
      >
        <div className="h-full w-full 2xl:w-[60%] flex justify-center">
          <ContactForm />
        </div>
        <div className="w-full md:max-w-[60%] min-h-[40vh]">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: SupportAnimationData,
            }}
          />
        </div>
      </div>
    </div>
  );

};

export default Contact;
