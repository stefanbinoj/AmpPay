import './NavBar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img5 from '../../images/WhatsApp Image 2024-02-28 at 2.42.59 PM.jpeg';

const NavBar = () => {
    const scrollSection = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }else {
            window.scrollTo({top:'0',behavior:'smooth'});
        }
    };
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50, // Adjusted offset to consider navbar height
                behavior: 'smooth',
            });
        }
    };

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 80);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`navbar ${visible ? 'active' : 'hidden'}`}>
            <div className="logo">
                <h2>logo</h2>
            </div>
            <div className="nav-links">
                <a onClick={(event) => scrollSection('home', event)} href="#"className="nav-link">Home</a>
                <a onClick={(event) => scrollSection('about1', event)} href="#about1" className="nav-link">About</a>
                <a onClick={(event) => scrollSection('contact',event)} href="#" className="nav-link">Contact</a>
                <Link to="/dashboard" className='nav-link'>Dashboard</Link>
            </div>
        </div>
    );
};

export default NavBar;
