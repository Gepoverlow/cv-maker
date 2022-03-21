import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-work">
        <div className="work-company">
          <h3>{this.props.company}</h3>
        </div>
        <div className="work-role-date">
          <h4>{this.props.role}</h4>
          <div className="work-date">
            <h4>{this.props.dateFrom}</h4> - <h4>{this.props.dateTo}</h4>
          </div>
        </div>
        <div className="work-detals">
          <p>{this.props.details}</p>
        </div>
      </div>
    );
  }
}

export default Work;
