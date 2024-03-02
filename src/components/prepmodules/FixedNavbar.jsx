import React from 'react'
import { Link } from 'react-router-dom/dist'
const FixedNavbar = () => {
  return (
         <div className="flex absolute right-0  z-20 left-0 justify-center   mx-auto ">
          <img className='absolute z-0 w-full h-[30px]' src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/11/stripBG.png" alt="" />
       <div className="flex relative ">
       <p className="flex  h-[25px]  ">
      <p className='font-medium'>Leap into success: </p> &nbsp; 
        <p> Sign in for a free trial and upgrade your skills with our courses today!</p>
        <Link to="/signup" className='bg-white signupp p-1 border-solid border-[1px] rounded border-black h-[25px] flex justify-center items-center mx-1 text-[10px] px-2 no-underline'>Signup Now</Link>
      </p>
    </div>
    </div>
  )
}

export default FixedNavbar