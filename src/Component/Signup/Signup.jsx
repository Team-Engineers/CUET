import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signing in with:", { name,email, password });
  };

  return (
    <div className="h-screen">
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
          <p className="m-[20px] font-bold">Already have an account? </p>
          <NavLink
            to="/login"
            className="text-[#5648FC] text-center p-3 w-[100px] h-[47px] rounded-full cursor-pointer border border-[#5648FC]"
          >
            Log in
          </NavLink>
        </div>
      </div>
      <div className="flex">
        <div className="max-w-[34rem] w-full space-y-8 p-8 px-[50px] mx-[50px] rounded-md">
          <div>
            <h2 className="mt-2 text-start text-4xl font-semibold text-[#5648FC]">
              Sign-Up
            </h2>
          </div>
          <form className="mt-2 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block my-2 text-start text-md font-bold text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px] shadow-lg"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block my-2 text-start text-md font-bold  text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                placeholder=" Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px] shadow-lg"
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
                placeholder="8+ character"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px] shadow-lg"
              />
            </div>
            <div>
              <p
                type="button"
                className="w-[40%] p-3 mt-6 bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-white text-center rounded-full cursor-pointer"
                onClick={handleSignup}
              >
                Sign up
              </p>
            </div>
            <div className="flex items-center ">
              <p className="px-2 text-sm">Create account with:</p>
              <FaGoogle className="text-blue-500 px-1" size={24} />
              <FaFacebook className="text-blue-700 px-1" size={24} />
              <FaLinkedin className="text-blue-500 px-1" size={24} />
            </div>{" "}
          </form>
        </div>
        <div className="flex justify-center items-center">
          <img
            className=" w-[460px] h-[370px] z-10 relative pl-[100px] mb-[180px]"
            src={require("../../assets/signup.png")}
            alt=""
          />
        </div>
        <div className="right-0 absolute overflow-hidden">
          <svg
            width="580"
            height="550"
            viewBox="0 0 654 569"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M55.7403 64.7214C126.84 -33.3385 306.353 -2.40607 467.349 48.9453C621.091 97.983 788.373 181.522 827.882 311.004C868.654 444.622 756.651 526.871 624.67 564.522C472.331 607.98 278.704 636.345 133.766 509.018C-21.9523 372.22 -31.1467 184.554 55.7403 64.7214Z"
              fill="url(#paint0_linear_47_61)"
              fill-opacity="0.6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_47_61"
                x1="178.97"
                y1="-147.853"
                x2="447.835"
                y2="582.026"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00D1FF" />
                <stop offset="1" stop-color="#5648FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Signup;