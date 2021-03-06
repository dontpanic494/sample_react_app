import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="Clock-days">{this.state.days} Days</div>
          <div className="Clock-hours">{this.state.hours} Hours</div>
          <div className="Clock-minutes">{this.state.minutes} Minutes</div>
          <div className="Clock-seconds">{this.state.seconds} Seconds</div>
        </div>
      </div>
    )
  }
}

export default Clock
