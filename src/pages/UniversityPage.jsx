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
    // const getRandomColor = () => {
    //     const letters = "6789AB";
    //     let color = "#";
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * letters.length)];
    //     }
    //     return color;
    // };


    const getRandomColor = () => {
        const hue = Math.floor(Math.random() * 360);

        const saturation = Math.floor(Math.random() * 50) + 50;
        const lightness = Math.floor(Math.random() * 40) + 30;

        const hslToRgb = (h, s, l) => {
            const hueToRgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            const r = hueToRgb(p, q, h + 1 / 3);
            const g = hueToRgb(p, q, h);
            const b = hueToRgb(p, q, h - 1 / 3);

            return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
        };

        return hslToRgb(hue / 360, saturation / 100, lightness / 100);
    };


    return (
        <>
            <div>
                <h2 className="p-5 gradient-text2 text-[4vh] font-bold">{title}</h2>
            </div>
            <div className="grid mx-auto max-w-[1200px] grid-cols-2 md:grid-cols-3" id={id}>
                {universities.map((university, index) => (
                    <div
                        className="flex flex-col rounded-xl p-2 shadow-lg hover:scale-105 transition-all duration-100 border-[1px] border-solid border-gray-400 h-[35vw] w-[35vw] md:h-[165px] md:w-[165px] justify-center items-center m-[12px] text-center"
                        key={index}
                        style={{ boxShadow: `0 4px 6px ${getRandomColor()}, 0 1px 3px ${getRandomColor()}` }}
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
                                <p className="md:text-[14px] text-gray-800 font-medium text-[2.3vw]">{university.cuname}</p>
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
                    className="border-[1px] border-gray-500 border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]"
                >
                    Central Universities
                </a>
                <a href="#state" className="gradient-text2 border-[1px] border-gray-500 border-solid p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    State Universities
                </a>
                <a href="#deemed" className="border-[1px] border-gray-500 border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    Deemed Universities
                </a>
                <a href="#private" className="border-[1px] border-gray-500 border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    Private Universities
                </a>
                <a href="#other" className="border-[1px] border-gray-500 border-solid gradient-text2 p-3 font-bold rounded-lg justify-center items-center m-[10px]">
                    Other Universities
                </a>
            </div>
            <h2 className=" p-5 gradient-text2 text-[4vh] rounded-lg py-2 px-3 font-bold justify-center items-center m-[10px] my-6">List of Universities</h2>

            {listuniversities.map((university, index) => (
                <div
                    className=" border-[1px] border-gray-900 border-solid px-3 rounded-lg m-[10px]"
                    key={index}
                >
                    <a target="_blank" rel="noreferrer" href={university.link} className="no-underline hover:underline text-gray-800"> <p className="md:text-[1vw] gradient-text2 text-[2.5vw] font-medium ">{university.university}</p></a>

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
                    <h2 className="p-5 font-bold text-[4vh] gradient-text2">All Universities</h2>
                    <AllUniversities />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default University;
