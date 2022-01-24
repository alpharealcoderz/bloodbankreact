import axios from "axios";
import { message } from "antd";
import { api_base_url } from "../Constants";
export const loginHandler = (email, password) => {
  axios
    .post(`${api_base_url}/login`, {
      email,
      password,
    })
    .then((res) => {
      if (res.data.status == "success") {
        window.location.hash = "#donors";
        message.success("Logged In Successfully");
        localStorage.setItem("userDetails", JSON.stringify(res.data.loginData));
        localStorage.setItem("token", res.data.loginData.token);
      } else if (res.data.status == "failure") {
        message.warning(res.data.error);
      }
    });
};
