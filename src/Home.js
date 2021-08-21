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
                    <img src="./images/moving.JPG" loading="lazy" alt="background" width="1200" height="800" />
                </figure>

                <div className="card__body">
                    <h2 className="card__name">Ahmed Ibrahim Elsaeed</h2>
                    <h2 className="card__job">Web Developer</h2>
                    <p className="card__bio">Working with mastery is my commitment.</p>
                </div>
                <div className="card__footer">
                    <p className="card__date">{new Date().toDateString()}</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="home__list">
                <a aria-label="github" href="https://github.com/ahmedsanad88" className="git social"> <GitHubIcon /> </a>
                <a aria-label="linkedin" href="https://www.linkedin.com/in/ahmed-ibrahim-2a0220110/" className="linkIn social"> <LinkedInIcon/> </a>
                <a aria-label="twitter" href="https://twitter.com/ahmedsand151188" className="twitter social"> <TwitterIcon/> </a>
                <a aria-label="youtube" href="https://www.youtube.com/channel/UCLQEon2Jx_GiFHnWK6gZ_cw/featured?view_as=subscriber" className="youTube social"> <YouTubeIcon/> </a>
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
                            "speed": 1,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "bottom",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
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
