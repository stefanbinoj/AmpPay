import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnergyUsageComponent = ({ userId }) => {
  const [latestUsage, setLatestUsage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [userId]); // Re-fetch data whenever userId changes

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/energyusage/?user=${userId}`);
      // Filter the latest usage from the response data
      const latest = response.data.reduce((latest, current) => {
        if (!latest || current.datetime > latest.datetime) {
          return current;
        }
        return latest;
      }, null);
      setLatestUsage(latest);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {latestUsage ? (
        <ul>
          <li>
            User: {latestUsage.username}, Datetime: {latestUsage.datetime}, Usage Value: {latestUsage.usage_value}, irms_current: {latestUsage.irms_current}, irms_power: {latestUsage.irms_power}, peak_power: {latestUsage.peak_power}
          </li>
        </ul>
      ) : (
        <div>No data found for this user.</div>
      )}
    </div>
  );
};

export default EnergyUsageComponent;
