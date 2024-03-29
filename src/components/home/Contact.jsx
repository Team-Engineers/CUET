import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Lottie from "react-lottie";
import SupportAnimationData from "../../assets/images/contact_card.json";

const ContactForm = () => {
  const [isPopupOpen, setisPopupOpen] = useState(false);
  const handleNeedHelpClick = () => {
    setisPopupOpen(!isPopupOpen);
  };

  const ContactInputStyles =
    "my-1 md:w-[90%] w-[80%] mx-auto min-h-5 border-2 border-solid border-white rounded-full bg-transparent placeholder:text-white placeholder:opacity-100 placeholder:text-md  p-3  text-white text-md focus:ring-0 focus:outline-none";
  return (
    <div className=" md:py-10 max-md:pb-4 w-full md:w-full h-full flex flex-col items-center max-md:justify-evenly">
      <div className="flex flex-col md:items-start items-center justify-evenly  w-[80%] md:w-[80%] ">
        <h1 className="font-bold gradient-text2 max-md:hidden text-13xl text-left my-5 md:ml-3">Request a Call back</h1>
        <input className={ContactInputStyles} placeholder="Your Name" type="text" />
        <input className={ContactInputStyles} placeholder="Email" type="email" />
        <input className={ContactInputStyles} placeholder="Phone Number" type="text" />
        <textarea
        className={`my-1 md:w-[90%] w-[80%] mx-auto border-2 border-solid border-white rounded-2xl bg-transparent placeholder:text-white placeholder:opacity-100 placeholder:text-md p-3 text-white text-lg focus:ring-0 focus:outline-none h-40 resize-none`}
        placeholder="Reason"
          type="text"
        />

      </div>
      <div className="my-3 md:w-[80%] flex justify-between relative">
      <button
          onClick={handleNeedHelpClick}
          className="btn bg-[#EA4335] hover:bg-[#EA4335] text-white text-lg min-h-0 h-10 min-w-30 2xl:min-w-54 rounded-full border-none mx-2 "
        >
          Need Help
        </button>
        <button className="btn bg-[#EA4335] hover:bg-[#EA4335] text-white text-lg min-h-0 h-10 min-w-30 2xl:min-w-54 rounded-full border-none mx-2">
          Submit
        </button>
        
        {isPopupOpen && (
          <div className="absolute  md:right-[-50px] md:top-[-100px] top-[-120px] flex bg-opacity-50 z-50">
            <div className="bg-[#FFFBEE]  rounded-xl">
              <div onClick={handleNeedHelpClick} className="absolute m-2 cursor-pointer  text-[18px] right-0">
                <RxCross1 />
              </div>
              <Needhelppopup />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Needhelppopup = () => {
  return (
    <div className=" ">
      <div className="mt-8">
        <h1 className="py-1 px-4 text-xs  md:text-[15px] ">Need Guidance or Help in Filling Form?</h1>
        <h1 className="md:mx-8 mx-3 pb-2">
          <p className="md:text-sm text-xs flex justify-between ">
            <span>Sachin Rana</span>{" "}
            <a className="no-underline text-black" href="tel:+919560443520">
              <IoMdCall /> +91 9560443520
            </a>{" "}
          </p>
          <p className=" flex md:text-sm text-xs justify-between   ">
            <span>Virendra Pratap</span>{" "}
            <a className="no-underline text-black"  href="tel:+918279662680">
              <IoMdCall /> +91 8279662680
            </a>{" "}
          </p>
        </h1>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-10  md:mx-20 md:pt-15 bg-white pb-32">
      <div
        className="bg-gradient-to-br overflow-hidden from-[#e78f8fd7] to-[#a691f5de]  rounded-2xl flex flex-col-reverse items-center justify-evenly md:flex-row md:justify-evenly max-w-[1000px] mx-auto max-sm:mx-2 max-md:mx-8  "
      >
        <div className="h-full  w-[350px] sm:w-[500px] flex justify-center">
          <ContactForm />
        </div>
        <div className="flex justify-center w-[80%] sm:w-[400px] items-center ">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: SupportAnimationData,
            }}
          />

        </div>
        <h1 className="font-bold md:hidden gradient-text2 text-[25px] text-left my-5 ">Request a Call back</h1>

      </div>
    </div>
  );
};

export default Contact;
