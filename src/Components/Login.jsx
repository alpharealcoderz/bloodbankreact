import React, { useState } from "react";
import { loginHandler } from "../Service/AuthService";
import tlogo from './Sections/tname.jpg';
import blood from './Sections/./bloodgif.gif';

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
    <section  id="login" class="pt-page pt-page-6" data-id="login">
      <div style={{ marginTop: "-30%",marginLeft:'15%' }} class="container">
        <div class="row align-items-lg-center dot-box makeWrap">
          <div style={{width:'50%',marginTop:'-15%'}} className="wrapWidth">
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
                class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn mr-4"
              >
                <i
                  class="fa fa-spinner fa-spin mr-2 d-none"
                  aria-hidden="true"
                ></i>
                Login
              </button>
              <div style={{ marginTop: "10px", marginLeft: "15px" }}>
                <a
                  style={{ color: "#ed2d34", fontWeight: "bold" }}
                  href="#Donate"
                >
                  Click to Register?
                </a>
              </div>
            </form>
          </div>
          <div style={{width:'50%' ,marginTop:'10%',background:'white'}} className="wrapWidth">
            <ul class="address-item">
            <li class="w-100 mb-4">
                <img src={tlogo}></img>
              </li>
              <li class="w-100 mb-4">
                <img style={{height:'300px',width:"1000px"}} src={ blood} />
              </li>

              <li class="w-100 mb-4">
                <i class="lni-apartment main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Address</h6>
                  <p style={{color:'black',fontWeight:'bold'}}>
                    Omniscient IT Solutions Pvt Ltd, 4/28, Saraswati Marg, Block
                    4, WEA, Karol Bagh, New Delhi, Delhi 110005
                  </p>
                </div>
              </li>

              <li class="pr-1">
                <i class="lni-comment-reply main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Email:</h6>
                  <p>
                    <a  style={{color:'black'}} href="mailto:info@omniscientitsolutions.com">
                      info@omniscientitsolutions
                    </a>
                  </p>
                </div>
              </li>

              <li>
                <i class="lni-phone-handset main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Contact</h6>
                  <p>
                    <a style={{color:'black'}} href="tel:+91-9811027310">+91-9811027310</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            marginLeft: "-23%",
            height: "400px",
            width: "150%",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://wp.bwlthemes.com/wp_reddrop_buddies/wp-content/uploads/2017/06/cta_bg.jpg?id=2114)",
          }}
        >
          <div class="row">
            <div className="col-12">
              <h1
                style={{ marginLeft: "35%", marginTop: "7%", color: "white" }}
              >
                JOIN WITH US AND SAVE LIFE
              </h1>
              <div>
                <a
                  onClick={() => (window.location.hash = "#donate")}
                  data-animation="61"
                  data-goto="11"
                  style={{ color: "white", width: "20%", marginLeft: "40%" }}
                  id="submit_btn"
                  class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn mt-2"
                >
                  <i
                    class="fa fa-spinner fa-spin mr-2 d-none"
                    aria-hidden="true"
                  ></i>
                  REGISTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
