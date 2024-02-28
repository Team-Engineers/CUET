import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


const subtopicsData = {
  "QUANTITATIVE_APTITUDE": [
    "NUMBER SYSTEM",
    "AVERAGE",
    "PERCENTAGE",
    "PROFIT AND LOSS",
    "S.I AND C.I",
    "PARTNERSHIP",
    "RATIO AND PROPORTION",
    "TIME AND WORK",
    "TIME SPEED AND DISTANCE",
    "PROBABILITY",
    "PERMUTATION AND COMBINATION",
  ],
  "DATA_INTERPRETATION": [
    "BAR CHART",
    "PIE CHART",
    "TABLE CHART",
    "LINE CHART",
  ],
  "LOGICAL_REASONING": [
    "CODING AND DECODING",
    "FAMILY TREE AND BLOOD RELATIONS",
    "DIRECTIONS",
    "NUMBER OR ALPHABET SERIES",
    "PUZZLES",
    "CRITICAL REASONING",
    "SITUATION TEST",
    "MISCELLANEOUS",
    "ARRANGEMENTS",
  ],
  "VERBAL_ABILITY_AND_READING_COMPREHENSION": [
    "SENTENCE CORRECTION",
    "READING COMPREHENSION",
    "CRITICAL REASONING",
    "SENTENCE COMPLETION",
    "SYLLOGISMS",
    "SYNONYMS",
    "ANTONYMS",
    "ONE WORD SUBSTITUTION",
    "IDIOMS AND PHRASES",   
    "ANALOGY",
    
  ],
}
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
  const formattedSubTopic = subTopic.replace(/_/g, ' ');
  const subtopics = subtopicsData[formattedSubTopic] || [];
  
  return (
    <MarginTop>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item ">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{ backgroundColor: '#fce4e4', color: 'black' ,fontWeight: 'bold',
            outline: '2px solid black',}}
          >
            List of Subtopics
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body p-1 mt-3">
            <Wrapper>
              {subtopics.map((currentTopic, subIndex) => (
                <Link
                  to={`/${topic.split(" ").join("_")}/${currentTopic
                    .split(" ")
                    .join("_")}`}
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
