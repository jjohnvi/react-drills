import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      sushi: [
        "tuna",
        "yellowtail",
        "unagi",
        "toro",
        "amberjack",
        "sake toro",
        "suzuki"
      ]
    };
  }

  handleChange(value) {
    this.setState({ filterString: value });
  }

  render() {
    let sushiType = this.state.sushi
      .filter((v, i) => {
        return v.includes(this.state.filterString);
      })
      .map((v, i) => {
        return <h2 key={i}>{v}</h2>;
      });

    return (
      <div className="App">
        <input
          className="inputBox"
          onChange={e => this.handleChange(e.target.value)}
          type="text"
        />
        {sushiType}
      </div>
    );
  }
}

export default App;
