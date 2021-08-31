import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';

const NavBar = () => {
    return (
        
        <div className='header'>
            <div>
                <NavLink to="/">
                    -SITE LOGO-
                </NavLink>
            </div>
            <div className='options'>
                <NavLink className='option' to="/" exact>
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
        </div>
    )
}


export default NavBar;

