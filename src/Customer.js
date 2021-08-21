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
            <h3 data-aos="fade-up">Clients <br/> <span className="soon">Are Here...</span></h3>
            <div data-aos="fade" className="customer__container">
                <img src="./images/customer.JPG" loading="lazy" alt="Customer Feedback" width="1177" height="791" />
                <img src="./images/customer.JPG" loading="lazy" alt="Customer Feedback" width="1177" height="791" /> 
                <img src="./images/customer.JPG" loading="lazy" alt="Customer Feedback" width="1177" height="791" />
            </div>
        </div>
    )
}

export default Customer
