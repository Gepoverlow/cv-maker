import React, { Component } from "react";

class InfoContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-contact">
        <h4>
          Mail:
          <p>aperfectlyvalidmal@asd.com</p>
        </h4>
        <h4>
          Phone:
          <p>123456789</p>
        </h4>
        <h4>
          Address:
          <p>victory road 123, 091, sydney</p>
        </h4>
      </div>
    );
  }
}

export default InfoContact;
