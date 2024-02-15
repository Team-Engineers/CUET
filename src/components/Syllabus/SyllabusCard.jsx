import React from 'react'
import png from "../../assets/WhatsApp Image 2024-02-15 at 18.41.14.jpeg"

const SyllabusCard = ({subject}) => {
  return (
    <div className='w-[152.1px] h-[139px] border-2 m-2 rounded-xl shadow-lg shadow-gray-600 bg-white px-2 py-2 flex flex-col items-center justify-center text-center'>
        <p className='font-bold '>{subject}</p>
        <img src={png} alt="" />
        <button className='rounded-full border-none bg-indigo text-white px-2 py-2 font-bold shadow-lg shadow-gray-600'>View/ Download PDF</button>
    </div>
  )
}

export default SyllabusCard