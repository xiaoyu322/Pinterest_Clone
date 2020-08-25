import { combineReducers } from "redux";

import pins from './pins_reducer';
import users from "./users_reducer";

const entitiesReducer = combineReducers({
    users,
    pins
});

export default entitiesReducer;