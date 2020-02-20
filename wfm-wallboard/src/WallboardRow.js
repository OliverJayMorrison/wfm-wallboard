import React, {Component} from "react"
import "./WallboardRow.css"
import WallboardRowStatistic from "./WallboardRowStatistic";
import WallboardRowQueue from "./WallboardRowQueue"

class WallboardRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queueId: this.props.queueId,
            deferred: false,
            queueName: undefined,
            statisticsData: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/127.0.0.1:7001/api/wfm/main/v1/queues/' + this.props.queueId + '/statistics?filter%5BfromDate%5D=2020-02-19T00%3A00%3A00.000Z&filter%5BtoDate%5D=2020-02-19T00%3A15%3A00.000Z',
            {
                headers: {
                    VerintUserName: 'wsuperuser'
                }
            })
            .then(results => results.json())
            .then((data) => {
                this.setState({statisticsData: data.data.attributes.timeSeries[0]})
            })
            .catch(console.log);

        fetch('http://localhost:3001/127.0.0.1:7001/api/wfm/main/v1/queues/' + this.props.queueId,
            {
                headers: {
                    VerintUserName: 'wsuperuser'
                }
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({queueName: data.data.attributes.name})
            })
            .catch(console.log);
    }

    render() {
        if(!this.state.deferred) {
            return (
                <div className="WallboardRow">
                    <WallboardRowQueue queueName={this.state.queueName}/>
                    <WallboardRowStatistic stat={this.state.statisticsData.volumeActual} divider={this.state.statisticsData.volumeForecast}/>
                    <WallboardRowStatistic stat={this.state.statisticsData.activityHandlingTimeActual} divider={this.state.statisticsData.activityHandlingTimeForecast}/>
                    <WallboardRowStatistic stat={this.state.statisticsData.serviceLevelActual} divider={this.state.statisticsData.serviceLevelRequired}/>
                    <WallboardRowStatistic stat={this.state.statisticsData.averageSpeedToAnswerActual} divider={this.state.statisticsData.averageSpeedToAnswerRequired}/>
                </div>
            )
        } else {
            return (
                <div className="WallboardRow">
                    <WallboardRowQueue queueName={this.state.queueName}/>
                    <WallboardRowStatistic actual={this.state.statisticsData.volumeActual} required={this.state.statisticsData.volumeForecast}/>
                    <WallboardRowStatistic stat={this.state.statisticsData.backlogActual} />
                    <WallboardRowStatistic stat={this.state.statisticsData.serviceLevelActual}/>
                    <WallboardRowStatistic stat={this.state.statisticsData.volumeHandledActual}/>
                </div>
            )
        }
    }
}

export default WallboardRow;