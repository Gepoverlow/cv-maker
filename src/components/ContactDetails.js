import React, { Component } from "react";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-contact-details">
        <h5>
          Mail:
          <p>{this.props.email}</p>
        </h5>
        <h5>
          Phone:
          <p>{this.props.phone}</p>
        </h5>
        <h5>
          Address:
          <p>{this.props.address}</p>
        </h5>
        <h5>
          Linkedn:
          <p>{this.props.linkedn}</p>
        </h5>
      </div>
    );
  }
}

export default ContactDetails;
