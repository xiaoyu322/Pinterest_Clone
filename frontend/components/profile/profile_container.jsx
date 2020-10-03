import { connect } from 'react-redux';
import profile from './profile'
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchUser } from "../../actions/user_actions";
import { fetchAllPins } from "../../actions/pin_actions";
import { fetchAllFollows, createFollow, deleteFollow } from "../../actions/follow_actions"

const msp = ( state, ownProps ) => {
  return {
    currentUserId: state.session.id,
    users: state.entities.users,
    pins: state.entities.pins,
    follows: state.entities.follows
  }
};

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (followId) => dispatch(deleteFollow(followId)),
})

export default connect(msp, mdp)(profile);