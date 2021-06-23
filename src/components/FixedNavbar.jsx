import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function FixedNavbar() {
    return (
        <Navbar id="fixed-navbar" collapseOnSelect={true} expand="xl">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className="sub-nav-links" data-toggle="collapse" data-target=".navbar-collapse" href="#About">
                        About
                    </Nav.Link>
                    <Nav.Link className="sub-nav-links"  data-toggle="collapse" data-target=".navbar-collapse" href="#Education">
                        Education
                    </Nav.Link>
                    <Nav.Link className="sub-nav-links"  data-toggle="collapse" data-target=".navbar-collapse" href="#Skills">
                        Skills
                    </Nav.Link>
                    <Nav.Link className="sub-nav-links"  data-toggle="collapse" data-target=".navbar-collapse" href="#Projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link className="sub-nav-links"  data-toggle="collapse" data-target=".navbar-collapse" href="#Contact">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default FixedNavbar;