import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { state } from "../../Constants";
import { message } from "antd";
import { addRequest } from "../../redux/actions/request";
export const Request = (props) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "Male",
    address: "",
    city: "",
    state: "",
    phone: 0,
    hospital_name: "",
    hospital_address: "",
    hospital_city: "",
    hospital_state: "",
    hospital_phone: "",
    blood_type: "A+",
  });
  const addRequests = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token") == null)
      message.success("Please Login To Post Request");
    else dispatch(addRequest(details));
  };
  useEffect(() => {}, []);

  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
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

            <form
              onSubmit={(e) => addRequests(e)}
              class="contact-form"
              id="contact-form-data"
            >
              <div class="row">
                <div class="col-sm-12" id="result"></div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => handleDetails(e)}
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
                      name="phone"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Age"
                      name="age"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <select
                      onChange={(e) => handleDetails(e)}
                      class="form-control"
                      placeholder="Gender"
                      name="gender"
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  name="address"
                  placeholder="address"
                  onChange={(e) => handleDetails(e)}
                ></input>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <select
                      onChange={(e) => handleDetails(e)}
                      name="state"
                      class="form-control"
                      type=""
                      placeholder="State"
                    >
                      {state.map((st) => {
                        return <option>{st}</option>;
                      })}{" "}
                    </select>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="blood_type"
                      name="blood_type"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
              </div>

              <h6 class="sub-title main-color">
                Please fill Hospital Details.
              </h6>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="name"
                      name="hospital_name"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Phone Number"
                      name="hospital_phone"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  placeholder="address"
                  name="hospital_address"
                  onChange={(e) => handleDetails(e)}
                ></input>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="City"
                      name="hospital_city"
                      onChange={(e) => handleDetails(e)}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select
                      name="hospital_state"
                      class="form-control"
                      type=""
                      placeholder="State"
                      onChange={(e) => handleDetails(e)}
                    >
                      {state.map((st) => {
                        return <option>{st}</option>;
                      })}{" "}
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                id="submit_btn"
                class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
              >
                <i
                  class="fa fa-spinner fa-spin mr-2 d-none"
                  aria-hidden="true"
                ></i>
                Submit Request
              </button>
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
