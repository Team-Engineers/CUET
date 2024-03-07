import React from "react";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0D0756] text-white w-full flex justify-center items-center relative z-50" style={{ backgroundImage: 'linear-gradient(to right, #452760, #3d315c, #111f58, #231f7a)' }}>
      <div className=" pt-4 w-full max-md:mx-5 ">
        <div className="flex my-6 justify-center items-center">
          <div className=" grid md:grid-cols-2 md:mx-10 grid-cols-1">
            <div className="w-full md:flex d-flex  md:flex-col justify-center ml-[34px]  ">
              <div className="flex justify-start   items-center">
                <Link to="/" className="no-underline d-flex justify-content-center mt-4 align-items-center flex-column">
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
                  <p className="font-normal my-3 md:text-center hover:text-red-500 hover:cursor-pointer">Home</p>
                </Link>
                <Link to="/about" className="no-underline text-white">
                  <p className="font-normal my-3 md:text-center hover:text-red-500 hover:cursor-pointer">About</p>
                </Link>
                <Link to="/syllabus" className="no-underline text-white">
                  <p className="font-normal my-3 md:text-center hover:text-red-500 hover:cursor-pointer">Syllabus</p>
                </Link>
                <Link to="/courses" className="no-underline text-white">
                  <p className="font-normal my-3 md:text-center hover:text-red-500 hover:cursor-pointer">Courses</p>
                </Link>
              </div>
              <div className="min-w-[10em] mx-auto my-5 md:my-0 md:ml-0">
                <p className="md:text-center font-bold mb-10">Whom we serve</p>
                <p className="md:text-center font-normal my-3">School Students</p>
                <p className="md:text-center font-normal my-3">College Students</p>
                <p className="md:text-center font-normal my-3">Educational Institutions</p>
                <p className="md:text-center font-normal my-3">Private Colleges</p>
              </div>
              <div className="min-w-[10em] mx-auto my-5 md:my-0 md:ml-[29px]">
                <p className="ml-4 font-bold mb-10">Contact US</p>
                <a href="mailto:info@testknock.com" className="hover:opacity-80">
                  <p className="md:text-center max-sm:text-[12px] font-normal flex items-center my-3 text-white hover:text-red-500 hover:cursor-pointer [text-decoration:None]">
                    <span className="flex justify-center items-center mr-2">
                      <IoMdMail className="text-[1.1em] md:text-[1.5em]" />
                    </span>
                    info@testknock.com
                  </p>
                </a>
                <a href="tel:9953617456" className="hover:opacity-80">
                  <p className="md:text-center max-sm:text-[12px] font-normal flex items-center my-3 text-white text-white hover:text-red-500 hover:cursor-pointer [text-decoration:None]">
                    <span className="flex justify-center items-center mr-2">
                      <IoMdCall className="text-[1.1em] md:text-[1.5em]" />
                    </span>
                    9953617456
                  </p>
                </a>
                <a href="https://maps.google.com/?q=Office+No.+42,+Durga+Vihar,+near+Amrapali+Sapphire,+Sec-45,+Noida-201301" className="hover:opacity-80">
                  <p className="flex max-sm:text-[12px] justify-between max-w-[15em] my-3 text-white text-white hover:text-red-500 hover:cursor-pointer [text-decoration:None]">
                    <span className="h-full">
                      <IoMdPin className="text-[1.1em] md:text-[1.5em]" />
                    </span>
                    <span className="ml-2">Office No. - 42, Durga Vihar, near Amrapali Saphhire, Sec-45, Noida-201301</span>
                  </p>
                </a>
              </div>
              <div className="min-w-[10em]   mx-auto my-5 md:hidden">
                <p className="font-bold mb-10 md:text-center">Support</p>
                <p className="my-3 md:text-center max-sm:text-[12px]">Terms & Conditions</p>
                <p className="my-3 md:text-center max-sm:text-[12px]">Privacy</p>
              </div>
            </div>
          </div>
        </div>


        <div className="hidden md:flex mx-auto flex-col my-3 items-start justify-start py-0 px-px box-border gap-[15px] max-w-full ">
          <hr className="w-[100%] mx-auto  text-white" />
          <div className="w-[90%] mx-auto flex flex-row items-start justify-start py-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full ">
              <div className="flex flex-row items-start justify-start max-w-full mq750:flex-wrap mq450:gap-[76px]">
                <div className="flex flex-row items-start justify-start  mr-4">
                  &copy;
                  <b className="mr-4 mb-[-12px] ml-2 relative z-[1]">2024 TestKnock</b>
                </div>
                <b className="mr-4 mb-[-12px] relative z-[1]">All rights reserved</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[30px] text-white">
                <b className="relative z-[1] hover:text-red-500 hover:cursor-pointer">{`Terms & Condition`}</b>
                <b className="relative z-[1]">|</b>
                <b className="relative z-[1] hover:text-red-500 hover:cursor-pointer">Privacy</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
