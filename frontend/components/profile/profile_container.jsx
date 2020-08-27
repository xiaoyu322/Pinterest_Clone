import { connect } from 'react-redux';
import profile from './profile'
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchUser } from "../../actions/user_actions";
import { fetchAllPins } from "../../actions/pin_actions";

const msp = ( state, ownProps ) => {
    // currentUser: state.session
  // const id = ownProps.match.params.userId;
  // if (state.entities.users[id][id]) {
  // const pins = (state.entities.users[id][id] || [] );
  // } else {
  // const pins = []
  // }
  // const userPins = state.entities.users[id].pins;
  return {
    // userPins: userPins,
    // pins: pins,
    currentUserId: state.session.id,
    users: state.entities.users,
    pins: state.entities.pins,
  }
};

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
})

export default connect(msp, mdp)(profile);