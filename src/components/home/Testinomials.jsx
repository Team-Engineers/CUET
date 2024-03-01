import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

const Testinomials2 = ({ image, color, name, text, university }) => {
  return (
    <div
      style={{ background: color }}
      className="cursor-pointer max-md:max-w-[280px] text-center max-md:h-[250px] md:h-[250px] max-xl:w-[400px] w-[500px]  md:py-10 py-8 rounded-[16.02px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  justify-evenly items-center md:px-5 px-2 ">
      <div className="md:text-xl text-md   text-white font-bold">{name}</div>
      <div className="text-white md:text-md text-center my-2 md:my-8">{text}</div>
      <hr className="border-[1px] border-solid border-[#D9D9D9] w-full" />
      <div className="mb-0 font-bold md:text-xl text-white text-center">{university}</div>
    </div>
  );
};

function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide(goToSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [goToSlide]);

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove = (evt) => {
    if (!xDown && !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setXDown(null);
        setYDown(null);
        setGoToSlide(goToSlide + 1);
      } else {
        /* right swipe */
        setXDown(null);
        setYDown(null);
        setGoToSlide(goToSlide - 1);
      }
    }
  };

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
      className="  w-full  flex flex-col justify-center items-center z-10"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        offsetFn={(index) => {
          return { opacity: 1 };
        }}
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
const slides = [
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/signup/test1.png")}
        name="Sachin Gupta"
        text="After my Board exams, I felt that i seriouly need to work hard for cuet, thereby I subscribed to the complete package offered by TestKnock. Extensive practice of MCQs proved to be game changer. I owe my sucess to TestKnock"
        color="#4477CE"
        university="Student, Hindu College (Delhi University)"
      />
    ),
  },
  { 
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/signup/test1.png")}
        name="Varuna S"
        text="The Platform offered by cuet Tests is exactly mapped with cuet conducted by NTA. The difficulty lvel, look & feel-- in short everything when i appeared for my final CUET exams, it felt i have appeared similar tests in the past. THanks to TestKnock"
        color="#9F73AB"
        university="Student, APS Waranagal"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"S.K Malhotra "}
        text={
          "I have been running my coaching centre successfully for more than 2 decades. I owe my success to my hardwork, dedication & sincerity. I found the same in team at TestKnock. All my students compulsorily subscribe to the Dashboard & online facilities oferred by TestKnock for CUET."
        }
        color="#3795BD"
        university="Owner of SKM Classes, Yamuna Nagar"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"Manish Kumar "}
        text={
          "I solved MCQs on the TestKnock platform for hardly one month but in a consistent manner. I completed all the Mock Tests & then played a critical role in my success"
        }
        color="#7d4738"
        university="Student, DPS Patna"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"R.K Suranjan Singh"}
        text={
          "After getting to see the quality of questions & the overall experience & exposure offered to students, I recommended it to my students and they benefitted immensely"
        }
        color="#691672"
        university="Teacher, K.V LOKTAK "
      />
    ),
  },
];
const   Testinomials = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
 <div className="relative w-full mx-auto flex justify-center items-center ">
      <div className="max-w-[1500px] mx-auto flex justify-center items-center">
      <div className="w-screen flex flex-col justify-center items-center my-2">
        <div className="">
          <h1 className="text-blueviolet-100  text-13xl font-semibold text-center ">Testimonials</h1>
        </div>
        <Carroussel cards={slides} height="500px" width="100%" margin="0 auto" offset={isMobile ? 10 : 200} showArrows={false} />{" "}
      </div>
      </div>
      <img alt="" src="/bubbles/bubble3.png" className="absolute bottom-0  left-0 z-0" />
      <img alt="" src="/bubbles/bubble2.png" className="absolute right-0 top-[100px] md:top-0 z-0" />
    </div>
   
   
  );
};

export default Testinomials;
