import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="w-full min-h-[100vh] overflow-hidden relative flex flex-col items-center">
      <Navbar />
      <div className="w-full min-h-[60vh] h-full flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:max-w-[40vw] flex flex-col justify-center">
          <div className="px-3">
            <h1 className="pl-0 mb-0 font-bold text-7xl md:text-21xl text-blueviolet-100 px-3">About Us</h1>
            <hr className="w-10 m-0 text-blueviolet-100" />
          </div>
          <p className="font-bold text-3xl md:text-7xl px-3">
            At TestKnock, we are dedicated to more than just academic success. Our unwavering commitment extends to providing you with the essential
            tools and expert guidance. So join us on this transformative expedition and discover where educational excellence is not just an
            aspiration but an inspiring and achievable pursuit.
          </p>
        </div>
        <img src="/aboutpage_vector.png" className="w-full md:w-[50vw] " />
      </div>
      <img src="/aboutpage_waves.png" className="absolute bottom-0 w-full" />
    </div>
  );
};

export default AboutPage;
