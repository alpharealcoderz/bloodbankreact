import { GET_ALL_NOTIFICATION } from "./actionTypes";
import axios from "axios";
import { api_base_url } from "../../Constants";
import { message } from "antd";
export const getAllNotification = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(
        `${api_base_url}/getAllNotificationAdmin`
      );

      data.status == "success" &&
        dispatch({
          type: GET_ALL_NOTIFICATION,
          payload: data.notificationData,
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const addNotification = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(
        `${api_base_url}/addNotification`,
        payload
      );

      data.status == "success" && dispatch(getAllNotification());
      data.status == "success" && message.success("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const deleteNotification = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.post(
        `${api_base_url}/deleteNotificationById`,
        id
      );

      data == "success" && dispatch(getAllNotification());
      data == "success" && message.success("Success");
    } catch (error) {
      console.log("error", error);
    }
  };
};
