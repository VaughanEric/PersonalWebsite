import React from "react";
import SubNavbar from "./SubNavbar";

function Contact() {

    return (
        <div className="contact">
            <div id="Contact" className="side-by-side contact-left">
                <div className="title">
                    Contact
                </div>
                <SubNavbar />
            </div>
            <div className="side-by-side contact-right right">
                <div className="contact-div">
                    <p className="contact-intro1">If you wish to collaborate on an exciting idea or have a business inquiry, please feel welcome to reach out to me!</p>
                    <p className="contact-intro2">I am only available for freelance opportunities, except for during the summer when I am also available for internships.</p>
                    <h3 className="name-heading">Eric Vaughan</h3>
                    <p className="name-description">Undergraduate Programmer and Web Developer</p>
                    <a className="contact-email" href="mailto:hello.ericvaughan@gmail.com">hello.ericvaughan@gmail.com</a>
                </div>
                <p className="contact-footnote">Site by Eric Vaughan (Updated as of January 2022)</p>
            </div>   
        </div>
    );
}

export default Contact;