import React, { Component } from "react";
import Tomato from "../assets/tomato.png";

class History extends Component {
  render() {
    return (
      <div class="horizontal-container">
        <div class="day">
          <div class="date">1/21/20</div>
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
        </div>
        <div class="day">
          <div class="date">1/20/20</div>
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
        </div>
        <div class="day">
          <div class="date">1/19/20</div>
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
        </div>
        <div class="day">
          <div class="date">1/18/20</div>
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
        </div>
        <div class="day">
          <div class="date">1/17/20</div>
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
          <img src={Tomato} alt="tomato" />
        </div>
      </div>
    );
  }
}

export default History;
