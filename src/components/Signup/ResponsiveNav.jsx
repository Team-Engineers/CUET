import React from "react";
import logo from "../../assets/logo_final.png";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import gif from "../../assets/Animation - 1707321568356.json";

const ResponsiveNav = () => {
  const navigate=useNavigate()
  return (
    <div
      className='bg-bgGradientCustom w-full md:hidden'
      style={{ borderRadius: "10% 10% 45% 50% / 0% 0% 42% 44%   " }}
    >
      <div className="flex justify-between px-2 pt-2">
        <div className="flex gap-2 items-center">
          <img
            className="h-[20.5px] w-[25px] sm:h-[40px]"
            loading="eager"
            alt=""
            src={logo}
          />
          <b className="text-indigo text-xs sm:text-sm">CUET-TestKnock</b>
        </div>
        <div className="flex  items-center gap-1 sm:gap-3">
          <p className="font-semibold text-xs sm:text-sm">
            Already have an account?{" "}
          </p>
          <button
            className="border-2 border-indigo px-2 py-1 rounded-full text-indigo text-xs no-underline"
            onClick={()=>navigate('/login')}
          >
            Log In
          </button>
        </div>
      </div>
      <div className="">
        <div className="mx-4">
          <h3 className="text-[27.8px] text-indigo font-bold sm:text-[30px]">Sign Up</h3>
        </div>
        <div className="flex justify-center mt-0">
          <Lottie animationData={gif} loop={true} style={{ width: "30%" }} />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
