import './Dashboard.css'
import NavBar from "./NavBar/NavBar"
import CarbonFootprint from "./UserDashboard/Carbon";
import EnergyMeterChart from "./UserDashboard/Chart"
import ElectricityConsumption from "./UserDashboard/ElectricityConsumption";
import EnergyUsageComponent from "./UserDashboard/EnergyUsageComponent";
import EnergyUsagePrediction1 from './UserDashboard/EnergyUsagePrediction1';

import Gauge from "./UserDashboard/Gauge";


import Meter from "./UserDashboard/Meter"
import Power from "./UserDashboard/Power";
import Prediction from './UserDashboard/Prediction';
import Rms from "./UserDashboard/Rms";




const Dashboard = () => {
    const consumption = 351;
    return (
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
           <EnergyUsagePrediction1 />
           <Gauge />
           <Power />
           <Prediction/>*/}
              <Gauge />
           <Power />
           <Prediction/>
           
           
            
           
            
        </div>
    )
}
export default Dashboard