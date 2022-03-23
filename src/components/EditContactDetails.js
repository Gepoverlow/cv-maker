import React, { Component } from "react";

class EditContactDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-contact-details">
        <h5>
          Mail:
          <input
            onChange={this.props.handleChangeMail}
            defaultValue={this.props.email}
          ></input>
        </h5>
        <h5>
          Phone:
          <input
            onChange={this.props.handleChangePhone}
            defaultValue={this.props.phone}
          ></input>
        </h5>
        <h5>
          Address:
          <input
            onChange={this.props.handleChangeAddress}
            defaultValue={this.props.address}
          ></input>
        </h5>
      </div>
    );
  }
}

export default EditContactDetails;
