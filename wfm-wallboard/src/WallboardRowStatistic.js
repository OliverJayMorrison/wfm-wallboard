import React, {Component} from "react"
import "./WallboardRowStatistic.css"
import {Col} from "react-bootstrap";

class WallboardRowStatistic extends Component {
    render() {
        return (
            <Col className="WallboardRowStatistic">{this.props.stat}</Col>
        )
    }
}

export default WallboardRowStatistic