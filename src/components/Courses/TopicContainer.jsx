import { Link } from "react-router-dom";
const TopicContainer = ({ brick, heading, color }) => {

  return (
    <Link to={`/test/${heading}`}
      className=" no-underline cursor-pointer flex flex-col items-center justify-evenly box-border text-center text-13xl text-black 
rounded-xl 
shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] lg:w-[20vw] my-5 lg:h-[40vh] h-[300px] w-[300px]
       "
      style={{ background: color }}
    >

      <img className="md:w-[8vw] md:h-[15vh]  w-[100px] h-[100px] " loading="eager" alt="" src={brick} />
      <h1 className="text-5xl md:text-[2vw] text-white max-md:max-w-20 max-w-40 text-center">
      {heading}
      </h1>
    </Link>
  );
};

export default TopicContainer;