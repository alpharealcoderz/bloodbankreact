import axios from "axios";
import { message } from "antd";
import { api_base_url } from "../Constants";
export const registerDonor = (payload) => {
  axios
    .post(`${api_base_url}/register`, payload)
    .then((res) => {
      console.log(res.data);
      if (res.data.status == "success") {
        message.success("Registered Successfully");
        window.location.hash = "#donors";
      }
    })
    .catch((e) => {
      let errors = e.response.data.errors;
      message.warning(errors[Object.keys(errors)[0]][0]);
      console.log("test");
    });
};
