import Lottie from "lottie-react";
import React from "react";
import gif from "../assets/Animation - 1707321568356.json";
import Navbar from "../components/Signup/Navbar";
import SignupForm from "../components/Signup/SignupForm";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen overflow-hidden lg:flex lg:items-end lg:justify-around items-center">
        <div className="lg:hidden relative w-full">
          <img className="w-full lg:h-[400px] max-md:h-[40vh] max-lg:h-[45vh]" src={require("../assets/Vector2.png")} alt="" />
          <div className="absolute mb-10 bottom-0 left-0 w-full flex justify-center">
            <Lottie className="w-[80vw] max-md:w-[80vw] max-lg:w-[60vw]" animationData={gif} loop={true} />
          </div>
        </div>
        <div className="flex relative lg:h-screen  justify-center items-center">
          <SignupForm />
        </div>
        <div className="max-lg:hidden">
          <img
            className="lg:absolute lg:z-[-1] lg:right-0 lg:bottom-0 lg:w-[50vw]  lg:h-[600px]"
            alt=""
            src="/bubbles/signup-bubble.png"
          />
          <div>
            <Lottie
              animationData={gif}
              loop={true}
              className="w-[40vw] relative top-[-15vh] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;