import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import NavBar from './NavBar/NavBar';
import CarbonFootprint from './UserDashboard/Carbon';
import ElectricityConsumption from './UserDashboard/ElectricityConsumption';
import EnergyUsageComponent from './UserDashboard/EnergyUsageComponent';
import EnergyUsagePrediction1 from './UserDashboard/EnergyUsagePrediction1';
import Gauge from './UserDashboard/Gauge';
import Meter from './UserDashboard/Meter';
import NavBar2 from './UserDashboard/NavBar2';
import Power from './UserDashboard/Power';
import Prediction from './UserDashboard/Prediction';
import Rms from './UserDashboard/Rms';
import Togglebar from './UserDashboard/Togglebar';

const Dashboard = () => {
  const [loading1, setLoading1] = useState(false);
  const consumption = 351;
  return (
    <div className="main-container">
      {loading1 ? (
        <div id="loader">
          <h1 className="loading-animation">
            <span>🅰</span>
            <span>🅼</span>
            <span>🅿</span>
            <span>🅿</span>
            <span>🅰</span>
            <span>🆈</span>
          </h1>
        </div>
      ) : (
        <div id="container">
          <div className="dashboard">
            <Gauge />
            <Power />
            <Prediction setLoading1={setLoading1} />
          </div>
          <div className="bottom-section">
            <Togglebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
