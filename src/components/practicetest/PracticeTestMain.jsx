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
import PracticeTestQues from "./PracticeTestQues";
import "./testplatform.css";

const PracticeTestMain = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { subTopic, topic } = useParams();
  const [auth] = useAuth();

  // console.log(topic);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let subTopic1 = subTopic.toLowerCase().replace(/\s/g, '_');
      try {
        const response = await axios.get(
          `${API}/question/mock_test?subject=${topic}&topic=practice_test&subTopic=${subTopic1}`
          // https://testknock-questions.onrender.com/api/question/mock_test?subject=general_english&topic=mock_test&subTopic=3
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [subTopic, topic]);


  if (isLoading) {
    return <CuetLoader />;
  }

  return (
    <div className='bg-gradient-to-br overflow-hidden from-[#ffffff] to-white'>
      {!auth?.user && <FixedNavbar />}
      <Navbar />
      {data.data.length > 0 ? (
        <section className="question-practice m-[20px] mb-[7rem]">
          <div className="mx-auto">
            <PracticeTestQues topic={topic} subtopic={subTopic} data={data} />
          </div>
        </section>
      ) : (
        <NoData />
      )}
      <Footer />
    </div>
  );
};

export default PracticeTestMain;