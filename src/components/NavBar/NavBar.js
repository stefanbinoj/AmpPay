import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
                <h1>logo</h1>
            </div>
            <div className="nav container">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About us</a>
                <a href="#" className="nav-link">Team</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
            <div className="login-btn">
            <Link to="/dashboard" className="btn">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;
