//jshint esversion:6

import React, { useEffect } from 'react';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "./Nav.css";
import Aos from "aos";
import "aos/dist/aos.css";



function Nav() {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });

        Aos.init({
            once: true
        });
    }, []);

    const backToTop =() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };



    return (
        <div data-aos="fade-left" data-aos-delay="200" className="float-chat">

            <button aria-label="arrow up" className="arrowUp" onClick={backToTop} style={{color:"rgb(62, 65, 221)",fontSize:"xx-large"}} ><ArrowUpwardIcon /></button>

            {/* <a className="main-body" href="https://wa.me/00201063219470">
                <WhatsAppIcon style={{color:"whitesmoke",fontSize:"xx-large"}}/>
            </a> */}

            <a aria-label="mail me!" href="mailto:ahmedibrahim151188@outlook.com" className="main-contact" style={{ textDecoration: 'none' }}>
                <MailIcon aria-label="mail me!" style={{color:"rgb(255, 255, 255)",fontSize:"x-large"}}/>
            </a>

            <a aria-label="arrow down" className="arrowUp" href="#bottom" style={{color:"rgb(62, 65, 221)",fontSize:"xx-large"}} ><ArrowDownwardIcon aria-label="arrow down" /></a>
        </div>
    )
}

export default Nav;

