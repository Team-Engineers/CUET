import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden h-screen   bg-white">
      <Navbar />
      <div className="">
        <div className="flex justify-between items-center flex-col sm:flex-row ">
        <div className="w-full sm:max-w-[40vw]  md:ml-[60px]  flex flex-col justify-around">
          <div className="px-3">
            <h1 className="pl-0 mb-0 font-bold text-7xl md:text-21xl gradient-text2 px-3">About Us</h1>
            <hr className="w-10 m-0 text-blueviolet-100" />
          </div>
          <p className="font-bold xl:text-3xl md:text-xl text-[20px] px-3 md:px-0">
            At TestKnock, we are dedicated to more than just academic success. Our unwavering commitment extends to providing you with the essential
            tools and expert guidance. So join us on this transformative expedition and discover where educational excellence is not just an
            aspiration but an inspiring and achievable pursuit.
          </p>
        </div>
        <div>
        <img alt="" src="/aboutpage_vector.png" className="w-[300px] mr-[60px]  h-[250px]  relative md:w-[400px] md:h-[300px] lg:w-[400px] lg:h-[370px] " />
        </div>
        </div>
      </div>
      <img alt="" src="/aboutpage_waves.png" className="relative top-[10px] h-full max-h-[10vh] md:max-h-[20vh] w-[100vw]" />

      <Footer />
    </div>
  );
};

export default AboutPage;
