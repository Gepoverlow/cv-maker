import React, { Component } from "react";
import Work from "./Work";
import EditingTools from "./EditingTools";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {
      isHovering: false,
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
  render() {
    return (
      <div className="container-experience">
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          className="experience-title"
        >
          <h1 className="experience-title-header">Experience</h1>
          {this.state.isHovering && <EditingTools />}
        </div>

        <Work
          company="Company One"
          role="Role One"
          dateFrom="2010"
          dateTo="2012"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium expedita blanditiis a placeat cumque adipisci molestias reiciendis, quod alias. Rem, ullam rerum. Eum quod dolore nulla voluptas quis facilis!"
        />
        <Work
          company="Company Two"
          role="Role Two"
          dateFrom="2013"
          dateTo="2016"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium expedita blanditiis a placeat cumque adipisci molestias reiciendis, quod alias. Rem, ullam rerum. Eum quod dolore nulla voluptas quis facilis!"
        />
        <Work
          company="Company Three"
          role="Role Three"
          dateFrom="2016"
          dateTo="2019"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium expedita blanditiis a placeat cumque adipisci molestias reiciendis, quod alias. Rem, ullam rerum. Eum quod dolore nulla voluptas quis facilis!"
        />
        <Work
          company="Company Four"
          role="Role Four"
          dateFrom="2020"
          dateTo="2021"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium expedita blanditiis a placeat cumque adipisci molestias reiciendis, quod alias. Rem, ullam rerum. Eum quod dolore nulla voluptas quis facilis!"
        />
        <Work
          company="Company Five"
          role="Role Five"
          dateFrom="2021"
          dateTo="Current"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium expedita blanditiis a placeat cumque adipisci molestias reiciendis, quod alias. Rem, ullam rerum. Eum quod dolore nulla voluptas quis facilis!"
        />
      </div>
    );
  }
}

export default Experience;
