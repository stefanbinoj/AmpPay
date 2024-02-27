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
        <h1 className='GaugeMainHeading'>TODAY'S REPORT</h1>
        <hr></hr>
        <div class="gauge-details">
          <p>CONSUMPTION : </p>
          <h2>20 UNITS</h2>
        </div>
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
            marginBottom:"40px",
            padding: '5px',
            color: getNeedleColor(), // Set the color dynamically based on the arc value
          }}
        />
      </div>
      <hr></hr>
      <div class="gauge-details">
      <svg className='downward-arrow' xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 320 512"><path fill="#a02222" d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg>
      <p><span>30% </span>LESS THAN YESTERDAY'S CONSUMPTION</p>
      </div>
    </div>
  );
}

export default Gauge;
