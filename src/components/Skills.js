import React, { Component } from "react";
import uniqid from "uniqid";
import EditingTools from "./EditingTools";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
    this.handleEditSkill = this.handleEditSkill.bind(this);
    this.handleConfirmSkill = this.handleConfirmSkill.bind(this);
    this.handleChangeSkill = this.handleChangeSkill.bind(this);

    this.state = {
      isEditing: false,
      isHovering: false,
      skills: [
        { name: "A skill", id: uniqid() },
        { name: "Another Skill", id: uniqid() },
        { name: "And another one", id: uniqid() },
        { name: "Dj", id: uniqid() },
        { name: "You know the rest", id: uniqid() },
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

  handleEditSkill() {
    this.setState(() => ({
      isEditing: true,
    }));
  }

  handleConfirmSkill() {
    this.setState(() => ({
      isEditing: false,
    }));
  }

  handleAddSkill() {
    this.setState(() => ({
      skills: this.state.skills.concat({
        name: "Skill",
        id: uniqid(),
      }),
    }));
    console.log(this.state.skills);
  }

  handleChangeSkill(index, e) {
    const array = [...this.state.skills];
    const itemIndex = array.findIndex((skill) => {
      return skill.id === index;
    });
    const skill = { ...array[itemIndex] };
    skill.name = e.target.value;

    array[itemIndex] = skill;

    this.setState({ skills: array });
  }

  handleDeleteSkill(index) {
    const array = [...this.state.skills];
    const itemIndex = array.findIndex((skill) => {
      return skill.id === index;
    });

    if (itemIndex !== -1) {
      array.splice(itemIndex, 1);
      this.setState({ skills: array });
    }
  }

  render() {
    return (
      <div className="container-skills">
        <div
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          className="skills-title"
        >
          <h3 className="skills-title-header">Skills</h3>
          {this.state.isHovering && (
            <EditingTools
              handleAdd={this.handleAddSkill}
              handleEdit={this.handleEditSkill}
              handleConfirm={this.handleConfirmSkill}
            />
          )}
        </div>
        <ul className="skills-ul">
          {this.state.isEditing
            ? this.state.skills.map((skill) => {
                return (
                  <li className="li-edit" key={skill.id}>
                    <input
                      onChange={(e) => this.handleChangeSkill(skill.id, e)}
                      defaultValue={skill.name}
                    ></input>
                    <span
                      className="material-icons-outlined"
                      onClick={(e) => this.handleDeleteSkill(skill.id, e)}
                    >
                      clear
                    </span>
                  </li>
                );
              })
            : this.state.skills.map((skill) => {
                return <li key={skill.id}>{skill.name}</li>;
              })}
        </ul>
      </div>
    );
  }
}

export default Skills;
