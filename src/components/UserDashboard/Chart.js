import React from 'react';
import { Line } from 'react-chartjs-2';
import "./Chart.css"

const EnergyMeterChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'kWh Consumption',
        data: [0.5, 0.7, 1.2, 0.8, 0.4, 0.3],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'black', // Change point color to black
        tension: 0.1
      },
    ],
  };

  const chartStyle = {
    width: '450px',
    height: '280px',
    border: '1px solid #ccc',
    position: 'relative',
    left: "520px",
    top: "-10px",
  };

  const todayTextStyle = {
    position: 'absolute',
    top: '30px',
    left: '45px',
    fontSize: '20px',
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'black', // Change color of scale labels to black
        },
      },
      x: {
        ticks: {
          color: 'black', // Change color of scale labels to black
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Change color of legend labels to black
        },
      },
    },
  };
  

  return (
    <div style={chartStyle} className="chart-container">
      <h3 style={todayTextStyle}>TODAY</h3>
      <div style={{ top: '0px', color: "black" }} className='chart'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EnergyMeterChart;
