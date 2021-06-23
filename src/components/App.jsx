import React from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
    return (
    <div className="webpage-body">
         <Header />
         <About />
         <Education />
         <Skills />
         <Projects />
         <Contact />
    </div>
    );
}

export default App;