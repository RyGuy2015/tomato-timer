import React, { Component } from "react";
import Timer from "./Timer";
class TimerContainer extends Component {
  constructor() {
    super();

    this.state = {
      pomodoroTime: 1500,
      shortBreak: 300,
      longBreak: 600,
      isClicked: false,
      initialTime: 1500,
      start: false,
      pause: false,
      reset: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = name => {
    console.log(name);
    let value = 5;
    if (name === "pomodoroTime") value = 1500;
    if (name === "shortBreak") value = 300;
    if (name === "longBreak") value = 600;
    if (name === "start") {
      value = true;
      this.setState({ pause: false, reset: false }, () => {
        console.log(
          this.state.start + " " + this.state.pause + " " + this.state.reset
        );
      });
    }
    if (name === "pause") {
      value = true;
      this.setState({ start: false, reset: false }, () => {
        console.log(
          this.state.start + " " + this.state.pause + " " + this.state.reset
        );
      });
    }
    if (name === "reset") {
      value = true;
      this.setState({ start: false, pause: false }, () => {
        console.log(
          this.state.start + " " + this.state.pause + " " + this.state.reset
        );
      });
    }
    this.setState({
      [name]: value
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="timer container">
        <div className="timer-type-buttons">
          <button
            className="button"
            id="pomodoro"
            onClick={() => this.handleClick("pomodoroTime")}
          >
            Pomodoro
          </button>
          <button className="button">Short Break</button>
          <button className="button">Long Break</button>
        </div>
        <div className="counter">
          <Timer {...this.state} />
        </div>
        <br />
        <div className="start-stop-reset">
          <button
            className="button start-button"
            onClick={() => this.handleClick("start")}
          >
            Start
          </button>
          <button
            className="button stop-button"
            onClick={() => this.handleClick("pause")}
          >
            Stop
          </button>
          <button
            className="button reset-button"
            onClick={() => this.handleClick("reset")}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TimerContainer;
