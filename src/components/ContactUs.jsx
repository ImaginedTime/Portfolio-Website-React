import React from 'react'
import '../styles/contactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ContactUs() {
    return (
        <div>
            <br id="contact-us1" />
            <section id="contact-us">
                <div className="contact-info">
                    <h2 className="section-header">Contact Me</h2>
                    <div className="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        BR Ambedkar Hall of Residence, IIT Kharagpur, West Bengal, India - 721302
                    </div>
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} />
                        +91-7571053858
                    </div>
                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        udayomsrivastava111@gmail.com
                    </div>
                </div>

                <div className="contact-us-inputs-container">
                    <h2 className="section-header">Get In Touch</h2>
                    <h4 className="suggestion">Feel free to drop me a line below</h4>
                    <div className="inputs-container">
                        <input type="name" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="textareax" placeholder="Type Your Message Here..." />
                        <input type="button" value="Send" />
                    </div>
                </div>
            </section>
        </div>
    )
}
