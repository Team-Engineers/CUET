import { Link } from "react-router-dom";
const TopicContainer = ({ brick, heading, color }) => {

  return (
       <Link to={`/test/${heading}`}
      className=" no-underline cursor-pointer flex flex-col items-center justify-evenly box-border text-center text-13xl text-black 
rounded-xl 
shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] h-[300px] w-[300px]
       "
      style={{ background: color }}
    >
   
      <img className="w-[120px] h-[120px] " loading="eager" alt="" src={brick} />
      <h1 className="font-semibold ">
        <p className="text-white text-center  mx-auto flex items-center justify-center text-13xl">{heading}</p>
      </h1>
    </Link>
  );
};

export default TopicContainer;
