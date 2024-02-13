import React from "react";
import Navbar from "../components/Signup/Navbar";
import SignupForm from "../components/Signup/SignupForm";
import gif from "../assets/Animation - 1707321568356.json";
import Lottie from "lottie-react";
import ResponsiveNav from "../components/Signup/ResponsiveNav";

const Signup = () => {
  return (
    <div className="relative h-[100vh]">
      <Navbar />
        <ResponsiveNav />
      <div className="flex justify-between mt-0">
        <div className="flex w-[45%] justify-center items-center h-[88vh] tablets:justify-center tablets:w-full tablets:h-[64vh]">
          <SignupForm />
        </div>
        <div className="flex justify-end  h-[88vh] items-end">
          <div
            className="w-[700px] h-[400px] top-0 flex justify-center
            Laptops:w-[500px] Laptops:h-[350px] mLaptops:w-[400px] tablets:hidden"
            style={{ "border-radius": "31% 100% 0% 61% / 20% 64% 0% 68%" }}
          >
            <img className="absolute z-[-1] right-0 bottom-0" src="/bubbles/signup-bubble.png" />
            <Lottie animationData={gif} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;