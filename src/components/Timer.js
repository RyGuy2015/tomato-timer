import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalTime: this.props.initialTime,
      minutes: 0,
      seconds: 0,
      start: false,
      pause: false,
      reset: false
    };

    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {}

  render() {
    return (
      <div>
        <p>{this.state.originalTime}</p>
        {this.state.minutes}:
        {this.state.seconds < 10
          ? `0${this.state.seconds}`
          : this.state.seconds}
      </div>
    );
  }
}

export default Timer;
