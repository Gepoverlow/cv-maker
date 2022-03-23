import React, { Component } from "react";

class EditDegree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-degree">
        <div className="degree-details">
          <input
            className="title-input-edit"
            onChange={this.props.handleChangeTitle}
            defaultValue={this.props.titleEdit}
          ></input>
          <input
            onChange={this.props.handleChangeSpecification}
            defaultValue={this.props.specificationEdit}
          ></input>
          <input
            onChange={this.props.handleChangePlace}
            defaultValue={this.props.placeEdit}
          ></input>
        </div>
        <div className="degree-date">
          <span
            className="material-icons-outlined"
            onClick={this.props.handleDelete}
          >
            clear
          </span>
          <input
            onChange={this.props.handleChangeDate}
            defaultValue={this.props.dateEdit}
          ></input>
        </div>
      </div>
    );
  }
}

export default EditDegree;
