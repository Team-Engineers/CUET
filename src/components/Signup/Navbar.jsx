import React from "react";
import logo from "../../assets/logo_final.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between z-20 px-5 py-4 tablets:hidden">
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
        <Link
          className="border-2 border-indigo px-2 py-1 rounded-full text-indigo "
          to="/login"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
