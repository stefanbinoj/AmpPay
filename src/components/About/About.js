import Card from './Card';
import './About.css';
import Features from './Features';



import 'aos/dist/aos.css';
const Home = () => {
    return (
    <div>
        <div>
            <div data-aos="fade-in" data-aos-delay="200">
            <Card /> 
            </div>
            <div data-aos="fade-in" data-aos-delay="200">
            <Features />
            </div>
        </div>

    </div>
        
        
    )
}
export default Home;