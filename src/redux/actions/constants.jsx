import {
  GET_ALL_BLOOD_TYPE,
  GET_ALL_STATES_INDIA,
  GET_CITY_BY_STATE,
} from "./actionTypes";
import { api_base_url } from "../../Constants";
import axios from "axios";

export const getBloodType = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/getAllBloodType`);
      data.status == "success" &&
        dispatch({
          type: GET_ALL_BLOOD_TYPE,
          payload: data.bloodTypeData,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getAllStates = () => {
  let payload = {
    country_id: 101,
  };
  return async (dispatch) => {
    try {
      let { data } = await axios.post(
        `${api_base_url}/getAllStatesByCountry`,
        payload
      );
      data &&
        dispatch({
          type: GET_ALL_STATES_INDIA,
          payload: data,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getAllCityByStates = (id) => {
  let payload = { state_id: id };
  return async (dispatch) => {
    try {
      let { data } = await axios.post(
        "http://127.0.0.1:8000/api/getAllCityByStates",
        payload
      );
      data &&
        dispatch({
          type: GET_CITY_BY_STATE,
          payload: data,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
