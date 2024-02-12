import React, { useState } from 'react';
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar";
import Contact from '../components/home/Contact';
import HomeSteps from "../components/home/HomeSteps";
import SubjectTopic from "../components/home/SubjectTopic";
import Testinomials from '../components/home/Testinomials';
import Banner from "../components/home/Banner"



const Homepage = () => {

  return (
    <div className="w-full  relative bg-white overflow-hidden flex flex-col items-center px-0 pb-0 box-border tracking-[normal]">
      <Navbar />
      <Banner />
      <SubjectTopic />
      <img
        className="w-[608.7px] h-[542.2px]  mx-auto absolute my-0  top-[1155px] right-[-321.7px] object-contain z-[2]"
        loading="eager"
        alt=""
        src={require("../assets/images/signup/Vector.png")}
      />

      <HomeSteps />
      <section className="w-[927px] h-[822px] absolute my-0 mx-[!important] right-[-378px] bottom-[621px]">
        <img
          className="absolute top-[0px] left-[193px] w-[734.2px] h-[641.2px] object-contain"
          alt=""
          src={require("../assets/images/signup/Vector.png")}
        />
      </section>
      <Testinomials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;