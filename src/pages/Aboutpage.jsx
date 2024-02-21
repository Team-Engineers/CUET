import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center bg-white">
      <Navbar />
      <div className="relative w-full xl:max-w-[100vw] flex flex-col md:flex-row justify-around items-center  min-h-[90vh] h-full">
        <div className="w-full md:max-w-[40vw] min-h-[40vh] flex flex-col justify-around">
          <div className="px-3">
            <h1 className="pl-0 mb-0 font-bold text-7xl md:text-21xl text-blueviolet-100 px-3">About Us</h1>
            <hr className="w-10 m-0 text-blueviolet-100" />
          </div>
          <p className="font-bold xl:text-3xl md:text-xl px-3 md:px-0">
            At TestKnock, we are dedicated to more than just academic success. Our unwavering commitment extends to providing you with the essential
            tools and expert guidance. So join us on this transformative expedition and discover where educational excellence is not just an
            aspiration but an inspiring and achievable pursuit.
          </p>
        </div>
        <img alt="" src="/aboutpage_vector.png" className="w-[400px] h-[300px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] " />
        <img alt="" src="/aboutpage_waves.png" className="absolute bottom-0 h-full max-h-[10vh] md:max-h-[20vh] w-[100vw]" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
