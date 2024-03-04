import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import { Color } from '@kurkle/color';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
    }, []);

    return (
        <div className="home-container">
            <div className="image-overlay"></div>
            <div className='home-intro-p'>
            <p>MONITORING</p>
            <p style={{ marginTop: '195px' }}>EFFICIENCY</p>
            <p style={{ marginTop: '270px', color: "#0A4033" }}>EMBRACING</p>
            <p style={{ marginTop: '325px', color: "#0A4033" }}>RESILIENCE</p>
            <a href='/dashboard'>Find out more</a>
            </div>

    );
};

export default Home;
