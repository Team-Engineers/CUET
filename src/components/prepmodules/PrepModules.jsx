import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import { useAuth } from "../../utils/context";
import FixedNavbar from "../FixedNavbar";
import Footer from "../Footer";
import CuetLoader from "../Loader/Loader";
import NoData from "../Loader/NoData";
import Navbar from "../Navbar";
import PrepModulesMixedSubquestion from "./PrepModulesMixedSubquestion";
import PrepModulesMultipleSubquestion from "./PrepModulesMultipleSubquestion";
import PrepModulesSingleSubquestion from "./PrepModulesSingleSubquestion";
import RecommendedSubTopics from "./RecommendedSubTopics";
import "./question.css";
import { urlSanitizer } from "../../services/url-sanitization.service";

const PrepModules = () => {
  const [auth] = useAuth();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { subject, topic, subTopic } = useParams();
  subject = urlSanitizer(subject);
  subTopic = urlSanitizer(subTopic);
  topic = urlSanitizer(topic);

  if (!subject) {
    subject = topic;
    topic = subTopic;
    subTopic = "";
  }
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const params = {
        subject: subject,
        topic: topic,
        subTopic: subTopic,
      };
      try {
        let response;
        response = await axios.get(
          // `${API}/question/find-questions-new?userId=${auth?.user?._id}`,
          `${API}/question/find-questions`,
          {
            params: params,
            // headers: {
            //   Authorization: `Bearer ${auth.accessToken.token}`,
            // },
          }
        );

        setData(response?.data?.requestedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // }, [subject, subTopic, topic, auth]);
  }, [subject, subTopic, topic]);

  if (isLoading) {
    return <CuetLoader />;
  }

  const questionType = (questionData) => {
    let singleSubquestion = 0,
      multipleSubquestion = 0;
    for (let item of questionData) {
      if (item?.subQuestions && item.subQuestions.length > 1) {
        multipleSubquestion++;
      } else {
        singleSubquestion++;
      }
    }
    if (multipleSubquestion === questionData.length) {
      return "multiple";
    } else if (singleSubquestion === questionData.length) {
      return "single";
    } else {
      return "mixed";
    }
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-md:hidden">{!auth?.user && <FixedNavbar />}</div>
      <Navbar />
      {data?.length > 0 ? (
        <div className="mx-auto max-w-[1280px] px-5 md:px-20 mb-[7rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <RecommendedSubTopics currentSubTopic={subTopic} />
            </div>
            <div className="md:col-span-2 md:pl-20">
              {questionType(data) === "multiple" && (
                <PrepModulesMultipleSubquestion data={data} />
              )}
              {questionType(data) === "single" && (
                <PrepModulesSingleSubquestion data={data} />
              )}
              {questionType(data) === "mixed" && (
                <PrepModulesMixedSubquestion data={data} />
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