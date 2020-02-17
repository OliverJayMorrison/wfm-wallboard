import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="Queue Analytics Wallboard">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
class HeaderRow extends React.Component {
    /*3 elements in the row. Left Element id Verint logo, middle is configurable call center name, right component is a date and time display*/
        render () {
            return {
             <div class = row>
                 <div class = imageColumn>
                     <img src = "verint.png"></img>
                 </div>
                 <div class = companyName>
                     <h1> Insert Company Name Wallboard</h1>
                 </div>
             </div>
            }
        }
}

class QueueRow extends React.Component {
    render() {
        /*Needs queue name, and up to 4 data inputs, using Volume, AHT, Service level and ASA to start (make configurable if remaining time.*/
        <div>
            <p> Queue Name</p>
        </div>
    }
}
export default App;
