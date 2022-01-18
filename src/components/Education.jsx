import React from "react";
import SubNavbar from "./SubNavbar";
import Collapsible from "react-collapsible";
import { FaChevronDown } from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill";

function Education() {

    <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    </head>

    smoothscroll.polyfill();

    const UtkTriggerClosed = () =>
        <div className="big-trigger">
            <div className="school">
                <h3>The University of Tennessee, Knoxville</h3>
                <img className="logo" src="./images/vols.png" alt="UTK Vols Logo" />
            </div>
            <FaChevronDown id="utk-option-icon" /> 
        </div>;

    function UtkOpening() {
        document.getElementById("utk-option-icon").style.transition = "transform 1000ms";
        document.getElementById("utk-option-icon").style.transform = "rotateX(-180deg)";
        
        setTimeout( function() {
            document.getElementById("utk-content").parentElement.parentElement.parentElement.scrollIntoView({behavior: "smooth", block: "start"});
        }, 100);
    }

    function UtkClosing() {
        document.getElementById("utk-option-icon").style.transition = "transform 1000ms";
        document.getElementById("utk-option-icon").style.transform = "rotateX(0deg)";
        document.getElementById("utk-content").parentElement.parentElement.classList.remove("open-collapsible-overflow");
        
        if (document.documentElement.clientWidth < 992) {
            document.getElementsByClassName("education-right")[0].scrollIntoView({behavior: "smooth", block: "start"});
        }
    }

    const SiegelTriggerClosed = () =>
        <div className="big-trigger">
            <div className="school">
                <h3>Siegel High School</h3>
                <img className="logo" src="./images/siegel.png" alt="Siegel Stars Logo" />
            </div>
            <FaChevronDown id="siegel-option-icon" />
        </div>;

    function SiegelOpening() {
        document.getElementById("siegel-option-icon").style.transition = "transform 1000ms";
        document.getElementById("siegel-option-icon").style.transform = "rotateX(-180deg)";

        if (document.documentElement.clientWidth > 992) {
            document.getElementById("siegel-content").parentElement.parentElement.classList.add("open-collapsible-overflow");
        }
        
        setTimeout( function() {
            document.getElementById("siegel-content").parentElement.parentElement.parentElement.scrollIntoView({behavior: "smooth", block: "start"});
        }, 100);
    }

    function SiegelClosing() {
        document.getElementById("siegel-option-icon").style.transition = "transform 1000ms";
        document.getElementById("siegel-option-icon").style.transform = "rotateX(0deg)";
        
        if (document.documentElement.clientWidth > 992) {
            document.getElementById("siegel-content").parentElement.parentElement.classList.remove("open-collapsible-overflow");
        }

        else {
            document.getElementsByClassName("big-trigger")[1].scrollIntoView({behavior: "smooth", block: "end"});
        }
    }

    return (
        <div className="education">
            <div id="Education" className="side-by-side education-left">
                <div className="title">
                    Education
                </div>
                <SubNavbar />
            </div>
            <div className="side-by-side education-right right">
                <Collapsible 
                    trigger={<UtkTriggerClosed />} 
                    onOpening={UtkOpening}
                    onClosing={UtkClosing}
                    transitionTime={1000}
                >
                    <div id="utk-content" >
                        <div className="basic-school-info">
                            <ul>
                                <li>Sophmore in the Tickle College of Engineering Class of 2024</li>
                                <li>Current GPA of 4.0</li>
                                <li>Major: Computer Science</li>
                                <li>Minor: Business Administration</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Extracurriculars</h3>
                        <div className="extracurriculars">
                            <ul>
                                <li>Chancellor's Honors College</li>
                                <li>Hack4Impact UTK</li>
                                <li>UTK Collegiate Entrepreneurs' Organization</li>
                                <li>UTK Roundnet</li>
                                <li>Intramural Table Tennis</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Service</h3>
                        <div className="service">
                            <ul>
                                <li>Raising a Voice (2021)</li>
                                <li>Knoxville Area Rescue Mission (2021)</li>
                                <li>UTK Gardens (2021)</li>
                                <li>UTK Trash Cleanup (2020)</li>
                                <li>Odd Fellows Cemetery (2020)</li>
                                <li>UTK Coronavirus Test Kits Assembly (2020)</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Notable Courses</h3>
                        <div className="notable-courses">
                            <ul>
                                <li>Computer Organization</li>
                                <li>Data Structures and Algorithms I</li>
                                <li>Introduction to Computer Science</li>
                                <li>Matrix Algebra I</li>
                                <li>Probability and Random Variables</li>
                            </ul>
                        </div>
                    </div>
                </Collapsible>
                <hr /> 
                <Collapsible 
                    trigger={<SiegelTriggerClosed />} 
                    onOpening={SiegelOpening}
                    onClosing={SiegelClosing}
                    transitionTime={1000}
                >
                    <div id="siegel-content">
                        <div className="basic-school-info">
                            <ul>
                                <li>Valedictorian of the Class of 2020</li>
                                <li>GPA of 4.0</li>
                                <li>Over 50 Service Hours</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Notable Extracurriculars</h3>
                        <div className="extracurriculars">
                            <ul>
                                <li>Latin Club (Cofounder)</li>
                                <li>Excalibur Club (President)</li>
                                <li>National Honors Society (President)</li>
                                <li>Soccer Team (Captain)</li>
                                <li>Key Club (Secretary)</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Notable Awards and Honors</h3>
                        <div className="awards">
                            <ul>
                                <li>Most Outstanding AP Calculus BC Student (2020)</li>
                                <li>Most Outstanding AP Latin Student (2020)</li>
                                <li>Most Outstanding AP Physics I Student (2020)</li>
                                <li>Most Intellectual for Siegel High Class of 2020 (2019</li>
                                <li>Tennessee Governor’s School for Emerging Technology Scholar (2019)</li>
                                <li>Most Outstanding AP Biology Student (2019)</li>
                                <li>Most Outstanding AP Language and Composition Student (2019)</li>
                            </ul>
                        </div>
                    </div>
                </Collapsible>
            </div>
        </div>
    );
}

export default Education;