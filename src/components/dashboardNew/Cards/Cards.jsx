import { UilUsdSquare } from "@iconscout/react-unicons";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../../../utils/context";
import Card from "../Card/Card";

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}
const Cards = () => {
  const [auth, setAuth] = useAuth();
  const [cardsDatas, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedSubjects = auth?.user?.selectedSubjects;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://testknock-questions.onrender.com/api/scores/user-scores/${auth.user._id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.accessToken.token}`,
            },
          }
        );

        const filteredData = {};
        filteredData["general_english"] = response.data.userScores["general_english"];
        filteredData["general_test"] = response.data.userScores["general_test"];
        selectedSubjects.forEach((subject) => {
          const formattedSubjectName = subject.subjectName.toLowerCase().replace(/ /g, "_");
          if (response.data.userScores[formattedSubjectName]) {
            filteredData[formattedSubjectName] = response.data.userScores[formattedSubjectName];
          }
        });


        setCardsData(filteredData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [auth, selectedSubjects]);

  const subjectNames = Object.keys(cardsDatas);

  const cardsData = subjectNames.map((subject, index) => {
    let colorGradient;
    switch (index % 5) {
      case 0:
        colorGradient = "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)";
        break;
      case 1:
        colorGradient = "linear-gradient(180deg, #ff6b6b 0%, #ff8787 100%)";
        break;
      case 2:
        colorGradient = "linear-gradient(180deg, #63e6be 0%, #87e9ca 100%)";
        break;
      case 3:
        colorGradient = "linear-gradient(180deg, #ffb36b 0%, #ff8787 100%)";
        break;
      case 4:
        colorGradient = "linear-gradient(180deg, #c163e6 0%, #87e9ca 100%)";
        break;
      default:
        colorGradient = "linear-gradient(180deg, #ec8dff 0%, #c484f3 100%)";
    }

    return {
      title: subject,
      color: {
        backGround: colorGradient,
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 10,
      value: "5",
      png: UilUsdSquare,
      series1: [
        {
          name: "practice test",
          data: cardsDatas[subject].practice_test_scores,
        },
      ],
      series2: [
        {
          name: "mock test",
          data: cardsDatas[subject].mock_test_scores,
        },
      ],
    };
  });
  return (
    <div className="">
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="grid md:gap-4 gap-2  grid-cols-2 max-md:grid-cols-1">
        {cardsData.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <Card
                maxScore={140}
                maxScore2={200}
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series1={card.series1}
                series2={card.series2}

              />
            </div>
          );
        })}
      </div>
      <div>
        <div className="mt-4">
          {/* <div className="max-w-[90%] mx-auto">
            <Column {...config} />
          </div> */}
        </div>
      </div>
    </div>

  );
};

export default Cards;