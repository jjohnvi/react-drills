import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: ["tuna", "salmon", "toro", "unagi", "yellowtail", "amberjack"]
    };
  }

  render() {
    let sushiType = this.state.sushi.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

    return <div className="App">{sushiType}</div>;
  }
}

export default App;
