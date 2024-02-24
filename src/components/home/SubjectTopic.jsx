import DomainTopic from "./DomainTopic";

const SubjectTopic = () => {
  return (

    <section className=" w-full relative flex flex-col items-center justify-start max-md:mb-5 ">
      <div className="text-7xl md:text-17xl w-full flex flex-col items-center justify-center">
        <div className="min-h-[10vh] flex flex-col items-center justify-around">
          <h1 className="text-blueviolet-100 m-0 mb-2  tracking-[0.02em] text-7xl md:text-21xl font-bold z-10 ">Challenge Yourself</h1>
          <h1 className="m-0 mt-2 inline-block text-5xl md:text-21xl z-10">ATTEMPT FREE MOCK TEST
          </h1>
        </div>
        <div className="h-[70vh] w-[50%] rounded-xl my-0 mx-[!important] absolute top-[7vh] left-[0] bg-thistle [backdrop-filter:blur(50px)] flex flex-row items-end justify-start py-[133px] px-[101px] box-border text-black">
        </div>
      </div>
      <div className="min-h-[60vh] h-full flex justify-center items-center w-full lg:max-w-[80vw]">
        <div className="h-full w-full flex flex-col items-center md:flex-row md:justify-around ">
          <DomainTopic color={"bg-salmon-100"} img_path={"/domain1.png"} text="General English" path={"/test/General%20English"} />
          <DomainTopic color={"bg-darkyellow"} img_path={"/domain2.png"} text="Domain Subjects" path={"/courses"} />
          <DomainTopic color={"bg-darkcyan"} img_path={"/domain3.png"} text="General Test" path={"/test/General%20Test"} />
        </div>
      </div>

      <img src="/bubbles/bubble1.png" alt="" className="absolute max-md:hidden right-0 top-[400px] z-[0]" />

    </section>


  );
};

export default SubjectTopic;
