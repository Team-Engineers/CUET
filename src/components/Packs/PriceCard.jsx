import React from 'react'
import './css/PackCard.css'

function PriceCard() {
  return (
    <div className='main'>
        <h2 className='title'>Pack Name</h2>
        <h1 className='price'>Rs 3999</h1>
        <p className='description'>
        Supercharge your preparation with
our Jumbo Pack, a comprehensive 
bundle that includes General Test,
General English, and your choice of 
any domain subject
        </p>
        <div className='features'>
            <div className='feature-cont'>
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
      <h4 className='confirmation-btn'>Click here to get started</h4>
    </div>
  )
}

export default PriceCard