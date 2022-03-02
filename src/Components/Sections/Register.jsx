import React, { useState } from "react";
import { state } from "../../Constants";
import { getAllCityByStates } from "../../redux/actions/constants";
import { registerDonor } from "../../Service/DonorService";
import { useSelector, useDispatch } from "react-redux";
export const Register = (props) => {
  const dispatch = useDispatch();
  const bloodType = useSelector((state) => state.donors.bloodType);
  const city = useSelector((state) => state.donors.city);
  const states = useSelector((state) => state.donors.states);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: 0,
    age: 0,
    gender: "male",
    address: "",
    city: "",
    state: state[0],
    password: "",
    blood_type: "A+",
    is_donor_active: 1,
  });
  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log("saransh", details);
    type == "register" && setDetails({ ...details, is_donor_active: 0 });
    registerDonor(details);
  };
  const handleStateChange = (e) => {
    let filter = states.find((name) => {
      return name.name == e.target.value;
    });

    filter && dispatch(getAllCityByStates(filter.id));
    console.log(filter);
  };
  return (
    <section id="register" class="pt-page pt-page-6" data-id="register">
      <div style={{marginTop:'-20%'}} class="container">
        <div class="row align-items-lg-center">
          <div class="col-6">
            <div class="heading-area">
              <h2 class="title">Register</h2>
              <h6 class="sub-title main-color">Please fill All Details.</h6>
            </div>

            <form
              class="contact-form"
              id="contact-form-data"
              onSubmit={(e) => {
                handleSubmit(e, "register");
              }}
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
                      onChange={(e) => {
                        handleDetails(e);
                      }}
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
                      onChange={(e) => {
                        handleDetails(e);
                      }}
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
                      onChange={(e) => {
                        handleDetails(e);
                      }}
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
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <select
                      class="form-control"
                      placeholder="Gender"
                      name="gender"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      name="address"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                      placeholder="address"
                    ></input>
                  </div>
                  <div class="col-sm-3">
                    <select
                      class="form-control"
                      name="blood_type"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      {bloodType.map((st) => {
                        return <option>{st}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <select
                      class="form-control"
                      type=""
                      placeholder="State"
                      name="state"
                      onChange={(e) => {
                        handleDetails(e);
                        handleStateChange(e);
                      }}
                    >
                      <option>All</option>
                      {states.map((st) => {
                        return <option>{st.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select
                      class="form-control"
                      type=""
                      placeholder="City"
                      name="city"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      {city.map((ct) => {
                        return <option>{ct.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    handleDetails(e);
                  }}
                />
              </div>

              <button
                type="button"
                id="submit_btn"
                onClick={(e) => {
                  handleSubmit(e, "register");
                }}
                class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
              >
                <i
                  class="fa fa-spinner fa-spin mr-2 d-none"
                  aria-hidden="true"
                ></i>
                Register
              </button>
            </form>
          </div>
          <div class="col-6">
            <ul class="address-item">
              <li class="w-100 mb-4">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4f6a3343917833.58013379b6c7f.gif" />
              </li>

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
export default Register;
