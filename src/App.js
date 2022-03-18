import "./App.css";
import React, { Component } from "react";
import Side from "./components/Side";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-all">
        <Side />
        <Main />
      </div>
    );
  }
}

export default App;
