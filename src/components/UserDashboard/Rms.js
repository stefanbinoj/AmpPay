import './Rms.css'

import React from 'react';



const RMS = ({ label, value }) => {
  return (
    <div className="rms-info">
      <h2 className="rms-label">{label}</h2>
      <div className="rms-visualization">
        <div className="rms-bar" style={{ width: `${value}%` }}></div>
      </div>
      <p className="rms-value">{value}</p>
    </div>
  );
};

export default RMS;

