import React, { Component } from "react";
import "../styles/Side.css";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Skills from "./Skills";
import InfoPicture from "./InfoPicture";

class Side extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-side">
        <InfoPicture />
        <Contact />
        <Introduction />
        <Skills />
      </div>
    );
  }
}

export default Side;
