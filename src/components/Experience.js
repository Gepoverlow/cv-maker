import React, { Component } from "react";
import Work from "./Work";

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-experience">
        <h1> Experience</h1>
        <Work
          company="Company One"
          role="Role One"
          dateFrom="Date One From"
          dateTo="Date One To"
          details="Details One"
        />
        <Work
          company="Company Two"
          role="Role Two"
          dateFrom="Date Two From"
          dateTo="Date Two To"
          details="Details Two"
        />
        <Work
          company="Company Three"
          role="Role Three"
          dateFrom="Date Three From"
          dateTo="Date Three To"
          details="Details Three"
        />
        <Work
          company="Company Four"
          role="Role Four"
          dateFrom="Date Four From"
          dateTo="Date Four To"
          details="Details Four"
        />
      </div>
    );
  }
}

export default Experience;
