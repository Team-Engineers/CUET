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

const Testinomials2 = ({ image, color1, color2, name, text, university }) => {
  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${color1}, ${color2})`
  };
  return (
    <div
      style={gradientStyle}
      className="cursor-pointer flex justify-center items-center px-6 pb-3  max-md:max-w-[280px] text-center max-md:h-[350px] md:h-[350px] max-xl:w-[400px] w-[500px]  rounded-[16.02px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] ">
      <div className="flex flex-col justify-center items-center">
        <img src={image} className="w-[100px] rounded-full mx-auto" alt="" />
        <div className="md:text-xl text-md   text-white font-bold">{name}</div>
        <div className="text-white md:text-md text-center my-2 md:my-8">{text}</div>
        <hr className="border-[1px] border-solid border-[#D9D9D9] w-full" />
        <div className="mb-0 font-bold md:text-xl  text-white text-center">{university}</div>
      </div>
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
    }, 5000);
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
        image={require("../../assets/images/testimonials/e.jpeg")}
        name="Sachin Gupta"
        text="After my Board exams, I felt that i seriouly need to work hard for cuet, thereby I subscribed to the complete package offered by TestKnock. Extensive practice of MCQs proved to be game changer. I owe my sucess to TestKnock"
        color1="#52e5e7"
        color2="#130ca4"
        university="Student, Hindu College (Delhi University)"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/testimonials/sm.jpeg")}
        name="Varuna S"
        text="The Platform offered by cuet Tests is exactly mapped with cuet conducted by NTA. The difficulty level, look & feel-- in short everything when i appeared for my final CUET exams, it felt i have appeared similar tests in the past. THanks to TestKnock"
        color1="#7367f0"
        color2="#5a1b9a"
        university="Student, APS Waranagal"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"S.K Malhotra "}
        image={require("../../assets/images/testimonials/r.jpeg")}
        text={
          "I have been running my coaching centre successfully for more than 2 decades. I owe my success to my hardwork, dedication & sincerity. I found the same in team at TestKnock. All my students compulsorily subscribe to the Dashboard & online facilities oferred by TestKnock for CUET."
        }
        color1="#fec163"
        color2="#de4313"
        university="SKM Classes (Owner), Yamuna Nagar"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"Manish Kumar "}
        image={require("../../assets/images/testimonials/s.jpeg")}
        text={
          "I solved MCQs on the TestKnock platform for hardly one month but in a consistent manner. I completed all the Mock Tests & then played a critical role in my success"
        }
        color1="#92ffc0"
        color2="#002640"
        university="Student, DPS Patna"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"R.K Suranjan Singh"}
        image={require("../../assets/images/testimonials/d.jpeg")}
        text={
          "After getting to see the quality of questions & the overall experience & exposure offered to students, I recommended it to my students and they benefitted immensely"
        }
        color1="#f97794"
        color2="#623aa2"
        university="Teacher, KV Loktak "
      />
    ),
  },
];
const Testinomials = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div className="relative w-full mx-auto flex justify-center items-center ">
      <div className="max-w-[1500px] mx-auto flex justify-center items-center">
        <div className="w-screen flex flex-col justify-center items-center my-2">
          <div className="">
            <h1 className="gradient-text2  text-13xl font-bold text-center ">Testimonials</h1>
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
