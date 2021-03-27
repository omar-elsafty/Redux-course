import entitiesReducer from "./entities";
import userReducer from "./user";
import { combineReducers } from 'redux';

export default combineReducers({
    entities: entitiesReducer,
    user: userReducer
})