import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/context";
import { subtopicsData2 } from "../../utils/courses";
import Footer from "../Footer";
import Navbar from "../Navbar";
import DomainContainer from "./DomainContainer";

const CoursesNew = () => {
    const [auth] = useAuth();
    const selectedSubjects = auth?.user?.selectedSubjects || [];

    const filteredSubtopics = subtopicsData2.filter(item => !selectedSubjects.find(subject => subject.subjectName === item.title));

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <img
                src={require("../../assets/images/courses/Ellipsecommerce.png")}
                className="absolute top-0 z-0 left-0"
                alt=""
            />
            <div className="w-full relative z-10 max-w-[1280px] mx-auto mt-8">
                <div className="flex flex-col justify-center text-center my-5 ">
                    <Link
                        className="text-[#5648FC] md:mx-20 mx-10 relative top-[20px] flex items-center  z-20 "
                        to={"/"}
                    >
                        <IoArrowBack size={40} />
                    </Link>
                    <div className="relative z-10 flex  items-center  flex-col  md:mt-[-50px] mt-[-30px]">
                        <h1 className="gradient-text2 items-center flex text-5xl md:text-21xl ">Purchase Courses</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-8">
                            {filteredSubtopics.map((item, index) => (
                                <DomainContainer
                                    key={index}
                                    brick={item.image}
                                    heading={item.title}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-10 relative">
                <img src={require("../../assets/images/courses/commercecircle.png")} className="absolute bottom-0 right-0" alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default CoursesNew;
