import React from "react";
import { useMemo }  from "react";
const StepGuide = ({ step, stepHeading, description1, description2, propTop, propLeft, selected}) => {
  const componentStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      transition: "transform 0.3s ease-out",
      transformOrigin: "left top",
    };
  }, [propTop, propLeft]);

  return (
    <div className={` flex flex-col items-start justify-start  text-left text-5xl text-gray-200 mb-10 md:mb-22 ${selected && "scale-110" } pr-5`} style={componentStyle}>
      <b className=" flex items-center  text-black text-[18px] md:text-2xl group-hover:text-blueviolet-100">{stepHeading}</b>
      <div className="flex flex-row items-start justify-start ">
        <b className=" text-lg md:mt-5 mt-1 font-semibold">
          <p className="m-0 max-md:text-[12px]">{description1}</p>
        </b>
      </div>
    </div>
  );
};

export default React.memo(StepGuide);