import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { z } from "zod";
import googlePng from '../../assets/pngimg.com - google_PNG19635.png'

// const emailSchema = z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email.");
// const nameSchema = z.string().min(1, { message: "This field has to be filled." })
// const passwordSchema = z.string().min(1, { message: "This field has to be filled." })

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const signup = () => {
    // console.log("Logging in with:", { name, password });
  };

  //validation
  function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }
  const handleChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setMessage("Please enter a valid email address");
    } else {
      setMessage("");
    }
  };

  const validatePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordMessage("Weak Password");
    } else {
      setMessage("");
    }
  };
  return (
    <div className="">
      <h2 className="hidden md:block text-blueviolet-100 text-[36px]">Sign-Up</h2>
      <form className="flex flex-col items-center justify-center mt-5 md:items-start" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="text-start font-bold  text-gray-700 text-[15px] sm:text-[18px] "
          >
            Name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 bg-[#D9D9D9] font-semibold p-3 w-80 border rounded-[20px] text-[15px] border-none sm:text-[18px] text-gray-300 shadow-lg shadow-[#00000040] md:w-72 lg:w-80"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="text-start font-bold  text-gray-700 text-[15px] sm:text-[18px]"
          >
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            className="mt-1 bg-[#D9D9D9] font-semibold p-3 w-80 border rounded-[20px] text-[15px] border-none sm:text-[18px] text-gray-300 shadow-lg shadow-[#00000040] md:w-72 lg:w-80"
          />
          {email && <p className="mt-1 text-red-500">{message}</p>}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-start font-bold  text-gray-700 text-[15px] sm:text-[18px]"
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
            placeholder="8+ Password"
            onChange={validatePassword}
            className="mt-1 bg-[#D9D9D9] font-semibold p-3 w-80 border rounded-[20px] text-[15px] border-none sm:text-[18px] text-gray-300 shadow-lg shadow-[#00000040] md:w-72 lg:w-80"
          />
          {password && password.length < 9 ? (
            <p className="mt-1 text-red-500">Weak password</p>
          ) : (
            ""
          )}
        </div>
        <div className="mt-8 md:flex justify-start">
          <button
            type="submit"
            className="py-3 px-7 text-[17px] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-white text-center rounded-full cursor-pointer border-none"
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center">
          <p className="px-2 text-sm">Create account with:</p>
          <img src={googlePng} alt="" className="w-10"/>
          <FaLinkedin className="text-blue-500 px-1" size={24} />
          <FaFacebook className="text-blue-700 px-1" size={24} />
        </div>{" "}
      </form>
    </div>
  );
};

export default SignupForm;
