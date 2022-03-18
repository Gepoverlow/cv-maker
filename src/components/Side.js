import React, { Component } from "react";
import "../styles/Side.css";
import InfoContact from "./InfoContact";
import InfoDetails from "./InfoDetails";

class Side extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-side">
        <InfoDetails />
        <InfoContact />
      </div>
    );
  }
}

export default Side;
