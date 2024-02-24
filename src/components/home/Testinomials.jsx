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
      className="cursor-pointer w-[55vw]  max-md:max-h-[30vh] lg:w-[35vw] lg:h-[40vh] py-10 rounded-[16.02px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(50px)] flex flex-col justify-evenly items-center px-5 ">
      <div className="md:text-[2vw] text-white font-bold">{name}</div>
      <div className="text-white md:text-[1.2vw] text-center my-8">{text}</div>
      <hr className="border-[1px] border-solid border-[#D9D9D9] w-full" />
      <div className="mb-0 font-bold md:text-[2vw] text-white text-center">{university}</div>
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
      className="  w-full lg:min-h-[60vh] flex flex-col justify-center items-center z-10"
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
        name="Mohan Singh"
        text="Enrolling in the online CUET course was a game-changer for me.
        The comprehensive material, interactive lessons, and personalized
        support elevated my preparation. I not only gained confidence but
        also achieved remarkable results. Thank you for paving the way to
        my success!"
        color="#4477CE"
        university="Student, Joy University"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        image={require("../../assets/images/signup/test1.png")}
        name="Priya Singh"
        text="Enrolling in the online CUET course was a game-changer for me.
          The comprehensive material, interactive lessons, and personalized
          support elevated my preparation. I not only gained confidence but
          also achieved remarkable results. Thank you for paving the way to
          my success!"
        color="#9F73AB"
        university="Student, IMS Unison University"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Testinomials2
        name={"Jhon Lawrence"}
        text={
          "Enrolling in the online CUET course was a game-changer for me.  The comprehensive material, interactive lessons, and personalized support elevated my preparation. I not only gained confidence but also achieved remarkable results. Thank you for paving the way to my success!"
        }
        color="#3795BD"
        university="Professor, IILM University"
      />
    ),
  },
];
const Testinomials = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="relative w-full flex justify-center items-center ">
      <div className="w-screen min-h-[80vh] flex flex-col justify-around my-10">
        <div className="">
          <h1 className="text-blueviolet-100  text-13xl font-semibold text-center ">Testimonials</h1>
          <h1 className="text-blueviolet-400 font-normal text-5xl text-center ">Information</h1>
        </div>
        <Carroussel cards={slides} height="500px" width="80%" margin="0 auto" offset={isMobile ? 10 : 200} showArrows={false} />{" "}
      </div>
      <img alt="" src="/bubbles/bubble3.png" className="absolute bottom-0  left-0 z-[2]" />
      <img alt="" src="/bubbles/bubble2.png" className="absolute right-0 top-[100px] md:top-0 z-[2]" />
    </div>
  );
};

export default Testinomials;
