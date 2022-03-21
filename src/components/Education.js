import React, { Component } from "react";
import Degree from "./Degree";
import uniqid from "uniqid";
import EditingTools from "./EditingTools";

class Education extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {
      isHovering: false,
      degrees: [
        {
          date: 2013,
          title: "Title One",
          specification: "Specification One",
          place: "Place One",
          id: uniqid(),
        },
        {
          date: 2019,
          title: "Title Two",
          specification: "Specification Two",
          place: "Place Two",
          id: uniqid(),
        },
      ],
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
      <div className="container-education">
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          className="education-title"
        >
          <h1 className="education-title-header">Education</h1>
          {this.state.isHovering && <EditingTools />}
        </div>
        {this.state.degrees.map((degree) => {
          return (
            <Degree
              key={degree.id}
              date={degree.date}
              title={degree.title}
              specification={degree.specification}
              place={degree.place}
            />
          );
        })}
      </div>
    );
  }
}

export default Education;
