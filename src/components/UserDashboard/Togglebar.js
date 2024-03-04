import EnergyMeterChart from './Chart'
import './Togglebar.css'

function Togglebar() {


    return (
        <div>
            <div className='togglebar-card'>
            <a href='#'>GRAPH</a>
            <a href='#'>LEADERBOARDS</a>
            </div>
            <div className='chart-contaniner'>
            <EnergyMeterChart />
            </div>
            
        </div>
        
    )
}
export default Togglebar