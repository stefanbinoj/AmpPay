// Team.js

import img1 from '../../static/IMG_20231115_173846_Bokeh.jpg';
import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team-container">
      <div className="responsive-container-block outer-container">
        <div className="responsive-container-block inner-container">
          <p style={{padding:"30px"}} className="text-blk section-head-text">
            Meet Our Team
          </p>

          <div className="responsive-container-block">
            <MemberCard
              name="Arjun Ajith"
              position="Founder"
              imgSrc={img1}
              github="https://github.com/4arjun"
              linkedin="https://www.linkedin.com/in/arjun-ajith-1ba937225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              instagram="https://www.instagram.com/arjunajith__?igsh=MXFjODk4MDY2Y2o4cw=="
            />
            <MemberCard
              name="Tanmay S"
              position="Founder"
              imgSrc={img1}
              github="https://github.com/tanmaysachan"
              linkedin="https://www.linkedin.com/in/tanmaysachan/"
              instagram="https://www.instagram.com/_._.tanmayyyy?igsh=MXM4b3Jva3B5c3VhOQ=="
            />
            <MemberCard
              name="Stefan Binoj"
              position="Founder"
              imgSrc={img1}
              github="https://github.com/stefanbinoj"
              linkedin="https://www.linkedin.com/in/stefan-binoj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              instagram="https://www.instagram.com/stefanbinoj?igsh=bWUwdnVyMHA2aXRx"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ name, position, imgSrc, github, linkedin, instagram }) => {
  return (
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
      <div className="team-card">
        <div className="img-wrapper">
          <img className="team-img" src={imgSrc} alt={name} />
        </div>
        <p className="text-blk name">{name}</p>
        <p className="text-blk position">{position}</p>
        <div className="social-media-links">
          {github && <a href={github} rel="noreferrer" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>}
          {linkedin && <a href={linkedin} rel="noreferrer" target="_blank"><img src="https://static.vecteezy.com/system/resources/previews/023/986/900/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" /></a>}
          {instagram && <a href={instagram} rel="noreferrer" target="_blank"><img src="https://w7.pngwing.com/pngs/397/474/png-transparent-black-snapchat-logo-illustration-computer-icons-instagram-logo-area-smile-thumbnail.png" alt="Instagram" /></a>}
        </div>
      </div>
    </div>
  );
};

export default Team;
