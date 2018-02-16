import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  handleClickSubmit = () => {
    this.setState({deadline: this.state.newDeadline})
  };

  handleInputValue = (e) => {
    this.setState({newDeadline: e.currentTarget.value})
  };

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="Clock-days">Days</div>
          <div className="Clock-hours">Hours</div>
          <div className="Clock-minutes">Minutes</div>
          <div className="Clock-seconds">Seconds</div>
        </div>
        <div>
          <input
            placeholder='Enter a new date...'
            value={this.state.newDeadline}
            onChange={this.handleInputValue}
            />
          <button onClick={() => this.handleClickSubmit()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;
