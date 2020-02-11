import React, { Component } from "react";
import Tomato from "../assets/tomato.png";

class Header extends Component {
  render() {
    return (
      <div className="header container">
        <img src={Tomato} alt="tomato" />
        <h1>Tomato Timer</h1>
      </div>
    );
  }
}

export default Header;
