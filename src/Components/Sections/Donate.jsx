import React, { useState } from "react";
import { state } from "../../Constants";
import { getAllCityByStates } from "../../redux/actions/constants";
import { registerDonor } from "../../Service/DonorService";
import { useSelector, useDispatch } from "react-redux";
export const Donate = (props) => {
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
    <section id="donate" class="pt-page pt-page-6" data-id="request">
      <div class="container">
        <div class="row align-items-lg-center">
          <div class="col-7">
            <div class="heading-area">
              <h2 class="title">Donate Blood!</h2>
              <h6 class="sub-title main-color">Please fill All Details.</h6>
            </div>

            <form
              class="contact-form"
              id="contact-form-data"
              onSubmit={(e) => {
                handleSubmit(e, "donate");
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
                      type="text"
                      placeholder="Wife/ Daughter/ Son of"
                      name="wds"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12" id="result"></div>
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
                      type="date"
                      placeholder="Dob"
                      name="dob"
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
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
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
                      <option>State</option>
                      {states.map((st) => {
                        return <option>{st.name}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div class="col-sm-3">
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
                      <option>District</option>
                      {city.map((ct) => {
                        return <option>{ct.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="City"
                      placeholder="City"
                      name="City"
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
                    <select
                      class="form-control"
                      name="blood_type"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      <option>Blood Group</option>;<option>Don't know</option>;
                      {bloodType.map((st) => {
                        return <option>{st}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <p>Donation availability ?</p>
                    <div class="row">
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="SDP"
                          name="SDP"
                          value="SDP"
                        />
                        <label for="SDP"> SDP</label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="FFP"
                          name="FFP"
                          value="FFP"
                        />
                        <label for="FFP">FFP</label>
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="RDP"
                          name="RDP"
                          value="RDP"
                        />
                        <label for="RDP">RDP</label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="WBC"
                          name="WBC"
                          value="WBC"
                        />
                        <label for="WBC">WBC</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <p>Last Donated date</p>
                    <input
                      class="form-control"
                      type="Date"
                      placeholder="date"
                      name="date"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <p>Donated Place</p>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Place"
                      name="place"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <p>Type of donation?</p>
                    <div class="row">
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="SDP"
                          name="SDP"
                          value="SDP"
                        />
                        <label for="SDP"> SDP</label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="FFP"
                          name="FFP"
                          value="FFP"
                        />
                        <label for="FFP">FFP</label>
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="RDP"
                          name="RDP"
                          value="RDP"
                        />
                        <label for="RDP">RDP</label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="WBC"
                          name="WBC"
                          value="WBC"
                        />
                        <label for="WBC">WBC</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <p>what distance you can travel to donate blood?</p>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="in km"
                      name="age"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <p>Do you own a vehicle ?</p>
                    <input type="checkbox" id="yes" name="yes" value="car" />
                    <label for="car"> car</label>
                    <br></br>
                    <input type="checkbox" id="yes" name="yes" value="bike" />
                    <label for="bike">bike</label>
                    <br></br>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <p>What is your convenient time to interact ?</p>
                    <input
                      class="form-control"
                      type="time"
                      name="time"
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
                    <p>Are you ready to support in emergency</p>
                    <input type="checkbox" id="yes" name="yes" value="yes" />
                    <label for="yes"> yes</label>
                    <br></br>
                    <input type="checkbox" id="no" name="no" value="no" />
                    <label for="no">No</label>
                    <br></br>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <p>Are you interested to work as a volunteer also?</p>
                    <input type="checkbox" id="yes" name="yes" value="yes" />
                    <label for="yes"> yes</label>
                    <br></br>
                    <input type="checkbox" id="no" name="no" value="no" />
                    <label for="no">No</label>
                    <br></br>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <button
                      type="submit"
                      id="submit_btn"
                      class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
                    >
                      <i
                        class="fa fa-spinner fa-spin mr-2 d-none"
                        aria-hidden="true"
                      ></i>
                      Register And Donate
                    </button>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
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
                      Register Only
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-5">
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
export default Donate;
