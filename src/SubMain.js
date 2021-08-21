//jshint esversion:6

import { Button } from '@material-ui/core';
import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import "./SubMain.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function SubMain() {

    useEffect(() => {
        // initailize Aos
        Aos.init({
            duration: 2000
        });
        // make sure it's applying only one
        Aos.init({
            once: true
        });
    }, []);


    return (
        <div className="subMain">
            <div data-aos="fade-up" className="subMain__container">
                <div data-aos="fade-right" className="subMain__img">
                    <img src="./images/mine.jpg" loading="lazy" alt="personal_image" width="650" height="1000" />
                    <svg className="card__svg" viewBox="0 0 800 500">
                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#000"/>
                        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="gray" strokeWidth="3" fill="transparent"/>
                    </svg>
                </div>
                <div data-aos="fade-left" className="subMain__info">
                    <h3>Hi there 👋</h3>
                    <p>My name is</p>
                    <h1><span className="info__name">Ahmed Sanad</span></h1><br/> 
                    <h1><q className="info__job">Your Next Developer</q></h1><br/>
                    <p>
                        <span className="info__text">
                            Working with passion as a full-time developer.
                            I have a diverse set of skills like design, HTML, CSS, Javascript in addition to libraries &  Frameworks and tools used for both front-end (React.js) & back-end (Node.js) which merge all together to deliver Working with mastery and commitment.
                        </span>
                    </p>
                </div>
            </div>
            <div className='btn1'>
                <Button component={Link} to='/main'
                variant="outlined"
                color="primary"
                style={{color: 'white', boxShadow: '2px 2px 2px rgba(98, 0, 255, 0.4)'}}
                >
                Click to know More!</Button>
            </div>
            <div className="particles__contact">
                <Particles 
                params={{ 
                    particles: { 
                    number: { 
                        value: 80, 
                        density: { 
                        enable: true, 
                        value_area: 800, 
                        } 
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                        "width": 2,
                        "color": "#ffffff"
                    }},
                    "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 80,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "bottom",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                        }
                    },
                }
                } 
                /> 
            </div>
        </div>
    )
}

export default SubMain;
