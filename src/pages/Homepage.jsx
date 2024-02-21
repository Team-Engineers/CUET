import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from '../components/home/Contact';
import HomeSteps from "../components/home/HomeSteps";
import SubjectTopic from "../components/home/SubjectTopic";
import Testinomials from '../components/home/Testinomials';
import Banner from "../components/home/Banner"
import Universities from "../components/home/Universities";


const Homepage = () => {
  return (
    <>
  
    <div className="w-full relative bg-white overflow-hidden flex flex-col  items-center  ">
      <Navbar />
      <Banner />
      <SubjectTopic />
      <HomeSteps />
      <Universities />
      <Testinomials />
      </div>
      <Contact />
      <Footer />
      </>
  );
};

export default Homepage;