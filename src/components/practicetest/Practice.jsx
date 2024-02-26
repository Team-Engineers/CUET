import React, { useEffect, useState } from "react";
import "./testplatform.css";
import { useParams } from "react-router-dom";
import Practicetest from "./Practicetest";
import axios from "axios";
import CuetLoader from "../Loader/Loader";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Practice = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subTopic, heading } = useParams();
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      let subTopic1 = subTopic.toLowerCase().replace(/\s/g, '_');
      console.log(subTopic1)
      let response;
      try {
        if (subTopic1 === 'practice') {
          response = await axios.get(
            `https://ourntamockpapers.onrender.com/api/math/question/v2/l1/random`
          );
        } else {
          response = await axios.get( 
            `https://ourntamockpapers.onrender.com/api/math/question/v2/${subTopic1}`
          );
        }
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [subTopic]);


  if (isLoading) {
    return <CuetLoader />;
  }

  return (
    <>
         <Navbar />

    <div className='bg-gradient-to-br overflow-hidden from-[#ffffff] to-white'>
      <section className="question-practice overflow-hidden m-[20px]">
        {data.length > 0 ? (
          <div className="mx-auto">
            <Practicetest subtopic={subTopic} data={data} />
          </div>
        ) : (
          <CuetLoader />
        )}
      </section>
    </div>
    <Footer />

    </>
  );
};

export default Practice;
