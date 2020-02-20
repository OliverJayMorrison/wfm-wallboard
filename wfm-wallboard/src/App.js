import React, {Component} from "react"
import WallboardHeader from "./WallboardHeader"
import WallboardRow from "./WallboardRow"

class App extends Component {

    render() {
        return (
            <div>
                <WallboardHeader/>
                <WallboardRow queueId={'1586'} />
                <WallboardRow queueId={'1589'} />
                <WallboardRow queueId={'1596'} />
            </div>
        )
    }
}

export default App

//http://localhost:7001/api/wfm/main/v1/queues/1589/statistics?filter%5BfromDate%5D=2020-03-23T00%3A00%3A00.000Z&filter%5BtoDate%5D=2020-03-23T00%3A15%3A00.000Z
//API request format

//https://pusher.com/tutorials/consume-restful-api-react
//Consume API data

//https://riptutorial.com/reactjs/example/22111/http-get-request
//API request format