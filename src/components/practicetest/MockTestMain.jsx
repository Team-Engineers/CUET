import React, { useEffect, useState } from "react";
import "./testplatform.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CuetLoader from "../Loader/Loader";
import MockTest from "./MockTest";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useAuth } from "../../utils/context";
import FixedNavbar from "../FixedNavbar";
import NoData from "../Loader/NoData";

const MockTestMain = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subTopic, topic } = useParams();
  const [auth] = useAuth();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let subTopic1 = subTopic.toLowerCase().replace(/\s/g, '_');
      console.log(subTopic1)
      try {
        const response = await axios.get(
          `https://ourntamockpapers.onrender.com/api/question/mock_test?topic=${topic}&subTopic=${subTopic1}`
        );
        setData(response.data);
        console.log("Fetched data:", response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [subTopic, topic]);

  console.log("Data:", data);

  if (isLoading) {
    return <CuetLoader />;
  }

  return (
    <div className='bg-gradient-to-br overflow-hidden from-[#ffffff] to-white'>
      {!auth?.user && <FixedNavbar />}
      <Navbar />  
      {data.data.length > 0 ? (
        <section className="question-practice m-[20px]">
          <div className="mx-auto">
            <MockTest subtopic={subTopic} data={data} />
          </div>
        </section>
      ) : (
        <NoData />
      )}
      <Footer />
    </div>
  );
};

export default MockTestMain;
