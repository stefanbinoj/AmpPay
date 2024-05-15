import './NavBar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img5 from '../../images/WhatsApp Image 2024-02-28 at 2.42.59 PM.jpeg';

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 80;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`navbar ${visible ? 'active' : 'hidden'}`}>
            <div className="logo">
                <h2>logo</h2>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a onClick={(event) => scrollSection('home', event)} href="#"className="nav-link">Home</a>
                <a onClick={(event) => { scrollSection('about1', event); toggleMenu(); }} href="#about1" className="nav-link">About</a>
                <a onClick={(event) => scrollSection('contact',event)} href="#" className="nav-link">Contact</a>
                <Link to="/dashboard" className='nav-link'>Dashboard</Link>
            </div>
            <div className='menu-toggle' onClick={toggleMenu}>
                ☰ 
            </div>
        </div>
    );
};

export default NavBar;
