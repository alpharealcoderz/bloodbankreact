import { combineReducers } from "redux";
import donorsReducer from "./donors";
import feedReducer from "./feed";
const rootReducer = combineReducers({
  donors: donorsReducer,
  feeds: feedReducer,
});

export default rootReducer;
