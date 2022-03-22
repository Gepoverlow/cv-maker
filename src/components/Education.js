import React, { Component } from "react";
import Degree from "./Degree";
import uniqid from "uniqid";
import EditingTools from "./EditingTools";
import EditDegree from "./EditDegree";

class Education extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleAddDegree = this.handleAddDegree.bind(this);
    this.handleEditDegree = this.handleEditDegree.bind(this);
    this.handleConfirmDegree = this.handleConfirmDegree.bind(this);
    this.handleChangeDegree = this.handleChangeDegree.bind(this);

    this.state = {
      isEditing: false,
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

  handleEditDegree() {
    this.setState(() => ({
      isEditing: true,
    }));
  }

  handleConfirmDegree() {
    this.setState(() => ({
      isEditing: false,
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

  handleChangeDegree() {
    console.log("this should change the array");
  }

  handleDeleteDegree(index) {
    const array = [...this.state.degrees];
    const itemIndex = array.findIndex((degree) => {
      return degree.id === index;
    });

    if (itemIndex !== -1) {
      array.splice(itemIndex, 1);
      this.setState({ degrees: array });
    }
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
            <EditingTools
              handleAdd={this.handleAddDegree}
              handleEdit={this.handleEditDegree}
              handleConfirm={this.handleConfirmDegree}
            />
          )}
        </div>
        {this.state.isEditing
          ? this.state.degrees.map((degree) => {
              return (
                <EditDegree
                  key={degree.id}
                  id={degree.id}
                  dateEdit={degree.date}
                  titleEdit={degree.title}
                  specificationEdit={degree.specification}
                  placeEdit={degree.place}
                  handleChange={this.handleChangeDegree}
                  handleDelete={() => this.handleDeleteDegree(degree.id)}
                />
              );
            })
          : this.state.degrees.map((degree) => {
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
