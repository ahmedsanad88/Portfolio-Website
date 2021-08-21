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
                <h2>Projects</h2>
            </div>
            <div className="customer">
                <div data-aos="fade-up" data-aos-delay="100" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/1.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>Full Stack Ecommerce Website </h3>
                            <p>The Ecommerce Website is Mobile-friendly, Including features like Login & Register, Add to Basket, checkout Page, payment process and order page, and many additional features.</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/Full-Stack-Ecommerce-Web-App"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="https://clone-5a7dd.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/4.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>Money Tracker</h3>
                            <p>Money Tracker is a web app that will help users to track spent or earned money on a daily and monthly basis by using interactive charts, This will be tablets and PCs version because I'm planning for a separate app for mobile.</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/money-tracker"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="https://control-your-money-spend.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/7.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>Telegram Clone</h3>
                            <p>Telegram Clone is a simple chat app with main functionalities and features like Sign In with Google, Sign Out, it Support Group chat, Adding Group, identify every user's Info for chatting separation which is fun to work on it.</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/Telegram-Clone"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="https://telegram-clone-redux.firebaseapp.com/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/3.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>Company-Website-demo (V1)</h3>
                            <p>Clean & sleek and easy to navigate company Website making feasibility study (Mobile-Friendly), Using header contain only icons with Tooltip and different sections that explain what and how the company helping customers including as well contact & subscribe sections to engage with clients. the website has two versions (Dark & light mode).</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/Company-Website-Demo"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="https://business-startup-template.web.app/"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img  className="img-down" src="./images/2.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>Simple Landing Page</h3>
                            <p>Landing Page which include simple design with Slider (including company details and Social Proof) and taking customers directly to the point or action that they are required to do.</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/landing-page"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="https://rawgit.com/ahmedsanad88/landing-page/main/src/index.html"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/6.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>My Website (V1)</h3>
                            <p>Portfolio Website (Mobile-Friendly) that showing About you, Experience, Projects, real chat with customers, contact form Easy to navigate Thanks to React Components.</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/Portfolio-Website"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="/main"><PlayArrowIcon /></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="img-down" src="./images/5.jpg" loading="lazy" alt="Avatar" width="1200" height="800"/>
                        </div>
                        <div className="flip-card-back">
                            <h3>Todo's Web-App</h3>
                            <p>A fully functional todo web app that is ready to make it your partner on your mobile or PC'S as you can use strong Google authentication to log in or out of the app and you can add & edit & mark and delete your todos easy and fast.</p>
                            <div className="customer__btn">
                                <button aria-label="check code">
                                    <a aria-label="check code" href="https://github.com/ahmedsanad88/Elegant-Todo-App"><CodeIcon /></a>
                                </button>
                                <button aria-label="check website">
                                    <a aria-label="check website" href="https://todo-app-38e69.web.app/"><PlayArrowIcon /></a>
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