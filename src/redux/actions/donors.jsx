import { UPDATE_DONORS_DATA } from "./actionTypes";
import axios from "axios";
import { api_base_url } from "../../Constants";
import { message } from "antd";
export const updateDonorsData = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/findDonors`, payload);
      data.status == "success" &&
        dispatch({
          type: UPDATE_DONORS_DATA,
          payload: data.donorsData,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const deleteUser = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/deleteUser`, payload);
      data == "success" && message.success("Success");
      dispatch(updateDonorsData());
    } catch (error) {
      console.log(error);
    }
  };
};
