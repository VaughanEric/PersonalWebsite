import React from "react";
import SubNavbar from "./SubNavbar";

function About() {
    return (
        <div className="about">
            <div id="About" className="side-by-side about-left">
                <div className="title">
                    About
                </div>
                <SubNavbar />
            </div>
            <div className="side-by-side about-right right">
                <div className="introduction">
                    <p className="p-padding">
                        I am an undergraduate student studying computer science and business administration at the University of Tennessee, Knoxville.
                    </p>
                    <p>
                        Currently, I am focusing on furthering my web development skillset.
                        However, I also plan to concentrate on iOS development and machine learning in the near future.
                    </p>
                </div>
                <svg viewBox="0 0 100 100">
                    <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href="./images/portrait.JPG" x="-25" width="150" height="100" />
                        </pattern>
                    </defs>
                    <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" fill="url(#img)" stroke="#acdeaa"/>
                </svg>
                <h3 className="about-h3-padding">Values</h3>
                <div className="quote">
                    <p>
                        "With regard to performance, commitment, effort, dedication, there is no middle ground...
                        You do something very well or not at all."
                    </p>
                    <p className="quote-padding">
                        - Ayrton Senna,
                        <br />
                        Former Formula One Racing World Champion
                    </p>
                </div>
                <div className="about-list">
                    <p>
                        Inspired by Senna, I ensure exceptional quality in any challenge I undertake through:
                    </p>
                    <ul>
                        <li>Devising thorough strategies</li>
                        <li>Collaborating with others and listening to feedback</li>
                        <li>Demonstrating relentless effort</li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}

export default About;