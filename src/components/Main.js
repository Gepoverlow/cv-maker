import React, { Component } from "react";
import "../styles/Main.css";
import Name from "../components/Name";
import Education from "../components/Education";
import Experience from "../components/Experience";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-main">
        <Name />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default Main;
