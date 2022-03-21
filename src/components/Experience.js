import React, { Component } from "react";
import Work from "./Work";
import EditingTools from "./EditingTools";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.state = {
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

  handleAddWork() {
    this.setState(() => ({
      works: this.state.works.concat({
        company: "Company",
        role: "Role",
        dateFrom: "From",
        dateTo: "To",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium expedita blanditiis a placeat cumque adipisci molestias reiciendis, quod alias. Rem, ullam rerum. Eum quod dolore nulla voluptas quis facilis!",
        id: uniqid(),
      }),
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
          {this.state.isHovering && (
            <EditingTools handleAdd={this.handleAddWork} />
          )}
        </div>
        {this.state.works.map((work) => {
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
      </div>
    );
  }
}

export default Experience;
