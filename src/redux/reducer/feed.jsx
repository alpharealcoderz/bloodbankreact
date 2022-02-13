import { GET_ALL_FEED } from "../actions/actionTypes";
const initState = {
  feedData: [],
};

const feedReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_FEED:
      return { ...state, feedData: payload };

    default:
      return state;
  }
};

export default feedReducer;
