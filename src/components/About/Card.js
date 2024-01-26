
import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card left">
        <h3>Our Story</h3>
        <p>
        AmpPay's journey is one marked by innovation and dedication. From the inception of our idea to the implementation of cutting-edge solutions, we've overcome challenges and reached key milestones. We are driven by a passion to create a positive impact on energy consumption.
        </p>
        <div className="layers">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="layer" style={{ '--tz': `${index * -4}px` }}></div>
          ))}
        </div>
      </div>

      <div className="card right">
        <h3>Our Vision</h3>
        <p>
        At AmpPay, we envision a future where energy efficiency is seamlessly integrated into everyday life. Our commitment to ongoing improvement and innovation fuels this vision. We're not just managing energy; we're shaping a sustainable way of living.
        </p>
        <div className="layers">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="layer" style={{ '--tz': `${index * -4}px` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
