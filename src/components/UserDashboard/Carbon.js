// CarbonFootprint.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import './Carbon.css';

const CarbonFootprint = ({ consumption }) => {
  // Calculate carbon footprint based on consumption (example formula)
  const carbonFootprint = consumption * 0.01; // Example formula, adjust as needed

    const iconClassName = consumption > 350 ? 'high-consumption' : 'normal-consumption'
  return (
    <div style={{zIndex: "50"}} className="carbon-footprint-container">
      <h6>Carbon Footprint</h6>
      
      <svg className='foot-print' xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 512 512"><path fill="#766f6f" d="M246.625 18.375c-11.817-.153-23.918 8.608-29.375 22.438c-6.716 17.02-.85 35.28 13.094 40.78c13.943 5.502 30.69-3.822 37.406-20.843c6.716-17.02.85-35.28-13.094-40.78a22.512 22.512 0 0 0-8.03-1.595zm74.75 15.938c-10.97.006-22.743 6.024-30.78 16.874c-12.25 16.534-11.2 38.06 2.342 48.094c13.544 10.035 34.44 4.754 46.688-11.78c12.25-16.534 11.2-38.06-2.344-48.094c-4.654-3.45-10.16-5.097-15.905-5.093zm67.25 37.53c-10.336-.127-21.542 4.263-30.47 12.907c-15.87 15.368-18.525 38.344-5.936 51.344c12.587 13 35.66 11.086 51.53-4.28c15.87-15.37 18.526-38.345 5.938-51.345c-5.508-5.69-13.024-8.527-21.063-8.626zm-156.438 32.063c-22.51-.28-44.378 6.893-63.5 24C107.65 182.513 48.192 261.012 28.28 386.97C5.023 534.1 186.257 507.523 168.313 428.936c-22.922-100.387 34.13-141.11 108-124.156c32.838 7.54 66.54-4.9 86-40.436c23.402-42.733-7.428-106.817-62.875-139.625c-21.61-12.79-44.74-20.534-67.25-20.814zM449.438 134c-10.52.022-21.654 2.82-32.093 8.625c-27.837 15.48-40.15 46.51-27.47 69.313c12.682 22.802 45.54 28.73 73.376 13.25c27.837-15.48 40.118-46.51 27.438-69.313c-7.926-14.252-23.717-21.91-41.25-21.875z"/></svg>
      
      <p  id="foot-print-p"><span>{carbonFootprint}</span> KG CO2</p>
    </div>
  );
};

export default CarbonFootprint;
