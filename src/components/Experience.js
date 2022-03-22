import React, { Component } from "react";
import Work from "./Work";
import EditingTools from "./EditingTools";
import uniqid from "uniqid";
import EditWork from "./EditWork";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handleEditWork = this.handleEditWork.bind(this);
    this.handleConfirmWork = this.handleConfirmWork.bind(this);
    this.state = {
      isEditing: false,
      isHovering: false,
      works: [],
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

  handleEditWork() {
    this.setState(() => ({
      isEditing: true,
    }));
  }

  handleConfirmWork() {
    this.setState(() => ({
      isEditing: false,
    }));
  }

  handleAddWork() {
    this.setState(() => ({
      works: this.state.works.concat({
        company: "Company",
        role: "Role",
        dateFrom: "From",
        dateTo: "To",
        details: "Job Description",
        id: uniqid(),
      }),
    }));
  }

  //
  handleChangeCompany(index, e) {
    const array = [...this.state.works];
    const itemIndex = array.findIndex((work) => {
      return work.id === index;
    });
    const work = { ...array[itemIndex] };
    work.company = e.target.value;

    array[itemIndex] = work;

    this.setState({ works: array });
  }

  handleChangeRole(index, e) {
    const array = [...this.state.works];
    const itemIndex = array.findIndex((work) => {
      return work.id === index;
    });
    const work = { ...array[itemIndex] };
    work.role = e.target.value;

    array[itemIndex] = work;

    this.setState({ works: array });
  }

  handleChangeFrom(index, e) {
    const array = [...this.state.works];
    const itemIndex = array.findIndex((work) => {
      return work.id === index;
    });
    const work = { ...array[itemIndex] };
    work.dateFrom = e.target.value;

    array[itemIndex] = work;

    this.setState({ works: array });
  }

  handleChangeTo(index, e) {
    const array = [...this.state.works];
    const itemIndex = array.findIndex((work) => {
      return work.id === index;
    });
    const work = { ...array[itemIndex] };
    work.dateTo = e.target.value;

    array[itemIndex] = work;

    this.setState({ works: array });
  }

  handleChangeDetails(index, e) {
    const array = [...this.state.works];
    const itemIndex = array.findIndex((work) => {
      return work.id === index;
    });
    const work = { ...array[itemIndex] };
    work.details = e.target.value;

    array[itemIndex] = work;

    this.setState({ works: array });
  }
  //

  handleDeleteWork(index) {
    const array = [...this.state.works];
    const itemIndex = array.findIndex((work) => {
      return work.id === index;
    });

    if (itemIndex !== -1) {
      array.splice(itemIndex, 1);
      this.setState({ works: array });
    }
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
          {this.state.isHovering && (
            <EditingTools
              handleAdd={this.handleAddWork}
              handleEdit={this.handleEditWork}
              handleConfirm={this.handleConfirmWork}
            />
          )}
        </div>
        {this.state.isEditing
          ? this.state.works.map((work) => {
              return (
                <EditWork
                  key={work.id}
                  companyEdit={work.company}
                  roleEdit={work.role}
                  dateFromEdit={work.dateFrom}
                  dateToEdit={work.dateTo}
                  detailsEdit={work.details}
                  handleChangeCompany={(e) =>
                    this.handleChangeCompany(work.id, e)
                  }
                  handleChangeRole={(e) => this.handleChangeRole(work.id, e)}
                  handleChangeFrom={(e) => this.handleChangeFrom(work.id, e)}
                  handleChangeTo={(e) => this.handleChangeTo(work.id, e)}
                  handleChangeDetails={(e) =>
                    this.handleChangeDetails(work.id, e)
                  }
                  handleDelete={() => this.handleDeleteWork(work.id)}
                />
              );
            })
          : this.state.works.map((work) => {
              return (
                <Work
                  key={work.id}
                  company={work.company}
                  role={work.role}
                  dateFrom={work.dateFrom}
                  dateTo={work.dateTo}
                  details={work.details}
                />
              );
            })}
        {/* {this.state.works.map((work) => {
          return (
            <Work
              key={work.id}
              company={work.company}
              role={work.role}
              dateFrom={work.dateFrom}
              dateTo={work.dateTo}
              details={work.details}
            />
          );
        })} */}
      </div>
    );
  }
}

export default Experience;
