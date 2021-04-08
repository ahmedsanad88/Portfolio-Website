//jshint esversion:6

import React, { useEffect } from 'react';
import "./Customer.css";
import Aos from "aos";
import "aos/dist/aos.css";


function Customer() {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });

        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="cutomer">
            {/* <h1 data-aos="fade-up"> Our Clients FeedBack</h1> */}
            <h1 data-aos="fade-up">Coming <br/> <span className="soon">Soon</span></h1>
            <div data-aos="fade" className="customer__container">
                <img src="./images/customer.JPG" loading="lazy" alt="Avatar" />
                <img src="./images/customer.JPG" loading="lazy" alt="Avatar" /> 
                <img src="./images/customer.JPG" loading="lazy" alt="Avatar" />
            </div>
        </div>
    )
}

export default Customer
