import React from "react";
import "./WallboardHeader.css"
import Clock from "./Clock.js"

function WallboardHeader() {
    let image = require('../resources/verint.png');
    return (
        <div className="WallboardHeader">
            <div className="WallboardHeader-left">
                <img src={image} alt=""></img>
            </div>

            <div className="WallboardHeader-mid">
                "Generic Company Name"
            </div>

            <div className="WallboardHeader-right">
                <Clock />
            </div>
        </div>
    );
}

export default WallboardHeader