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
