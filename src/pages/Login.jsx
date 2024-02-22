import Lottie from "lottie-react";
import animatedGif from "../assets/Animation - 1707298499168.json";
import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Login/Navbar";
import ResponsiveNav from "../components/Login/ResponsiveNav";

const Login = () => {
  return (
    <div className="">
    <ResponsiveNav/>
        <Navbar />
      <div className="md:flex md:h-[80vh] md:w-full md:items-end 2xl:items-center gap-[10%]">
        <div
          className="md:relative md:w-[22rem] lg:w-[40vw] h-[80vh] md:flex md:justify-center md:items-center md:z-0 hidden bg-bgGradientCustom"
          style={{ "border-radius": "0% 100% 100% 99% / 0% 97% 100% 93%  " }}
        >
          <div className=" md:z-10 md:w-[80%] md:flex md:justify-end">
            <Lottie animationData={animatedGif} loop={true} style={{width:'80%'}}/>
          </div>
        </div>
          <LoginForm />
      </div>
    </div>
  );
};

export default Login;
