import React, { Component } from "react";
import Degree from "./Degree";
import uniqid from "uniqid";
import EditingTools from "./EditingTools";

class Education extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleAddDegree = this.handleAddDegree.bind(this);
    this.state = {
      isHovering: false,
      degrees: [],
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

  handleAddDegree() {
    this.setState(() => ({
      degrees: this.state.degrees.concat({
        date: "Date",
        title: "Title",
        specification: "Specification",
        place: "Place Of Study",
        id: uniqid(),
      }),
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
          {this.state.isHovering && (
            <EditingTools handleAdd={this.handleAddDegree} />
          )}
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
