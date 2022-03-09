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
      // if (res.data.status == "success" && res.data.loginData.email_verified_at!=null) {
      if (res.data.status == "success") {
          
        res.data.loginData.role !== "admin"
          ? window.location.reload()
          : (window.location.pathname = "/admin/users");

        message.success("Logged In Successfully");
        localStorage.setItem("userDetails", JSON.stringify(res.data.loginData));
        localStorage.setItem("token", res.data.loginData.token);
      } else if (res.data.status == "failure") {
        message.warning("Something Went Wrong");
      }
    });
};
export const logout = (email, password) => {
  axios.post(`${api_base_url}/logout`).then((res) => {
    if (res.data.status == "success") {
      if ((window.location.pathname = "/")) {
        window.location.hash = "home";
      } else {
        window.location.pathname = "/";
      }
      window.location.hash = "home";
      window.location.reload();
      message.success("Logged Out Successfully");
      localStorage.clear();
    } else if (res.data.status == "failure") {
      message.warning(res.data.error);
    }
  });
};
export const updateUser = (payload) => {
  axios.post(`${api_base_url}/update`, payload).then((res) => {
    if (res.data.status == "success") {
      message.success("Profile Updated");
      localStorage.setItem("userDetails", JSON.stringify(res.data.updatedData));
    } else if (res.data.status == "failure") {
      message.warning(res.data.error);
    }
  });
};
