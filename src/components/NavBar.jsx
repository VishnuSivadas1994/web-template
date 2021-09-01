import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    return (

        <div className='header'>
            <div>
                <NavLink to="/">
                    -SITE LOGO-
                </NavLink>
            </div>
            <div className='options'>
                <NavLink className='option' to="/" exact> {/*activeClassName*/}
                    HOME
                </NavLink>

                <NavLink className='option' to="/post">
                    POST
                </NavLink>

                <NavLink className='option' to="/project">
                    PROJECT
                </NavLink>

                <NavLink className='option' to="/about">
                    ABOUT
                </NavLink>
            </div>
            <div className='options2'>
                <SocialIcon url="https://github.com/VishnuSivadas1994" className="option" target="_blank" fgColor="#fff" stlye={{ height: 25, width: 25 }} />
                <SocialIcon url="https://www.linkedin.com/in/sivadasv/" className="option" target="_blank" fgColor="#fff" stlye={{ height: 25, width: 25 }} />
                <SocialIcon url="#" className="option" target="_blank" fgColor="#fff" stlye={{ height: 25, width: 25 }} />

            </div>
        </div>
    )
}


export default NavBar;

