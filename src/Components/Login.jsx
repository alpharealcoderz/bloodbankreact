import React, { useState } from "react";
import { loginHandler } from "../Service/AuthService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(email, pass);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  return (
    <section id="login" class="pt-page pt-page-6" data-id="login">
      <div style={{marginTop:'-25%'}} class="container">
        <div class="row align-items-lg-center dot-box">
          <div class="col-6">
            <div class="heading-area">
              <h2 class="title">Login</h2>
              <h6 class="sub-title main-color">
                Please Enter You Registered Email And Password.
              </h6>
            </div>

            <form
              onSubmit={(e) => handleSubmit(e)}
              class="contact-form"
              id="contact-form-data"
            >
              <input
                onChange={(e) => handleEmailChange(e)}
                type="email"
                class="form-control"
                placeholder="email"
              ></input>
              <input
                onChange={(e) => handlePasswordChange(e)}
                type="password"
                class="form-control"
                placeholder="password"
              ></input>
              <button
                type="submit"
                id="submit_btn"
                class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
              >
                <i
                  class="fa fa-spinner fa-spin mr-2 d-none"
                  aria-hidden="true"
                ></i>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
