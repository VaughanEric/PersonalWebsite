import React from "react";
import SubNavbar from "./SubNavbar";
import {BsStarFill} from "react-icons/bs";
import {BsStarHalf} from "react-icons/bs";
import {BsStar} from "react-icons/bs";

function Skills() {
    return (
        <div className="skills">
            <div id="Skills" className="side-by-side skills-left">
                <div className="title">
                    Skills
                </div>
                <SubNavbar />
            </div>
            <div className="side-by-side skills-right right">
                <div>
                    <h3 className="skills-h3-languages">Programming Languages</h3>
                    <table>
                        <tr>
                            <td className="td-left">C++</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarHalf className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">HTML / CSS</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarHalf className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">React</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarHalf className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">Bootstrap Framework</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarHalf className="star-icon" />
                                <BsStar className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">JavaScript</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarHalf className="star-icon" />
                                <BsStar className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">Angular</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStar className="star-icon" />
                                <BsStar className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">MongoDB / Mongoose</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStar className="star-icon" />
                                <BsStar className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">Node.js / Express.js</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStar className="star-icon" />
                                <BsStar className="star-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td className="td-left">Python</td>
                            <td className="td-right">
                                <BsStarFill className="star-icon" />
                                <BsStarFill className="star-icon" />
                                <BsStar className="star-icon" />
                                <BsStar className="star-icon" />
                                <BsStar className="star-icon" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="hobbies">
                    <h3 className="skills-h3-hobbies">Hobbies</h3>
                    <ul>
                        <li>Continually learning through Udemy courses</li>
                        <div className="udemy-courses">
                            <p>Completed Courses:</p>
                            <ul>
                                <li>The Complete 2021 Web Development Bootcamp</li>
                                <li>2021 Complete Python Bootcamp From Zero to Hero in Python</li>
                            </ul>
                        </div>
                        <li>Practicing programming</li>
                        <li>Relaxing with family and friends</li>
                        <li>Playing and watching soccer</li>
                        <ul>
                            <li>Manchester United supporter</li>
                        </ul>
                        <li>Watching Formula One</li>
                        <ul>
                            <li>McLaren Racing supporter</li>
                        </ul>
                        <li>Golfing</li>
                        <li>Practicing piano</li>
                        <li>Playing table tennis</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
