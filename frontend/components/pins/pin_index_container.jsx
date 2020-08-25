import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { fetchAllPins } from "../../actions/pin_actions";
import PinIndexItem from './pin_index_item'

class Pins extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    this.state = {
      title: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
    };
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  scroll() {
    
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        100
      );
    
  }

  displayPin() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    if (allPins) {
    
    return (
      <div className="pin-show">
          {allPins.map((pin, idx) => (
            <div key={idx} className="pins">
              <PinIndexItem key={idx} pin={pin}/>
            </div>
          ))}
      </div>
    );
   }
  }

  render() {
    const { pins } = this.props;
    // console.log(pins);
    return (
      <div>
        {this.displayPin()}
      </div>
    );
  }
}



// index_container
const msp = (state) => {
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id,
  };
};

const mdp = (dispatch) => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
});

export default connect(msp, mdp)(Pins);
