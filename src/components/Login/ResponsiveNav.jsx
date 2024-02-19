import React from 'react'
import logo from '../../assets/logo_final.png'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import gif from '../../assets/Animation - 1707298499168.json'
import { useNavigate } from 'react-router-dom'

const ResponsiveNav = () => {
  const navigate = useNavigate()
  return (
    <div
      className='bg-bgGradientCustom w-full md:hidden'
      style={{ borderRadius: "10% 10% 45% 50% / 0% 0% 42% 44%   " }}
    >
      <div className="flex justify-between px-2 pt-2">
        <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate("/")}>
          <img
            className="h-[20.5px] w-[25px] sm:h-[40px]"
            loading="eager"
            alt=""
            src={logo}
          />
          <b className="text-indigo text-xs sm:text-sm">CUET-TestKnock</b>
        </div>
        <div className="flex  items-center gap-1 sm:gap-3">
          <p className="font-semibold text-xs sm:text-sm">
            Don't have an account?{" "}
          </p>
          <Link
            className="bg-[#FF7468] rounded-full text-white no-underline py-1 px-1 text-xs sm:text-sm sm:px-2"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="">
        <div className="mx-4">
          <h3 className="text-[27.8px] text-indigo font-bold sm:text-[30px]">Login</h3>
        </div>
        <div className="flex justify-center">
          <Lottie animationData={gif} loop={true} style={{ width: "25%" }} />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNav