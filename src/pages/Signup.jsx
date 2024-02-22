import React from "react";
import Navbar from "../components/Signup/Navbar";
import SignupForm from "../components/Signup/SignupForm";
import gif from "../assets/Animation - 1707321568356.json";
import Lottie from "lottie-react";

const Signup = () => {
  return (
    <> 
    <Navbar />
        <div className=" overflow-hidden md:flex md:items-end md:justify-around items-center">
        <div className="md:hidden relative w-full">
          <img className="w-full h-[40vh]" src={require("../assets/Vector2.png")} alt="" />
          <div className="absolute mb-10 bottom-0 left-0 w-full flex justify-center">
            <Lottie className="w-[80vw]" animationData={gif} loop={true} />
          </div>
        </div>
        <div className="flex relative md:h-screen  justify-center items-center">
            <SignupForm />
          </div>
          <div className="max-md:hidden">
            <img
              className="md:absolute md:z-[-1] md:right-0 md:bottom-0 md:w-[50vw] h-[75vh]"
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
// lg:w-[32rem] xl:w-[40rem] 2xl:min-w-[45rem]