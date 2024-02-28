import React, { useState, useEffect } from 'react';
import GaugeComponent from 'react-gauge-component';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';
import './Gauge.css';
import baseUrl from '../../urls';

function Gauge() {
  const [arcValue, setArcValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestToday, setLatestToday] = useState({ usage_value: 0 });
  const [earliestToday, setEarliestToday] = useState({ usage_value: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/energyusage/?user=Arjun`);
        const today = new Date().toISOString().split('T')[0];
        const todayUsage = response.data.filter(data => data.datetime.startsWith(today));
        let earliest = todayUsage[0] || { usage_value: 0 };
        let latest = todayUsage[0] || { usage_value: 0 };
        for (const data of todayUsage) {
          if (data.datetime < earliest.datetime) {
            earliest = data;
          }
          if (data.datetime > latest.datetime) {
            latest = data;
          }
        }
        setLatestToday(latest);
        setEarliestToday(earliest);
        setArcValue(earliest.usage_value);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  
    const interval = setInterval(fetchData, 1000);
  
    return () => clearInterval(interval);
  }, []);

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
        <div className='gauge-details'>
        <h1 className='GaugeMainHeading'>TODAY'S REPORT</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 24 24"><path fill="#766f6f" d="M12 16c1.66 0 3-1.34 3-3c0-1.12-.61-2.1-1.5-2.61L3.79 4.77l5.53 9.58c.5.98 1.51 1.65 2.68 1.65m0-13c-1.81 0-3.5.5-4.97 1.32l2.1 1.21C10 5.19 11 5 12 5c4.42 0 8 3.58 8 8c0 2.21-.89 4.21-2.34 5.65h-.01a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42.01A9.969 9.969 0 0 0 22 13c0-5.5-4.5-10-10-10M2 13c0 2.76 1.12 5.26 2.93 7.07c.39.38 1.02.38 1.41-.01a.996.996 0 0 0 0-1.41A7.95 7.95 0 0 1 4 13c0-1 .19-2 .54-2.9L3.33 8C2.5 9.5 2 11.18 2 13"/></svg>
        </div>
        <hr></hr>
        <div class="gauge-details">
          <p>CONSUMPTION : </p>
          <h2>{arcValue} UNITS</h2>
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
            color: getNeedleColor(),
          }}
        />
      </div>
      <hr></hr>
      <div class="gauge-details">
      <svg className='downward-arrow' xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 320 512"><path fill="#a02222" d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg>
      <p className='bottom-para'><span>30% </span>LESS THAN YESTERDAY'S CONSUMPTION</p>
      </div>
    </div>
  );
}

export default Gauge;
