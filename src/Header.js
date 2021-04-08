//jshint esversion:6

import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css";

function Header() {
    return (
       <div className="header">
            <Link to="/">
                <img className="header__img" src="./images/My-Logo-1200---1200.png" loading="lazy" alt="Logo"></img>
            </Link>
        {/* adding 3 links Home & About & Contact */}
        {/* we can create link like so but take care to merge all links together to make it easy for css */}
            
            <div className="header__nav" >
                <Link to="/main" style={{ textDecoration: 'none' }}>
                    <span className="header__link">Home</span>
                </Link>

                <Link to="/about" style={{ textDecoration: 'none' }}>
                        <span className="header__link">About</span>
                </Link>

                <Link to="/project" style={{ textDecoration: 'none' }}>
                        <span className="header__link">Projects</span>
                </Link>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <span className="header__link">Contact</span>
                </Link>
            </div>
       </div>
       
    )
    
}

export default Header;    