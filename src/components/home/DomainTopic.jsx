const DomainTopic = ({ img_path, text, color }) => {
  return (
    <div className={`w-60 h-60 md:w-72 md:h-72 z-[1] rounded-2xl flex justify-center items-center shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)] ${color} m-3`}>
      <div className="flex flex-col items-center">
        <img className="w-[126px] h-[126px] relative object-cover z-[2]" loading="eager" alt="" src={img_path} />
        <h1 className="text-5xl md:text-[2em] md:max-w-40 text-center">
          {text}
        </h1>
      </div>
    </div>
  );

};

export default DomainTopic;
