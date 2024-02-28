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

           <h3>WE'RE ON IT.</h3>
           <h3 style={{ marginLeft: '395px', color: "#7EC389" }}>NOW.</h3>

            <svg className='svg-img2' height="420" width="600" xmlns="http://www.w3.org/2000/svg">
                <polygon points="200,10 700,10 700,380 200,380" style={{ fill: 'rgb(10, 64, 51)' }} />
                Sorry, your browser does not support inline SVG.
                </svg>


            <svg className='svg-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="600" height="510" viewBox="0,0,256,256">
                <g fill="#7ec389" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="translate(0,0) scale(5.33333,5.33333)">
                        <path d="M37,39h-26l-6,6v-34c0,-3.3 2.7,-6 6,-6h26c3.3,0 6,2.7 6,6v22c0,3.3 -2.7,6 -6,6z"></path>
                    </g>
                </g>
            </svg>
            <img src='https://www.eneco.com/~/media/eneco-nl-over-ons/image/wind-turbine-drone.png?la=en&w=1920&hash=050FAF6D9CE2E0FFFB011A3C51817EA0' alt="sunset energy planning"/>
        </div>
    );
};

export default Home;
