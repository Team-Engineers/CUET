import React from "react";
import logo from '../../assets/logo_final.png'
import { useNavigate } from "react-router";
import { useAuth } from "../../utils/context";

const Navbar = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      accessToken: "",
    });
    localStorage.removeItem("auth");
    console.log("Logout Successfully");
  };
  const navigate = useNavigate()
  return (
    <div className="flex justify-between  px-2 items-center lg:px-4 py-2">
      <div className="flex items-center m-3 gap-2 cursor-pointer" onClick={() => {navigate("/")}}>
        <img src={logo} alt="" className="w-4 h-6 lg:w-[30px] lg:h-[40px]"/>
        <p className="text-blueviolet-100 font-semibold text-lg">CUET-TestKnock</p>
      </div>
      <div className="flex m-3 items-center gap-2">
        <button onClick={() => {navigate("/")}} className="px-3 py-2 bg-blueviolet-400 border-none text-white rounded-full lg:px-3 text-lg lg:py-2 flex items-center cursor-pointer">Home</button>
        <button onClick={handleLogout} className="px-3 py-2 text-white rounded-full bg-tomato-100 border-none lg:px-3 text-lg lg:py-2 cursor-pointer ">Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
