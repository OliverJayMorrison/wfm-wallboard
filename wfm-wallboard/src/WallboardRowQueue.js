import React, {Component} from "react"
import "./WallboardRowQueue.css"
import {Col} from "react-bootstrap";

class WallboardRowQueue extends Component {
    render() {
        return (
            <div className="WallboardRowQueue">{this.props.queueName}</div>
        )
    }
}

export default WallboardRowQueue