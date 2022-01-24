import React from "react";
import { connect } from "react-redux";
import { state } from "../../Constants";
export const Request = (props) => {
  return (
    <section id="request" class="pt-page pt-page-6" data-id="request">
      <div class="container">
        <div class="row align-items-lg-center">
          <div class="col-6">
            <div class="heading-area">
              <h2 class="title">Post Blood Request!</h2>
              <h6 class="sub-title main-color">
                Please fill Patient's Details.
              </h6>
            </div>

            <form class="contact-form" id="contact-form-data">
              <div class="row">
                <div class="col-sm-12" id="result"></div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <select class="form-control" placeholder="Gender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="address"></input>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select class="form-control" type="" placeholder="State">
                      {state.map((st) => {
                        return <option>{st}</option>;
                      })}{" "}
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <h6 class="sub-title main-color">
                Please fill Hospital Details.
              </h6>
              <div class="form-group">
                <input class="form-control" placeholder="address"></input>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select class="form-control" type="" placeholder="State">
                      {state.map((st) => {
                        return <option>{st}</option>;
                      })}{" "}
                    </select>
                  </div>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                id="submit_btn"
                class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
              >
                <i
                  class="fa fa-spinner fa-spin mr-2 d-none"
                  aria-hidden="true"
                ></i>
                Submit Request
              </a>
            </form>
          </div>
          <div class="col-6">
            <ul class="address-item">
              <li class="w-100 mb-4">
                <i class="lni-apartment main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Address</h6>
                  <p>Come visit us: Address</p>
                </div>
              </li>

              <li class="pr-2">
                <i class="lni-comment-reply main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Email:</h6>
                  <p>
                    <a href="mailto:email@website.co">email@website.com</a>
                  </p>
                </div>
              </li>

              <li>
                <i class="lni-phone-handset main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Address</h6>
                  <p>
                    <a href="tel:002343474383">+91 1234567890</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Contact)
export default Request;
