import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { z } from "zod";

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
    <div className="max-w-[30rem] w-full px-8 rounded-md Laptops:w-[22rem]tablets:w-full mt-2">
      <div>
        <h2 className="text-start text-4xl font-semibold text-[#5648FC] tablets:hidden mb-4">Sign-Up</h2>
      </div>
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-start text-[24px] sScreens:text-lg text-gray-700">
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
            className="mt-1 bg-[#D9D9D9] font-bold p-3 px-7 w-full border rounded-[20px] shadow-lg shadow-gray-400 "
          />
        </div>
        <div>
          <label htmlFor="email" className="block my-2 text-start text-[24px]  text-gray-700 sScreens:text-lg">
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
            className="mt-1 tex bg-[#D9D9D9] font-bold p-3 px-7 w-full border rounded-[20px] shadow-lg shadow-gray-400"
          />
          {email && <p className="mt-1 text-red-500">{message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block text-md my-2 text-[24px] text-gray-700 sScreens:text-lg">
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
            className="mt-1 tex bg-[#D9D9D9] font-bold p-3 px-7 w-full border rounded-[20px] shadow-lg shadow-gray-400"
          />
          {password && password.length < 9 ? <p className="mt-1 text-red-500">Weak password</p> : ""}
        </div>
        <div className="mt-8 tablets:flex justify-center">
          <button
            type="submit"
            className="py-3 px-7 text-[17px] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-white text-center rounded-full cursor-pointer "
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center tablets:justify-center">
          <p className="px-2 text-sm">Create account with:</p>
          <FaGoogle className="text-blue-500 px-1" size={24} />
          <FaLinkedin className="text-blue-500 px-1" size={24} />
          <FaFacebook className="text-blue-700 px-1" size={24} />
        </div>{" "}
      </form>
    </div>
  );
};

export default SignupForm;
