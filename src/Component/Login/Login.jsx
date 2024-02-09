import React, { useState } from "react";
import Lottie from "lottie-react";
import animatedGif from "../../assets/Animation - 1707298499168.json";
import background from "../../assets/Vector.png";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import ResponsiveNav from "./ResponsiveNav";

const Login = () => {
  return (
    <>
    <ResponsiveNav/>
        <Navbar />
      <div className="flex gap-[10%] tablets:justify-center">
        <div
          className="bg-bgGradientCustom w-[35rem] h-[80vh] flex justify-center items-center Laptops:w-[35rem] Laptops:h-[80vh] tablets:hidden z-0"
          style={{ "border-radius": "0% 100% 100% 99% / 0% 97% 100% 93%  " }}
        >
          <div className=" z-10 w-[70%]">
            <Lottie animationData={animatedGif} loop={true} />
          </div>
        </div>
          <LoginForm />
      </div>
    </>
  );
};

export default Login;
