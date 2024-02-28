import './Power.css'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CarbonFootprint from './Carbon';
import baseUrl from '../../urls';
function Power() {
  const [latestUsage, setLatestUsage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/energyusage/?user=Arjun`);
        // Filter the latest usage from the response data
        const latest = response.data.reduce((latest, current) => {
          if (!latest || current.datetime > latest.datetime) {
            return current;
          }
          return latest;
        }, null);
        setLatestUsage({
          usage_value: parseFloat(latest.usage_value).toFixed(2) || 0,
          irms_current: parseFloat(latest.irms_current).toFixed(2) || 0,
          irms_power: parseFloat(latest.irms_power).toFixed(2) || 0,
          peak_power: parseFloat(latest.peak_power).toFixed(2) || 0,
          
        });

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch initial data
    fetchData();

    // Fetch data every second
    const interval = setInterval(fetchData, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="power-card">
      <div className='power-details margin-issue-resolved'>
          <h1>REAL-TIME STATS</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.8em" height="2.8em" viewBox="0 0 24 24"><path fill="none" stroke="#766f6f" stroke-width="2" d="M1 13h4l2.5-9l5 16.5L17 9l2 4h4"/></svg>
        </div>
        <hr></hr>
        <div className='power-details'>
          <svg className='small-timer' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48"><g fill="none" stroke="#766f6f" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"/></g></svg>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
        <div className='power-details'>
          <div className='equalone'>
            <h2 id="rmshead">RMS</h2>
            <p id="irms-p">CURRENT</p>
          </div>
          <div>
            <p className='justhyphen'>:</p>
          </div>
          <div className='equalone'>
            <h2 id='current-value'>{latestUsage.irms_current}</h2>
            <p id="irms-p">AMPERE</p>
          </div>
        </div>

        <div className='power-details'>
          <div className='equalone'>
            <h2 id="rmshead">RMS</h2>
            <p id="irms-p">POWER</p>
          </div>
          <div>
            <p className='justhyphen'>:</p>
          </div>
          <div className='equalone'>
            <h2 id='current-value'>{latestUsage.irms_power}</h2>
            <p id="irms-p">WATT</p>
          </div>
          
        </div>
        <div className='power-details'>
          <div className='equalone'>
            <h2 id="rmshead">PEAK</h2>
            <p id="irms-p">POWER</p>
          </div>
          <div>
            <p className='justhyphen'>:</p>
          </div>
          <div className='equalone'>
            <h2 id='current-value'>{latestUsage.peak_power}</h2>
            <p id="irms-p">WATT</p>
          </div>
          
        </div>
        <div className='power-details'>
          <div className='equalone'>
            <h2 id="rmshead">UNITS</h2>
            <p id="irms-p">CONSUMED</p>
          </div>
          <div>
            <p className='justhyphen'>:</p>
          </div>
          <div className='equalone'>
            <h2 id='current-value'>{latestUsage.usage_value}</h2>
            <p id="irms-p">KWH</p>
          </div>
          
        </div>
        <div>
        <div className='power-details'>
          
        </div>
        </div>
        <CarbonFootprint consumption={latestUsage.usage_value}/>

        
        



    </div>
  );
}

export default Power;
