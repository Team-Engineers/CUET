import React from "react";
import logo from "../../assets/logo_final.png";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import gif from "../../assets/Animation - 1707321568356.json";

const ResponsiveNav = () => {
  return (
    <div
      className="px-5 h-[50vh] sScreens:px-0 sScreens:py-1 sScreens:z-0 sScreens:h-[40vh] w-screen border-2 bg-bgGradientCustom lScreens:hidden  mobiles:h-[30vh] sMobiles:h-[30vh]"
      style={{ borderRadius: "10% 10% 45% 50% / 0% 0% 42% 44%   " }}
    >
      <div className="flex justify-between w-full px-3 py-2">
        <div className="flex gap-2 items-center">
          <img
            className="h-[40.5px] w-[30px] sScreens:h-[20px]"
            loading="eager"
            alt=""
            src={logo}
          />
          <b className="text-indigo sScreens:text-xs">CUET-TestKnock</b>
        </div>
        <div className="flex gap-4 items-center sScreens:gap-1">
          <p className="font-semibold sScreens:text-xs">
            Already have an account?{" "}
          </p>
          <Link
            className="border-2 border-indigo px-2 py-1 rounded-full text-indigo sScreens:text-xs sScreens:px-1"
            to="/login"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className="">
        <div className="mx-4">
          <h3 className="text-2xl text-indigo font-bold">Sign-Up</h3>
        </div>
        <div className="flex justify-center">
          <Lottie animationData={gif} loop={true} style={{ width: "35%" }} />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
