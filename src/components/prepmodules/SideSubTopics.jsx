import React from "react";
import styled from "styled-components";

const subtopicsData = [
  "NUMBER SYSTEM",
  "AVERAGE",
  "PERCENTAGE",
  "PROFIT AND LOSS",
  "S.I AND C.I",
  "PARTNERSHIP",
  "RATIO AND PROPORTION",
  "TIME AND WORK",
  "TIME, SPEED AND DISTANCE",
  "PROBABILITY",
  "PERMUTATION AND COMBINATION",
];

const MarginTop = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  width: 400px;
  position: sticky;
`;

const Box2 = styled.h6`
  min-width: 10rem;
  padding: 10px 5px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.isCurrentTopic ? "bolder" : "normal")};
  overflow-wrap: break-word;
`;

const DarkButton = styled.button`
  background-color: white; 
  color: [#16192C]; /* White text */
  border: 1px solid #000; 
  width: 98%;
  margin: -5px auto;
  padding: 10px;
  text-align: center;
  cursor: pointer;

 
`;

const SideSubTopics = ({ onSelectSubtopic, selectedSubtopic }) => {
  return (
    <MarginTop>
      <div className="">
        <h2
          className="p-1 text-[30px] bg-[#16192C] text-[#dedede]"
          style={{
            fontWeight: "bold",
            outline: "2px solid black",
          }}
        >
          List of Subtopics
        </h2>
        <div>
          {subtopicsData.map((subtopic, index) => (
            <Box2 key={index}>
              <DarkButton
                className={selectedSubtopic === subtopic ? 'selected-subtopic bg-[#16192C] ' : ''}
                onClick={() => onSelectSubtopic(subtopic)}
              >
                {subtopic}
              </DarkButton>
            </Box2>
          ))}
        </div>
      </div>
    </MarginTop>
  );
};

export default SideSubTopics;
