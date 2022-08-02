import React from 'react';
import './footer.css';
import FooterImg from '../../../assets/Home/shape-bg.png';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={FooterImg} alt="Internet Connection Problem"/>
            </div>
        </div>
    );
};

export default Footer;