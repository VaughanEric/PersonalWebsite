import React from "react";
import MainNavbar from "./MainNavbar";
import FixedNavbar from "./FixedNavbar";

function Header() {
    return (
        <div className="header">
            <FixedNavbar />
            <div className="greeting">
                <h3>Howdy, I'm</h3>
                <h1>Eric Vaughan</h1>
            </div>
            <MainNavbar />
        </div>
    );
}

export default Header;