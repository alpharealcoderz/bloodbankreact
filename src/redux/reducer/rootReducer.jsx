import { combineReducers } from "redux";
import donorsReducer from "./donors";

const rootReducer = combineReducers({
  donors: donorsReducer,
});

export default rootReducer;
