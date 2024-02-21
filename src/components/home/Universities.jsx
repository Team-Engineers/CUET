const Universities = () => {
  return (
    <div className="xl:max-w-[95vw] 2xl:max-w-[80vw] w-full flex  max-2xl:mt-[3vw] flex-col justify-evenly items-center ">
      <h1 className="text-blueviolet-100 mb-4 max-md:ml-3 max-md:mr-10">
        Universities Participating in <span className="text-red-500">CUET</span>
      </h1>
      
      <div className="w-full  md:min-h-[60vh] h-full  flex flex-col justify-around items-center lg:flex-row ">
        <div className="mx-2">
          <table className="border-collapse table  md:w-[500px] max-md:max-w-[400px]  rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]">
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
                <td className="w-10" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  <img src="/uni_icon1.png" />
                </td>
                <td className="text-left" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  Assam University
                </td>
              </tr>
              <tr>
                <td className="w-10" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  <img src="/uni_icon2.png" />
                </td>
                <td className="text-left" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  Central Sanskrit University
                </td>
              </tr>
              <tr>
                <td className="w-10" style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                  <img src="/uni_icon3.png" />
                </td>
                <td className="text-left" style={{ borderBottom: "2px solid  rgba(203, 213, 225, 1)" }}>
                  Guru Gobind Singh Indraprastha University
                </td>
              </tr>
              <tr>
                <td className="w-10">
                  <img src="/uni_icon4.png" />
                </td>
                <td className="text-left">University Of Jammu</td>
              </tr>
            </tbody>
          </table>
          <p className="w-full text-right underline text-[#1877F2] cursor-pointer my-3">View More Colleges</p>
        </div>
        <img src="/uni_building.png" className="w-72 h-72 md:h-[400px] md:w-[400px] z-40" />
      </div>
    </div>
  );
};

export default Universities;
