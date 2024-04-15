import './Value.css';
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Value = (() => {
    useEffect(() => {
        AOS.init({
            duration:1000,
            once: false,
        });

    },[]);
    return(
        <div>
            <h1 className='section-heading'>Our Values</h1>
        <div className='values-container'>
            <div className='values'>
                <div className='value left' data-aos="fade-right" data-aos-offset="140">
                    <h1>Innovation</h1>
                    <p>We constantly strive to innovate and improve our products to meet the evolving needs of our customers.</p>
                </div>
                <div className='value right'data-aos="fade-left" data-aos-offset="140">
                    <h1>Transparency</h1>
                    <p>We believe in transparency and open communication with our users, partners, and stakeholders.</p>
                </div>
                <div className='value left'data-aos="fade-right" data-aos-offset="140">
                    <h1>Customer-Centricity</h1>
                    <p>We prioritize the needs and satisfaction of our customers in everything we do.</p>
                </div>
                <div className='value right'data-aos="fade-left" data-aos-offset="140">
                    <h1>Sustainability</h1>
                    <p>We are committed to sustainability and minimizing our environmental impact.</p>
                </div>
                <div className='value left'data-aos="fade-right" data-aos-offset="140">
                    <h1>Quality</h1>
                    <p>We maintain the highest standards of quality in all aspects of our business.</p>
                </div>
                <div className='value right'data-aos="fade-left" data-aos-offset="140">
                    <h1>Collaboration</h1>
                    <p>We foster collaboration and teamwork to achieve common goals.</p>
                </div>
            </div>
        </div>
        </div>
    )
})

export default Value