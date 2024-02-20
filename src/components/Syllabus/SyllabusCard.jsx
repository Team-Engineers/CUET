import React from "react";
import png from "../../assets/WhatsApp Image 2024-02-15 at 18.41.14.jpeg";

const SyllabusCard = ({ subject }) => {
  return (
    // <div className='w-[152.1px] h-[139px] border-2 m-2 rounded-xl shadow-lg shadow-gray-600 bg-white px-2 py-2 flex flex-col items-center justify-center text-center'>
    <div className="w-[300px] h-[300px] border-2 m-2 rounded-xl shadow-[7px_7px_7px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col items-center justify-evenly text-center">
      <p className="font-bold text-3xl drop-shadow-[7px_7px_7px_rgba(0,_0,_0,_0.25)]">{subject}</p>
      <img src={png} alt="" className="w-32 h-32" />
      <button className="cursor-pointer rounded-full text-lg border-none bg-indigo text-white px-5 py-3 font-bold shadow-lg shadow-gray-600">
        View/ Download PDF
      </button>
    </div>
  );
};

export default SyllabusCard;
