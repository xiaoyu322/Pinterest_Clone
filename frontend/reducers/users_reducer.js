import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from "../actions/user_actions"
// import { RECEIVE_USER } from '../action/user_actions';


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
};

export default usersReducer;