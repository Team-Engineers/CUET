import React from "react";
import Navbar from "../components/Signup/Navbar";
import SignupForm from "../components/Signup/SignupForm";
import gif from "../assets/Animation - 1707321568356.json";
import Lottie from "lottie-react";
import ResponsiveNav from "../components/Signup/ResponsiveNav";

const Signup = () => {
  return (
    <>
      <div className="md:hidden">
        <ResponsiveNav />
        <SignupForm />
      </div>
      <div className="hidden md:block">
        <Navbar />
        <div className="ml-5 md:flex md:items-end md:justify-around 2xl:h-[90vh] 2xl:items-center">
          <div className="">
            <SignupForm />
          </div>
          <div>
            <img
              className="md:absolute md:z-[-1] md:right-0 md:bottom-0 md:w-[50vw] h-[60vh]"
              alt=""
              src="/bubbles/signup-bubble.png"
            />
            <div className="md:w-[25rem]">
              <Lottie
                animationData={gif}
                loop={true}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
// lg:w-[32rem] xl:w-[40rem] 2xl:min-w-[45rem]