const Universities = () => {
  return (
    <div className="2xl:max-w-[80vw] w-full min-h-[100vh] md:min-h-[60vh] h-full flex flex-col justify-around items-center lg:flex-row ">
      <div className="mx-2">
        <table className="border-collapse table min-w-[45vw] rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]">
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
          <tbody>
            <tr>
              <td style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                <img src="/uni_icon1.png" />
              </td>
              <td style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>Assam University</td>
            </tr>
            <tr>
              <td style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                <img src="/uni_icon2.png" />
              </td>
              <td style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>Central Sanskrit University</td>
            </tr>
            <tr>
              <td style={{ borderBottom: "2px solid rgba(203, 213, 225, 1)" }}>
                <img src="/uni_icon3.png" />
              </td>
              <td style={{ borderBottom: "2px solid  rgba(203, 213, 225, 1)" }}>Guru Gobind Singh Indraprastha University</td>
            </tr>
            <tr>
              <td>
                <img src="/uni_icon4.png" />
              </td>
              <td>University Of Jammu</td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src="/uni_building.png" className="w-72 h-72 md:w-96 md:h-96" />
    </div>
  );
};

export default Universities;
