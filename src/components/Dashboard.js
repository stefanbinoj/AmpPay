import './Dashboard.css'
import NavBar from "./NavBar/NavBar"
import CarbonFootprint from "./UserDashboard/Carbon";

import ElectricityConsumption from "./UserDashboard/ElectricityConsumption";
import EnergyUsageComponent from "./UserDashboard/EnergyUsageComponent";
import EnergyUsagePrediction1 from './UserDashboard/EnergyUsagePrediction1';

import Gauge from "./UserDashboard/Gauge";


import Meter from "./UserDashboard/Meter"
import Power from "./UserDashboard/Power";
import Prediction from './UserDashboard/Prediction';
import Rms from "./UserDashboard/Rms";
import Togglebar from './UserDashboard/Togglebar';




const Dashboard = () => {
    const consumption = 351;
    return (
        <div>
        <div className='dashboard'>
            {/*
            <NavBar /> 
            <EnergyMeterChart />
            
            <CarbonFootprint consumption={consumption} />
            */}
            {/* 
            <EnergyUsageComponent userId={"Arjun"}/>
            <ElectricityConsumption value={70} />
             <Gauge />
            */}
           
           {/*
           <EnergyMeterChart />
           <EnergyUsagePrediction1 />
           <Gauge />
           <Power />
           <Prediction/>*/}
            <Gauge />
           <Power />
           <Prediction/>
           
           
           
            
           
            
        </div>
        <hr style={{ color: 'grey', marginTop: '100px', width:"97%",borderWidth: '3px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}></hr>
        <Togglebar />

        </div>
        
        
    )
}
export default Dashboard