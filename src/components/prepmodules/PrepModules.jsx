import React, { useEffect, useState } from "react";
import "./question.css";
import { useParams } from "react-router-dom";
import PrepModulesMultipleSubquestion from "./PrepModulesMultipleSubquestion";
import PrepModulesSingleSubquestion from "./PrepModulesSingleSubquestion";
import axios from "axios";
import CuetLoader from "../Loader/Loader";
import NoData from "../Loader/NoData";
import Footer from "../Footer";
import RecommendedSubTopics from "./RecommendedSubTopics";
import Navbar from "./Navbar";
import { useAuth } from "../../utils/context";
import FixedNavbar from "./FixedNavbar";

const PrepModules = () => {
  const [auth] = useAuth();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { subTopic, heading } = useParams();
  console.log(heading);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let subTopic1 = subTopic.toLowerCase().replace(/\s/g, "_");
      try {
        const response = await axios.get(
          `https://ourntamockpapers.onrender.com/api/question/find-questions?topic=${subTopic1}`
          // `https://ourntamockpapers.onrender.com/api/question/find-questions?topic=reading_comprehension`
        );
        // console.log("response",response)
        setData(response?.data?.requestedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [subTopic]);

  // useEffect(() => {
  //   setIsLoggedIn(!auth?.user);
  // }, []);

  if (isLoading) {
    return <CuetLoader />;
  }

  return (
    <section className="question-practice bg-white">
      {!auth?.user && <FixedNavbar />}
      <Navbar />
      {data?.length > 0 ? (
        <div className="mx-auto max-w-[1280px] my-10">
          <div className="flex mx-8 lg:flex-row flex-col   justify-between ">
            <div className="max-lg:w-full max-lg:mx-[10px] lg:w-[400px]">
              <RecommendedSubTopics currentSubTopic={subTopic} />
            </div>
            <div className="  md:ml-[50px] md:w-2/3">
              {data && data[0]?.subQuestions?.length > 1 ? (
                <PrepModulesMultipleSubquestion data={data} />
              ) : (
                <PrepModulesSingleSubquestion data={data} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <NoData />
      )}
      <Footer />
    </section>
  );
};

export default PrepModules;