import React, { Component } from "react";

class EditWork extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-work">
        <div className="work-company">
          <input
            onChange={this.props.handleChangeCompany}
            defaultValue={this.props.companyEdit}
          ></input>
          <span
            className="material-icons-outlined"
            onClick={this.props.handleDelete}
          >
            clear
          </span>
        </div>
        <div className="work-role-date">
          <input
            onChange={this.props.handleChangeRole}
            defaultValue={this.props.roleEdit}
          ></input>
          <div className="work-date-edit">
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
        <div className="work-detals">
          <input
            onChange={this.props.handleChangeDetails}
            defaultValue={this.props.detailsEdit}
          ></input>
        </div>
      </div>
    );
  }
}

export default EditWork;
