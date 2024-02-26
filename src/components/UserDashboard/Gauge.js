import React from 'react';
import GaugeComponent from 'react-gauge-component';
import { FaHome } from 'react-icons/fa';

function Gauge() {
  const arcValue = 32; // Set your dynamic arc value here

  // Define a function to determine the color gradient based on the arc value
  const getNeedleColor = () => {
    if (arcValue < 30) {
      return 'green';
    } else if (arcValue < 70) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <div className="App">
      <GaugeComponent
        id="gauge-chart"
        type="radial"
        value={20}
        minValue={0}
        maxValue={100}
        arc={{ cornerRadius: 7, padding: 0.05, width: 0.25 }}
        colors={['#00FF00', '#FFFF00', '#FF0000']} // Adjust these values for precise colors
      />
      
      <FaHome
        style={{
          fontSize: '240px',
          borderRadius: '50%',
          padding: '5px',
          color: getNeedleColor(), // Set the color dynamically based on the arc value
        }}
      />
    </div>
  );
}

export default Gauge;
