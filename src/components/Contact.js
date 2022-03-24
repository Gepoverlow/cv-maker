import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import EditContactDetails from "./EditContactDetails";
import SimpleEditingTools from "./simpleEditingTools";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleEditInfo = this.handleEditInfo.bind(this);
    this.handleConfirmInfo = this.handleConfirmInfo.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);

    this.state = {
      isHovering: false,
      isEditing: false,
      info: {
        email: "Your Mail",
        phone: "Your Phone",
        address: "Your Address",
      },
    };
  }

  handleMouseOver() {
    this.setState(() => ({
      isHovering: true,
    }));
  }

  handleMouseOut() {
    this.setState(() => ({
      isHovering: false,
    }));
  }

  handleEditInfo() {
    this.setState(() => ({
      isEditing: true,
    }));
  }

  handleConfirmInfo() {
    this.setState(() => ({
      isEditing: false,
    }));
  }

  handleChangeMail(e) {
    const phone = this.state.info.phone;
    const address = this.state.info.address;
    const linkedn = this.state.info.address;

    this.setState({
      info: {
        email: e.target.value,
        phone: phone,
        address: address,
        linkedn: linkedn,
      },
    });
  }

  handleChangePhone(e) {
    const email = this.state.info.email;
    const address = this.state.info.address;
    const linkedn = this.state.info.address;

    this.setState({
      info: {
        email: email,
        phone: e.target.value,
        address: address,
        linkedn: linkedn,
      },
    });
  }

  handleChangeAddress(e) {
    const email = this.state.info.email;
    const phone = this.state.info.phone;
    const linkedn = this.state.info.address;

    this.setState({
      info: {
        email: email,
        phone: phone,
        address: e.target.value,
        linkedn: linkedn,
      },
    });
  }

  render() {
    return (
      <div className="container-contact">
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          className="contact-title"
        >
          <h3 className="contact-title-header">Contact Info</h3>
          {this.state.isHovering && (
            <SimpleEditingTools
              handleMouseOver={this.handleMouseOver}
              handleMouseOut={this.handleMouseOut}
              handleEdit={this.handleEditInfo}
              handleConfirm={this.handleConfirmInfo}
            />
          )}
        </div>
        {this.state.isEditing ? (
          <EditContactDetails
            email={this.state.info.email}
            phone={this.state.info.phone}
            address={this.state.info.address}
            handleChangeMail={this.handleChangeMail}
            handleChangePhone={this.handleChangePhone}
            handleChangeAddress={this.handleChangeAddress}
          />
        ) : (
          <ContactDetails
            email={this.state.info.email}
            phone={this.state.info.phone}
            address={this.state.info.address}
          />
        )}
      </div>
    );
  }
}

export default Contact;
