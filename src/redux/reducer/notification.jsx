import { GET_ALL_NOTIFICATION } from "../actions/actionTypes";
const initState = {
  notificationData: [],
};

const notificationReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_NOTIFICATION:
      return { ...state, notificationData: payload };

    default:
      return state;
  }
};

export default notificationReducer;
