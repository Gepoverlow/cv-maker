import React, { Component } from "react";
import ProfilePicture from "../styles/profilepic.jpeg";

class InfoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-details">
        <img className="info-picture" src={ProfilePicture}></img>
        <h4 className="info-intro">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae
          reprehenderit error non ipsa reiciendis distinctio, ratione optio
          ipsam incidunt eos corporis doloribus"
        </h4>
      </div>
    );
  }
}

export default InfoDetails;
