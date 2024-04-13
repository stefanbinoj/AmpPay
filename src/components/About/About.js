import Card from './Card';
import './About.css';
import Features from './Features';
import Value from './Value';
import Vision from './Vision';

const Home = () => {
    return (
    <div id='about1' className='about-container'>   
        <Vision />
        <Value />
        <Card /> 
        <Features />
    </div>
    )
}
export default Home;