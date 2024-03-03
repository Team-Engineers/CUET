import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { API } from "../../utils/constants";
import { CgSpinner } from "react-icons/cg";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true); 
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
        setAuth({ user: res.user, accessToken: tokenData });
        localStorage.setItem("auth", JSON.stringify({
          user: res.user,
          accessToken: tokenData,
        }));
        navigate("/");
        setLoading(false); 
      } else {
        console.error("Google authentication error:", response);
        toast.error("Google authentication failed");
        setLoading(false); 

      }
    } catch (error) {
      console.error("Google authentication error:", error);
      toast.error("Google authentication failed");
      setLoading(false); 
    }
  };

  const handleGoogleLoginError = (error) => {
    console.error("Google Login Error:", error);
    toast.error("Google login failed");
    setLoading(false); 

  };
  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${API}/auth/signin`, { email: username, password });
      if (response.status === 200) {
        const { accessToken, ...userInfo } = response.data;
        const tokenExpiry = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
        const tokenData = {
          token: accessToken,
          expiry: tokenExpiry,
        };
        setAuth({ user: userInfo, accessToken: tokenData });
        localStorage.setItem("auth", JSON.stringify({
          user: userInfo,
          accessToken: tokenData,
        }));
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
    setLoading(false);

  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <>
      <div className="md:w-[30vw]">
        <h2 className="hidden md:block relative right-[1vw] md:text-[2.5vw] md:text-blueviolet-100">Login</h2>
        <form action="" className="flex flex-col items-center justify-center mt-[0.8vw] md:items-start" onSubmit={(e) => e.preventDefault()}>
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
            {/* <p>
              {" "}
              <input type="checkbox" className=" checked:bg-gray-300 h-4 w-4 rounded" style={{ backgroundColor: '#c5c5c5', cursor: 'pointer' }} />
            </p> */}
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
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              {!loading && <span>Log In</span>}{" "}  </button>

            <div className="flex items-center max-md:mt-1 my-1 md:ml-[1.5vw]">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={handleGoogleLoginError}
                disabled={loading}
              >
                {loading ? (
                  <CgSpinner size={20} className="mt-1 animate-spin mr-2" />
                ) : (
                  <span>Login with Google</span>
                )}
              </GoogleLogin>
            </div>{" "}
          </div>
        </form>
        <ToastContainer />

      </div>
    </>
  );
};

export default LoginForm;