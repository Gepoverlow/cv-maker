import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-name">
        <h1 className="name-name">Name</h1>
        <h1 className="name-surname">averylongsurname</h1>
      </div>
    );
  }
}

export default Name;
