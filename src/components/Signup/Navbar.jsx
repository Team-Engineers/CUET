import React from "react";
import logo from "../../assets/logo_final.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const naviagte=useNavigate()
  return (
    <div className="md:flex md:items-center md:justify-between md:z-20 md:px-5 md:py-4 hidden">
      <div className="flex gap-2 items-center">
        <img
          className="h-[40.5px] w-[30px]"
          loading="eager"
          alt=""
          src={logo}
        />
        <b className="text-indigo">CUET-TestKnock</b>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-semibold">
          Already have an account?{" "}
        </p>
        <button
          className="border-2 border-indigo px-2 py-1 rounded-full text-indigo "
          onClick={()=>naviagte("/login")}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
