import React from 'react';
import TopicContainer from '../components/Courses/TopicContainer';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../utils/context';
import { subtopicsData1 } from "../utils/courses";

const BoughtPack = () => {
    const [auth, setAuth] = useAuth();
    const selectedSubjects = auth?.user?.selectedSubjects;

    return (
        <div className='overflow-hidden'>
            <Navbar />
            <section className="max-w-[1280px] mb-8 mx-auto">
                <div>
                    <div className="text-7xl md:text-17xl w-full flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-around">
                            <h1 className="m-0 mt-2 gradient-text2 inline-block text-5xl text-center md:text-21xl z-10">
                                Packs You Have Bought
                            </h1>
                        </div>
                    </div>
                    <div className="relative md:top-[-50px] top-[-40px]">
                        <div className="md:h-[520px] h-[1000px] w-[50%] rounded-xl mb-2 mx-[!important] absolute left-0 bg-thistle backdrop-filter blur-2xl box-border text-black"></div>
                    </div>
                    <div className="flex items-center  justify-center">
                        <div className="flex flex-wrap justify-center gap-16 my-8">
                            {selectedSubjects &&
                                selectedSubjects.map((subject, index) => {
                                    return (
                                        <TopicContainer
                                            key={subject._id}
                                            brick={subtopicsData1[index % subtopicsData1.length].image}
                                            heading={subject.subjectName}
                                            color={subtopicsData1[index % subtopicsData1.length].color}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <img
                    src="/bubbles/bubble1.png"
                    alt=""
                    className="absolute max-md:hidden right-0 z-0"
                />
            </section>
            <Footer />
        </div>
    );
};

export default BoughtPack;
