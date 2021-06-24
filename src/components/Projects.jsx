import React from "react";
import SubNavbar from "./SubNavbar";

function Projects() {
    return (
        <div className="projects">
            <div id="Projects" className="side-by-side projects-left">
                <div className="title">
                    Projects
                </div>
                <SubNavbar />
            </div>
            <div className="side-by-side projects-right right">
                <div>
                    <h3 className="mips-header">
                        <a className="mips-link" href="https://github.com/VaughanEric/MIPS_Machine_Lab/tree/main">MIPS Machine</a>
                    </h3>
                    <p className="mips-info">
                        This program is a simple version of a MIPS processor.
                        It displays the updated contents of all registers while handling some of the operations and functionalities of an actual MIPS processor.
                    </p>
                </div>
                <div className="blast-off">
                    <h3 className="blast-off-header">
                        <a className="blast-off-link" href="https://github.com/VaughanEric/EF152/tree/develop">Blast Off</a>
                    </h3>
                    <p className="blast-off-info">
                        This website, which resulted from a group project in my Engineering for Physics II course, contains a game intended to teach elementary school students about trajectory.
                        I was responsible for the website design and development (not including the game).
                    </p>
                </div>
                <p className="projects-footnote">
                    * The names of the projects are linked to their respective GitHub repository.
                </p>
            </div>
        </div>
    );
}

export default Projects;
