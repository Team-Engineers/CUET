import React, { useState, useContext, useEffect } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import googlePng from "../../assets/pngimg.com - google_PNG19635.png";
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userLoggedIn);
  }, [userLoggedIn]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { username, password });
    setUserLoggedIn(true);
    navigate("/");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };
  return (
    <>
      <div className="md:w-[30vw]">
        <h2 className="hidden md:block relative right-[1vw] md:text-[2.5vw] md:text-blueviolet-100">Login</h2>
        <form action="" className="flex flex-col items-center justify-center mt-[0.8vw] md:items-start" onSubmit={e => e.preventDefault()}>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="username" className=" mt-[2vw] my-[1vw] text-start font-bold  text-black text-[15px] sm:text-[1.4vw]">
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
              className="max-md:mt-2  bg-[#c5c5c5] font-semibold md:p-[1vw] p-3 py-4 md:py-[1.2vw] w-[300px] border rounded-[20px] text-[15px] border-none sm:text-[1.2vw] md:w-[30vw] text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className=" mt-[2vw] my-[1vw] text-start font-bold  text-black text-[15px] sm:text-[1.4vw]">
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
              className="max-md:mt-2  bg-[#c5c5c5] font-semibold md:p-[1vw] p-3 py-4 md:py-[1.2vw] w-[300px] border rounded-[20px] text-[15px] border-none sm:text-[1.2vw] md:w-[30vw] text-black"
            />
          </div>
          <div className="text-sm flex my-[1.2vw] max-md:my-4 gap-2 w-80 md:ml-[1.5vw]">
            <p>
              {" "}
              <input type="checkbox" className=" checked:bg-gray-300 h-4 w-4 rounded" style={{ backgroundColor: '#c5c5c5', cursor: 'pointer' }} />
            </p>
            <p type="button" className="font-bold   text-blue-600 underline hover:text-blue-500 text-[1vw] max-md:text-[15px]" onClick={handleForgotPassword}>
              forgot password?
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <button
              type="submit"
              className="max-md:w-[129px] w-[15vw] max-md:px-6 px-[2vw] max-md:py-4 py-[1.3vw] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-[#ffffffcd] text-center rounded-full cursor-pointer border-none text-[1.5vw] max-md:text-[18px]"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="flex items-center max-md:mt-1 my-1 md:ml-[1.5vw]">
              <p className="px-2 max-md:text-[16px] text-[1.3vw]">Login with:</p>
              <img src={googlePng} alt="" className="w-10" />
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
