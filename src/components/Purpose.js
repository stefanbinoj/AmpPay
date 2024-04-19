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
                <div className='box-container'>
                    <div className='box left'>
                        <div className='box-text'>
                        <h1>Our purpose</h1>
                        <p>At AmpPay, our purpose is clear: to illuminate the path toward efficient energy management and sustainability. It's not just a mission; it's our commitment to making a meaningful impact on individuals and the environment. We strive to empower users to optimize their energy usage through innovative solutions.<strong>Our purpose revolves around Making Energy Management Work.</strong>  In a world where energy consumption patterns need transformation, we challenge norms, embrace innovation, and lead the way toward a sustainable energy future. AmpPay isn't solely about monitoring energy; it's about revolutionizing how we utilize and conserve it, empowering individuals to shape a brighter, greener tomorrow.</p>
                        </div>
                    </div>
                    <div className='box right'>
                    <div className='box-text'>
                        <h1>Our attitude</h1>
                        <p><strong>Our attitude at AmpPay is characterized by innovation, dedication, and a commitment to excellence.</strong> We approach the challenge of energy management with enthusiasm and determination, constantly seeking new ways to leverage technology for the benefit of our users and the planet. We embrace the opportunity to disrupt the status quo and drive meaningful change in how energy is consumed and managed. With a focus on user empowerment and environmental stewardship, we strive to inspire individuals to embrace sustainable practices and make a difference in their communities. At AmpPay, we believe that by working together, we can create a brighter, more sustainable future for generations to come.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;
