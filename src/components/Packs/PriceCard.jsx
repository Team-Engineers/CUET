import React from 'react'
import './css/PackCard.css'

function PriceCard() {
  return (
    <div className=' bg-[#121c4368] backdrop-blur[40px] border-[1px] rounded-2xl border-[#121c43] text-center h-[500px] text-white m-3'>
      <div className='p-2 py-4 pt-10'>
      <h2 className='text-[25px] p-1 w-[80%] mx-auto rounded-3xl text-black bg-[#38d4e2]'>Pack Name</h2>
      <h1 className='text-10xl'>Rs 3999</h1>
      <p className='text-[12px]'>
        Supercharge your preparation with
        our Jumbo Pack, a comprehensive
        bundle that includes General Test,
        General English, and your choice of
        any domain subject
      </p>
      <div className='features text-[20px]'>
        <div className='feature-cont '>
          <div className='icon'></div>
          <div className='feature-name'>
            General English
          </div>
        </div>
        <div className='feature-cont'>
          <div className='icon'></div>
          <div className='feature-name'>
            General Test
          </div>
        </div> <div className='feature-cont'>
          <div className='icon'></div>
          <div className='feature-name'>
            Any Domain Subject
          </div>
        </div>
      </div>
      <h4 className='confirmation-btn text-[20px] p-2 mt-14 rounded-3xl mx-auto w-[80%]  bg-[#1754b0]'>Click here to get started</h4>
      </div>
     
    </div>
  )
}

export default PriceCard