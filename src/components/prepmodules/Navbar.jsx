import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom/dist";
import { useAuth } from "../../utils/context";

const Navbar = () => {
  const location = useLocation();
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [auth, setAuth] = useAuth();
  const nav_buttons = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/about", title: "About" },
    { path: "/syllabus", title: "Syllabus" },
    { path: "/purchase", title: "Pricing" },
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
    <div className={`navbar ${location.pathname === "/" ? "bg-white" : ""} max-w-[1400px] pt-4 mx-auto  relative  min-h-[10vh]`}>
      <div className=" mr-2 flex justify-between lg:ml-auto w-full relative">
        <NavLink to={"/"} className="no-underline gap-2 relative z-10  mx-6 items-center flex">
          <div className="flex gap-2 items-center">
            <img className="h-[40.5px] w-[30px] relative object-cover" loading="eager" alt="" src={"/logo.png"} />
            <b className="relative text-blueviolet-100 whitespace-nowrap text-xl">CUET-TestKnock</b>
          </div>
        </NavLink>
        <ul className="menu menu-horizontal lg:w-full lg:max-w-3xl lg:justify-evenly items-center">
          {nav_buttons.map((nav, i) => (
            <li className="hidden lg:flex ">
              <div className="h-[21px] flex flex-col items-center justify-center gap-[2px] text-blueviolet-100">
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
                  to={"/signup"}
                  className={
                    "text-sm md:text-lg font-medium text-white bg-salmon-200 hover:bg-salmon-200 no-underline rounded-full py-2 border-solid border-2 md:py-3 md:px-6"
                  }
                >
                  <span>Get Started</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <ul className="menu max-lg:hidden lg:menu-horizontal h-[1vh] top-[-28px] relative z-50   rounded-box ">
                <li>
                  <details open={detailsOpen} onClick={() => setDetailsOpen(!detailsOpen)}>
                    <summary>
                      <div className="rounded font-bold text-white relative text-[20px] w-10 h-10 flex items-center justify-center bg-salmon-200 border ">
                        {auth?.user?.name ? auth?.user?.name.charAt(0).toUpperCase() : ''}
                      </div>
                      {auth?.user?.name}
                    </summary>
                    <ul className="relative top-[2rem] left-[3.2rem]">
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


        </ul>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-5">
            <GiHamburgerMenu className="text-blueviolet-100" size={"2em"} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 bg-white p-2 shadow  rounded-box w-52 right-[0px]">
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
          <b className="hidden lg:block absolute text-blueviolet-100 top-20 mr-9">+91 8279662680</b>
        )}
      </div>
    </div>
  );
};

export default Navbar;