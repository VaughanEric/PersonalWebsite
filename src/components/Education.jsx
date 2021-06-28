import React from "react";
import SubNavbar from "./SubNavbar";
import Collapsible from "react-collapsible";
import { FaChevronDown } from "react-icons/fa";

function Education() {

    <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    </head>

    const UtkTriggerClosed = () =>
        <div className="big-trigger">
            <div className="school">
                <h3>The University of Tennessee, Knoxville</h3>
                <img className="logo" src="./images/vols.png" alt="UTK Vols Logo" />
            </div>
            <FaChevronDown id="utk-option-icon" /> 
        </div>;

    function UtkTurnUp() {
        document.getElementById("utk-option-icon").style.transition = "transform 1000ms";
        document.getElementById("utk-option-icon").style.transform = "rotateX(-180deg)";
        document.getElementById("utk-content").parentElement.parentElement.parentElement.scrollIntoView({behavior: "smooth", block: "start"});
    }

    function UtkTurnDown() {
        document.getElementById("utk-option-icon").style.transition = "transform 1000ms";
        document.getElementById("utk-option-icon").style.transform = "rotateX(0deg)";
        document.getElementById("utk-content").parentElement.parentElement.classList.remove("open-collapsible-overflow");

        // if (document.documentElement.clientWidth <= 992) {
        //     document.getElementsByClassName("education-right")[0].scrollIntoView({behavior: "smooth", block: "start"})
        // }
    }

    const SiegelTriggerClosed = () =>
        <div className="big-trigger">
            <div className="school">
                <h3>Siegel High School</h3>
                <img className="logo" src="./images/siegel.png" alt="Siegel Stars Logo" />
            </div>
            <FaChevronDown id="siegel-option-icon" />
        </div>;

    function SiegelTurnUp() {
        document.getElementById("siegel-option-icon").style.transition = "transform 1000ms";
        document.getElementById("siegel-option-icon").style.transform = "rotateX(-180deg)";

        if (document.documentElement.clientWidth > 992) {
            document.getElementById("siegel-content").parentElement.parentElement.classList.add("open-collapsible-overflow");
        }
        
        document.getElementById("siegel-content").parentElement.parentElement.parentElement.scrollIntoView({behavior: "smooth", block: "start"});
    }

    function SiegelTurnDown() {
        document.getElementById("siegel-option-icon").style.transition = "transform 1000ms";
        document.getElementById("siegel-option-icon").style.transform = "rotateX(0deg)";
        document.getElementById("siegel-content").parentElement.parentElement.classList.remove("open-collapsible-overflow");

        // if (document.documentElement.clientWidth <= 992) {
        //     document.getElementsByClassName("education-right")[0].scrollIntoView({behavior: "smooth", block: "start"})
        // }
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
                    onOpening={UtkTurnUp}
                    onClosing={UtkTurnDown}
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
                                <li>UTK Collegiate Entrepreneurs Organization</li>
                                <li>Intramural Table Tennis</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Service</h3>
                        <div className="service">
                            <ul>
                                <li>Knoxville Area Rescue Mission (2021)</li>
                                <li>UTK Gardens (2021)</li>
                                <li>UTK Trash Cleanup (2020)</li>
                                <li>Odd Fellows Cemetery (2020)</li>
                                <li>UTK Coronavirus Test Kits Assembly (2020)</li>
                            </ul>
                        </div>
                        <h3 className="education-h3-padding">Notable Courses From Freshman Year</h3>
                        <div className="notable-courses">
                            <ul>
                                <li>Computer Science 230 - Computer Organization</li>
                                <li>Engineering Fundamentals 152 - Physics for Engineers II</li>
                                <li>English 298 - Chancellor's Honors Writing II</li>
                                <li>Mathematics 251 - Matrix Algebra I</li>
                            </ul>
                        </div>
                    </div>
                </Collapsible>
                <hr /> 
                <Collapsible 
                    trigger={<SiegelTriggerClosed />} 
                    onOpening={SiegelTurnUp}
                    onClosing={SiegelTurnDown}
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