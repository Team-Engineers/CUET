import { useNavigate } from "react-router-dom";

const TopicContainer = ({ brick, heading, color }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/test")}
      className=" cursor-pointer flex flex-col items-center justify-evenly box-border text-center text-13xl text-black 
rounded-xl 
shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] h-[300px] w-[300px]
       "
      style={{ background: color }}
    >
      {/* <div
        className="flex flex-col absolute  p-4   shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] h-[250px] w-[230px]  justify-center items-center m-[10px] text-center"
      /> */}
      <img className="w-[120px] h-[120px] " loading="eager" alt="" src={brick} />
      <h1 className="font-semibold ">
        <p className="text-white text-center  mx-auto flex items-center justify-center text-13xl">{heading}</p>
      </h1>
    </div>
  );

  return (
    <div
      onClick={() => navigate("/test")}
      className=" flex flex-col items-center justify-center pt-10 pb-[33px] pr-[76px] pl-[75px] box-border relative gap-[28px] text-center text-13xl text-black font-inter"
    >
      <div
        className="flex flex-col absolute  p-4   rounded-xl shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] h-[250px] w-[230px]  justify-center items-center m-[10px] text-center"
        style={{ background: color }}
      />
      <img
        className="w-[103.86px] h-[103.86px] relative object-cover z-[2]"
        loading="eager"
        alt=""
        src={brick}
      />
      <h1 className="m-0 self-stretch h-[78px] relative text-inherit font-semibold font-inherit inline-block z-[2]">
        <p className="m-0 text-center  mx-auto flex items-center justify-center text-[25px] w-[120px]">
          {heading}
        </p>
      </h1>
    </div>
  );
};

export default TopicContainer;
