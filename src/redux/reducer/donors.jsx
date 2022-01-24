import {
  GET_ALL_BLOOD_TYPE,
  GET_ALL_STATES_INDIA,
  GET_CITY_BY_STATE,
  UPDATE_DONORS_DATA,
} from "../actions/actionTypes";
const initState = {
  donorsData: [],
  canFetchDonors: false,
  bloodType: [],
  states: [],
  city: [],
};

const donorsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_DONORS_DATA:
      return { ...state, donorsData: payload, canFetchDonors: true };

    case GET_ALL_BLOOD_TYPE:
      return { ...state, bloodType: payload };

    case GET_ALL_STATES_INDIA:
      return { ...state, states: payload };

    case GET_CITY_BY_STATE:
      return { ...state, city: payload };
    default:
      return state;
  }
};

export default donorsReducer;
