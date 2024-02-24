import React from "react";

const SyllabusCard = ({ subject }) => {
  const { subjectName, image, link } = subject;

  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className=" border-2 m-6 rounded-xl shadow-[7px_7px_7px_0px_rgba(0,_0,_0,_0.25)] bg-white ">
      <div className="flex flex-col p-4 items-center justify-evenly text-center">
        <p className="font-bold max-md:text-[4vw] text-3xl drop-shadow-[7px_7px_7px_rgba(0,_0,_0,_0.25)]">{subjectName}</p>
        <img src={process.env.PUBLIC_URL + `${image}`} alt="" className="w-32 h-32" />
        <button onClick={handleButtonClick} className="cursor-pointer rounded-full max-md:text-[1.5vw] text-md border-none bg-indigo text-white px-5 py-3 font-bold shadow-lg shadow-gray-600">
          View/ Download PDF
        </button>
      </div>

    </div>
  );
};

export default SyllabusCard;