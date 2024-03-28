import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../utils/constants";
import { useAuth } from "../../utils/context";
// import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
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
        const { password, ...userWithoutSensitiveFields } = res.user;
        setAuth({ user: userWithoutSensitiveFields, accessToken: tokenData });
        localStorage.setItem("auth", JSON.stringify({
          user: userWithoutSensitiveFields,
          accessToken: tokenData,
        }));
        navigate("/");
        setLoading(false);
      } else {
        toast.error("Google authentication failed");
        setLoading(false);

      }
    } catch (error) {
      toast.error("Google authentication failed");
      setLoading(false);
    }
  };

  const handleGoogleLoginError = (error) => {
    toast.error("Google login failed");
    setLoading(false);

  };
  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${API}/auth/signin`, { email: username, password });
      if (response.status === 200) {
        const { accessToken, password, ...userInfo } = response.data;
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
        axios.post(
          `${API}/scores/create-test-scores/${userInfo._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        toast.success("Login successful");

        setTimeout(() => {
          navigate("/");
        }, 1000);

        setLoading(false);
      } else {
        setLoading(false);
        toast.error("Wrong Username or Password!");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="lg:w-[30vw]">
        <h2 className="hidden lg:block relative right-[1vw] lg:text-[2.5vw] lg:text-blueviolet-100">Login</h2>
        <form action="" className="flex flex-col items-center justify-center mt-[0.8vw] lg:items-start" onSubmit={(e) => e.preventDefault()}>
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
              className="max-lg:mt-2  bg-[#c5c5c5] font-semibold lg:p-[1vw] p-3 py-4 lg:py-[1.2vw] w-[300px] border rounded-[20px] text-[15px] border-none sm:text-[1.2vw] lg:w-[30vw] text-black"
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
              className="max-lg:mt-2  bg-[#c5c5c5] font-semibold lg:p-[1vw] p-3 py-4 lg:py-[1.2vw] w-[300px] border rounded-[20px] text-[15px] border-none sm:text-[1.2vw] lg:w-[30vw] text-black"
            />
          </div>
          <div className="text-sm flex my-[1.2vw] max-lg:my-4 gap-2 w-80 lg:ml-[1.5vw]">
            {/* <p>
              {" "}
              <input type="checkbox" className=" checked:bg-gray-300 h-4 w-4 rounded" style={{ backgroundColor: '#c5c5c5', cursor: 'pointer' }} />
            </p> */}
            {/* <p type="button" className="font-bold   text-blue-600 underline hover:text-blue-500 text-[1vw] max-lg:text-[15px]" >
              forgot password?
            </p> */}
            <Link to="/forgot-password" className="font-bold   text-blue-600 underline hover:text-blue-500 text-[1vw] max-lg:text-[15px]">Forgot Password?</Link>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <button
              type="submit"
              className="max-lg:w-[129px] w-[15vw] max-lg:px-6 px-[2vw] max-lg:py-4 py-[1.3vw] bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-[#ffffffcd] text-center rounded-full cursor-pointer border-none text-[1.5vw] max-lg:text-[18px]"
              onClick={handleLogin}
            >
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              {!loading && <span>Log In</span>}{" "}  </button>

            <div className="flex items-center max-lg:mt-1 my-1 lg:ml-[1.5vw]">
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