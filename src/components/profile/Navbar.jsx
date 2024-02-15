import React from "react";
import logo from '../../assets/logo_final.png'
import { RxPerson } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between px-2 items-center lg:px-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-4 h-6 lg:w-[30px] lg:h-[40px]"/>
        <p className="text-blueviolet-100 font-semibold lg:text-lg">CUET-TestKnock</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-1 py-1 bg-blueviolet-400 border-none text-white rounded-full lg:px-3 lg:text-lg lg:py-2 flex items-center cursor-pointer"><RxPerson />Profile</button>
        <button className="px-1 py-1 text-white rounded-full bg-tomato-100 border-none lg:px-3 lg:text-lg lg:py-2 cursor-pointer">Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
