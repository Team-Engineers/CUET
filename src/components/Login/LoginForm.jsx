import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

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
    <div className=" w-full p-8 tablets:py-0 rounded-md my-20 tablets:my-0 flex justify-center items-center">
      <div className="max-w-[30em] w-full min-h-[80%]">
        <div>
          <h2 className="mt-2 text-start text-4xl font-semibold text-[#5648FC] tablets:hidden">Login</h2>
        </div>
        <form className="my-12 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div className="my-8">
            <label htmlFor="username" className="block my-2 text-start text-md font-bold  text-gray-700">
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
              className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px]"
            />
          </div>
          <div className="my-8">
            <label htmlFor="password" className="block text-md my-2 text-start font-bold text-gray-700">
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
              className="mt-1 tex bg-[#D9D9D9] font-bold p-3 w-full border rounded-[20px]"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="mt-10 text-sm flex pl-4">
              <p>
                {" "}
                <input type="checkbox" />
              </p>
              <p type="button" className="font-medium pl-2 text-blue-600 underline hover:text-blue-500" onClick={handleForgotPassword}>
                Forgot password?
              </p>
            </div>
          </div>
          <div className="tablets:flex tablets:flex-col tablets:items-center">
            <button
              type="submit"
              className="w-[40%] p-3 bg-gradient-to-r from-[#89EAFF] to-[#5648FC] text-white text-center rounded-full cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="flex items-center mt-2">
              <p className="px-2 text-sm">Login with:</p>
              <FaGoogle className="text-blue-500 px-1" size={24} />
              <FaFacebook className="text-blue-700 px-1" size={24} />
              <FaLinkedin className="text-blue-500 px-1" size={24} />
            </div>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
