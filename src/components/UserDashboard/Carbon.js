// CarbonFootprint.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import './Carbon.css';

const CarbonFootprint = ({ consumption }) => {
  // Calculate carbon footprint based on consumption (example formula)
  const carbonFootprint = consumption * 0.5; // Example formula, adjust as needed

  return (
    <div className="carbon-footprint-container">
      <h2>Carbon Footprint</h2>
      <div className="carbon-info">
        <FontAwesomeIcon icon={faTree} className="carbon-icon" />
        <p className="carbon-text">Your carbon footprint based on consumption:</p>
      </div>
      <p className="carbon-value">{carbonFootprint} kg CO2</p>
    </div>
  );
};

export default CarbonFootprint;
