import './Dashboard.css'
import NavBar from "./NavBar/NavBar"
import CarbonFootprint from "./UserDashboard/Carbon";

import ElectricityConsumption from "./UserDashboard/ElectricityConsumption";
import EnergyUsageComponent from "./UserDashboard/EnergyUsageComponent";
import EnergyUsagePrediction1 from './UserDashboard/EnergyUsagePrediction1';

import Gauge from "./UserDashboard/Gauge";


import Meter from "./UserDashboard/Meter"
import NavBar2 from './UserDashboard/NavBar2';
import Power from "./UserDashboard/Power";
import Prediction from './UserDashboard/Prediction';
import Rms from "./UserDashboard/Rms";
import Togglebar from './UserDashboard/Togglebar';




const Dashboard = () => {
    const consumption = 351;
    return (
        <div id="container">
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
           <NavBar2 />
            <Gauge />
           <Power />
           <Prediction/>
           
           
           
            
           
            
            </div>
            <div className='bottom-section'>
                <Togglebar />
            </div>

        </div>
        
        
    )
}
export default Dashboard