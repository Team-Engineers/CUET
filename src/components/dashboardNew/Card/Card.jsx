import { UilTimes } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {expanded ? (
        <ExpandedCard param={props} toggleExpanded={toggleExpanded} />
      ) : (
        <CompactCard param={props} toggleExpanded={toggleExpanded} />
      )}
    </div>
  );
};

function CompactCard({ param, toggleExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard md:h-[10rem] mb-8"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={toggleExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          styles={{
            root: { width: '100px' },
            path: { stroke: '#ffffff' },
            text: { fill: '#ffffff' },
            trail: { display: 'none' },
          }}
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, toggleExpanded }) {
  const [activeTab, setActiveTab] = useState('practice'); // Default to practice tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  console.log(param)
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },

      xaxis: {
        type: "category",
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard "
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "black" }}>
        <UilTimes onClick={toggleExpanded} />
      </div>
      <div className=" flex justify-center items-center gap-3">
        <div
          className={` transition-all duration-100 ${activeTab === 'practice' ? 'text-white font-bold text-[24px]' : ''}`}
          onClick={() => handleTabChange('practice')}
        >
          Practice Test
        </div>
        <div
          className={` transition-all duration-100${activeTab === 'mock' ? 'text-white font-bold text-[24px]' : ''}`}
          onClick={() => handleTabChange('mock')}
        >
          Mock Test
        </div>
      </div>
      <div className="chartContainer">
        {activeTab === 'practice' && (
          <Chart options={{ ...data.options, yaxis: { max: 40 } }} series={param.series1} type="bar" />
        )}
        {activeTab === 'mock' && (
          <Chart options={{ ...data.options, yaxis: { max: 200 } }} series={param.series2} type="bar" />
        )}
      </div>
      <span>{param.title}</span>

    </motion.div>
  );
}

export default Card;
