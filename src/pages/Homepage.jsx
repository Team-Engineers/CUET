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
    <>
  
    <div className=" bg-white overflow-hidden   ">
      <Navbar />
      <Banner />
      <SubjectTopic />
      <HomeSteps />
      <Universities />
      <Testinomials />
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
      </div>
      </>
  );
};

export default Homepage;