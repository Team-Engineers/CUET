import React from "react";

const SyllabusCard = ({ subject }) => {
  const { subjectName, image, link } = subject;

  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
      <div className="border border-solid border-[#818181] m-6 rounded-xl hover:shadow-[1px_1px_1px_1px_#9089E4] transition-shadow  duration-300 bg-white max-w-[12rem]">
      <div className="flex flex-col items-center justify-center p-4 h-full mt-[-23px] w-[-1.5rem]">
        <p className="font-bold drop-shadow-[7px_7px_7px_rgba(0,_0,_0,_0.25)]  text-center mb-[0.5rem] h-[2rem]">{subjectName}</p>
        <img src={process.env.PUBLIC_URL + `${image}`} alt="" className="w-[6rem] h-[93px] mb-4 m-0" />
        <button onClick={handleButtonClick} className="cursor-pointer rounded-full text-md whitespace-nowrap border-none bg-indigo text-white px-3 py-2 font-bold hover:bg-[#ff7468]">
          View / Download PDF
        </button>
      </div>
    </div>
  );
};

export default SyllabusCard;