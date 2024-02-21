import { useState, useEffect } from "react";
import ExamInfo from "../../components/home/ExamInfo";
import Lottie from "react-lottie";
import LandingAnimationData from "../../assets/animation_landing.json";
import { useNavigate } from "react-router-dom/dist";

const Banner = () => {
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleBellIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="min-h-[80vh] xl:max-w-[95vw] 2xl:max-w-[80vw] max-w-[90vw] w-full flex flex-col-reverse  justify-around md:flex-row md:justify-between items-center ">
      <div className="w-[392px] md:hidden block lg:w-[550px] ">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: LandingAnimationData,
          }}
        />
      </div>
      <div className="flex flex-col justify-around max-w-full min-h-[45vh] md:min-h-[55vh] 2xl:min-h-[40vh]">
        <div className="my-6 font-bold text-7xl md:text-21xl">
          <p className="m-0 text-blueviolet-100">One Stop Solution for your</p>
          <p className="m-0">
            <span className="text-blueviolet-100">all </span>
            <span className="text-13xl md:text-[60px] text-salmon-200">CUET</span>
            <span className="text-7xl md:text-21xl text-blueviolet-100"> needs</span>
          </p>
        </div>
        <div className="my-6 text-blueviolet-200">
          <b className="h-12 relative max-w-full font-semibold text-xl">
            <p className="m-0">Avail Complete Support from India’s best trainers</p>
          </b>
        </div>
        <div>
          <h3 className="m-0 h-[58px] relative font-bold font-inherit text-blueviolet-100 inline-block text-lg md:text-7xl ">
            <p className="m-0">Trusted by maximum Students & Teachers across the INDIA</p>
          </h3>
        </div>
        <div className="my-6 flex justify-center md:justify-start">
          <button
            onClick={() => navigate("/signup")}
            className={
              "btn text-sm md:text-lg font-medium text-white bg-salmon-200 hover:bg-salmon-200  no-underline rounded-full border-0 min-h-0 h-10 max-md:max-w-40 w-40 md:mr-8 mr-3 capitalize"
            }
          >
            Join Us
          </button>
          <button
            onClick={() => navigate("/login")}
            className={
              "btn btn-outline text-sm md:text-lg font-medium border-blueviolet-100 text-blueviolet-100 no-underline border-solid  hover:bg-blueviolet-100 rounded-full min-h-0 h-10 max-md:max-w-40 md:w-56 capitalize"
            }
          >
            Take a free test
          </button>
        </div>
        <div className="my-10 hidden md:block">
          <div onClick={handleBellIconClick} className="flex z-50 relative  flex-row items-center gap-[7px] text-base cursor-pointer">
            <img
              className="h-[54px] w-[52px] relative object-cover"
              loading="eager"
              alt=""
              src={require("../../assets/images/signup/bellicon.gif")}
            />
            <div className="relative font-semibold">Live Notification</div>
            <div className="flex flex-row items-center gap-[7px] text-base cursor-pointer">
              {isPopupOpen && (
                <div className=" top-[0vh] absolute inset-0 flex z-40 w-full  bg-opacity-50">
                  <div>
                    <ExamInfo />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[392px] md:block hidden lg:w-[550px] ">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: LandingAnimationData,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
