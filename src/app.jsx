import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Countdown to December 25, 2018</div>
        <div>
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
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
