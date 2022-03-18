import "./App.css";
import React, { Component } from "react";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-all">
        <Information />
        <div className="container-education-experience">
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
