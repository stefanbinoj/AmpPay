import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/IMG_20240125_122905.jpg';
import './Home.css';

const Home = () => {
    const quotes = [
        "Conserve energy today for a brighter tomorrow.",
        "Small acts, big impact – save energy, save the planet.",
        "Efficiency is the key to a sustainable legacy.",
        "Energy saved is energy earned.",
        "Empower your lifestyle, empower the Earth."
    ];

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const [randomQuote, setRandomQuote] = useState("");

    useEffect(() => {
        const randomQuote = getRandomQuote();
        setRandomQuote(randomQuote);
    }, []);

    return (
        <div className="home-container">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="quote-container">
                <p className="quote">{randomQuote}</p>
            </div>
        </div>
    );
};

export default Home;
