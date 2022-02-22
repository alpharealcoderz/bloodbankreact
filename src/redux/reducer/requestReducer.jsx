import {
  GET_ALL_REQUEST,
  GET_ALL_REQUEST_By_USER,
} from "../actions/actionTypes";
const initState = {
  requestData: [],
  usersRequest: [],
};

const requestReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_REQUEST:
      return { ...state, requestData: payload };
    case GET_ALL_REQUEST_By_USER:
      return { ...state, usersRequest: payload };

    default:
      return state;
  }
};

export default requestReducer;
