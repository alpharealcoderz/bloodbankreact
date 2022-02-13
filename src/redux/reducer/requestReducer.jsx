import { GET_ALL_REQUEST } from "../actions/actionTypes";
const initState = {
  requestData: [],
};

const requestReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_REQUEST:
      return { ...state, requestData: payload };

    default:
      return state;
  }
};

export default requestReducer;
