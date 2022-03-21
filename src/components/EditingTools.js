import React, { Component } from "react";

class EditingTools extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tools-container">
        <span className="material-icons-outlined">add_circle_outline</span>
        <span className="material-icons-outlined">mode_edit</span>
        <span className="material-icons-outlined">check</span>
      </div>
    );
  }
}

export default EditingTools;
