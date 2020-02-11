import React, { Component } from "react";
import Header from "./Header";
import TimerContainer from "./TimerContainer";
import History from "./History";
import styles from "../styles/MainApp.css";
import Footer from "./Footer";
import Example from "./Example";

class MainApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <TimerContainer />
        <History />
        <Footer />
      </div>
    );
  }
}

export default MainApp;
