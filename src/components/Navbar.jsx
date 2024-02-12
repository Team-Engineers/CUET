import { NavLink, useLocation } from "react-router-dom/dist";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar= () => {
  const location = useLocation();

  const nav_buttons = [
    { path: "/", title: "Home" },
    { path: "/courses", title: "Courses" },
    { path: "/about", title: "About" },
    { path: "/syllabus", title: "Syllabus" },
  ];

  return (
    <div className="navbar bg-white w-full 2xl:max-w-[80vw] min-h-[10vh]">
      <div className="navbar-start ml-3 min-w-72">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <NavLink to={"/"} className="no-underline gap-2 items-center flex">
            <img className="h-[40.5px] w-[30px] relative object-cover" loading="eager" alt="" src={"/logo.png"} />
            <b className="relative text-blueviolet-100 text-xl">CUET-TestKnock</b>
          </NavLink>
        </div>
      </div>
      <div className="navbar-end mr-2  ml-auto ">
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
          <li className="hidden lg:flex">
            <NavLink
              to={"/login"}
              className={
                "text-sm md:text-lg font-medium text-blueviolet-100 hover:bg-blueviolet-100 hover:text-white no-underline border-solid border-2 border-blueviolet-100 rounded-full py-2 md:py-3 md:px-6"
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
              Sign Up
            </NavLink>
          </li>
        </ul>
        {/* <b className="">+91 8279662680</b> */}

        {/* dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 m-0">
            <GiHamburgerMenu className="text-blueviolet-100" size={"2em"} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-[0px]">
            {nav_buttons.map((nav, i) => (
              <li className="my-1">
                <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                  <NavLink
                    to={nav.path}
                    className={`no-underline text-blueviolet-100 text-center w-full ${location.pathname === nav.path ? "active" : ""}`}
                  >
                    <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg font-normal md:font-bold">{nav.title}</b>
                  </NavLink>
                </div>
              </li>
            ))}

            <li className="my-1">
              <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                <NavLink to={"/login"} className={`no-underline text-blueviolet-100 text-center w-full `}>
                  <b className="flex-1 relative cursor-pointer text-blueviolet-100 text-lg font-normal md:font-bold">Login</b>
                </NavLink>
              </div>
            </li>
            <li className="my-1">
              <div className="h-[21px] flex flex-col items-start justify-start gap-[2px] text-blueviolet-100 ">
                <NavLink to={"/signup"} className={`no-underline text-blueviolet-100 text-center w-full `}>
                  <b className="flex-1 relative cursor-pointer text-salmon-200 text-lg font-normal md:font-bold">Signup</b>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
