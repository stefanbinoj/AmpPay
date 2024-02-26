
import NavBar from "./NavBar/NavBar"
import CarbonFootprint from "./UserDashboard/Carbon";
import EnergyMeterChart from "./UserDashboard/Chart"
import ElectricityConsumption from "./UserDashboard/ElectricityConsumption";
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
            */}
            <Gauge />
           
            
        </div>
    )
}
export default Dashboard