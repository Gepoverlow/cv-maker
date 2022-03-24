import React, { Component } from "react";

class SimpleEditingTools extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="simple-tools-container">
        <span
          className="material-icons-outlined"
          onClick={this.props.handleEdit}
        >
          mode_edit
        </span>
        <span
          className="material-icons-outlined"
          onClick={this.props.handleConfirm}
        >
          check
        </span>
      </div>
    );
  }
}

export default SimpleEditingTools;
