import React from 'react';
import image from '../background.webp';
import './home.styles.scss';

const Home = () => {
    return (
        <div className="box">
            {/* Set up your main contents here.. */}
            <img src={image} alt="Background"/>
            <span className="textattr">Hello, I am Vishnu Sivadas</span>
            
        </div>
    )
}
export default Home;

