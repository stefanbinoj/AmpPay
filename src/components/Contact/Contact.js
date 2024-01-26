// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='outer'> 
            <div className='header'>
                <h2>Get in Touch</h2>
            </div>

            <div className='inner'>
                <input type='email' placeholder='Enter your email here'/>
                <input type='submit' value="Submit" className='submit-btn' />
            </div>

            <div className='contact-links'>
                <a className='p' href='#' target='_blank'><img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' alt="Twitter" /></a>
                <a className='q' href='#'><img src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png' alt="Facebook" /></a>
                <a className='r' href='#'><img src='https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png' alt="Youtube" /></a>
                <a className='s' href='#'><img src='https://static.vecteezy.com/system/resources/previews/023/986/514/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png' alt="Instagram" /></a>
            </div>

            <div className='footer'>
                <p>Made with ❤️ Team AmpPay</p>
            </div>
        </div>
    );
}

export default Contact;
