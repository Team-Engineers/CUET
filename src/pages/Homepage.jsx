import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/home/Banner";
import Contact from '../components/home/Contact';
import FrequentlyAskedQuestions from '../components/home/FAQ';
import HomeSteps from "../components/home/HomeSteps";
import SubjectTopic from "../components/home/SubjectTopic";
import Testinomials from '../components/home/Testinomials';
import Universities from "../components/home/Universities";


const Homepage = () => {
  return (
    <div className="w-full  relative bg-white overflow-x-hidden overflow-y-scroll flex flex-col items-center px-0 pb-0 box-border tracking-[normal]">
      <Navbar />
      <Banner />
      <SubjectTopic />
      <img
        className="w-[608.7px] h-[542.2px]  mx-auto absolute my-0  top-[1455px] right-[-281.7px] object-contain z-[2] hidden lg:block"
        loading="eager"
        alt=""
        src={"/bubbles/bubble1.png"}
      />
      <HomeSteps />
      <Universities />
      <Testinomials />
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;