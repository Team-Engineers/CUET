import React, { useEffect, useState } from "react";
import "./question.css";
import { useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import QuestionV2 from "./QuestionV2";
import axios from "axios";
import RecommendedSubTopics from "../recommendedSubTopics/RecommendedSubTopics";
import NoData from "../Loader/NoData";
import CuetLoader from "../Loader/Loader";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PracticeQuestions = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subTopic, heading } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let subTopic1 = subTopic.toLowerCase().replace(/\s/g, '_');   
      localStorage.setItem('currentSubTopic', subTopic);
      try {
        const response = await axios.get(
          // `https://ourntamockpapers.onrender.com/api/math/question/v2/${subTopic1}`
          `https://ourntamockpapers.onrender.com/api/math/question/v2/probability`

        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ subTopic]);

  if (isLoading) {
    return <CuetLoader />;
  }

  return (
    <section className="question-practice overflow-hidden">
      <Navbar/>
      <div>
      {data.length > 0 ? (
        <div className=" max-w-[1280px] overflow-hidden mx-auto">
          <div className=" flex-col flex justify-center">
            {/* <div className=" text-[30px] text-blue-950 font-bold text-center my-7">
              {subTopic}
            </div> */}
            <div className="col-lg-8">
              <QuestionV2 data={data} />
            </div>
          </div>
        </div>
      ) : (
        <NoData />
      )}
      </div>
     <Footer/>
    </section>
  );
};

export default PracticeQuestions;
