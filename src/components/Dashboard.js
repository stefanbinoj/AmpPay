
import NavBar from "./NavBar/NavBar"
import CarbonFootprint from "./UserDashboard/Carbon";
import EnergyMeterChart from "./UserDashboard/Chart"
import Meter from "./UserDashboard/Meter"



const Dashboard = () => {
    const consumption = 340;
    return (
        <div>
            <NavBar />
            <EnergyMeterChart />
            <CarbonFootprint consumption={consumption} />
        </div>
    )
}
export default Dashboard