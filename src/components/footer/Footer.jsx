import React from "react";
import Logo from "../../assets/images/logo_final.png";

import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-[#0D0756] text-white overflow-hidden w-full ">
      <div className="mx-auto max-w-screen-2xl ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid justify-center ">
            <div className=" flex justify-center gap-6 lg:justify-start text-[#063970] ">
              <a to="/">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px] ">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="max-h-[60px] max-w-[60px] px-4 pb-2"
                    />
                  </div>
                  <div className="text-white font-sans font-bold text-[120%] ml-[-8%]">
                    <h2>
                      <span>CUET</span>
                      <span>-Tes</span>
                      <span>tKn</span>
                      <span>ock</span>
                    </h2>
                  </div>
                </div>
              </a>
            </div>
            <p className="mt-6 lg:text-justify md:text-[100%] text-[80%] hover:text-white text-center leading-relaxed text-white lg:max-w-xs ml-[20px] mr-[20px] ">
              At TestKnock, we are dedicated to more than just academic success.
              Our unwavering commitment extends to providing you with the
              essential tools and expert guidance. So join us on this
              transformative expedition and discover where educational
              excellence is not just an aspiration but an inspiring and
              achievable pursuit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
            <div className="text-center ">
             
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%] list-none">
              <p className="md:text-[120%] mb-[40px] text-center text-[90%] text-white hover:text-white ">
                Company
              </p>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    to="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white"
                    to="/about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white"
                    to="/syllabus"
                  >
                    Syllabus
                  </a>
                </li>

                
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    to="/courses"
                  >
                    Courses
                  </a>
                </li>

              </ul>
            </div>
            <div className="text-center ">
             
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%] list-none">
              <p className="md:text-[120%] mb-[40px] text-[90%] hover:text-white  text-white whitespace-nowrap">
                Whom We Serve
              </p>
                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    School Students
                  </p>
                </li>

                <li>
                  <p className="text-white transition hover:text-white whitespace-nowrap">
                    College Students
                  </p>
                </li>

                <li>
                  <p className="text-white  transition hover:text-white whitespace-nowrap">
                    Educational Institutions
                  </p>
                </li>

                <li>
                  <p className="text-white transition  hover:text-white whitespace-nowrap">
                    Private Schools
                  </p>
                </li>
                <li>
                  <p className="text-white transition  hover:text-white whitespace-nowrap">
                    Private Colleges
                  </p>
                </li>
              </ul>
            </div>
            <div className="text-center  max-sm:hidden sm:text-left">
              
              <ul className="mt-8 space-y-4 text-[80%] md:text-[100%]">
              <p className="md:text-[120%] text-center items-center align-middle mb-[40px] text-[90%] hover:text-white font-medium text-white">
                Contact Us
              </p>
                <li className="flex items-center hover:text-white text-white  gap-1.5 justify-start ">
                  <a
                    href="mailto:info@testknock.com"
                    className="gap-1.5 flex no-underline text-white "
                  >
                    <IoMdMail className='relative top-[5px]'  />
                    <h>info@testknock.com</h>
                  </a>
                </li>

                <li className="flex items-center hover:text-white text-white  gap-1.5 justify-start ">
                  <a href="tel:9810033495" className="gap-1.5 flex no-underline text-white ">
                    <IoMdCall className='relative top-[5px]' />
                    <h>9953617456</h>
                  </a>
                </li>

                <li className="flex items-start hover:text-white text-white justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdPin />
                  <h className="-mt-0.5 flex-1 not-italic">
                   Office No. - 42, Durga Vihar, <br/>
                  Near Amrapali Saphhire, <br/>
                   Sec-45, Noida, 201301
                  </h>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:hidden block text-center mt-[6vw] ">
          <h className="text-[110%] font-medium text-white">Contact Us</h>
          <ul className="mt-8  space-y-4 text-[80%]">
            <li className="flex items-center text-white justify-center gap-1.5 ">
              <a href="mailto:info@testknock.com">
                <h className="flex items-center text-white justify-center gap-1.5 ">
                  <IoMdMail />
                  <span className="flex-1 hover:text-white text-white">
                    info@testknock.com
                  </span>
                </h>
              </a>
            </li>
            <li className="flex items-center text-white justify-center gap-1.5 ">
              <a href="tel:9953617456">
                <h className="flex items-center text-white justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoMdCall />

                  <span className="flex-1 hover:text-white text-white">
                    9953617456
                  </span>
                </h>
              </a>
            </li>
            <li className="flex mx-auto w-[300px] relative text-ellipsis text-white justify-center items-center">
              <h className="flex  text-white justify-center gap-1.5 ">
                <IoMdPin className="relative top-[3px] left-[16px]" />
                <span className="flex-1 hover:text-white text-white">
                  {" "}
                  Office No. - 42, Durga Vihar, Near Amrapali Saphhire, Sec-45,
                  Noida, 201301
                </span>
              </h>
            </li>
          </ul>
        </div>
        <div className="mx-auto my-[50px]  flex flex-col items-start justify-start py-0 px-px box-border gap-[15px] max-w-full ">
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
            <b className="relative [text-decoration:underline] z-[1]">
              Privacy
            </b>
          </div>
        </div>
      </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
