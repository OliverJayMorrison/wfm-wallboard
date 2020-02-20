import React, {Component} from "react"
import "./WallboardRowStatistic.css"
import {Col} from "react-bootstrap";

class WallboardRowStatistic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stat: this.props.stat,
            divider: this.props.divider,
            name: this.props.name,
            finalResult: this.props.stat - this.props.divider
        }
    }

    calculate() {
        if (this.state.stat != null && this.state.divider != null) {
            this.setState({finalResult: (this.state.stat - this.state.divider)})
        }
        if (this.state.stat == null) {
            //Set background to RED
            return (<Col className="WallboardRowStatistic">ERROR</Col>)
        } else if (this.state.finalResult < 0) {
            //Set background to red
            return (<Col className="WallboardRowStatistic">{this.props.stat}</Col>)
        } else {
            return (<Col className="WallboardRowStatistic">{this.props.stat}</Col>)
        }
    }


    render() {
        return (
                <Col className="WallboardRowStatistic">
                    <div>{this.props.stat}</div>
                    <div className="WallboardRowStatistic-text">{this.props.name}</div>
                </Col>
        )
    }
}

export default WallboardRowStatistic