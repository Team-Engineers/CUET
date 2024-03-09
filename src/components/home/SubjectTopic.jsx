import DomainTopic from "./DomainTopic";

const SubjectTopic = () => {
  return (
    <section className=" w-full mx-auto lg:h-[600px] ">
      <div>
        <div className="text-7xl md:text-17xl w-full flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center justify-around">
            <h1 className="gradient-text m-0 mb-2 text-center tracking-[0.02em] text-7xl md:text-21xl font-bold z-10 ">
              Challenge Yourself
            </h1>
            <h1 className="m-0 mt-2 gradient-text2  inline-block text-5xl text-center md:text-21xl z-10">
              ATTEMPT FREE MOCK TEST
            </h1>
          </div>
        </div>
        <div className="relative md:top-[-50px] top-[-40px]">
          <div className="md:h-[520px] h-[1000px]  w-[50%]  rounded-xl mb-2 mx-[!important] absolute  left-0 bg-thistle [backdrop-filter:blur(50px)]   box-border text-black"></div>
        </div>

        <div className="mx-[20px] max-lg:flex max-lg:justify-center max-lg:-center my-10 ">
          <div className="md:flex-row flex-col max-w-[1280px] mx-auto flex justify-center md:justify-between  ">
            <DomainTopic
              color={"bg-salmon-100"}
              img_path={"/domain1.png"}
              text="General English"
              path={"/test/General_English"}
            />
            <DomainTopic
              color={"bg-darkyellow"}
              img_path={"/domain2.png"}
              text="Domain Subjects"
              path={"/domain"}
            />
            <DomainTopic
              color={"bg-darkcyan"}
              img_path={"/domain3.png"}
              text="General Test"
              path={"/test/General_Test"}
            />
          </div>
        </div>
      </div>
      <img
        src="/bubbles/bubble1.png"
        alt=""
        className="absolute max-md:hidden right-0 z-0"
      />
    </section>
  );
};

export default SubjectTopic;
