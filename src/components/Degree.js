import React, { Component } from "react";

class Degree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-degree">
        <div className="degree-details">
          <h3>{this.props.title}</h3>
          <h4>{this.props.specification}</h4>
          <h4>{this.props.place}</h4>
        </div>
        <div className="degree-date">
          <h4>{this.props.date}</h4>
        </div>
      </div>
    );
  }
}

export default Degree;
