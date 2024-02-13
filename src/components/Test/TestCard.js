import React from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const TestCard = ({ title, Questions, Marks, difficultyLevel, bgcolor }) => {
  const renderDifficultyBtn = (level) => {
    let btnClassName = `btn btn-${
      level === difficultyLevel ? "success" : "outline-secondary"
    } btn-md mx-1 mt-2`;
    let btnStyle = {
      borderRadius: "32px",
      fontSize: "0.7rem",
      display: "inline-block",
      marginBottom: "5px",
    };

    if (
      level === "Beginner" ||
      level === "Intermediate" ||
      level === "Advanced"
    ) {
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
      style={{
        borderRadius: "29px",
        maxWidth: "350px",
        maxHeight: "370px",
        margin: "auto",
      }}
    >
      <div>
        <div
          className="card-body"
          style={{
            backgroundColor: bgcolor,
            borderRadius: "15px",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "10px",
            maxwidth: "150px",
            maxHeight: "370px",
          }}
        >
          <h5 className="card-title font-bold">{title}</h5>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <FaQuestionCircle
                  size={30}
                  color="#5648FC"
                  style={{ backgroundColor: "white", borderRadius: "60px" }}
                  className="mr-2"
                />
                <p className="mb-0" style={{ fontSize: "1.0rem" }}>
                  <strong>{Questions}</strong> <br></br>Questions
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <FaCheckCircle
                  size={30}
                  color="#5648FC"
                  style={{ backgroundColor: "white", borderRadius: "60px" }}
                  className="mr-2"
                />
                <p className="mb-0" style={{ fontSize: "1.0rem" }}>
                  <strong>{Marks}</strong> <br></br> Marks
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3" style={{ fontSize: "1.0rem" }}>
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
