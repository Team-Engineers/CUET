import React from 'react'
// import './css/PackCard.css'

function PriceCard({height,index}) {

  return (
    <div 
      className={` bg-[#121c4368] backdrop-blur[40px] border-[1px] rounded-2xl border-[#121c43] text-center text-white m-1 w-[18rem]`}
      style=
      {{
        height:height,
        background : (index==2) ? 'linear-gradient(159.85deg, #402E87 9.07%, #402E87 74.25%, #000000 119.2%)' : 'linear-gradient(188.72deg, #5648FC -11.29%, #FFFFFF 111.68%)'
      }}
    >
      <div className='p-2 py-4 pt-10'>
      <h2 className='text-[25px] p-1 w-[80%] mx-auto rounded-3xl text-black text-[#5648fc]' 
        style=
        {{
          backgroundColor : (index == 2) ? 'rgba(225, 231, 253, 1)' : 'rgba(217, 217, 217, 1)'
        }}
      >Pack Name</h2>
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
      <h4 className='confirmation-btn text-sm p-2 mt-14 rounded-3xl mx-auto w-[80%]  bg-[#1754b0] text-start'
        style=
        {{
          background : (index == 2) ? 'linear-gradient(89.47deg, #562EF7 0.25%, rgba(255, 255, 255, 0.4) 55.02%, #562EF7 109.59%)' : 'rgba(255, 255, 255, 1)',
          color : (index == 2) ? 'rgba(255, 255, 255, 1)' : 'rgba(86, 72, 252, 1)'
        }}
      >
        Click here to get started
      </h4>
      </div>
     
    </div>
  )
}

export default PriceCard