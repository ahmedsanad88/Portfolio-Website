//jshint esversion:6

import React from 'react'
import "./Footer.css";
import CopyrightIcon from '@material-ui/icons/Copyright';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

function Footer() {

    const currentTime = new Date();
    const year = currentTime.getFullYear();

    return (
        <div className="footer">
            <a href="mailto:ahmedibrahim151188@outlook.com" className="footer__email" style={{ textDecoration: 'none' }}> <EmailIcon 
                    fontSize="inherit"
                    style={{ fontSize: "18px", marginBottom:"-3px"}}
             /> Ahmedibrahim151188@outlook.com</a>
                <a href="tel:002-155-6766215" className="footer__call" style={{ textDecoration: 'none' }}> <CallIcon 
                    fontSize="inherit"
                    style={{ fontSize: "19px", marginBottom:"-5px"}}
                 /> (002)(01063219470)</a>
                <p className="footer__trade">
                2020 - {year} Sanad Tech
                 <CopyrightIcon
                    fontSize="inherit"
                    style={{ fontSize: "17px", marginBottom:"-3px"}}
                />
                </p>
                <div id="bottom"></div>
        </div>
    )
}

export default Footer;

