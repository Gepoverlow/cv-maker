import React, { Component } from "react";
import "../styles/Side.css";
import Contact from "./Contact";
import InfoDetails from "./InfoDetails";
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
      </div>
    );
  }
}

export default Side;
