import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnergyUsageComponent = ({ userId }) => {
  const [energyUsageData, setEnergyUsageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [userId]); // Re-fetch data whenever userId changes

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/energyusage/`);
      setEnergyUsageData(response.data);
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
      <h2>Energy Usage Data</h2>
      <ul>
        {energyUsageData.map(usage => (
          <li key={usage.id}>
            User: {usage.user}, Datetime: {usage.datetime}, Usage Value: {usage.usage_value}
            {/* Render other fields here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyUsageComponent;
