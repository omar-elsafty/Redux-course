import { combineReducers } from "redux";
import counterReducer from "../features/counter/counterSlice";
import carReducer from './../features/car/carSlice';

export default combineReducers({
    counter: counterReducer,
    car: carReducer
})