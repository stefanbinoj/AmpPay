import React from 'react';
import GaugeComponent from 'react-gauge-component';
import { FaHome } from 'react-icons/fa';
import './Gauge.css'; // Import CSS file for custom styles

function Gauge() {
  const arcValue = 27; // Set your dynamic arc value here

  // Define a function to determine the color gradient based on the arc value
  const getNeedleColor = () => {
    if (arcValue < 33) {
      return 'green';
    } else if (arcValue < 68) {
      return 'rgb(255, 255, 0)';
    } else {
      return 'red';
    }
  };

  return (
    <div className="gauge-card">
        <p>How am i doing?</p>
      <div className="gauge-container">
        <GaugeComponent
          id="gauge-chart"
          type="radial"
          value={arcValue}
          minValue={0}
          maxValue={100}
          arc={{ cornerRadius: 7, padding: 0.05, width: 0.25 }}
          labels={{ valueLabel: { hide: true }, tickLabels: { hideMinMax: true } }}
        />
      </div>
      <div className="icon-container">
        <FaHome
          style={{
            fontSize: '100px',
            borderRadius: '50%',
            padding: '5px',
            color: getNeedleColor(), // Set the color dynamically based on the arc value
          }}
        />
      </div>
    </div>
  );
}

export default Gauge;
