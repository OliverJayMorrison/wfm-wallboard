import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./WallboardRow.css"
import WallboardRowStatistic from "./WallboardRowStatistic";
import WallboardRowQueue from "./WallboardRowQueue"

function WallboardRow() {
    return (
        <div className="WallboardRow">
            <Container>
                <Row>
                    <WallboardRowQueue />
                    <WallboardRowStatistic />
                    <WallboardRowStatistic />
                    <WallboardRowStatistic />
                    <WallboardRowStatistic />
                </Row>
            </Container>
        </div>
    )
}

export default WallboardRow;