import React from "react";
import "./WallboardHeader.css"
import Clock from "./Clock.js"

function WallboardHeader() {
    return (
        <div className="WallboardHeader">
            <div className="WallboardHeader-sides">
                <img src="../resources/verint.png" alt=""></img>
            </div>

            <div className="WallboardHeader-mid">
                "Generic Company Name"
            </div>

            <div className="WallboardHeader-sides">
                <Clock />
            </div>
        </div>
    );
}

export default WallboardHeader