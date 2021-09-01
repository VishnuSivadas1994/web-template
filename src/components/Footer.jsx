import React from 'react';

import { SocialIcon } from 'react-social-icons';

import './footer.styles.scss';


const Footer = () => {
    return (
        <div className="footer">
            ©Vishnu Sivadas {new Date().getFullYear()}
            <SocialIcon url="https://github.com/VishnuSivadas1994" className="icons" target="_blank" fgColor="#fff" stlye={{ height: 10, width: 10 }} />
            <SocialIcon url="https://www.linkedin.com/in/sivadasv/" className="icons" target="_blank" fgColor="#fff" stlye={{ height: 10, width: 10 }} />
            <SocialIcon url="#" className="icons" target="_blank" fgColor="#fff" stlye={{ height: 10, width: 10 }} />
        </div>
    )
}

export default Footer;