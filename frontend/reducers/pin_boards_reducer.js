import {RECEIVE_PIN_BOARDS} from '../actions/board_actions'

const pinBoardReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_PIN_BOARDS:
            return action.pinBoards;
        default:
            return state;
    }
}

export default pinBoardReducer;