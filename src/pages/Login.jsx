import React, { useState } from "react";
import Lottie from "lottie-react";
import animatedGif from "../assets/Animation - 1707298499168.json";
import background from "../assets/Vector.png";
import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Login/Navbar";
import ResponsiveNav from "../components/Login/ResponsiveNav";

const Login = () => {
  return (
    <>
    <ResponsiveNav/>
        <Navbar />
      <div className="flex h-[100vh] w-full justify-between tablets:justify-center">
        <div
          className="relative min-w-[50vw] w-[35rem] h-[80vh] flex justify-center items-center Laptops:w-[35rem] Laptops:h-[80vh] tablets:hidden z-0"
          style={{ "border-radius": "0% 100% 100% 99% / 0% 97% 100% 93%  " }}
        >
          <img 
          className="absolute z-[-1] left-0 top-0 h-full w-full"
          src="/bubbles/login-bubble.png" />
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
