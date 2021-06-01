//jshint esversion:6

import React, { useEffect } from 'react';
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";


function About() {

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


    const handleHover = (e) => {
        e.target.src="./images/mine.jpg";
    };

    const handleLeave =(e) => {
        e.target.src="./images/myAvatar.png";
    };

    return (
        <div className="about">

            <img data-aos="fade-up" onMouseEnter={handleHover} onMouseLeave={handleLeave} src="./images/myAvatar.png" loading="lazy" alt="avatar" className="about__img" /><br/>

            <div data-aos="fade-right" className="about__me"><br/>
                <h2>About me</h2>
                <p data-aos="fade-up" className="aboutMe">
                My name is <b>Ahmed Sanad</b>, father of two daughters, holder of a Bachelor of Science in Chemistry, which was the basis of my education on analyzing problems and working to find a logical solution to them.
                I learned coding by myself Because of my passion for software.
                I have a diverse set of skills like design, HTML, CSS, Javascript and much more libraries and tools for both front-end & back-end which comes all togther to deliver Working with mastery and commitment.
                </p>
            </div>
            <div data-aos="fade-left" className="about__l"><br/>
                <h2>How will help you?</h2>
                <ul data-aos="fade-up" data-aos-delay="100" className="firstL">
                    <li className="about-scroll"><span className="firstLetter">W</span>orking on full stack website (Front-end & Back-end)</li>
                    <li className="about-scroll"><span className="firstLetter">D</span>eveloping front end website architecture.</li>
                    <li className="about-scroll"><span className="firstLetter">D</span>esigning user interactions on web pages.</li>
                    <li className="about-scroll"><span className="firstLetter">D</span>eveloping back end website applications.</li>
                    <li className="about-scroll"><span className="firstLetter">C</span>reating servers and databases for functionality.</li>
                    <li className="about-scroll"><span className="firstLetter">E</span>nsuring cross-platform optimization for mobile phones.</li>
                    <li className="about-scroll"><span className="firstLetter">E</span>nsuring responsiveness of applications.</li>
                    <li className="about-scroll"><span className="firstLetter">W</span>orking alongside graphic designers for web design features.</li>
                    <li className="about-scroll"><span className="firstLetter">S</span>eeing through a project from conception to finished product.</li>
                    <li className="about-scroll"><span className="firstLetter">D</span>esigning and developing APIs.</li>
                    <li className="about-scroll"><span className="firstLetter">M</span>eeting both technical and consumer needs.</li>
                    <li className="about-scroll"><span className="firstLetter">S</span>taying abreast of developments in web applications and programming languages.</li>
                </ul>
            </div>    

            <div data-aos="fade-right" className="skill"><br/>
                    <h2 className="word-skill">Tools & Skills</h2>
                    <div data-aos="fade-up" data-aos-delay="100" className="all-ball">
                        <p className="ball">C</p>
                        <p id="circle" className="ball">HTML</p>
                        <p className="ball">CSS</p>
                        <p className="ball">Javascript</p>
                        <p className="ball">React.js</p>
                        <p className="ball">Node.js</p>
                        <p className="ball">Express</p>
                        <p className="ball">MySQL</p>
                        <p className="ball">MongoDB</p>
                        <p className="ball">Git</p>
                    </div>
                </div>

                <div data-aos="fade-left" className="soft__skill"><br/>
                    <h2>Services Expected</h2>
                    <ol data-aos="fade-up" data-aos-delay="100" className="secondL">
                        <li className="other-scroll"><span className="firstLetter">I</span> will provide free support after complete the project.</li>
                        <li className="other-scroll"><span className="firstLetter">100%</span> Privacy as your website.</li>
                        <li className="other-scroll"><span className="firstLetter">I</span>mprove the Security of your website.</li>
                        <li className="other-scroll"><span className="firstLetter">100%</span> your satisfaction is my top priority.</li>
                        <li className="other-scroll"><span className="firstLetter">D</span>edicated Support.</li>
                        <li className="other-scroll"><span className="firstLetter">Q</span>uick Delivery without losing efficiency and quality.</li>
                        <li className="other-scroll"><span className="firstLetter">F</span>ollowing up any additional or replacment request.</li>
                    </ol>
                </div>
        </div>
    )
}



export default About;
