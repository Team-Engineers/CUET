import React from "react";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D0756] text-white w-full flex justify-center items-center mt-56 relative z-50 ">
      <div className="xl:max-w-[95vw] 2xl:max-w-[80vw] w-full">
        <div className="flex flex-col justify-betwen md:flex-row md:items-center md:justify-around mx-3">
          <div className="w-full md:max-w-[40vw] md:mr-20">
            <div className=" flex justify-start ">
              <Link to="/" className="no-underline">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px] ">
                    <img src={"/logo.png"} alt="Logo" className="max-h-[60px] max-w-[60px] px-4 pb-2" />
                  </div>
                  <div className="text-white font-sans font-bold text-[100%] ml-[-8%]">
                    <h2>
                      <span>CUET-TESTKNOCK</span>
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-left font-normal">
              At TestKnock, we are dedicated to more than just academic success. Our unwavering commitment extends to providing you with the essential
              tools and expert guidance. So join us on this transformative expedition and discover where educational excellence is not just an
              aspiration but an inspiring and achievable pursuit.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 md:flex md:justify-around text-sm md:text-md">
            <div className="min-w-[10em] mx-auto my-5">
              <p className="cursor-pointer font-bold mb-10">Company</p>
              <Link to="/" className="no-underline text-white">
                <p className="font-normal">Home</p>
              </Link>
              <Link to="/about" className="no-underline text-white">
                <p className="font-normal">About</p>
              </Link>
              <Link to="/syllabus" className="no-underline text-white">
                <p className="font-normal">Syllabus</p>
              </Link>
              <Link to="/courses" className="no-underline text-white">
                <p className="font-normal">Courses</p>
              </Link>
            </div>
            <div className="min-w-[10em] mx-auto my-5">
              <p className="font-bold mb-10">Whom we serve</p>
              <p className="font-normal">School Students</p>
              <p className="font-normal">College Students</p>
              <p className="font-normal">Educational Institutions</p>
              <p className="font-normal">Private Colleges</p>
            </div>
            <div className="min-w-[10em] mx-auto my-5 md:ml-10">
              <p className="font-bold mb-10">Contact US</p>
              <p className="font-normal flex items-center">
                <IoMdMail className="mr-1" /> info@testknock.com
              </p>
              <p className="font-normal flex items-center">
                <IoMdCall className="mr-1" />
                9953617456
              </p>
              <p className="font-normal max-w-[10em] ">
                <IoMdPin className="mr-1" /> Office No. - 42, Durga Vihar, near Amrapali Saphhire, Sec-45, Noida-201301
              </p>
            </div>
            <div className="min-w-[10em]  mx-auto my-5 md:hidden">
              <p className="font-bold mb-10">Support</p>
              <p>Terms & Conditions</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex mx-auto my-[50px] flex-col items-start justify-start py-0 px-px box-border gap-[15px] max-w-full ">
          <div className="self-stretch mx-[40px]  relative box-border z-[1] border-t-[1px] border-solid border-white" />
          <div className="w-[1050px] mx-auto flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[76px] max-w-full mq750:flex-wrap mq450:gap-[76px]">
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  &copy;
                  <b className="relative z-[1]">2024 TestKnock</b>
                </div>
                <b className="relative z-[1]">All rights reserved</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[30px] text-deepskyblue">
                <b className="relative [text-decoration:underline] z-[1]">{`Terms & Condition`}</b>
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
