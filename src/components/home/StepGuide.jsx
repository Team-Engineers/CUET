import { useMemo } from "react";

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
    // <div
    //   className="absolute h-[20px] top-[101px] hover:scale-110 left-[1009px] flex flex-col items-start justify-start pt-0 pb-[7px] pr-[22px] pl-0.5 gap-[13px] z-[3] text-left text-5xl text-gray-200 font-inter"
    //   style={componentStyle}
    // >
    <div className={` flex flex-col items-start justify-start  text-left text-5xl text-gray-200 mb-32 ${selected && "scale-110" } pr-5`} style={componentStyle}>
      <b className=" flex items-center min-h-10 text-black text-2xl group-hover:text-blueviolet-100">{stepHeading}</b>
      <div className="flex flex-row items-start justify-start ">
        <b className=" text-lg mt-5 font-semibold">
          <p className="m-0">{description1}</p>
        </b>
      </div>
    </div>
  );
};
export default StepGuide;
