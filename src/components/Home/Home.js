import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
    }, []);

    return (
        <div className="home-container">
            <div className="image-overlay"></div>
            <img src='https://static.vecteezy.com/system/resources/previews/024/068/847/non_2x/sunset-energy-planning-a-group-of-people-overlooking-city-with-wind-turbines-in-the-background-ai-generated-free-photo.jpg' alt="sunset energy planning"/>
            <div className='intro' data-aos="fade-right">
                <p>Simplify. Transact. Impact.</p>
            </div>
            <div className='home-card-container' data-aos="fade-up">
                <div className='home-card' data-aos="fade-up" data-aos-delay="1500">
                    <svg id='pay-bill-icon' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16.154 7.154c-.949-.949-2.619-1.608-4.154-1.65m-4.154 10.65c.893 1.19 2.552 1.868 4.154 1.926m0-12.576c-1.826-.049-3.461.778-3.461 3.034c0 4.154 7.615 2.077 7.615 6.231c0 2.37-2.027 3.387-4.154 3.31m0-12.575V3m0 15.08V21" />
                    </svg>
                    <h2>Pay Bill</h2>
                </div>
                <div className='home-card' data-aos="fade-up" data-aos-delay="1600">
                    <h2>Ways to Save</h2>
                </div>
                <div className='home-card' data-aos="fade-up" data-aos-delay="1700">
                    <h2>Outages</h2>
                </div>
                <div className='home-card' data-aos="fade-up" data-aos-delay="1800">
                    <h2>Usage</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
