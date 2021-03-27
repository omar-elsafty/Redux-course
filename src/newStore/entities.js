import { combineReducers } from "redux";
import newsReducer from './entities/news'

export default combineReducers({
  news: newsReducer
});
