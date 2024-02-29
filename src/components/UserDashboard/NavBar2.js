import React, { useState, useEffect } from 'react';
import './NavBar2.css';
import { Link } from 'react-router-dom';
import img5 from '../../images/WhatsApp Image 2024-02-28 at 2.42.59 PM.jpeg'
const NavBar2 = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`navbar ${visible ? 'active' : 'hidden'}`}>
            <div className="logo">
            <img src={img5} />

            </div>
            <div className="nav container">
                <a href="http://localhost:3000/" className="nav-link">Home</a>
                <a href="http://localhost:3000/#about1" className="nav-link">About us</a>
                
                <a href="#" className="nav-link">Contact</a>
            </div>
            <div className="login-btn">
            <Link to="http://localhost:3000/" className="btn">Logout</Link>
            </div>
        </div>
    );
};

export default NavBar2;
