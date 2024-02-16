import React from 'react';
import './ElectricityConsumption.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faQuestionCircle, faArrowUp, faArrowDown, faEquals } from '@fortawesome/free-solid-svg-icons';

const ElectricityConsumption = ({ value, trend }) => {
  // Define a function to handle a click on the information icon
  const handleInfoClick = () => {
    
    // You can implement your logic here, such as showing a tooltip or a modal with more information
    alert('Clicking the info icon!');
  };

  // Determine usage indicator based on value
  let usageIndicator;
  let smileyIcon;
  if (value < 30) {
    usageIndicator = 'Low';
    smileyIcon = '😊'; // Smiley face
  } else if (value < 70) {
    usageIndicator = 'Moderate';
    smileyIcon = '😐'; // Neutral face
  } else {
    usageIndicator = 'High';
    smileyIcon = '😞'; // Sad face
  }

  // Determine trend indicator icon based on trend
  let trendIcon;
  if (trend === 'up') {
    trendIcon = <FontAwesomeIcon icon={faArrowUp} className="trend-icon up" />;
  } else if (trend === 'down') {
    trendIcon = <FontAwesomeIcon icon={faArrowDown} className="trend-icon down" />;
  } else {
    trendIcon = <FontAwesomeIcon icon={faEquals} className="trend-icon stable" />;
  }

  return (
    <div className="electricity-consumption-info">
      <div className="icon-container">
        <FontAwesomeIcon icon={faBolt} className="electricity-icon" />
      </div>
      <div className="details-container">
        <div className="header">
          <h2 className="label">Electricity Consumption</h2>
          <FontAwesomeIcon icon={faQuestionCircle} className="info-icon" onClick={handleInfoClick} />
        </div>
        <div className="bar-container">
          <div className="bar" style={{ width: `${value}%` }}></div>
        </div>
        <div className="usage-indicator">{usageIndicator} {smileyIcon} {trendIcon}</div>
        <p className="value">{value} kWh</p>
      </div>
    </div>
  );
};

export default ElectricityConsumption;

