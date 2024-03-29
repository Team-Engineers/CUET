import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { topics } from "../../utils/constants";
import { useAuth } from "../../utils/context";

const TopicCard = styled.li`
  height: fit-content;
  margin: 10px 0;
  white-space: nowrap;
  background-color: rgba(121, 9, 11, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #090b79;
  text-align: center;
  background: ${(props) => (props.isCurrentTopic ? "#5648FC" : "inherit")};
  color: ${(props) => (props.isCurrentTopic ? "white" : "black")};
  &:hover {
    background: #5648fc;
    color: white;
  }
  &:hover a {
    color: white;
  }
  &:focus {
    outline: none; /* Remove the default focus outline */
  }
  img {
    height: 20px;
    width: 20px;
  }
  /* Centering */
`;

const MarginTop = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 10px;
  white-space: nowrap;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;
const Box2 = styled.p`
  padding: 10px 5px;
  margin: auto 0;
  margin-bottom: 0px;
  // text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentTopic ? "bolder" : "normal")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const RecommendedSubTopics = () => {
  const [auth] = useAuth();
  let { subject, topic, subTopic } = useParams();
  const [subtopics, setSubtopics] = useState([]);
  subject = subject?.split("_").join(" ");
  topic = topic?.split("_").join(" ");
  subTopic = subTopic?.split("_").join(" ");
  console.log(subject, "test")
  console.log(topic, "english")
  let navigation = `/courses/prep/`;
  if (subject === "General Test" || subject === "Economics") {
    navigation += `${subject.split(" ").join("_")}/`;
  }
  const selectedSubjects = auth?.user?.selectedSubjects;
  useEffect(() => {
    if (subject === "General Test" || subject === "Economics") {
      const category = Object.keys(topics[subject]).find((category) =>
        topics[subject][category].includes(subTopic)
      );
      if (category) {
        const categorySubtopics = topics[subject][category] || [];
        setSubtopics(categorySubtopics);
      } else {
        setSubtopics([]);
      }
    } else {
      setSubtopics(topics[topic] || []);
    }
  }, [subject, topic, subTopic]);

  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MarginTop>
      <div className="flex flex-col bg-white text-slate-900 border border-slate-900 border-solid rounded-lg">
        <div
          className="flex justify-between items-center px-4 py-3 bg-salmon-200 text-white cursor-pointer rounded-lg"
          onClick={toggleAccordion}
        >
          <span className="font-medium">{topic}</span>
          <div className="flex relative items-center justify-center">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`ml-auto h-6 w-6 transition-transform duration-200 transform rotate-0`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`ml-auto h-6 w-6 transition-transform duration-200 transform rotate-90`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={`px-4 py-3 transition-all duration-200 ${isOpen ? "block" : "hidden"
            }`}
        >
          {subtopics.length > 0 ? (
            subtopics.map((currentTopic, subIndex) => {
              const isVisible =
                (!auth.user && subIndex === 0) ||
                (auth.user && subIndex <= 2) ||
                (selectedSubjects && (
                  selectedSubjects.some((subjectObj) => subjectObj.subjectName === topic) ||
                  selectedSubjects.some((subjectObj) => subjectObj.subjectName === subject)
                ));

              if (isVisible) {
                return (
                  <Link
                    className="no-underline"
                    to={`${navigation}${topic.split(" ").join("_")}/${currentTopic.split(" ").join("_")}`}
                    key={subIndex}
                  >
                    <TopicCard
                      isCurrentTopic={currentTopic.split("_").join(" ") === subTopic}
                    >
                      <Box>
                        <Box2
                          className="text-xs md:font-normal md:text-lg"
                          isCurrentTopic={currentTopic === subTopic.split("_").join(" ")}
                        >
                          {currentTopic}
                        </Box2>
                      </Box>
                    </TopicCard>
                  </Link>
                );
              } else {
                return null;
              }
            })
          ) : (
            <div>No subtopics available</div>
          )}

        </div>
      </div>
    </MarginTop>
  );
};

export default RecommendedSubTopics;