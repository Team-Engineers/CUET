import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import googlePng from '../../assets/pngimg.com - google_PNG19635.png'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { username, password });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };
  return (
    <>
      <div className="md:w-[30vw]">
        <h2 className="hidden md:block md:text-[36px] md:text-blueviolet-100">Login</h2>
        <form
          action=""
          className="flex flex-col items-center justify-center mt-5 md:items-start"
        >
          <div className="flex flex-col">
            {" "}
            <label
              htmlFor="username"
              className=" text-start font-bold  text-gray-700 text-[15px] sm:text-[18px]"
            >
              Username or Email
            </label>
            <input
              required
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 md:mt-2 bg-[#D9D9D9] font-semibold p-3 w-80 border rounded-[20px] text-[15px] border-none sm:text-[18px] md:w-full xl:w-80 2xl:w-[30rem] text-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mt-4  md:mt-5 text-start font-bold  text-gray-700 text-[15px] sm:text-[18px]"
            >
              Password
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 md:mt-2 bg-[#D9D9D9] font-semibold p-3 w-80 border rounded-[20px] text-[15px] border-none sm:text-[18px] md:w-full xl:w-80 2xl:w-[30rem] text-gray-300 "
            />
          </div>
            <div className="text-sm flex gap-2 w-80 md:ml-5">
              <p>
                {" "}
                <input type="checkbox" />
              </p>
              <p
                type="button"
                className="font-medium text-blue-600 underline hover:text-blue-500 text-[15px]"
                onClick={handleForgotPassword}
              >
                forgot password?
              </p>
            </div>
          <div className="flex flex-col items-center md:items-start">
            <button
              type="submit"
              className="w-[129px] px-3 py-2 bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-white text-center rounded-full cursor-pointer border-none text-[18px]"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="flex items-center mt-1 md:ml-5">
              <p className="px-2 text-[16px]">Login with:</p>
              <img src={googlePng} alt="" className="w-10"/>
              <FaLinkedin className="text-blue-500 px-1" size={24} />
              <FaFacebook className="text-blue-700 px-1" size={24} />
            </div>{" "}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
