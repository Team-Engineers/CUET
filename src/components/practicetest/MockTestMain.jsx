import React, { useEffect, useState } from "react";
import "./testplatform.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CuetLoader from "../Loader/Loader";
import MockTest from "./MockTest";
import Footer from "../Footer";
import Navbar from "../Navbar";
const MockTestMain = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subTopic, heading } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {      
      try {
        const response = await axios.get(
          `https://ourntamockpapers.onrender.com/api/question/find-questions?topic=General_English_1`
        );
        setData(response.data.requestedData);
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
    <div className='bg-gradient-to-br overflow-hidden from-[#ffffff] to-white'>
    <Navbar/>
    <section className="question-practice m-[20px]">
      {data.length > 0 ? (
        <div className="mx-auto">
              <MockTest subtopic={subTopic} data={data} />
            </div>
      ) : (
        <CuetLoader/>
      )}
    </section>
    <Footer/>
    </div>
  );
};

export default MockTestMain;
