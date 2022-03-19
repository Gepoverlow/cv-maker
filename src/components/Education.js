import React, { Component } from "react";
import Degree from "./Degree";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-education">
        <h2>Education</h2>
        <Degree
          date="2013"
          title="Title One"
          specification="Specification One"
          place="Place One"
        />
        <Degree
          date="2019"
          title="Title Two"
          specification="Specification Two"
          place="Place Two"
        />
      </div>
    );
  }
}

export default Education;
