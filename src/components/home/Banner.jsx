import { useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom/dist";
import LandingAnimationData from "../../assets/animation_landing.json";
import ExamInfo from "../../components/home/ExamInfo";

const Banner = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlescroll = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  };

  const handleBellIconClick = () => {
    setIsPopupOpen(true);
  };

  const handleCloseExamInfo = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="max-w-[1280px] md:mt-5 mx-auto">
      <div className=" mx-[20px] flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center max-md:mx-[15px] ">
            <div className="my-6 font-bold text-7xl md:text-21xl">
              <p className="m-0 text-blueviolet-100">One Stop Solution for your</p>
              <p className="m-0">
                <span className="text-blueviolet-100">all </span>
                <span className="text-13xl md:text-[60px] text-salmon-200">CUET</span>
                <span className="text-7xl md:text-21xl text-blueviolet-100"> needs</span>
              </p>
            </div>
            <div className="mb-6 text-blueviolet-200">
              <b className="h-12 relative max-w-full font-semibold text-lg">
                <p className="m-0">Avail Complete Support from India’s best trainers</p>
              </b>
            </div>
            <div>
              <h3 className="m-0 h-[58px] relative font-bold font-inherit text-blueviolet-100 inline-block text-lg md:text-5xl ">
                <p className="m-0">Trusted by maximum Students & Teachers across the INDIA</p>
              </h3>
            </div>
            <div className="my-6 flex justify-center md:justify-start">
              <button
                onClick={() => navigate("/purchase")}
                className={
                  "btn text-sm md:text-lg font-medium text-white bg-salmon-200 hover:bg-salmon-200  no-underline rounded-full border-0 min-h-0 h-10 md:w-40 w-35 md:mr-8 mr-3 capitalize"
                }
              >
                Join Us
              </button>
              <button
                onClick={handlescroll}
                className={
                  "btn btn-outline text-sm md:text-lg font-medium border-blueviolet-100 text-blueviolet-100 no-underline border-solid  hover:bg-blueviolet-100 hover:text-white rounded-full min-h-0 h-10 w-40  md:w-56 capitalize"
                }
              >
                Take a free test
              </button>
            </div>
            <div className="my-10 md:block">
              <div className="flex relative  max-lg:hidden flex-row items-center gap-[7px] text-base cursor-pointer">
                <div onClick={handleBellIconClick} >
                  <img
                    className="h-[54px] w-[52px] relative object-cover"
                    loading="eager"
                    alt=""
                    src={require("../../assets/images/signup/bellicon.gif")}
                  />
                </div>

                <div onClick={handleBellIconClick} className="relative font-semibold">Live Notifications</div>
              </div>
              {isPopupOpen && (
                <div className="absolute max-md:left-0 m-3 md:w-[25rem] rounded-lg">
                  <ExamInfo onClose={handleCloseExamInfo} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" lg:w-[550px] flex justify-center items-center  md:w-[400px] w-[300px] ">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: LandingAnimationData,
            }}
          />
        </div>
      </div>
    </div>

  );
};

export default Banner;