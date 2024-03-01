import React, { useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom/dist";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { useAuth } from "../utils/context";

const Navbar = () => {
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const nav_buttons = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/about", title: "About" },
    { path: "/syllabus", title: "Syllabus" },
  ];
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      accessToken: "",
    });
    localStorage.removeItem("auth");
    console.log("Logout Successfully");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`navbar ${location.pathname === "/" ? "bg-white" : ""} max-w-[1400px] mx-auto z-50 relative  min-h-[10vh]`}>
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
        <ul className="menu menu-horizontal lg:w-full lg:max-w-3xl lg:justify-evenly items-center">
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

          {!auth?.user ? (
            <>
              <li className="hidden lg:flex">
                <NavLink
                  to={!auth?.user ? "/login" : "/profile"}
                  className={
                    "flex justify-between text-sm md:text-lg font-medium text-blueviolet-100 hover:bg-blueviolet-100 hover:text-white no-underline border-solid border-2 border-blueviolet-100 rounded-full py-2 md:py-3 md:px-6"
                  }
                >
                  Login
                </NavLink>
              </li>

              <li className="hidden lg:flex">
            <NavLink
              to={"/signup"}
              className={
                "text-sm md:text-lg font-medium text-white bg-salmon-200 hover:bg-salmon-200 no-underline rounded-full py-2 border-solid border-2 md:py-3 md:px-6"
              }
            >
              <span>Sign Up</span>
            </NavLink>
          </li>
            </>
          ) : (
            <>
              <li className="hidden lg:flex">
                <NavLink
                  to={!auth?.user ? "/login" : "/profile"}
                  className={
                    "flex justify-between text-sm md:text-lg font-medium text-blueviolet-100 hover:bg-blueviolet-100 hover:text-white no-underline border-solid border-2 border-blueviolet-100 rounded-full py-2 md:py-3 md:px-6"
                  }
                >
                  <span>
                    <LuUser2 className="mr-1" />
                    Profile{" "}
                  </span>

                </NavLink>
              </li>
              <li className="hidden lg:flex">
            <button 
              onClick={handleLogout}
              className={
                "text-sm md:text-lg font-medium text-white bg-salmon-200 hover:bg-salmon-200 no-underline rounded-full py-2 border-solid border-2 md:py-3 md:px-6"
              }
            >
              <span>Log Out</span>
            </button>
          </li>
            </>
          )}

          
        </ul>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-5">
            <GiHamburgerMenu className="text-blueviolet-100" size={"2em"} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 bg-white p-2 shadow bg-base-100 rounded-box w-52 right-[0px]">
            {nav_buttons.map((nav, i) => (
              <li className="my-1">
                <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                  <NavLink
                    to={nav.path}
                    className={`no-underline text-blueviolet-100 text-center w-full ${location.pathname === nav.path ? "active" : ""}`}
                  >
                    <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg md:font-bold">{nav.title}</b>
                  </NavLink>
                </div>
              </li>
            ))}

            {!auth?.user && (
              <li className="my-1">
                <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                  <NavLink to={"/login"} className={`no-underline text-blueviolet-100 text-center w-full `}>
                    <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg md:font-bold">Login</b>
                  </NavLink>
                </div>
              </li>
            )}
            {!auth?.user && (
              <li className="my-1">
                <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                  <NavLink to={"/signup"} className={`no-underline text-blueviolet-100 text-center w-full `}>
                    <b className="flex-1 relative cursor-pointer text-salmon-200 text-lg md:font-bold">Signup</b>
                  </NavLink>
                </div>
              </li>
            )}

            {auth?.user && (
              <li className="my-1">
                <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                  <NavLink to={"/profile"} className={`no-underline text-blueviolet-100 text-center w-full `}>
                    <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg md:font-bold">
                      <LuUser2 className="mr-2" />
                      Profile
                    </b>
                  </NavLink>
                </div>
              </li>
            )}
            {auth?.user && (
              <li className="my-1">
                <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                  <button onClick={handleLogout} className={`no-underline text-blueviolet-100 text-center w-full `}>
                    <b className="flex-1 relative cursor-pointer text-salmon-200 text-lg md:font-bold">Signout</b>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
        {location.pathname === "/" && (
          <b className="hidden lg:block absolute text-blueviolet-100 top-20 mr-9">91 9560443520</b>
        )}
      </div>
    </div>
  );
};

export default Navbar;