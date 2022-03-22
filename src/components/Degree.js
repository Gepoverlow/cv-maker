import React, { Component } from "react";

class Degree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div data-key={this.props.id} className="container-degree">
        <div className="degree-date">
          <h4>{this.props.date}</h4>
        </div>
        <div className="degree-details">
          <h4>{this.props.title}</h4>
          <h5>{this.props.specification}</h5>
          <h5>{this.props.place}</h5>
        </div>
      </div>
    );
  }
}

export default Degree;
