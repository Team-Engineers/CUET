import React from "react";
import logo from "../../assets/logo_final.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-between md:gap-[7px]  md:fixed w-[100%] z-10 hidden text-[16px]">
      <div className="flex flex-row items-center cursor-pointer" onClick={() => navigate("/")} >
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
          className="bg-[#FF7468] text-white  text-center px-3 py-2 rounded-full cursor-pointer text-[17px] no-underline mr-3"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
