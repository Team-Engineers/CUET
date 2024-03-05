import { Link } from 'react-router-dom';
import logo from "../../assets/logo_final.png";

const Header = () => {

  return (
    <header className="fixed  z-50 top-0 w-full ">
      <nav className="flex justify-between items-center md:my-2 md:mx-[70px] mx-2  md:py-3 ">
      <Link to="/" className="no-underline ">
        <div className="flex flex-row items-center cursor-pointer"  >
          <img
            className="h-[40.5px] max-md:h-[30px] max-md:w-[25px] md:m-2 m-1 w-[30px] relative object-cover"
            loading="eager"
            alt=""
            src={logo}
          />
          <b className="relative whitespace-nowrap text-[1.3vh] md:text-[1.4vw] text-indigo">CUET-TestKnock</b>
        </div>
        </Link>
        <div className="flex items-center">
          <Link
            className="bg-blueviolet-400  text-white whitespace-nowrap   text-center py-1 px-2 md:px-3 md:py-2 rounded-full cursor-pointer text-[1.5vh] md:text-[1.3vw] no-underline mr-3"
            to="/"
          >
           Home
          </Link>
        </div>
      </nav>

    </header>
  );
}

export default Header;
