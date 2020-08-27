import { connect } from "react-redux";
import { fetchAllPins, fetchPin } from "../../actions/pin_actions";
import PinShow from './pin_show'
// import {fetchUsers} from '../../actions/user_actions'


const msp = (state, ownProps) => {
  return {
    currentPin: state.entities.pins[ownProps.match.params.pinId],
    pins: state.entities.pins,
    users: state.entities.users,
  };
};

const mdp = (dispatch) => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchPin: pin => dispatch(fetchPin(pin)),
  // fetchUsers: () => dispatch(fetchUsers()),
  // deletePin: pin => dispatch(deletePin(pin))
});

export default connect(msp, mdp)(PinShow);