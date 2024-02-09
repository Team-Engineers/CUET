import React from 'react';
import { FaQuestionCircle, FaStar } from 'react-icons/fa';


const TestCard = ({ title, questions, totalMarks, difficultyLevel }) => {
  const lightColors = ['#FFD700', '#98FB98', '#87CEFA', '#FFA07A', '#DDA0DD', '#FFB6C1'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    return lightColors[randomIndex];
  };

  const renderDifficultyBtn = (level) => (
    <button
      className={`btn btn-${level === difficultyLevel ? 'success' : 'outline-secondary'} btn-sm mx-1 mt-2`}
      style={{ borderRadius: '8px', fontSize: '0.55rem', backgroundColor: getRandomColor() }}
      disabled
    >
      {level}
    </button>
  );

  return (
    <div className="card mt-3 mb-3" style={{ borderRadius: '29px', maxWidth: '300px'}}>
        <div>
      <div className="card-body" style={{backgroundColor: getRandomColor(), borderRadius :'15px', marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
        <h5 className="card-title">{title}</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
            <FaQuestionCircle size={20} color="#000" className="mr-2" />
             <p className="mb-0">
                <strong>{questions}</strong> Questions
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center">
            <FaStar size={20} color="#FFD700" className="mr-2" />
               <p className="mb-0">
                <strong>{totalMarks}</strong> Total Marks
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <strong>Difficulty Level:</strong>
        </div>
        {renderDifficultyBtn('Beginner')}
        {renderDifficultyBtn('Intermediate')}
        {renderDifficultyBtn('Advanced')}
        </div>
        <button className="btn btn-success mt-3 float-end" style={{ borderRadius: '10px' }}>
          Practice
        </button>
      </div>
    </div>
  );
};

export default TestCard;
