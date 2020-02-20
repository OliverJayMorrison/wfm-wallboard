import React, {Component} from "react"
import "./WallboardRowQueue.css"
import {Col} from "react-bootstrap";

class WallboardRowQueue extends Component {
    render() {
        return (
            <Col className="WallboardRowQueue">{this.props.queueId}</Col>
        )
    }
}

export default WallboardRowQueue