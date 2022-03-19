import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-work">
        <div className="work-company">
          <h2>{this.props.company}</h2>
        </div>
        <div className="work-role-date">
          <h3>{this.props.role}</h3>
          <div className="work-date">
            <h3>{this.props.dateFrom}</h3> - <h3>{this.props.dateTo}</h3>
          </div>
        </div>
        <div className="work-detals">
          <h4>{this.props.details}</h4>
        </div>
      </div>
    );
  }
}

export default Work;
