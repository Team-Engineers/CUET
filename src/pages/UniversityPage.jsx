import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
    central_universities,
    deemed_universities,
    listuniversities,
    other_universities,
    private_universities,
    state_universities,
} from "../utils/universitydata";

const UniversitySection = ({ universities, id, title }) => {
    const getRandomColor = () => {
        const letters = "ADCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };

    return (
        <>
            <div>
                <h2 className="p-5 gradient-text2 font-extrabold">{title}</h2>
            </div>
            <div className="grid mx-auto max-w-[1200px] md:grid-cols-3 grid-cols-2" id={id}>
                {universities.map((university, index) => (
                    <div
                        className="flex flex-col rounded-xl p-2 shadow-lg hover:scale-105 transition-all duration-100 border-[1px] border-solid border-black h-[35vw] w-[35vw] md:h-[200px] md:w-[200px] justify-center items-center m-[10px] text-center"
                        key={index}
                        style={{ backgroundColor: getRandomColor() }} 
                    >
                        <a target="_blank" rel="noreferrer" className="hover:underline no-underline text-black" href={university.link}>
                            <div>
                                <img
                                    className="w-[50px] mb-[20px] h-[50px] mx-auto"
                                    src={university.cuimg}
                                    alt={university.cuname}
                                />
                            </div>
                            <div>
                                <p className="md:text-[15px] text-black font-medium text-[2.5vw]">{university.cuname}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

const AllUniversities = () => {
    return (
        <div className="max-w-[400px]">
            <div className="flex text-center flex-col">
                <a
                    href="#central"
                    className=" bg-black border-[1px] border-black border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]"
                >
                    Central Universities
                </a>
                <a href="#state" className=" bg-black gradient-text2 border-[1px] border-black border-solid p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    State Universities
                </a>
                <a href="#deemed" className=" bg-white border-[1px] border-black border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    Deemed Universities
                </a>
                <a href="#private" className=" bg-white border-[1px] border-black border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    Private Universities
                </a>
                <a href="#other" className=" bg-white border-[1px] border-black border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    Other Universities
                </a>
            </div>
            <h1 className=" border-black border-solid  gradient-text2 rounded px-4 py-2">List of Universities</h1>

            {listuniversities.map((university, index) => (
                <div
                    className=" border-[1px] border-black border-solid p-3 rounded-lg justify-center items-center m-[10px]"
                    key={index}
                >
                    <a target="_blank" rel="noreferrer" href={university.link}> <p className="md:text-[1vw] text-[2.5vw] hover:underline">{university.university}</p></a>

                </div>
            ))}
        </div>
    );
};

const University = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="flex mb-[20px] mt-[10px] gap-[1vw] flex-col lg:flex-row  justify-center mx-auto max-w-[1280px]">
                <div className="mx-auto">
                    <UniversitySection universities={central_universities} id="central" title="Central Universities" />
                    <UniversitySection universities={state_universities} id="state" title="State Universities" />
                    <UniversitySection universities={deemed_universities} id="deemed" title="Deemed Universities" />
                    <UniversitySection universities={private_universities} id="private" title="Private Universities" />
                    <UniversitySection universities={other_universities} id="other" title="Other Universities" />
                </div>
                <div className="mx-auto">
                    <h2 className="p-5 font-extrabold underline  gradient-text2">All Universities</h2>
                    <AllUniversities />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default University;
