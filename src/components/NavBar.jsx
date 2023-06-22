import React from "react";
import "../stylesheets/NavBar.css";
import Globe from "../assets/globe.svg";

export default function NavBar(){
    return(
        <header className="nav-bar">
            <img className="logo" src={Globe} alt="Logo" width="24px"/>
            <p className="title">My Travel Journal</p>
        </header>
    );
}