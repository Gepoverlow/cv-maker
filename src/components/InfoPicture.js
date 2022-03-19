import React, { Component } from "react";
import ProfilePicture from "../styles/profilepic.jpeg";

class InfoPicture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-picture">
        <img id="profile-picture" src={ProfilePicture}></img>
      </div>
    );
  }
}

export default InfoPicture;
