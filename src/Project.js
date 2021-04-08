//jshint esversion:6

import React, { useEffect } from 'react';
import "./Project.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CodeIcon from '@material-ui/icons/Code';
import Aos from "aos";
import "aos/dist/aos.css";


function Project() {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });

        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="flip">
            <div data-aos="fade" className="project-text">
                <h1>Projects</h1>
            </div>
            <div className="customer">
                <div data-aos="fade-up" data-aos-delay="100" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/1.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>Full Stack Ecommerce Website </h2>
                            <p>Amazon clone app, Including features like Login & Register, Add to Basket, checkout Page, payment process and order page and many additional features. </p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/Full-Stack-Ecommerce-App"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="https://clone-5a7dd.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img  className="img-down" src="./images/2.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>Whatsapp Clone using (MERN) </h2>
                            <p>Including features like Sign In with Google, Sign Out, Support Group chat, Adding Group, identify users for chatting and having fun....</p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/Whatsapp-MERN-Clone"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="https://whatapp-full-mern.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/7.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>Telegram Clone</h2>
                            <p>I'm using main functionality of telegram app which Including features like Sign In with Google, Sign Out, Support Group chat, Adding Group, identify users Info for chatting and lots of functionalities...</p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/Telegram-Clone"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="https://telegram-clone-redux.firebaseapp.com/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/3.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>TikTok Clone (V1)</h2>
                            <p>Here using some functionality from real tiktok app which is makes it look real as we can play videos, swiping down for next video and many more...</p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/Tiktok-Clone"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="https://tiktok-clone-7fc49.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/6.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>My Website (V1)</h2>
                            <p>As expected it is 1st version of my Portfolio website as i'm big fan for simple designs, i draw it on my mind and catch it by code.</p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/My-Website"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="/main"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/4.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>Tinder Clone</h2>
                            <p>Here i'm using main functionality of tinder app which is cards based app including swiping cards right or left along with almost main buttons as real app...</p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/Tinder-Clone-MERN-"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="https://tinder-frontend88.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/5.jpg" loading="lazy" alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>Landing Page for Dev Community</h2>
                            <p>Here is very pure and sleek landing page for dev. community which can be easily adapted with any content or adding features to it.</p>
                            <div className="customer__btn">
                                <button>
                                    <a href="https://github.com/ahmedsanad88/NewsLetter-LandingPage"><CodeIcon /></a>
                                </button>
                                <button>
                                    <a href="https://intense-island-88095.herokuapp.com/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Project;