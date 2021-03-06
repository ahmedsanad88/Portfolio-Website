//jshint esversion:6

import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import "./Header.css";
import { IconButton } from '@material-ui/core';

function Header() {


    const showMobileManu = () => {
        let mobileManu = document.querySelector('.header__nav');
        let openIcon = document.querySelector('.open__icon');
        let closeIcon = document.querySelector('.close__icon');
        mobileManu.classList.toggle('mobile__header__nav');
        openIcon.style.display="none";
        closeIcon.style.display="block";
    };

    const hideMobileManu = () => {
        let mobileManu = document.querySelector('.header__nav');
        let openIcon = document.querySelector('.open__icon');
        let closeIcon = document.querySelector('.close__icon');
        mobileManu.classList.remove('mobile__header__nav');
        openIcon.style.display="block";
        closeIcon.style.display="none";
    };


    return (
       <div className="header">
            <Link to="/">
                <img className="header__img" src="./images/new-logo.png" alt="Logo" width="50" height="39" />
            </Link>
        {/* adding 3 links Home & About & Contact */}
        {/* we can create link like so but take care to merge all links together to make it easy for css */}
            <div className="header__nav" >
                <Link to="/main" style={{ textDecoration: 'none' }} onClick={hideMobileManu}>
                    <h3 className="header__link">Home</h3>
                </Link>

                <Link to="/about" style={{ textDecoration: 'none' }} onClick={hideMobileManu}>
                        <h3 className="header__link">About</h3>
                </Link>

                <Link to="/project" style={{ textDecoration: 'none' }} onClick={hideMobileManu}>
                        <h3 className="header__link">Projects</h3>
                </Link>

                <Link to="/contact" style={{ textDecoration: 'none' }} onClick={hideMobileManu}>
                        <h3 className="header__link">Contact</h3>
                </Link>
            </div>
            <div className="mobile__manu">
                <IconButton aria-label="open Manu" className="open__icon" style={{background: "rgba(255,255,255,0.1)"}} onClick={showMobileManu}>
                    <MenuIcon aria-label="open Manu" style={{color: "white"}} />
                </IconButton>
                <IconButton aria-label="close Manu" className="close__icon" style={{background: "rgba(255,255,255,0.1)", display: 'none'}} onClick={hideMobileManu}>
                    <CloseIcon aria-label="close Manu" style={{color: "white"}} />
                </IconButton>
            </div>
       </div>
       
    )
    
}

export default Header;    