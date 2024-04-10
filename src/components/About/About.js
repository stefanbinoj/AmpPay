import Card from './Card';
import './About.css';
import Features from './Features';
import Value from './Value';

const Home = () => {
    return (
    <div id='about1' className='about-container'>   
        <Value />
        <Card /> 
        <Features />
    </div>
    )
}
export default Home;