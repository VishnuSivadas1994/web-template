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
                <NavLink className='option' to="/" exact> {/*activeClassName*/}
                    HOME
                </NavLink>

                <NavLink className='option' to="/sample">
                    PAGE1
                </NavLink>

                <NavLink className='option' to="/sample">
                    PAGE2
                </NavLink>

                <NavLink className='option' to="/about">
                    ABOUT ME
                </NavLink>
            </div>
            
        </div>
    )
}


export default NavBar;

