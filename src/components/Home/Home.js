import React, { useEffect, useState } from 'react';
import img from '../../static/IMG_20240125_122905.jpg';
import './Home.css';

const Home = () => {
    const quotes = [
        "\"Conserve energy today for a brighter tomorrow.\"",
        "\"Small acts, big impact – save energy, save the planet.\"",
        "\"Efficiency is the key to a sustainable legacy.\"",
        "\"Energy saved is energy earned.\"",
        "\"Empower your lifestyle, empower the Earth.\"",
        "\"Green is not just a color; it's a commitment to sustainability.\"",
        "\"Every watt saved is a step towards a greener future.\"",
        "\"Sustainability starts with conscious energy choices.\"",
        "\"In energy efficiency, we trust for a sustainable future.\"",
        "\"Turn off the lights, turn on a sustainable mindset.\"",
        "\"Amp up your savings, amp down your energy use.\"",
        "\"Efficient today, sustainable tomorrow.\"",
        "\"The power to change is in your hands – use it wisely.\"",
        "\"Watt you save is watt you earn.\"",
        "\"Energy-smart choices for a sustainable lifestyle.\""
    ];

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const [randomQuote, setRandomQuote] = useState("");

    useEffect(() => {
        const randomQuote = getRandomQuote();
        setRandomQuote(randomQuote);
    }, [getRandomQuote]); // Include getRandomQuote in the dependency array

    return (
        <div className="content-container">
            <h2>AmpPay - Transforming Energy Awareness For Sustainable Living</h2>
            <img src={img} alt='hi' /> {/* Removed redundant alt attribute */}
            <p className="quote">
                {randomQuote}
            </p>
        </div>
    );
};

export default Home;
