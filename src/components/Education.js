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
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSpecification = this.handleChangeSpecification.bind(this);
    this.handleChangePlace = this.handleChangePlace.bind(this);

    this.state = {
      isEditing: false,
      isHovering: false,
      degrees: [
        {
          date: "Date",
          title: "Title",
          specification: "Specification",
          place: "Place Of Study",
          id: uniqid(),
        },
        {
          date: "Date",
          title: "Title",
          specification: "Specification",
          place: "Place Of Study",
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

  handleChangeDate(index, e) {
    const array = [...this.state.degrees];
    const itemIndex = array.findIndex((degree) => {
      return degree.id === index;
    });
    const degree = { ...array[itemIndex] };
    degree.date = e.target.value;

    array[itemIndex] = degree;

    this.setState({ degrees: array });
  }
  handleChangeTitle(index, e) {
    const array = [...this.state.degrees];
    const itemIndex = array.findIndex((degree) => {
      return degree.id === index;
    });
    const degree = { ...array[itemIndex] };
    degree.title = e.target.value;

    array[itemIndex] = degree;

    this.setState({ degrees: array });
  }
  handleChangeSpecification(index, e) {
    const array = [...this.state.degrees];
    const itemIndex = array.findIndex((degree) => {
      return degree.id === index;
    });
    const degree = { ...array[itemIndex] };
    degree.specification = e.target.value;

    array[itemIndex] = degree;

    this.setState({ degrees: array });
  }
  handleChangePlace(index, e) {
    const array = [...this.state.degrees];
    const itemIndex = array.findIndex((degree) => {
      return degree.id === index;
    });
    const degree = { ...array[itemIndex] };
    degree.place = e.target.value;

    array[itemIndex] = degree;

    this.setState({ degrees: array });
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
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
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
                  handleChangeDate={(e) => this.handleChangeDate(degree.id, e)}
                  handleChangeTitle={(e) =>
                    this.handleChangeTitle(degree.id, e)
                  }
                  handleChangeSpecification={(e) =>
                    this.handleChangeSpecification(degree.id, e)
                  }
                  handleChangePlace={(e) =>
                    this.handleChangePlace(degree.id, e)
                  }
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
