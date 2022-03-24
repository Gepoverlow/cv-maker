import React, { Component } from "react";
import SimpleEditingTools from "./simpleEditingTools";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleEditIntro = this.handleEditIntro.bind(this);
    this.handleConfirmIntro = this.handleConfirmIntro.bind(this);
    this.handleChangeMain = this.handleChangeMain.bind(this);
    this.state = {
      isHovering: false,
      isEditing: false,
      intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veniam dolorum minima at, necessitatibus recusandae deserunt iure magnam quas, tempore reiciendis aliquam quidem eos! Repellat sint ipsa minima praesentium nemo!`,
    };
  }

  handleMouseEnter() {
    this.setState(() => ({
      isHovering: true,
    }));
  }
  handleMouseLeave() {
    this.setState(() => ({
      isHovering: false,
    }));
  }
  handleEditIntro() {
    this.setState(() => ({
      isEditing: true,
    }));
  }
  handleConfirmIntro() {
    this.setState(() => ({
      isEditing: false,
    }));
  }

  handleChangeMain(e) {
    this.setState(() => ({
      intro: e.target.value,
    }));
  }

  render() {
    return (
      <div className="introduction-details">
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className="introduction-title"
        >
          <h3 className="introduction-title-header">Introduction</h3>
          {this.state.isHovering && (
            <SimpleEditingTools
              handleEdit={this.handleEditIntro}
              handleConfirm={this.handleConfirmIntro}
            />
          )}
        </div>
        {this.state.isEditing ? (
          <textarea
            className="introduction-main-edit"
            defaultValue={this.state.intro}
            rows="9"
            onChange={this.handleChangeMain}
          ></textarea>
        ) : (
          <h4 className="introduction-main">{this.state.intro}</h4>
        )}
      </div>
    );
  }
}

export default Introduction;
