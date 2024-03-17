import { Link } from "react-router-dom";
const DomainContainer = ({ brick, heading, color, subheading }) => {
  console.log(heading)
  return (
    <div >
      {heading === "Psychology" || heading === "Sociology" ? (
        < div
          style={{ background: color }}
          className="sm:w-[290px] flex-col transition-all duration-100 hover:scale-[105%] no-underline sm:h-[300px] w-[250px] h-[270px]  flex justify-center items-center relative z-10 rounded-2xl shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)]">
          <div
            className="no-underline flex flex-col items-center"
          >
            <img className="w-[100px] h-[100px] relative z-10" loading="eager" alt="" src={brick} />
            <h1 className="text-5xl md:text-[30px] flex justify-center items-center text-white md:w-40 w-20 text-center">
              {heading}
            </h1>

          </div>
          <p className="text-white bg-[#c93f35e7] border-dashed border-white border-t-[1.5px] whitespace-nowrap border-l-0 border-r-0 border-b-[1.5px] w-full py-1 ">
            Coming Soon...
          </p>
        </div>
      ) : (<Link className="no-underline" to={`/test/${heading}`}
      >
        < div
          style={{ background: color }}
          className="sm:w-[290px] flex-col transition-all duration-100 hover:scale-[105%] no-underline sm:h-[300px] w-[250px] h-[270px]  flex justify-center items-center relative z-10 rounded-2xl shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)]">
          <div
            className="no-underline flex flex-col items-center"
          >
            <img className="w-[100px] h-[100px] relative my-2  z-10" loading="eager" alt="" src={brick} />
            <h1 className="text-5xl md:text-[30px] flex justify-center items-center text-white md:w-40 w-20 text-center">
              {heading}
            </h1>
          </div>
        </div>
      </Link>)
      }
    </div>
  );
};

export default DomainContainer;


