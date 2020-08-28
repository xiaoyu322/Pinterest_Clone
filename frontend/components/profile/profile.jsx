import React from 'react';
import { Link } from 'react-router-dom';
// import PinIndexContainer from '../pin_show/pin_index_container'
// import PinProfileShowContainer from "../pin_show/pin_profile_show_container";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
    this.props.fetchAllPins();
    // this.props.fetchPins();
  }

  pinDisplay() {
    const {currentUserId} = this.props
    const allPins = this.props.pins
    let currentUserPins = []
    for (let key in allPins) {
      if ("user_id" in allPins[key] && allPins[key].user_id == currentUserId) {
        currentUserPins.push(allPins[key])
      }
    }

    if (currentUserPins.length !== 0) {
      return (
        <div className="pin-show">
          <div className="pin-container">
            {currentUserPins.map((pin, idx) => (
              <div key={idx} className="pins">
                <Link to={`/pins/${pin.id}`}>
                  <img className="pin-images" src={pin.photo_url} />
                  <p className='pin-title-text'>{pin.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="no-pins-container">
          <p>You haven't saved any Pins yet</p>
          <Link to="/">
            <button className="find-pins-btn">Find ideas</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    const currentUser = this.props.users[this.props.currentUserId];

    if (currentUser) {
      return (
        <div>
          <div className="profile">
            <div className="profile-header">
              <img className="profile-img" src={window.profile_img_logo} />
              <h1 className="username-header">{currentUser.email}</h1>
            </div>
            <div className="profile-sub-header">
              <Link className="create-pin-btn" to={`/pin/new`}>
                Create Pin
              <FontAwesomeIcon className="profile-link-icons" icon={faPlus}/>
              </Link>
              <Link className="my-board-btn" to={`/users/${currentUser.id}/boards`}>My Boards</Link>
            </div>
          </div>
          <div className="pin-display">
            {this.pinDisplay()}
          </div>
        </div>
      );
    } else {
      // const userpins = this.props.pins[this.props.currentUserId];
      // console.log(userpins)
      return 0;
    }
  }
}

export default Profile;