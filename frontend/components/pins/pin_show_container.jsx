import { connect } from "react-redux";
import { fetchAllPins, fetchPin, deletePin } from "../../actions/pin_actions";
import {fetchBoards} from "../../actions/board_actions";
import PinShow from './pin_show'
// import {fetchUsers} from '../../actions/user_actions'


const msp = (state, ownProps) => {
  return {
    currentPinId: ownProps.match.params.pinId,
    currentPin: state.entities.pins[ownProps.match.params.pinId],
    pins: state.entities.pins,
    users: state.entities.users,
    currentUserId: state.session.id
  };
};

const mdp = (dispatch, {match: {params}}) => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchPin: pin => dispatch(fetchPin(pin)),
  fetchBoards: () => dispatch(fetchBoards(params.userId)),
  // fetchUsers: () => dispatch(fetchUsers()),
  deletePin: pin => dispatch(deletePin(pin))
});

export default connect(msp, mdp)(PinShow);