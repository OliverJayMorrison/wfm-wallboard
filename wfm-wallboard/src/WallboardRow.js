import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./WallboardRow.css"
import WallboardRowStatistic from "./WallboardRowStatistic";
import WallboardRowQueue from "./WallboardRowQueue"

function WallboardRow() {
    return (
        <div className="WallboardRow">
                    <WallboardRowQueue />
                    <WallboardRowStatistic />
                    <WallboardRowStatistic />
                    <WallboardRowStatistic />
                    <WallboardRowStatistic />
        </div>
    )
}

export default WallboardRow;