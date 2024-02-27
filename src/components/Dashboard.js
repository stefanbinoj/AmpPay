
import NavBar from "./NavBar/NavBar"
import CarbonFootprint from "./UserDashboard/Carbon";
import EnergyMeterChart from "./UserDashboard/Chart"
import ElectricityConsumption from "./UserDashboard/ElectricityConsumption";
import EnergyUsageComponent from "./UserDashboard/EnergyUsageComponent";
import Gauge from "./UserDashboard/Gauge";


import Meter from "./UserDashboard/Meter"
import Rms from "./UserDashboard/Rms";




const Dashboard = () => {
    const consumption = 351;
    return (
        <div>
            {/*
            <NavBar /> 
            <EnergyMeterChart />
            
            <CarbonFootprint consumption={consumption} />
            */}
            {/* 
            
            <ElectricityConsumption value={70} />
             <Gauge />
            */}
           
            <EnergyUsageComponent userId={"Arjun"}/>
           
            
        </div>
    )
}
export default Dashboard