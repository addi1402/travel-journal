import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import destinations from "./assets/Data";
import Card from "./components/Card";

const places = destinations.map((dest)=>{
    return(
        <Card destinations={dest}/>
    );
});

export default function App(){
    return(
        <div className="frame">
            <NavBar/>
            <div className="main-content">
                {places}
            </div>
        </div>
    );
}
