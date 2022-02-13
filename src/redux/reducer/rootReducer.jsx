import { combineReducers } from "redux";
import donorsReducer from "./donors";
import feedReducer from "./feed";
import notificationReducer from "./notification";
import requestReducer from "./requestReducer";
const rootReducer = combineReducers({
  donors: donorsReducer,
  feeds: feedReducer,
  notifications: notificationReducer,
  requests: requestReducer,
});

export default rootReducer;
