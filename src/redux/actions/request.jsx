import { GET_ALL_REQUEST, GET_ALL_REQUEST_By_USER } from "./actionTypes";
import axios from "axios";
import { api_base_url } from "../../Constants";
import { message } from "antd";
export const getAllRequest = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/findRequest`);

      data.status == "success" &&
        dispatch({
          type: GET_ALL_REQUEST,
          payload: data.donorsData,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const addRequest = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(
        `${api_base_url}/requestDonation`,
        payload
      );

      data.status == "success" && dispatch(getAllRequest());
      data.status == "success" && message.success("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const deleteRequest = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/deleteRequest`, id);

      data == "success" && dispatch(getAllRequest());
      data == "success" && message.success("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getAllRequestByUser = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/getAllRequest`);

      data.status == "success" &&
        dispatch({
          type: GET_ALL_REQUEST_By_USER,
          payload: data.requestData,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
