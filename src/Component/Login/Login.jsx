import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { username, password });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };
  return (
    <div>
      <div className="flex absolute -z-10">
        <svg
          width="507"
          height="582"
          viewBox="0 0 607 682"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-175.367 96.9523C-100.325 -34.4917 79.6047 -36.9411 240.166 -11.2132C393.492 13.3555 559.288 75.7876 594.688 220.345C631.219 369.518 580.356 567.768 446 641C290.921 725.528 94.7698 670.582 -47 551.5C-199.314 423.561 -267.072 257.582 -175.367 96.9523Z"
            fill="url(#paint0_linear_37_33)"
            fill-opacity="0.6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_37_33"
              x1="-43.8452"
              y1="-181.273"
              x2="393.001"
              y2="501.49"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00D1FF" />
              <stop offset="1" stop-color="#5648FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex mx-[10px]  flex-row items-center justify-between gap-[7px]">
        <div className="flex m-3 flex-row items-center">
          <img
            className="h-[40.5px] m-2 w-[30px] relative object-cover"
            loading="eager"
            alt=""
            src={require("../../assets/logo_final.png")}
          />
          <b className="relative text-[#5648FC]">CUET-TestKnock</b>
        </div>
        <div className="flex items-center">
          <p className="m-[20px] font-bold">Don't have an account? </p>
          <NavLink
            to="/signup"
            className="bg-[#FF7468] text-white text-center p-3 w-[120px] h-[45px] rounded-full cursor-pointer"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
      <div className="flex">
        <div>
          <img
            className=" w-[500px] h-[350px] pl-[100px] pr-[50px] py-[20px] mr-[60px] "
            src={require("../../assets/Animation - 1706958357226.gif")}
            alt=""
          />
        </div>
        <div className="max-w-[24rem] w-full space-y-8 p-8  rounded-md">
          <div>
            <h2 className="mt-2 text-start text-4xl font-semibold text-[#5648FC]">
              Login
            </h2>
          </div>
          <form className="mt-2 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="username"
                className="block my-2 text-start text-md font-bold  text-gray-700"
              >
                Username or Email
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px]"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-md my-2 text-start font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px]"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm flex pl-4">
                <p>
                  {" "}
                  <input type="checkbox" />
                </p>
                <p
                  type="button"
                  className="font-medium pl-2 text-blue-600 underline hover:text-blue-500"
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </p>
              </div>
            </div>
            <div>
              <p
                type="button"
                className="w-[40%] p-3 bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-white text-center rounded-full cursor-pointer"
                onClick={handleLogin}
              >
                Login
              </p>
            </div>
            <div className="flex items-center ">
              <p className="px-2 text-sm">Login with:</p>
              <FaGoogle className="text-blue-500 px-1" size={24} />
              <FaFacebook className="text-blue-700 px-1" size={24} />
              <FaLinkedin className="text-blue-500 px-1" size={24} />
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
