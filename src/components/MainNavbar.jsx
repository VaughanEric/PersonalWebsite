import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";

function MainNavbar() {
    return (
        <Navbar id="main-navbar" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className="main-nav-links">
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                    </Nav.Link>
                    <Navbar.Text className="main-nav-text">/</Navbar.Text>
                    <Nav.Link className="main-nav-links">
                        <Link
                            activeClass="active"
                            to="Education"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Education</Link>
                    </Nav.Link>
                    <Navbar.Text className="main-nav-text">/</Navbar.Text>
                    <Nav.Link className="main-nav-links">
                        <Link
                            activeClass="active"
                            to="Skills"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Skills</Link>
                    </Nav.Link>
                    <Navbar.Text className="main-nav-text">/</Navbar.Text>
                    <Nav.Link className="main-nav-links">
                        <Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Projects</Link>
                    </Nav.Link>
                    <Navbar.Text className="main-nav-text">/</Navbar.Text>
                    <Nav.Link className="main-nav-links">
                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNavbar;