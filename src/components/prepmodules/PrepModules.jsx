import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../utils/context";
import CuetLoader from "../Loader/Loader";
import NoData from "../Loader/NoData";
import PrepModulesMultipleSubquestion from "./PrepModulesMultipleSubquestion";
import PrepModulesSingleSubquestion from "./PrepModulesSingleSubquestion";
import RecommendedSubTopics from "./RecommendedSubTopics";
import "./question.css";
import FixedNavbar from "../FixedNavbar";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
    <section className="bg-white">
      <div className="max-md:hidden">{!auth?.user && <FixedNavbar />}</div>
      <Navbar />
      {data?.length > 0 ? (
        <div className="mx-auto max-w-[1400px] px-5 md:px-20 mb-[7rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <RecommendedSubTopics currentSubTopic={subTopic} />
            </div>
            <div className="md:col-span-2 md:pl-20">
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
