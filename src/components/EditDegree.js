import React, { Component } from "react";

class EditDegree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-degree">
        <div className="degree-date">
          <input value={this.props.dateEdit}></input>
        </div>
        <div className="degree-details">
          <input value={this.props.titleEdit}></input>
          <input value={this.props.specificationEdit}></input>
          <input value={this.props.placeEdit}></input>
        </div>
      </div>
    );
  }
}

export default EditDegree;
