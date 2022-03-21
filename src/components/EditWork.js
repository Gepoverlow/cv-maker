import React, { Component } from "react";

class EditWork extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-work">
        <div className="work-company">
          <input value={this.props.companyEdit}></input>
        </div>
        <div className="work-role-date">
          <input value={this.props.roleEdit}></input>
          <div className="work-date-edit">
            <input value={this.props.dateFromEdit}></input>
            <input value={this.props.dateToEdit}></input>
          </div>
        </div>
        <div className="work-detals">
          <input value={this.props.detailsEdit}></input>
        </div>
      </div>
    );
  }
}

export default EditWork;
