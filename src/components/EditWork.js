import React, { Component } from "react";

class EditWork extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-work-edit">
        <div className="work-details">
          <input
            className="company-input-edit"
            onChange={this.props.handleChangeCompany}
            defaultValue={this.props.companyEdit}
          ></input>
          <input
            onChange={this.props.handleChangeRole}
            defaultValue={this.props.roleEdit}
          ></input>
          <input
            className="details-input-edit"
            onChange={this.props.handleChangeDetails}
            defaultValue={this.props.detailsEdit}
          ></input>
        </div>
        <div className="work-date-edit">
          <span
            className="material-icons-outlined"
            onClick={this.props.handleDelete}
          >
            clear
          </span>
          <input
            onChange={this.props.handleChangeFrom}
            defaultValue={this.props.dateFromEdit}
          ></input>
          <input
            onChange={this.props.handleChangeTo}
            defaultValue={this.props.dateToEdit}
          ></input>
        </div>
      </div>
    );
  }
}

export default EditWork;
