import React from 'react'
import { Link } from 'react-router-dom/dist'
const FixedNavbar = () => {
  return (
    <div className="flex abovecontain2 absolute max-md:hidden fixednav mb-4 z-50   right-0 items-center h-[28px]  left-0 justify-center  mx-auto  ">
       <div className="flex  relative ">
      <p className="flex justify-center h-[25px] items-center ">
        <p className='font-medium'>Leap into success: </p> &nbsp; 
        <p> Sign in for a free trial and upgrade your skills with our courses today!</p>
        <Link to="/signup" className='bg-white p-1 signupp border-solid border-[1px] rounded border-black h-[15px] flex justify-center items-center mx-1 text-[10px] px-2 no-underline'>Signup Now</Link>
      </p>
    </div>
    </div>
  )
}

export default FixedNavbar