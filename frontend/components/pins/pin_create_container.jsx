import { connect } from 'react-redux';
import { fetchAllPins, createPin } from '../../actions/pin_actions'
import { fetchUsers, fetchUser} from "../../actions/user_actions";
import CreatePin from'./pin_create'
// import { fetchUser, fetchUsers } from '../../util/users_api_util';

const msp = (state) => {
  return {
    pins: state.entities.pins,
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mdp = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  createPin: (pin) => dispatch(createPin(pin)),
})

export default connect(msp, mdp)(CreatePin)