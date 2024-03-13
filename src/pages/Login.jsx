import Lottie from "lottie-react";
import animatedGif from "../assets/Animation - 1707298499168.json";
import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Login/Navbar";

const Login = () => {
  return (
    <div className="overflow-hidden h-screen ">
      <Navbar />
      <div className="lg:flex  lg:w-full md:items-end gap-[10%]">
        <div className="hidden  md:relative w-[22rem] lg:w-[40vw] h-[80vh] lg:flex md:justify-start md:items-start md:z-0 bg-bgGradientCustom" style={{ "border-radius": "0% 100% 100% 99% / 0% 97% 100% 93%  " }}>
          <div className="md:z-10 md:w-[80%] relative top-[8vh]  md:flex md:justify-end">
            <Lottie animationData={animatedGif} loop={true} style={{ width: '80%' }} />
          </div>
        </div>
        <div className="lg:hidden relative w-full">
          <img className="w-full h-[50vh]" src={require("../assets/Vector2.png")} alt="" />
          <div className="absolute mb-10 bottom-0 left-0 w-full flex justify-center">
            <Lottie className="w-[50vw]" animationData={animatedGif} loop={true} />
          </div>
        </div>
        <div className="flex relative lg:bottom-0 justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;