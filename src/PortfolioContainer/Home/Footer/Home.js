import React from 'react';
import Profile from '../Profile/Profile';
import Footer from './Footer';
import './home.css';
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <Profile/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;