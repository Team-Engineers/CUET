import React, { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import { API } from "../../utils/constants";
import { CgSpinner } from "react-icons/cg";
import { useAuth } from "../../utils/context";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [, setAuth] = useAuth();
  const navigate = useNavigate();
  const [showVerifyEmailPopup, setShowVerifyEmailPopup] = useState(false);
  const [otp, setOtp] = useState("");
  const [, setEmailVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSendOTP = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/auth/send-otp`, { email });
      setShowVerifyEmailPopup(true);
      setLoading(false);
      console.log( response.data); 
    } catch (error) {
      toast.error(error.response.data.message); 
      console.error("Error sending OTP:", error);
      setLoading(false);
    }
  };
  
  const handleVerifyOTP = async () => {
        setLoading(true);
    try {
      const response = await axios.post(`${API}/auth/verify-otp`, { email, otp });
      setEmailVerified(true);
      console.log(response.data); 
      setShowVerifyEmailPopup(false);
      handleSignUp(); 
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message); 
      console.error("Error verifying OTP:", error);
      setLoading(false);

    }
  };
  
  const handleSignUp = async () => {
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
        console.error("Sign Up failed:", response.data);
        toast.error(response.data.message); 
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      if (error.response) {
        toast.error(error.response.data.message); 
      } else {
        toast.error("An error occurred during sign up");
      }
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
        const res = response.data;
        const tokenExpiry = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
        const tokenData = {
          token: res.accessToken,
          expiry: tokenExpiry,
        };
        setAuth({ user: res.user, accessToken:tokenData });
        localStorage.setItem("auth", JSON.stringify({
          user: res.user,
          accessToken: tokenData,
        }));
        navigate("/");
      } else {
        console.error("Google authentication error:", response);
        toast.error("Google authentication failed");
      }
    } catch (error) {
      console.error("Google authentication error:", error);
      toast.error("Google authentication failed");
    }
  };
  const handleGoogleLoginError = (error) => {
    console.error("Google Login Error:", error);
    toast.error("Google login failed");
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
      <div className="mt-[1vw] max-md:mt-2 md:flex justify-start">
        <button
          type="button"
          onClick={handleSendOTP} 

          className="max-md:w-[129px] w-[10vw] md:my-[1vw] max-md:px-6 px-[1.3vw] max-md:py-4 py-[1.1vw] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-[#ffffffcd] text-center rounded-full cursor-pointer border-none text-[1.2vw] max-md:text-[18px]"
        >
          {loading && (
            <CgSpinner size={20} className="mt-1 animate-spin" />
          )}
          {!loading && <span>Sign Up</span>}{" "}
        </button>
      </div>
      <div className="flex max-md:top-[10px] relative items-center">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={handleGoogleLoginError}
        />   
      </div>
    </form>
    <ToastContainer />

    {showVerifyEmailPopup && (
      <div className="fixed z-50 inset-0 flex items-center justify-center backdrop-blur-[10px] bg-tansparent bg-opacity-75">
        <div className="bg-[#aaaaaa62] backdrop-blur-[15px] p-8 flex flex-col justify-center items-center rounded-md">
          <h3 className="text-lg font-semibold mb-4">Let's Sign You Up</h3>
          <p>Verification code sent to {email} </p>
          <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
          />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setShowVerifyEmailPopup(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-4"
            >
              Cancel
            </button>
            <button
              onClick={handleVerifyOTP}
              className="px-4 py-2 bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-[#ffffffcd] text-white rounded-md"
            >
               {loading && (
            <CgSpinner size={20} className="mt-1 animate-spin" />
          )}
          {!loading && <span>Verify Otp</span>}{" "}
        </button>
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default SignupForm;