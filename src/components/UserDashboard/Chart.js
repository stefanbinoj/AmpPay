import React from 'react';
import { Line } from 'react-chartjs-2';
import "./Chart.css"
const EnergyMeterChart = () => {
  const data = {
    labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'kWh Consumption',
        data: [0.5, 0.7, 1.2, 0.8, 0.4, 0.3, 0.2, 0.1, 0.4, 0.6, 0.8, 1.0],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      },
    ],
  };

  const chartStyle = {
    width: '250px', // Set width to 250 pixels
    height: '250px', // Set height to 250 pixels
    border: '1px solid #ccc', // Add a border for visualization
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={chartStyle} className="chart-container">
      <h2>Energy Meter Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default EnergyMeterChart;
