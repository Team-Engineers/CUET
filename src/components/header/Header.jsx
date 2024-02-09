import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom/dist";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="self-stretch mx-8 ">
      <header className="max-w-[1280px] mx-auto  pt-4 h-16 flex flex-row items-start justify-between gap-[20px]  text-left text-base text-mediumblue font-inter">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <NavLink to={"/"} className="no-underline gap-2 items-center flex">
            <img
              className="h-[40.5px] w-[30px] relative object-cover"
              loading="eager"
              alt=""
              src={require("../../assets/images/logo_final.png")}
            />
            <b className="relative text-blueviolet-100">CUET-TESTKNOCK</b>
          </NavLink>
        </div>
        <div className="self-stretch w-[618px] flex flex-row items-start justify-start gap-[40px] max-w-full mq750:gap-[40px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0.5 pl-0 gap-[20px] mq1050:hidden">
              <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100">
                <NavLink
                  to={"/"}
                  className={`no-underline text-blueviolet-100 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <b className="flex-1 relative cursor-pointer text-blueviolet-100">
                    Home
                  </b>
                </NavLink>
                {location.pathname === "/" && (
                  <div className="w-[23px] h-px relative box-border border-t-[1px] border-solid border-blueviolet-100" />
                )}
              </div>
              <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100">
                <NavLink
                  to={"/courses"}
                  className={`no-underline text-blueviolet-100 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <b className="flex-1 relative cursor-pointer text-blueviolet-100">
                    Courses
                  </b>
                </NavLink>
                {location.pathname === "/courses" && (
                  <div className="w-[23px] h-px relative box-border border-t-[1px] border-solid border-blueviolet-100" />
                )}
              </div>
              <NavLink
                to={"/about"}
                className="no-underline text-blueviolet-100"
              >
                <b className="flex-1 relative whitespace-nowrap cursor-pointer">
                  About Us
                </b>
              </NavLink>
              <NavLink
                to={"/syllabus"}
                className="no-underline text-blueviolet-100"
              >
                <b className="flex-1 relative">Syllabus</b>
              </NavLink>
            </div>
          </div>
          <div className="self-stretch w-44 flex flex-col items-end justify-start gap-[16px] text-sm">
            <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
              <NavLink
                to={"/login"}
                className="cursor-pointer no-underline [border:none] py-0 pr-1.5 pl-0 bg-[transparent] w-[73px] flex flex-row items-center justify-start box-border"
              >
                <div className="h-[30px] flex-1 relative rounded-xl box-border cursor-pointer border-[1px] border-solid border-blueviolet-100" />
                <div className="w-[51px] relative text-base font-medium font-inter text-blueviolet-100 text-left inline-block whitespace-nowrap z-[1] ml-[-57px]">
                  Log In
                </div>
              </NavLink>
              <NavLink
                to={"/signup"}
                className="cursor-pointer no-underline [border:none] py-0 pr-2 pl-0 bg-[transparent] w-[84px] flex flex-row items-center justify-start box-border"
              >
                <div className="h-[30px] flex-1 relative rounded-xl bg-salmon cursor-pointer" />
                <div className="relative text-sm font-medium font-inter text-white text-left whitespace-nowrap z-[1] ml-[-64px]">
                  Sign Up
                </div>
              </NavLink>
            </div>
            <b className="relative whitespace-nowrap">+91 8279662680</b>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
