import { combineReducers } from "redux";

import citiesReducer from "./city";
import countriesReducer from "./country";

export default combineReducers({
    cities: citiesReducer,
    countries: countriesReducer
})