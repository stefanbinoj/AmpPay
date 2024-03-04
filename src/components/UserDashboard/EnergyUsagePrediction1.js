import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EnergyPrediction() {
    const [predictedUsage, setPredictedUsage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://your-api-url/predicted_usage/');
            setPredictedUsage(response.data.predicted_usage);
        };

        fetchData();
    }, []);

    return (
        <div>
            {predictedUsage !== null ? (
                <p>Predicted energy usage at the end of the month: {predictedUsage} units</p>
            ) : (
                <p>Loading prediction...</p>
            )}
        </div>
    );
}

export default EnergyPrediction;
