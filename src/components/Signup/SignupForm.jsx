import React, {  useState, useContext } from "react";
import {  FaFacebook, FaLinkedin } from "react-icons/fa";
import googlePng from "../../assets/pngimg.com - google_PNG19635.png";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";

// const emailSchema = z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email.");
// const nameSchema = z.string().min(1, { message: "This field has to be filled." })
// const passwordSchema = z.string().min(1, { message: "This field has to be filled." })

const SignupForm = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const signup = () => {
    // console.log("Logging in with:", { name, password });
    setUserLoggedIn(true);
    navigate("/");
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
      <h2 className="hidden md:block text-blueviolet-100 md:text-[2.5vw]">Sign-Up</h2>
      <form className="flex flex-col items-center justify-center mt-[.3vw] md:items-start" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col max-md:mb-4">
          <label htmlFor="name" className=" max-md:mt-[2vw] my-[1vw] text-start font-medium  text-black text-[15px] sm:text-[1.4vw]">
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
            className="max-md:mt-2 bg-[#c5c5c5] font-medium md:p-[1vw] p-3 max-md:py-4 w-[300px] border rounded-[20px] md:rounded-[15px] text-[15px] border-none sm:text-[1.2vw] md:w-[30vw] text-black shadow-md"
            />
        </div>
        <div className="flex flex-col max-md:mb-4 ">
          <label htmlFor="email" className=" max-md:mt-[2vw] my-[1vw] text-start font-medium  text-black text-[15px] sm:text-[1.4vw]">
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
            className="max-md:mt-2 bg-[#c5c5c5] font-medium md:p-[1vw] p-3 max-md:py-4 w-[300px] border rounded-[20px] md:rounded-[15px] text-[15px] border-none sm:text-[1.2vw] md:w-[30vw] text-black shadow-md"
            />
          {email && <p className="mt-1 text-red-500">{message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className=" max-md:mt-[2vw] my-[1vw] text-start font-medium  text-black text-[15px] sm:text-[1.4vw]">
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
            className="max-md:mt-2 bg-[#c5c5c5] font-medium md:p-[1vw] p-3 max-md:py-4 w-[300px] border rounded-[20px] md:rounded-[15px] text-[15px] border-none sm:text-[1.2vw] md:w-[30vw] text-black shadow-md"
            />
          {password && password.length < 9 ? <p className="mt-1 text-red-500">Weak password</p> : ""}
        </div>
        <div className="mt-[1vw] max-md:mt-8 md:flex justify-start">
          <button
            type="submit"
            className="max-md:w-[129px] w-[10vw] md:my-[1vw] max-md:px-6 px-[1.3vw] max-md:py-4 py-[1.1vw] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-[#ffffffcd] text-center rounded-full cursor-pointer border-none text-[1.2vw] max-md:text-[18px]"
            >
            Sign up
          </button>
        </div>
        <div className="flex items-center">
          <p className="px-2 text-sm">Create account with:</p>
          <img src={googlePng} alt="" className="w-10" />
          <FaLinkedin className="text-blue-500 px-1" size={24} />
          <FaFacebook className="text-blue-700 px-1" size={24} />
        </div>{" "}
      </form>
    </div>
  );
};

export default SignupForm;
