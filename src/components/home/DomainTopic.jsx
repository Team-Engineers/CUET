const DomainTopic = ({ img_path, text, color }) => {
  return (
    <div className={`lg:w-[20vw] my-5 lg:h-[40vh] w-[50%]   z-[1] rounded-2xl flex justify-center items-center shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)] ${color} m-3`}>
      <div className="flex flex-col items-center p-4">
        <img className="md:w-[126px] md:h-[126px]  w-[100px] h-[100px] relative object-cover z-[2]" loading="eager" alt="" src={img_path} />
        <h1 className="text-5xl md:text-[2em] max-md:max-w-20 max-w-40 text-center">
          {text}
        </h1>
      </div>
    </div>
  );

};

export default DomainTopic;
