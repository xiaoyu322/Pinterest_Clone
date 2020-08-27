import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
// import PinShow from './pin_show'
import { fetchUser } from '../../actions/user_actions'
import { fetchPins } from '../../actions/pin_actions'
import { Link } from "react-router-dom";


class CreatePin extends React.Component {
  constructor(props) {
    super(props);
    const { pins } = this.props;
    const { currentUserId } = this.props;

    this.state = {
      title: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
      photoUrl: null,
      display: "boxy",
      dropMessage: "Drag and drop or click to upload",
      dropPreviewMessage: "Drop To Preview!",
      dropErrorMessage: "Invalid File",
      status: "immage-not-saved",
    };
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleInput(e) {
    this.setState({ [field]: e.currentTarget.value });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  onDrop(acceptedFiles) {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
      this.removeBackground();
    }
  }

  removeBackground() {
    this.state.display = "boxy2";
  }

  dropZone() {
    return (
      <div className={this.state.display}>
        <DropZone
          onDrop={this.onDrop}
          accept="image/*"
          minSize={0}
          maxSize={20000000}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()} className="heightUpload txt-light">
              <input {...getInputProps()} className="txt-light" />
              {!isDragActive && this.state.dropMessage}
              {!isDragActive && ""}
              {isDragActive && !isDragReject && this.state.dropPreviewMessage}
              {isDragReject && this.state.dropErrorMessage}
              {/* dropMessage dropPreviewMessage dropErrorMessage */}
            </div>
          )}
        </DropZone>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[user_id]", this.state.user_id);

    if (this.state.photoFile) {
      formData.append("pin[photo]", this.state.photoFile);
    }
    const { currentUserId } = this.props;
    $.ajax({
      url: "api/pins",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
    }).then(document.location.href = `#/users/${currentUserId}/pins`);
  }

  photoPreview() {
    const url = this.state.photoUrl;
    if (this.state.photoUrl) {
      return <img className="photo-preview" src={url} />;
    }
  }


  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { currentUserId } = this.props;
    const { currentUser } = this.props;

    return (
      <div>
        <div className="create-pin-form">
          {this.photoPreview()}
          <div>
            <h1 className={this.state.status}>Immage Successfully Saved!</h1>
            <div className="dropzone">
              <div className="dropzone-zone">
                {this.dropZone()}
              </div>
            </div>
          </div>
          <form
            className="pin-form-container"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="pin-form">
              <h1>Create a Pin!</h1>
              <label className="pin-details">
                Title
                <input
                  type="text"
                  id="post-body"
                  value={this.state.title}

                  onChange={this.update("title")}
                />
              </label>
              <button className="submit-pin">Submit!</button>
            </div>
            {/* <div className="photo-preview"> */}
              {/* <p>Preview Image</p> */}
              {/* <div>{this.photoPreview()}</div> */}
            {/* </div> */}
          </form>
        </div>
      </div>
    );
  }
};

export default CreatePin;