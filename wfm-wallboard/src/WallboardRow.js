import React, {Component} from "react"
import "./WallboardRow.css"
import WallboardRowStatistic from "./WallboardRowStatistic";
import WallboardRowQueue from "./WallboardRowQueue"

class WallboardRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queueId: this.props.queueId,
            queueName: [],
            statisticsData: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/127.0.0.1:7001/api/wfm/main/v1/queues/' + this.props.queueId.toString() + '/statistics?filter%5BfromDate%5D=2020-03-23T00%3A00%3A00.000Z&filter%5BtoDate%5D=2020-03-23T00%3A15%3A00.000Z',
            {
                headers: {
                    VerintUserName: 'wsuperuser'
                }
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({statisticsData: data})
            })
            .catch(console.log);

        fetch('http://localhost:3001/127.0.0.1:7001/api/wfm/main/v1/queues/',
            {
                headers: {
                    VerintUserName: 'wsuperuser'
                }
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({queueName: data})
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className="WallboardRow">
                <WallboardRowQueue queueName={this.state.queueId}/>
                <WallboardRowStatistic statisticsData={this.state.statisticsData}/>
                <WallboardRowStatistic stat={this.state.statisticsData}/>
                <WallboardRowStatistic stat={this.state.statisticsData}/>
                <WallboardRowStatistic stat={this.state.statisticsData}/>
            </div>
        )
    }
}

export default WallboardRow;