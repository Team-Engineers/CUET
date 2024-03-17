import React, { useMemo } from "react";
const StepGuide = ({ step, stepHeading, description1, description2, propTop, propLeft, selected }) => {
  const componentStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      transition: "transform 0.3s ease-out",
      transformOrigin: "left top",
    };
  }, [propTop, propLeft]);

  return (
    <div className={` flex flex-col items-start justify-start  max-md:mr-4 text-left text-5xl text-gray-200 mb-6 max-md:pr-5 max-md:mb-10  ${selected && "scale-110 mr-5"} `} style={componentStyle}>
      <b className=" flex items-center  text-black text-[18px] md:text-[15px] group-hover:text-blueviolet-100">{stepHeading}</b>
      <div className="flex flex-row items-start justify-start ">
        <b className=" text-lg md:mt-2 mt-1 font-semibold">
          <p className="m-0 max-md:text-[12px]">{description1}</p>
        </b>
      </div>
    </div>
  );
};

export default React.memo(StepGuide);