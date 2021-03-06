import { GET_ALL_FEED } from "./actionTypes";
import axios from "axios";
import { api_base_url } from "../../Constants";
import { message } from "antd";
export const getAllFeed = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/getAllFeed`);

      data.status == "success" &&
        dispatch({
          type: GET_ALL_FEED,
          payload: data.feedData,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const addFeed = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/addFeed`, payload);

      data.status == "success" && dispatch(getAllFeed());
      data.status == "success" && message.success("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const deleteFeed = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(`${api_base_url}/deleteFeedById`, id);

      data == "success" && dispatch(getAllFeed());
      data == "success" && message.success("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
};
