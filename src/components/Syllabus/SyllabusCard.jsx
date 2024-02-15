import React from 'react'

const SyllabusCard = ({subject}) => {
  return (
    <div className='w-[152.1px] h-[139px] bg-white border-2 m-2 rounded-xl'>
        <p>{subject}</p>
    </div>
  )
}

export default SyllabusCard