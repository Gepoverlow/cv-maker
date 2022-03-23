import React, { Component } from "react";
import SimpleEditingTools from "./simpleEditingTools";

class Name extends Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleConfirmName = this.handleConfirmName.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);

    this.state = {
      isHovering: false,
      isEditing: false,
      user: {
        name: "Name",
        surname: "Surname",
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

  handleEditName() {
    this.setState(() => ({
      isEditing: true,
    }));
  }

  handleConfirmName() {
    this.setState(() => ({
      isEditing: false,
    }));
  }

  handleChangeName(e) {
    const surname = this.state.user.surname;

    this.setState({
      user: {
        name: e.target.value,
        surname: surname,
      },
    });
  }

  handleChangeSurname(e) {
    const name = this.state.user.name;

    this.setState({
      user: {
        name: name,
        surname: e.target.value,
      },
    });
  }

  render() {
    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        className="container-name"
      >
        {this.state.isEditing ? (
          <div className="name-details">
            <input
              className="name-name"
              defaultValue={this.state.user.name}
              onChange={this.handleChangeName}
            ></input>
            <input
              className="name-surname"
              defaultValue={this.state.user.surname}
              onChange={this.handleChangeSurname}
            ></input>
          </div>
        ) : (
          <div className="name-details">
            <h1 className="name-name">{this.state.user.name}</h1>
            <h1 className="name-surname">{this.state.user.surname}</h1>
          </div>
        )}
        {this.state.isHovering && (
          <SimpleEditingTools
            handleEdit={this.handleEditName}
            handleConfirm={this.handleConfirmName}
          />
        )}
      </div>
    );
  }
}

export default Name;
