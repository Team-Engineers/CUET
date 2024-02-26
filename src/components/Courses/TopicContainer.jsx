import { Link } from "react-router-dom";

const TopicContainer = ({ brick, heading, color, subheading }) => {
  return (
    <div
      style={{ background: color }}
      className="sm:w-[290px] no-underline sm:h-[300px] w-[250px] h-[270px]  flex justify-center items-center relative z-10 rounded-2xl shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)]">
      <Link
        className="no-underline flex flex-col items-center"
        to={subheading === "domain" ? `/test/${subheading}/${heading}` : `/test/${heading}`}
      >
        <img className="w-[100px] h-[100px] relative z-10" loading="eager" alt="" src={brick} />
        <h1 className="text-5xl md:text-[30px] flex justify-center items-center text-white md:w-40 w-20 text-center">
          {heading}
        </h1>

      </Link>
    </div>

  );
};

export default TopicContainer;
