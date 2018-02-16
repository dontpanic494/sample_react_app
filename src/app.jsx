import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to December 25, 2018</div>
        <div>
          <div className="Clock-days">Days</div>
          <div className="Clock-hours">Hours</div>
          <div className="Clock-minutes">Minutes</div>
          <div className="Clock-seconds">Seconds</div>
        </div>
        <div>
          <input placeholder='new date'/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
