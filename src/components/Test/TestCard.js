import React from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const TestCard = ({
  title,
  questions,
  totalMarks,
  difficultyLevel,
 
}) => {
  const lightColors = [
    "#FFD700",
    "#98FB98",
    "#87CEFA",
    "#FFA07A",
    "#DDA0DD",
    "#FFB6C1",
  ];

  let colorIndex = 0;

  const getRandomColor = (() => {
    return () => {
      const color = lightColors[colorIndex];
      colorIndex = (colorIndex + 1) % lightColors.length;
      return color;
    };
  })();

  const renderDifficultyBtn = (level) => {
    let btnClassName = `btn btn-${
      level === difficultyLevel ? "success" : "outline-secondary"
    } btn-md mx-1 mt-2`;
    let btnStyle = {
      borderRadius: "13px",
      fontSize: "0.55rem",
    };

    if (level === "Beginner" || level === "Intermediate" || level ==="Advanced") {
      btnStyle.color = "black";
      btnStyle.backgroundColor = "transparent";
    }

    return (
      <button className={btnClassName} style={btnStyle} disabled>
        {level}
      </button>
    );
  };

  return (
    <div
      className="card mt-3 mb-3"
      style={{ borderRadius: "29px", maxWidth: "300px", maxHeight: "280px" }}
    >
      <div>
        <div
          className="card-body"
          style={{
            backgroundColor: getRandomColor(),
            borderRadius: "15px",
            marginLeft: "12px",
            marginRight: "10px",
            marginTop: "10px",
            maxwidth: "150px",
            maxHeight: "200px",
          }}
        >
          <h5 className="card-title">{title}</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <FaQuestionCircle size={20} color="#000" className="mr-2" />
                <p className="mb-0" style={{ fontSize: "0.8rem" }}>
                  <strong>{questions}</strong> Questions
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <FaCheckCircle size={20} color="#000" className="mr-1" />
                <p className="mb-0" style={{ fontSize: "0.8rem" }}>
                  <strong>{totalMarks}</strong> Total Marks
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3" style={{ fontSize: "0.8rem" }}>
            <strong>Difficulty Level:</strong>
          </div>
          {renderDifficultyBtn("Beginner")}
          {renderDifficultyBtn("Intermediate")}
          {renderDifficultyBtn("Advanced")}
        </div>
        <button
          className="btn btn-success mt-3 float-end"
          style={{
            borderRadius: "32px",
            marginRight: "20px",
            marginBottom: "15px",
            paddingRight: "40px",
            paddingLeft: "40px",
            fontSize: "16px",
          }}
        >
          Practice
        </button>
      </div>
    </div>
  );
};

export default TestCard;
