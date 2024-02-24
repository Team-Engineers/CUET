import React, { useContext, useEffect } from "react";
import { LuUser2 } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom/dist";
import { UserContext } from "../context";
import BurgerAndMenu from "./burgerAndMenu/BurgerAndMenu";


const Navbar = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const location = useLocation();

  const nav_buttons = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/about", title: "About" },
    { path: "/syllabus", title: "Syllabus" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
     <div className={`navbar ${location.pathname === "/" ? "bg-white" : ""} z-50 relative w-full min-h-[10vh]`}>
      <div className="navbar-start ml-5 w-72">
        <NavLink to={"/"} className="no-underline gap-2 items-center flex">
          <div className="flex gap-2 items-center">
            <img className="h-[40.5px] w-[30px] relative object-cover" loading="eager" alt="" src={"/logo.png"} />
            <b className="relative text-blueviolet-100 whitespace-nowrap text-xl">CUET-TestKnock</b>
          </div>
        </NavLink>
      </div>
      <div className="navbar-end mr-2  lg:ml-auto w-full relative">
        {/* Normal */}
        <ul className="menu menu-horizontal lg:w-full lg:max-w-3xl justify-between lg:justify-evenly items-center">
          {nav_buttons.map((nav, i) => (
            <li className="hidden lg:flex ">
              <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100">
                <NavLink to={nav.path} className={`no-underline text-blueviolet-100 ${location.pathname === nav.path ? "active" : ""}`}>
                  <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg font-semibold">{nav.title}</b>
                </NavLink>
                {location.pathname === nav.path && (
                  <div className="w-[23px] h-px relative box-border border-t-[1px] border-solid border-blueviolet-100" />
                )}
              </div>
            </li>
          ))}
          <li className="hidden lg:flex">
            <NavLink
              to={!userLoggedIn ? "/login" : "/profile"}
              className={
                "flex justify-between text-sm md:text-lg font-medium text-blueviolet-100 hover:bg-blueviolet-100 hover:text-white no-underline border-solid border-2 border-blueviolet-100 rounded-full py-2 md:py-3 md:px-6"
              }
            >
              {!userLoggedIn ? (
                "Login"
              ) : (
                <span>
                  <LuUser2 className="mr-1" />
                  Profile{" "}
                </span>
              )}
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink
              to={"/signup"}
              onClick={() => { if (userLoggedIn) setUserLoggedIn(false) }}
              className={
                "text-sm md:text-lg font-medium text-white bg-salmon-200 hover:bg-salmon-200 no-underline rounded-full py-2 border-solid border-2 md:py-3 md:px-6"
              }
            >
              {!userLoggedIn ? <span>Sign Up</span> : <span>Sign Out</span>}
            </NavLink>
          </li>
         
        </ul>

        
         
        </div>
        {location.pathname === "/" && (
          <b className="hidden lg:block absolute right-0 text-blueviolet-100 top-20 mr-9">+91 8279662680</b>
        )}
        <li className="lg:hidden">
          <BurgerAndMenu/>
          </li>
      </div>
     
   
  );
};

export default Navbar;
