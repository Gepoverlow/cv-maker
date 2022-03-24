import React, { Component } from "react";
import ProfilePicture from "../styles/profilepic.jpeg";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.inputFileRef = React.createRef();
    this.handleSelectedFile = this.handleSelectedFile.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleOpenFiles = this.handleOpenFiles.bind(this);
    this.state = {
      isHovering: false,
      selectedFile: ProfilePicture,
    };
  }

  handleSelectedFile(e) {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        selectedFile: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  handleMouseOver() {
    this.setState({
      isHovering: true,
    });
  }
  handleMouseOut() {
    this.setState({
      isHovering: false,
    });
  }

  handleOpenFiles() {
    this.inputFileRef.current.click();
  }

  render() {
    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        className="info-picture"
      >
        <img
          onClick={this.handleOpenFiles}
          id="profile-picture"
          src={this.state.selectedFile}
        ></img>
        <input
          onChange={this.handleSelectedFile}
          className="input-file"
          type="file"
          ref={this.inputFileRef}
        ></input>
      </div>
    );
  }
}

export default Picture;
