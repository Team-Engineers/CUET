import React from "react";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D0756] text-white w-full flex justify-center items-center  relative z-50 ">
      <div className=" pt-4 w-full max-md:mx-5 ">
        <div className="flex my-6 justify-center items-center">
        <div className=" grid md:grid-cols-2 md:mx-10 grid-cols-1">
          <div className="w-full md:flex md:flex-col justify-center   ">
            <div className="flex justify-start mb-10 items-center">
              <Link to="/" className="no-underline">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px]">
                    <img src={"/logo.png"} alt="Logo" className="max-h-[60px] max-w-[60px] pr-4 pb-2" />
                  </div>
                  <div className="text-white font-sans font-bold text-[100%] ml-[-8%]">
                    <h2>
                      <span>CUET-TESTKNOCK</span>
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-left md:w-[35vw] font-normal">
              At TestKnock, we are dedicated to more than just academic success. Our unwavering commitment extends to providing you with the essential
              tools and expert guidance. So join us on this transformative expedition and discover where educational excellence is not just an
              aspiration but an inspiring and achievable pursuit.
            </p>
          </div>
          <div className="w-full  relative md:top-[20px] grid grid-cols-2 md:grid-cols-3  text-sm md:text-md">
            <div className="min-w-[10em] mx-auto my-5 md:my-0 md:ml-0">
              <p className="cursor-pointer font-bold mb-10  md:text-center">Company</p>
              <Link to="/" className="no-underline text-white">
                <p className="font-normal my-3 md:text-center">Home</p>
              </Link>
              <Link to="/about" className="no-underline text-white">
                <p className="font-normal my-3 md:text-center">About</p>
              </Link>
              <Link to="/syllabus" className="no-underline text-white">
                <p className="font-normal my-3 md:text-center">Syllabus</p>
              </Link>
              <Link to="/courses" className="no-underline text-white">
                <p className="font-normal my-3 md:text-center">Courses</p>
              </Link>
            </div>
            <div className="min-w-[10em] mx-auto my-5 md:my-0 md:ml-0">
              <p className="md:text-center font-bold mb-10">Whom we serve</p>
              <p className="md:text-center font-normal my-3">School Students</p>
              <p className="md:text-center font-normal my-3">College Students</p>
              <p className="md:text-center font-normal my-3">Educational Institutions</p>
              <p className="md:text-center font-normal my-3">Private Colleges</p>
            </div>
            <div className="min-w-[10em] mx-auto my-5 md:my-0 md:ml-0">
              <p className="md:text-center  font-bold mb-10">Contact US</p>
              <p className="md:text-center font-normal flex items-center my-3">
                <span className="flex justify-center items-center mr-1">
                  <IoMdMail className="" size={"1.5em"} />
                </span>
                <span>info@testknock.com</span>
              </p>
              <p className="md:text-center font-normal flex items-center my-3">
                <span className="flex justify-center items-center mr-1">
                  <IoMdCall className="" size={"1.5em"} />
                </span>
                <span>9953617456</span>
              </p>
              <p className="flex justify-between max-w-[15em] my-3 ">
                <span className="h-full">
                  <IoMdPin className="mr-1 mb-auto" size={"1.5em"} />
                </span>
                <span className="font-normal ">Office No. - 42, Durga Vihar, near Amrapali Saphhire, Sec-45, Noida-201301</span>
              </p>
            </div>
            <div className="min-w-[10em]  mx-auto my-5 md:hidden">
              <p className="font-bold mb-10 md:text-center">Support</p>
              <p className="my-3 md:text-center">Terms & Conditions</p>
              <p className="my-3 md:text-center">Privacy</p>
            </div>
          </div>
        </div>
        </div>
      

        <div className="hidden md:flex mx-auto flex-col my-3 items-start justify-start py-0 px-px box-border gap-[15px] max-w-full ">
          <hr className="w-[96%] mx-auto  text-white" />
          <div className="w-[90%] mx-auto flex flex-row items-start justify-start py-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full ">
              <div className="flex flex-row items-start justify-start max-w-full mq750:flex-wrap mq450:gap-[76px]">
                <div className="flex flex-row items-start justify-start gap-[6px] mr-5">
                  &copy;
                  <b className="relative z-[1]">2024 TestKnock</b>
                </div>
                <b className="relative z-[1]">All rights reserved</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[30px] text-deepskyblue">
                <b className="relative [text-decoration:underline] z-[1]">{`Terms & Condition`}</b>
                <b className="relative [text-decoration:underline] z-[1]">|</b>
                <b className="relative [text-decoration:underline] z-[1]">Privacy</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
