import { Link } from "react-router-dom";

const DomainTopic = ({ img_path, text, color, path }) => {
  return (
    <div className={`sm:w-[290px] transition-all duration-100 hover:scale-[105%]  sm:h-[300px] w-[250px] h-[270px]  flex justify-center items-center relative z-10 rounded-2xl shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)] ${color} m-3`}>
        <Link to={path} className="no-underline flex flex-col items-center">
          <img className="w-[100px] h-[100px] relative z-10" loading="eager" alt="" src={img_path} />
          <h1 className="text-5xl md:text-[30px] mx-auto  text-white md:w-40 w-20 text-center">
            {text}
          </h1>
        </Link >
      </div>
  );

};

export default DomainTopic;
