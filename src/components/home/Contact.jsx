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
    "my-1 w-[80%] min-h-5 border-2 border-solid border-white rounded-full bg-transparent placeholder:text-white placeholder:opacity-100 placeholder:text-md  p-3  text-white text-md focus:ring-0 focus:outline-none";
  return (
    <div className="min-h-[70vh] md:my-[10vh] 2xl:min-h-[60vh] w-full md:w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="font-bold max-md:hidden text-13xl text-left my-5 ">Request a Call back</h1>
      <div className="flex flex-col items-center justify-evenly w-[80%] md:w-[80%] min-h-[50vh] 2xl:min-h-[40vh]">
        <input className={ContactInputStyles} placeholder="Your Name" type="text" />
        <input className={ContactInputStyles} placeholder="Email" type="email" />
        <input className={ContactInputStyles} placeholder="Phone Number" type="text" />
        <textarea
          className={`my-1 w-[80%]  border-2 border-solid border-white rounded-2xl bg-transparent placeholder:text-white placeholder:opacity-100 placeholder:text-xl  p-3  text-white text-xl focus:ring-0 focus:outline-none h-40`}
          placeholder="Reason"
          type="text"
        />
      </div>
      <div className="my-3 flex justify-around w-[80%] relative">
        <button className="btn bg-[#EA4335] hover:bg-[#EA4335] text-white text-lg min-h-0 h-10 min-w-30 2xl:min-w-54 rounded-full border-none mx-2">
          Submit
        </button>
        <button
          onClick={handleNeedHelpClick}
          className="btn bg-[#EA4335] hover:bg-[#EA4335] text-white text-lg min-h-0 h-10 min-w-30 2xl:min-w-54 rounded-full border-none mx-2 "
        >
          Need Help
        </button>
        {isPopupOpen && (
          <div onClick={handleNeedHelpClick} className="absolute right-[-50px] flex bg-opacity-50 z-50">
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
    <div className="pt-10  md:pt-15 bg-white pb-32">

      <div
        style={{
          background: "linear-gradient(110.83deg, rgba(0, 124, 236, 0.6) -2.04%, rgba(0, 124, 236, 0) 126.65%)",
        }}
        className="min-w-[80vw] min-h-[70vh] md:min-h-[70vh] 2xl:min-h-[70vh] rounded-2xl flex flex-col-reverse items-center justify-evenly md:flex-row md:justify-evenly max-md:mx-8 mx-[10vw]"
      >
        <div className="h-full w-full 2xl:w-[60%] flex justify-center">
          <ContactForm />
        </div>
        <div className="flex justify-center items-center w-full md:max-w-[60%] md:min-h-[40vh] min-h-[2 0vh]">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: SupportAnimationData,
            }}
          />

        </div>
                <h1 className="font-bold md:hidden text-[25px] text-left my-5 ">Request a Call back</h1>

      </div>
    </div>
  );
};

export default Contact;
