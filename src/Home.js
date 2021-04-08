//jshint esversion:6

import React, { useEffect } from 'react';
import "./Home.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Particles from 'react-particles-js';
import Aos from "aos";
import "aos/dist/aos.css";


function Home() {

  useEffect(() => {
      Aos.init({
          duration: 2000
      });

      Aos.init({
          once: true
      });
  }, []);


    return (
        <div className="home">
            <div className="card">
                <figure className="card__image">
                    <img src="./images/moving.JPG" loading="lazy" alt="Short description"/>
                </figure>
                <div className="card__header">
                    <figure className="card__profile">
                        <img src="./images/My-Logo-1200---1200.png" loading="lazy"
                            alt="Short description"/>
                    </figure>
                </div>
                <div className="card__body">
                    <h3 className="card__name">Ahmed Ibrahim Elsaeed</h3>
                    <p className="card__job">Web Developer</p>
                    <p className="card__bio">Working with mastery is my commitment.</p>
                </div>
                <div className="card__footer">
                    <p className="card__date">{new Date().toDateString()}</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="home__list">
                <a href="https://github.com/ahmedsanad88" className="git social"> <GitHubIcon /> </a>
                <a href="https://www.linkedin.com/in/ahmed-ibrahim-2a0220110/" className="linkIn social"> <LinkedInIcon/> </a>
                <a href="https://twitter.com/ahmedsand151188" className="twitter social"> <TwitterIcon/> </a>
                <a href="https://www.youtube.com/channel/UCLQEon2Jx_GiFHnWK6gZ_cw/featured?view_as=subscriber" className="youTube social"> <YouTubeIcon/> </a>
            </div>
            <div className="particles">
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
                    "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 80,
                            "size_min": 0.1,
                            "sync": false
                        }
                    }
                }
                }} 
              /> 
            </div>
        </div>
    )
}



export default Home;
