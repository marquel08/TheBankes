import React from "react";
import '../stylesX/ContactUs.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
    return(
        <>
        <div id='encompass'>
            <div id='leftSide'>
                <h1 id='title'>Contact Us</h1>
                <p id='desc'>Do you have any questions or concerns for us? Please don't hesitate to contact us right away! Our team will respond within a matter of hours to assist you during business days.</p>
                <br/>
                <div id='bodyBox'>
                    <form id='contactUs'>
                        <input type='text' id='firstName1' placeholder="First Name" required/>
                        <br/><br/>
                        <input type='text' id='lastName1' placeholder="Last Name" required/>
                        <br/><br/>
                        <input type='email' id='email1' placeholder="Email Address" required/>
                        <br/><br/>
                        <input type='text' id='subject' placeholder="Subject" required/>
                        <br/><br/>
                        <textarea type='text' id='response' placeholder='Type here...' required/>
                        <br/><br/>
                        <button type='submit' id='submit1'>Submit</button>
                    </form>
                </div>
            </div>
    

        <br/><br/>

        <div id='contactInfo'>
            <FontAwesomeIcon icon={faLocationDot}/>&nbsp;&nbsp;&nbsp;&nbsp;San Francisco, CA, 94126, USA
            <br/><br/>
            <FontAwesomeIcon icon={faPhone}/>&nbsp;&nbsp;&nbsp;&nbsp;+ 1 234 567 8900
            <br/><br/>
            <FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;&nbsp;&nbsp;contact@mdbootstrap.com
        </div>
        <div className="clearBoth"></div>
        
    </div>
        </>
    )
}

export default ContactUs;