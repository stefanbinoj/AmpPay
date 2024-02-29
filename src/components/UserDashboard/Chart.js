import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import "./Chart.css";
import baseUrl from '../../urls';

const EnergyMeterChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/energyusage/?user=Arjun`);
        const processedData = processData(response.data);
        setChartData(processedData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  const processData = (data) => {
    const labels = [];
    const values = [];
    const today = new Date();
    const todayDay = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const monday = new Date(today); // Clone the current date
    monday.setDate(today.getDate() - todayDay + (todayDay === 0 ? -6 : 1)); // Get the previous Monday
  
    // Iterate over the last 7 days, starting from Monday
    for (let i = 0; i < 4; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i); // Get each day from Monday to the current day
  
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      labels.push(day);
  
      // Find the usage values for the current day
      const dayData = data.filter(entry => new Date(entry.datetime).toLocaleDateString() === date.toLocaleDateString());
      if (dayData.length > 0) {
        // Calculate the average usage for the current day
        const averageUsage = dayData.reduce((acc, val) => acc + val.usage_value, 0) / dayData.length;
        values.push(averageUsage);
      } else {
        // If no data available for the current day, set usage value as 0
        values.push(0);
      }
    }
  
    return {
      labels: labels,
      datasets: [
        {
          label: 'Average kWh Consumption',
          data: values,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'black',
          tension: 0.1
        },
      ],
    };
  };
  

  const chartStyle = {
    width: '450px',
    height: '280px',
    border: '1px solid #ccc',
    position: 'relative',
    left: "240px",
    top: "-10px",
  };

  const todayTextStyle = {
    position: 'absolute',
    top: '0px',
    left: '45px',
    fontSize: '20px',
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'black',
        },
      },
      x: {
        ticks: {
          color: 'black',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div style={chartStyle} className="chart-container">
      <h3 style={todayTextStyle}>LAST 7 DAYS</h3>
      <div style={{ top: '0px', color: "black" }} className='chart'>
        {chartData && <Line data={chartData} options={options} />}
      </div>
    </div>
  );
};

export default EnergyMeterChart;
