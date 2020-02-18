import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./WallboardHeader.css"

function WallboardHeader() {
    return (
        <div className="WallboardHeader">
            <Container>
                <Row>
                    <Col className="WallboardHeader-cols"><img src="../resources/verint.png" alt=""/></Col>
                    <Col className="WallboardHeader-cols">Company Name</Col>
                    <Col className="WallboardHeader-cols">Date And Time Here</Col>
                </Row>
            </Container>
        </div>
    );
}

export default WallboardHeader