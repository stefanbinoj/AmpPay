import './Prediction.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../../urls';

function Prediction() {
  const [predictedbill, setPredictedbill] = useState();
  const [latestUsage, setLatestUsage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestUsageBill, setLatestUsageBill] = useState(null);



  function calculatePredictedBill(usage) {
    // Define the tariff rates
    const telescopicSlabs = [
        { min: 0, max: 50, charge: 3.15 },
        { min: 51, max: 100, charge: 3.95 },
        { min: 101, max: 150, charge: 5.00 },
        { min: 151, max: 200, charge: 6.80 },
        { min: 201, max: 250, charge: 8.00 }
    ];

    const nonTelescopicSlabs = [
        { min: 0, max: 300, charge: 6.20 },
        { min: 301, max: 350, charge: 7.00 },
        { min: 351, max: 400, charge: 7.35 },
        { min: 401, max: 500, charge: 7.60 },
        { min: 501, max: Infinity, charge: 8.50 }
    ];

    // Calculate the bill amount based on usage
    let totalBill = 0;
    if (usage <= 250) {
        // Telescopic tariff
        for (const slab of telescopicSlabs) {
            if (usage >= slab.min && usage <= slab.max) {
                totalBill += (usage - slab.min + 1) * slab.charge;
                break;
            } else if (usage > slab.max) {
                totalBill += (slab.max - slab.min + 1) * slab.charge;
            }
        }
    } else {
        // Non-telescopic tariff
        for (const slab of nonTelescopicSlabs) {
            if (usage >= slab.min && usage <= slab.max) {
                totalBill += (usage - slab.min + 1) * slab.charge;
                break;
            } else if (usage > slab.max) {
                totalBill += (slab.max - slab.min + 1) * slab.charge;
            }
        }
    }

    return totalBill;
}
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
      setLatestUsage(latest);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

// Fetch predicted energy consumption
useEffect(() => {
  axios.get(`${baseUrl}/api/predictenergyconsumption`)
    .then((res) => {
      const predictedUsage = res.data.predicted_usage;
      const bill = calculatePredictedBill(predictedUsage);
      const formattedBill = bill.toFixed(2);
      setPredictedbill(formattedBill);
    })
    .catch((error) => {
      console.error("Error fetching predicted energy consumption:", error);
    });
}, []);

// Calculate latest usage bill
useEffect(() => {
  if (latestUsage) {
    setLatestUsageBill(calculatePredictedBill(latestUsage.usage_value));
  }
}, [latestUsage]);

// Conditional rendering based on loading and error states
if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}



  return (
    <div className="prediction-card">
      <div className='prediction-details'>
        <h1>COST PREDICTION</h1>
        <svg className='rupees-small' xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#766f6f" d="M7 6.5a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 0 3h-3.522a6.46 6.46 0 0 1 .848 2H18a1.5 1.5 0 0 1 0 3h-2.674a6.513 6.513 0 0 1-4.162 4.631l3.708 2.648a1.5 1.5 0 0 1-1.744 2.442l-6.981-4.987a1.484 1.484 0 0 1-.646-1.18a1.523 1.523 0 0 1 .351-1.02c.292-.347.711-.54 1.168-.534H9a3.5 3.5 0 0 0 3.163-2H7a1.5 1.5 0 0 1 0-3h5.163A3.5 3.5 0 0 0 9 6.5z"/></g></svg>
      </div>
      <hr></hr>
      <div className='prediction-details'>
        <div className='larger-one'>
          <p>HOUSE COST :</p>
          <div className='prediction-details price-details'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#766f6f" d="M7 6.5a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 0 3h-3.522a6.46 6.46 0 0 1 .848 2H18a1.5 1.5 0 0 1 0 3h-2.674a6.513 6.513 0 0 1-4.162 4.631l3.708 2.648a1.5 1.5 0 0 1-1.744 2.442l-6.981-4.987a1.484 1.484 0 0 1-.646-1.18a1.523 1.523 0 0 1 .351-1.02c.292-.347.711-.54 1.168-.534H9a3.5 3.5 0 0 0 3.163-2H7a1.5 1.5 0 0 1 0-3h5.163A3.5 3.5 0 0 0 9 6.5z"/></g></svg>
          <h2>{predictedbill}</h2>
          </div>
          <p id='month-details'>**PREDICTED FOR FEB</p>
        </div>
        
        <div className='smaller-one'>
          <div className='rupees-big'>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="200" viewBox="0 0 320 512"><path fill="#766f6f" d="M0 64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-56.2c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32h-35.6c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4l-224-160c-11.3-8-16.1-22.5-11.9-35.8S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h153.3C173 115.7 144.8 96 112 96H32C14.3 96 0 81.7 0 64"/></svg></div>
          
          </div>
      </div>
      <hr></hr>
      <h4 id ="sofartodayheading">SO FAR TODAY</h4>
      
      <div className='prediction-details footer-space'>
        <div className='adding-leftspace'> 
      <div className='prediction-details'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#766f6f" d="M7 6.5a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 0 3h-3.522a6.46 6.46 0 0 1 .848 2H18a1.5 1.5 0 0 1 0 3h-2.674a6.513 6.513 0 0 1-4.162 4.631l3.708 2.648a1.5 1.5 0 0 1-1.744 2.442l-6.981-4.987a1.484 1.484 0 0 1-.646-1.18a1.523 1.523 0 0 1 .351-1.02c.292-.347.711-.54 1.168-.534H9a3.5 3.5 0 0 0 3.163-2H7a1.5 1.5 0 0 1 0-3h5.163A3.5 3.5 0 0 0 9 6.5z"/></g></svg>
          <h3>78.69</h3>
      </div>
        <p id="sofartodaycontainer">***SO FAR TODAY</p>
        
      </div>
      
   
      </div>
      
      
      
      <hr></hr>
      
      <h4 style={{marginTop: "-100px"}} id ="sofartodayheading" className='margin-adder'>SO FAR THIS MONTH</h4>
      <div className='prediction-detailsbottomsection'>
      <h3 style={{fontSize: '20px'}}>CONSUMED = {latestUsage.usage_value} UNITS</h3>
      
    
      
      <h3 style={{ fontSize: '20px', marginTop: "-2px", display: 'flex',justifyContent: "center" }}>COST = <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#766f6f" d="M7 6.5a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 0 3h-3.522a6.46 6.46 0 0 1 .848 2H18a1.5 1.5 0 0 1 0 3h-2.674a6.513 6.513 0 0 1-4.162 4.631l3.708 2.648a1.5 1.5 0 0 1-1.744 2.442l-6.981-4.987a1.484 1.484 0 0 1-.646-1.18a1.523 1.523 0 0 1 .351-1.02c.292-.347.711-.54 1.168-.534H9a3.5 3.5 0 0 0 3.163-2H7a1.5 1.5 0 0 1 0-3h5.163A3.5 3.5 0 0 0 9 6.5z"/></g></svg>{latestUsageBill}</h3>

      </div>
        <h5>***SO FAR FEB</h5>
      </div>
      
      
      
    
  );
}

export default Prediction;
