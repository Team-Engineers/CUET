import React from "react";
import logo from "../../assets/logo_final.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-[7px] w-[100%] px-3 fixed z-10 tablets:hidden">
      <div className="flex flex-row items-center">
        <img
          className="h-[40.5px] m-2 w-[30px] relative object-cover"
          loading="eager"
          alt=""
          src={logo}
        />
        <b className="relative text-indigo">CUET-TestKnock</b>
      </div>
      <div className="flex items-center">
        <p className="m-[20px] font-bold">Don't have an account? </p>
        <Link
          className="bg-[#FF7468] text-white  text-center px-3 py-2 rounded-full cursor-pointer text-[17px]"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
