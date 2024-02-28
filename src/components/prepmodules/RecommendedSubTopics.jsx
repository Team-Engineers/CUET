import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { topics } from "../../utils/constants";

const TopicCard = styled.li`
  height: fit-content;
  background-color: rgba(121, 9, 11, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #79090b;
  text-align: center;
  background: ${(props) => (props.isCurrentTopic ? "#79090b" : "inherit")};
  color: ${(props) => (props.isCurrentTopic ? "white" : "black")};
  &:hover {
    background: #79090b;
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
`;

const Wrapper = styled.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content : center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0px;

  a{
    width : 100%;
  }
`;

const MarginTop = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  algin-items: center;
  flex-direction: column;
  top : 0;
  position: sticky;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.h6`
  min-width : 10rem;
  padding : 10px 5px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentTopic ? "bolder" : "normal")};
  overflow-wrap: break-word;
`;

const RecommendedSubTopics = () => {
  const { topic, subTopic } = useParams();
  const subtopics = topics[topic] || [];
  useEffect(() => {
    const bootstrapCssLink = document.createElement("link");
    bootstrapCssLink.rel = "stylesheet";
    bootstrapCssLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    bootstrapCssLink.integrity =
      "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
    bootstrapCssLink.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCssLink);
  
    return () => {

      document.head.removeChild(bootstrapCssLink);
    };
  }, []);
  
  return (
    <MarginTop>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: '#fce4e4', color: 'black' ,fontWeight: 'bold',
              outline: '2px solid black',}}
            >
              {topic}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body p-1 mt-3">
              <Wrapper>
                {subtopics.map((currentTopic, subIndex) => (
              <Link
              className="no-underline"
              to={`/test/prep/${topic}/${currentTopic}`}
              key={subIndex}
            >
                    <TopicCard
                      isCurrentTopic={
                        subTopic.split("_").join(" ") === currentTopic
                      }
                    >
                      <Box>
                        <Box2 
                          isCurrentTopic={
                            currentTopic === subTopic.split("_").join(" ")
                          }
                        >
                          {currentTopic}
                        </Box2>
                      </Box>
                    </TopicCard>
                  </Link>
                ))}
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </MarginTop>
  );
};

export default RecommendedSubTopics;
