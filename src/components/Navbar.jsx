import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../utils/context";
import FixedNavbar from "./FixedNavbar";
import BurgerAndMenu from "./burgerAndMenu/BurgerAndMenu";
import ExamInfo from "./home/ExamInfo";

const Navbar = ({ height }) => {
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const nav_buttons = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/about", title: "About" },
    { path: "/syllabus", title: "Syllabus" },
    { path: "/purchase", title: "Pricing" },


  ];

  const handleBellIconClick = () => {
    setIsPopupOpen(true);
  };

  const handleCloseExamInfo = () => {
    setIsPopupOpen(false);
  };
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      accessToken: "",
    });
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    setDetailsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="max-md:hidden">
        {!auth?.user &&
          <div className="h-[1.5vw]">
            <FixedNavbar />
          </div>
        }
      </div>
      <div style={{ height: height }} className={`navbar abovecontain ${location.pathname === "/" ? "bg-white" : ""} max-w-[1280px] mx-auto z-10   relative min-h-[8vh]`}>
        <div className="navbar-start ml-5 md:w-72  relative">
          <NavLink to={"/"} className="no-underline gap-2 mt-[5px] items-center flex">
            <div className="flex gap-2 items-center">
              <img className="md:h-[40.5px] w-[25px]  md:w-[30px] relative object-cover" loading="eager" alt="" src={"/logo.png"} />
              <b className="relative text-blueviolet-100 whitespace-nowrap md:text-xl">CUET-TestKnock</b>
            </div>
          </NavLink>
        </div>
        <div className="navbar-end lg:ml-auto w-full relative p-0">
          <ul className="menu menu-horizontal  lg:w-full lg:max-w-3xl lg:justify-end items-center">
            {nav_buttons.map((nav, i) => (
              <li className="hidden lg:flex" key={i}>
                <div className="h-[21px] flex flex-col items-start justify-start text-blueviolet-100">
                  <NavLink to={nav.path} className={`no-underline text-blueviolet-100 ${location.pathname === nav.path ? "active" : ""}`}>
                    <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg font-semibold">{nav.title}</b>
                  </NavLink>
                  {location.pathname === nav.path && (
                    <div className="w-[23px] h-px relative box-border border-t-[1px] border-solid border-blueviolet-100" />
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mr-3">
            {!auth?.user ? (
              <>
                <NavLink
                  to={"/signup"}
                  className={
                    "max-md:hidden text-sm md:text-lg whitespace-nowrap font-medium text-white bg-salmon-200 hover:bg-salmon-200 no-underline rounded-full py-2 border-solid border-2 md:py-3 md:px-6"
                  }
                >
                  <span>Get Started</span>
                </NavLink>
              </>
            ) : (
              <>
                <ul className="menu max-lg:hidden lg:menu-horizontal   rounded-box ">
                  <li>
                    <details className="flex justify-center items-center" open={detailsOpen} onClick={() => setDetailsOpen(!detailsOpen)}>
                      <summary>
                        <div className="rounded font-bold text-white relative text-[20px] w-10 h-10 flex items-center justify-center bg-salmon-200 border ">
                          {auth?.user?.name ? auth?.user?.name.charAt(0).toUpperCase() : ''}
                        </div>
                        {auth?.user?.name}
                      </summary>
                      <ul className="relative top-10 left-10 bg-white ">
                        <li>
                          <NavLink
                            to="/profile"
                            className="font-medium text-black no-underline"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li className="">
                          <NavLink
                            onClick={handleLogout}
                            className="font-medium no-underline"
                          >
                            Log Out
                          </NavLink>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </>
            )}
          </div>

          <div className="flex relative mr-4 lg:hidden  flex-row items-center  gap-[7px] text-base cursor-pointer">
            <div onClick={handleBellIconClick} >
              <img
                className="h-[32px] w-[30px] relative object-cover"
                loading="eager"
                alt=""
                src={require("../assets/images/signup/bellicon.gif")}
              />
            </div>
          </div>
          <div className="lg:hidden  ">
            <BurgerAndMenu />

          </div>

        </div>
      </div>
      {isPopupOpen && (
        <div className="absolute max-md:left-0 m-3 md:w-[25rem] rounded-lg">
          <ExamInfo onClose={handleCloseExamInfo} />
        </div>
      )}
    </>

  );
};

export default Navbar;