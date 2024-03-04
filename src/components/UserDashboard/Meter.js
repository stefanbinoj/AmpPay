// Meter.js
import React from 'react';
import './Meter.css';

const Meter = ({ value }) => {
  // Calculate the percentage value for the meter
  const percentage = Math.min(Math.max(value, 0), 100);

  // Determine the color based on the value
  const color = percentage < 50 ? 'green' : 'red';

  return (
    <div className="meter-container">
      <div className="meter" style={{ backgroundColor: color, width: `${percentage}%` }}></div>
      <div className="meter-text">{percentage}%</div>
    </div>
  );
};

export default Meter;
