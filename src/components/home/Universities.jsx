import { Link } from "react-router-dom";
import UniImage from "../../assets/images/university-img.png";

const Universities = () => {
  return (
    <div className="md:mx-[30px] mx-[10px]">
       <div className=" max-w-[1280px] mx-auto">
      <h1 className="text-blueviolet-100 my-6  md:text-center">
        Universities Participating in <span className="text-red-500">CUET</span>
      </h1>
      <div className="flex w-full  md:flex-row flex-col justify-between items-center">
        <div className="mx-1 mt-2">
          <table className="border-collapse table  lg:w-[600px]    rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]">
            <thead>
              <tr>
                <th
                  className="bg-[#ACBCFF] text-black text-lg text-left h-11 "
                  style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                  colSpan={2}
                >
                  All Universities
                </th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              <tr>
                <td className="w-9" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  <img alt="" src="/uni_icon1.png" />
                </td>
                <td className="text-left" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  Assam University
                </td>
              </tr>
              <tr>
                <td className="w-9" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  <img alt="" src="/uni_icon2.png" />
                </td>
                <td className="text-left" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  Central Sanskrit University
                </td>
              </tr>
              <tr>
                <td className="w-9" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  <img alt="" src="/uni_icon3.png" />
                </td>
                <td className="text-left" style={{ borderBottom: "2px solid  rgba(203, 213, 225, 1)" }}>
                  Guru Gobind Singh Indraprastha University
                </td>
              </tr>
              <tr>
                <td className="w-9">
                  <img alt="" src="/uni_icon4.png" />
                </td>
                <td className="text-left">University Of Jammu</td>
              </tr>
            </tbody>
          </table>
          <Link to="/university"><p className="w-full font-medium text-right my-5 underline text-[#1877F2] cursor-pointer  " >View More Colleges</p></Link>
        </div>
        <div>
        <img alt="" src={UniImage} className=" max-md:w-[90%]   z-40 " />
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Universities;