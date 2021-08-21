//jshint esversion:6
import React, { useEffect } from 'react';
import "./Contact.css"; 
import Particles from 'react-particles-js';
import firebaseApp from "./firebase";
import Aos from "aos";
import "aos/dist/aos.css";


function Contact() {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });

        Aos.init({
            once: true
        });
    }, []);

      const messageRef = firebaseApp.firestore();

    function serverData(e){
        e.preventDefault();
        // Getting value once click submit
        const fname = String(getId("fname"));
        const company = String(getId("company"));
        const email = String(getId("email"));
        const mobile = String(getId("mobile"));
        const subject = String(getId("subject"));
        // const file = getId("file");

        if(fname.length !== 0 && email.length !== 0 && subject.length !== 0) {
            if (fname[0] !== " " && email[0] !== " " && subject[0] !== " ") {
                // save for message
                saveMessage(fname, company, email, mobile, subject);
        
                // show alert
                document.querySelector('.alert').style.display="block";
        
                // removing alert after 3 sec.
        
                setTimeout(() => {
                    document.querySelector('.alert').style.display="none";
                }, 3000);
        
                //  reset form after submition
                document.getElementById('contactForm').reset();
            } else {
                alert("Please Avoid using empty spacebar click!");
            }
        } else {
        alert("please Enter at least (Name & Email and Subject) to manage contacting you back, Thanks..");
        }
    }

    // grapping id id faster
    function getId(id) {
        return document.getElementById(id).value;
    }

    // saving messages to firebase
    const saveMessage = (fname, company, email, mobile, subject) => {
        
        messageRef.collection('messages').doc().set({
            fname: fname,
            company: company || null,
            email: email,
            mobile: mobile || null,
            subject: subject,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    };

    return (
        <div className="form">
            <div data-aos="fade-right" data-aos-delay="200" className="form-text">
                <h3 className="gradient-text">Get In Touch</h3>
                <div className="adress">
                    <h4>Adress</h4>
                    <p>Salam Building 3rd floor,6th of October<br/>
                        Cairo, Egypt
                    </p>
                </div>
                <div className="call">
                    <h4>Let's Talk</h4>
                    <a href="tel:002-155-6766215">(002)1556766215</a>
                </div>
                <div className="support">
                    <h4>General Support</h4>
                    <a href="mailto:ahmedibrahim151188@outlook.com">Ahmedibrahim151188@outlook.com</a>
                </div>
            </div>

            <form method="POST" data-aos="fade-left" id="contactForm" className="contact__form"  autoComplete="off" encType="text/plain">
                <div className="alert"><p>Thanks For contacting us</p>
                <p>Will get back to you soon...</p> </div>
                <label ><b>Name</b></label><br/>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required/><br/>
        
                <label ><b>Company Name</b></label><br/>
                <input type="text" id="company" name="company" placeholder="Your Company name.." /><br/>
        
                <label ><b>Email</b></label><br/>
                <input id="email" type="email" name="email" placeholder="ex. 123@gmail.com" required/><br/>

                <label ><b>Tel</b></label><br/>
                <input id="mobile" type="tel" name="mobile" placeholder="Contact Number.." /><br/>
        
                <label ><b>Subject</b></label><br/>
                <textarea id="subject" name="subject" rows="7" wrap="hard" placeholder="Write something.." style={{resize: "none"}} required></textarea><br/>
        
                    {/* <label ><b>Add File</b></label><br/>
                    <input type="file" class="form-control-file" id="file" /><br/> onClick={serverData}*/}
                
                <div className="btns">
                    <input className="btn-grad" type="submit" value="Submit" onClick={serverData}/>
                    <input className="btn-grad" type="reset" value="Reset"/>
                </div>
                
            </form>
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



export default Contact;

