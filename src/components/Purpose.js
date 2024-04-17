import './Purpose.css'
import NavBar from "./NavBar/NavBar";
import purposeimg from '../images/snapedit_1713375575986.jpeg'
const Purpose = () => {
    return (
        <div>
            <NavBar />
            <div className='purpose-container'>
                <div className='purpose-img'>
                    <img src={purposeimg}/>
                    <div className='purpose-img-overlay-text'>
                    <h1>Empowering Energy Transformation</h1>
                    <p>Our Purpose and Attitude</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;
