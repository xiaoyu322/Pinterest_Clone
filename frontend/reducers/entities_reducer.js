import { combineReducers } from "redux";

import pins from './pins_reducer';
import users from "./users_reducer";
import boards from './boards_reducer'
import pinBoards from './pin_boards_reducer'

const entitiesReducer = combineReducers({
    users,
    pins,
    boards,
    pinBoards, 
});

export default entitiesReducer;