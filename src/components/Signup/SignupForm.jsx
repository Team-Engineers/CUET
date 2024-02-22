import React, { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom";
import { API } from "../../utils/constants";
import { CgSpinner } from "react-icons/cg";
import { useAuth } from "../../utils/context";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [, setAuth] = useAuth();

  const handleSignUp = async () => {
    setLoading(true);
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${API}/auth/signup`, userData);
      if (response.status === 200) {
        const { user, accessToken } = response.data;
        const tokenExpiry = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
        const tokenData = {
          token: accessToken,
          expiry: tokenExpiry,
        };
        setAuth({
          user: user,
          accessToken: tokenData,
        });
        localStorage.setItem("auth", JSON.stringify({
          user: user,
          accessToken: tokenData,
        }));
        navigate("/");
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;
      const response = await axios.post(
        `${API}/auth/google-signin`,
        { idToken }
      );

      if (response.status === 200) {
        const user = response.data;
        const tokenExpiry = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
        const tokenData = {
          token: user.accessToken,
          expiry: tokenExpiry,
        };
        setAuth({
          user: user,
          accessToken: tokenData,
        });
        localStorage.setItem("auth", JSON.stringify({
          user: user,
          accessToken: tokenData,
        }));
        navigate("/");
      } else {
        console.error("Google authentication error:", response);
        // toast.error("Google authentication failed");
      }
    } catch (error) {
      console.error("Google authentication error:", error);
      // toast.error("Google authentication failed");
    }
  };
  const handleGoogleLoginError = (error) => {
    console.error("Google Login Error:", error);
    // toast.error("Google login failed");
  };
  const validateEmail = (email) => {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };



  const validatePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordMessage("Weak Password");
    } else {
      setPasswordMessage("");
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value)) {
      setMessage("Please enter a valid email address");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="">
      <h2 className="hidden md:block text-blueviolet-100 md:text-[2.5vw]">Sign-Up</h2>
      <form className="flex flex-col items-center justify-center mt-[.3vw] md:items-start" onSubmit={(e) => e.preventDefault()}>
        {/* Name Input */}
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
        {/* Email Input */}
        <div className="flex flex-col max-md:mb-4 ">
          <label htmlFor="email" className=" max-md:mt-[2vw] my-[1vw] text-start font-medium  text-black text-[15px] sm:text-[1.4vw]">
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            className="max-md:mt-2 bg-[#c5c5c5] font-medium md:p-[1vw] p-3 max-md:py-4 w-[300px] border rounded-[20px] md:rounded-[15px] text-[15px] border-none sm:text-[1.2vw] md:w-[30vw] text-black shadow-md"
          />
          {email && <p className="mt-1 text-red-500">{message}</p>}
        </div>
        {/* Password Input */}
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
          {password && password.length < 9 ? <p className="mt-1 text-red-500">{passwordMessage}</p> : ""}
        </div>
        {/* Sign up Button */}
        <div className="mt-[1vw] max-md:mt-8 md:flex justify-start">
          <button
            type="button"
            onClick={handleSignUp}
            className="max-md:w-[129px] w-[10vw] md:my-[1vw] max-md:px-6 px-[1.3vw] max-md:py-4 py-[1.1vw] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-[#ffffffcd] text-center rounded-full cursor-pointer border-none text-[1.2vw] max-md:text-[18px]"
          >
            {loading && (
              <CgSpinner size={20} className="mt-1 animate-spin" />
            )}
            {!loading && <span>Sign Up</span>}{" "}
          </button>
        </div>
        {/* Social Login */}
        <div className="flex items-center">
        <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={handleGoogleLoginError}
              />   
          {/* <p className="px-2 text-sm">Create account with:</p>
            
                   <FaLinkedin className="text-blue-500 px-1" size={24} />
          <FaFacebook className="text-blue-700 px-1" size={24} /> */}
        </div>
      </form>
      <ToastContainer />

    </div>
  );
};

export default SignupForm;
