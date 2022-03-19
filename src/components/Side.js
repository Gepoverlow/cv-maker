import React, { Component } from "react";
import "../styles/Side.css";
import InfoContact from "./InfoContact";
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
        <InfoContact />
        <InfoDetails />
      </div>
    );
  }
}

export default Side;
