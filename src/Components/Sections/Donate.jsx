import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { message, Button } from "antd";
import axios from "axios";
import { api_base_url } from "../../Constants";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
export const Donate = (props) => {
  const bloodType = useSelector((state) => state.donors.bloodType);
  const [st, setSt] = useState([]);
  const [district, setDistrict] = useState([]);
  const [vehicle, setVehicle] = useState(false);
  const [volunteer, setVolunteer] = useState(false);
  const [dateofbirth, setDateofbirth] = useState(false);
  const [gard, setGard] = useState(false);
  const [ct, setCt] = useState([]);
  const [da, setDa] = useState();
  const [ay, setAy] = useState();

  const [am, setAm] = useState();
  const [ad, setAd] = useState();

  const [result, setResult] = useState();
  const [url, setUrl] = useState();
  console.log(url)

  const [details, setDetails] = useState({
    name: "",
    wodoso: "",
    wod: "",
    phone: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    st: "",
    district: "",
    city: "",
    blood_type: "",
    BLOOD: "",
    SDP: "",
    FFP: "",
    RDP: "",
    WBC: "",
    DoSDP: "",
    DoFFP: "",
    DoRDP: "",
    DoWBC: "",
    DoBLOOD: "",
    vehicle_car: "",
    vehicle_bike: "",
    emergencysupport: "",
    lastdonateddate: "",
    donatedplace: "",
    distancetravel: "",
    convtime: "",
    volunteer_admin: "",
    volunteer_pick: "",
    volunteer_other: "",
    is_donor_active: "",
    is_volunteer_active: "",
    password: "",
    no_times_do:'',
  });
  const fd = () => {
    const cy = new Date().getFullYear();
    const d = new Date(da);
    const ay = d.getFullYear();
    setAy(cy - ay);
    // console.log('gulshan',ay);
  };

  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
  const handleSubmit = (e, type) => {
    e.preventDefault();

    const data = {
      is_donor_active: details.is_donor_active,
      is_volunteer_active: details.is_volunteer_active,
      password: details.password,
      name: details.name,
      wo_do_so: details.wod + details.wodoso,
      email: details.email,
      phone: details.phone,
      dob: details.dob,
      age: details.age,
      gender: details.gender,
      city: details.city,
      district: details.district,
      state: details.st,
      blood_type: details.blood_type,
      do_av_blood: details.BLOOD,
      do_av_sdp: details.SDP,
      do_av_ffp: details.FFP,
      do_av_rdp: details.RDP,
      do_av_wbc: details.WBC,
      last_do_date: details.lastdonateddate,
      last_do_place: details.lastdonatedplace,
      vehicle_car: details.vehicle_car,
      vehicle_bike: details.vehicle_bike,
      ready_emergency: details.emergencysupport,
      travel_do_blood: details.distancetravel,
      convt_time_int: details.convtime,
      volunteer_admin: details.volunteer_admin,
      volunteer_pick: details.volunteer_pick,
      volunteer_other: details.volunteer_other,
      type_do_blood: details.DoBLOOD,
      type_do_sdp: details.DoSDP,
      type_do_ffp: details.DoFFP,
      type_do_rdp: details.DoRDP,
      type_do_wbc: details.DoWBC,
      no_times_do: details.no_times_do,
    };

    // console.log('gulshan',cd-ad);
    // console.log('gulshan',da.getFullYear())

    axios
      .post(api_base_url + "/beuserregister", data)
      .then((res) => {
        if (res.status == "200") {
          message.success("Register successfully", 10);
          setResult(res.data.data.token)
          localStorage.setItem('registerToken',res.data.data.token)
          if(res.status=='200'){
            fetch(api_base_url + "/email/verification-notification", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${res.data.data.token}`
      }})}
        } else {
          message.error(
            "your form is not submitted,Please fill all the details correctly ",
            6
          );
        }
      })
      .catch(() =>
        message.error(
          "your form is not submitted,Please fill all details correctly",
          6
        )
      );

    
    // type == "register" && setDetails({ ...details, is_donor_active: 0 });
    // registerDonor(details);
  };
  const handleStateChange = (e) => {
    let temp = st.find((el) => {
      return el.state_title == e.target.value;
    });
    axios
      .post(api_base_url + "/getAllDistrictByStates", {
        state_id: temp.state_id,
      })
      .then((res) => setDistrict(res.data));
  };
  const handleDistrictChange = (e) => {
    let temp = district.find((el) => {
      return el.district_title == e.target.value;
    });
    axios
      .post(api_base_url + "/getAllCityByDistrict", {
        districtid: temp.districtid,
      })
      .then((res) => setCt(res.data));
  };

  const handleVerifyEmail = (e) => {
    let temp=  district.find(el=>{return el.district_title==e.target.value})
    axios.post(api_base_url + "/getAllCityByDistrict", {
        districtid: temp.districtid,
      })
      .then((res) => setCt(res.data));
  };

  useEffect(() => {
    axios.post(api_base_url + "/getAllStates").then((res) => {
      const st = res.data;
      setSt(st);
    });
  }, []);





  
    

  return (
    <section id="donate" class="pt-page pt-page-6" data-id="request">
      <div style={{ marginTop: "-11%" }} class="container">
        <div class="row align-items-lg-center">
          <div class="col-7">
            <div class="heading-area">
              <h2 class="title">Register</h2>
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
                <div class="col-lg-3">
                  <div class="form-group">
                    <select
                      class="form-control"
                      type=""
                      name="wod"
                      onChange={(e) => {
                        handleDetails(e);
                        setGard(true);
                      }}
                    >
                      <option>Select</option>
                      <option name="wod" value="so-">
                        Son of
                      </option>
                      <option name="wod" value="wo-">
                        Wife of
                      </option>
                      <option name="wod" value="do-">
                        Daughter of
                      </option>
                    </select>
                  </div>
                </div>
                <>
                  {gard && (
                    <div class="col-lg-3">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Guardian"
                          name="wodoso"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </>
              </div>

              <div class="row">
                <div class="col-sm-12" id="result"></div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      min={1111111111}
                      max={9999999999}
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
                      min={"1975-01-02"}
                      max={"2006-01-02"}
                      placeholder="Dob"
                      name="dob"
                      onChange={(e) => {
                        handleDetails(e);
                        setDa(e.target.value);
                        fd();
                      }}
                      onMouseEnter={() => setDateofbirth(true)}
                      onMouseLeave={() => setDateofbirth(false)}
                    />
                    {dateofbirth && (
                      <label style={{ color: "red" }}>date of birth</label>
                    )}
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      min={11}
                      max={99}
                      placeholder="Age"
                      name="age"
                      value={ay}
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
                      <option name="gender" value="select">
                        Gender
                      </option>
                      <option name="gender" value="male">
                        Male
                      </option>
                      <option name="gender" value="female">
                        Female
                      </option>
                      <option name="gender" value="other">
                        other
                      </option>
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
                      name="st"
                      onChange={(e) => {
                        handleDetails(e);
                        handleStateChange(e);
                      }}
                    >
                      <option>State</option>
                      {st.map((stt) => {
                        return (
                          <option
                            value={stt.state_title}
                            name={stt.state_id + "state"}
                          >
                            {stt.state_title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="form-group">
                    <select
                      class="form-control"
                      type=""
                      placeholder="district"
                      name="district"
                      onChange={(e) => {
                        handleDetails(e);
                        handleDistrictChange(e);
                      }}
                    >
                      <option>District</option>
                      {district.map((dt) => {
                        return (
                          <option
                            value={dt.district_title}
                            name={dt.districtid + "district"}
                          >
                            {dt.district_title}
                          </option>
                        );
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
                      <option>City</option>
                      {ct.map((ctt) => {
                        return (
                          <option value={ctt.name} name={ctt.id}>
                            {ctt.name}
                          </option>
                        );
                      })}
                    </select>
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
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="Password"
                      placeholder="Create password"
                      name="password"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
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
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="SDP">
                          {" "}
                          SDP
                        </label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="FFP"
                          name="FFP"
                          value="FFP"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="FFP">
                          FFP
                        </label>
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="RDP"
                          name="RDP"
                          value="RDP"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="RDP">
                          RDP
                        </label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="WBC"
                          name="WBC"
                          value="WBC"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="WBC">
                          WBC
                        </label>
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="Blood"
                          name="BLOOD"
                          value="Blood"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-1" for="Blood">
                          Blood
                        </label>
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
                      name="lastdonateddate"
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
                      name="lastdonatedplace"
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
                          name="DoSDP"
                          value="SDP"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="SDP">
                          {" "}
                          SDP
                        </label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="FFP"
                          name="DoFFP"
                          value="FFP"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="FFP">
                          FFP
                        </label>
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="RDP"
                          name="DoRDP"
                          value="RDP"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="RDP">
                          RDP
                        </label>
                        <br></br>
                        <input
                          type="checkbox"
                          id="WBC"
                          name="DoWBC"
                          value="WBC"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-2" for="WBC">
                          WBC
                        </label>
                      </div>
                      <div class="col-sm-3">
                        <input
                          type="checkbox"
                          id="Blood"
                          name="DoBLOOD"
                          value="Blood"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        />
                        <label class="ml-1" for="Blood">
                          Blood
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <p>what distance you can travel to donate blood?</p>
                    <input
                      class="form-control"
                      type="number"
                      min={0}
                      placeholder="in km"
                      name="distancetravel"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <p>Number of times donated</p>
                    <input
                      class="form-control"
                      type="number"
                      min={0}
                      placeholder="times"
                      name="no_times_do"
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
                    <div class="row">
                      <div class="col-lg-3">
                        <input
                          type="radio"
                          id="yes"
                          onChange={(e) => {
                            handleDetails(e);
                            setVehicle(true);
                          }}
                          name="vehicle"
                          value="yes"
                        />
                        <label class="ml-2" for="car">
                          {" "}
                          Yes
                        </label>
                      </div>

                      <br></br>
                      <div class="col-lg-3">
                        <input
                          type="radio"
                          id="yes"
                          onChange={(e) => {
                            handleDetails(e);
                            setVehicle(false);
                          }}
                          name="vehicle"
                          value="no"
                        />
                        <label class="ml-2" for="bike">
                          No
                        </label>
                      </div>
                    </div>

                    <>
                      {vehicle && (
                        <div class="row">
                          <div class="col-lg-3">
                            <input
                              type="checkbox"
                              id="Car"
                              name="vehicle_car"
                              value="1"
                              onChange={(e) => {
                                handleDetails(e);
                              }}
                            />
                            <label class="ml-2" for="Car">
                              Car
                            </label>
                          </div>
                          <div class="col-lg-3">
                            <input
                              type="checkbox"
                              id="bike"
                              name="vehicle_bike"
                              value="1"
                              onChange={(e) => {
                                handleDetails(e);
                              }}
                            />
                            <label class="ml-2" for="Bike">
                              Bike
                            </label>
                          </div>
                        </div>
                      )}
                    </>

                    <br></br>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <p>time to interact ?</p>
                    <input
                      class="form-control"
                      type="time"
                      name="convtime"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                    <p>Do you want to donate?</p>
                    <div class="row">
                      <div class="col-lg-6">
                        <input
                          type="radio"
                          id="yes"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                          name="is_donor_active"
                          value="1"
                        />
                        <label class="ml-2" for="Yes">
                          Yes
                        </label>
                      </div>

                      <br></br>
                      <div class="col-lg-6">
                        <input
                          type="radio"
                          id="no"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                          name="is_donor_active"
                          value="0"
                        />
                        <label class="ml-2" for="bike">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <p>Are you interested to work as a volunteer also?</p>
                    <div class="row">
                      <div class="col-lg-5">
                        <input
                          type="radio"
                          id="yes"
                          onChange={(e) => {
                            handleDetails(e);
                            setVolunteer(true);
                          }}
                          name="is_volunteer_active"
                          value="1"
                        />
                        <label class="ml-2" for="volunteer">
                          {" "}
                          Yes
                        </label>
                      </div>
                      <br></br>
                      <div class="col-lg-3">
                        <input
                          type="radio"
                          id="yes"
                          onChange={(e) => {
                            handleDetails(e);
                            setVolunteer(false);
                          }}
                          name="is_volunteer_active"
                          value="0"
                        />
                        <label class="ml-2" for="no">
                          No
                        </label>
                      </div>
                    </div>
                    <>
                      {volunteer && (
                        <div class="row">
                          <div class="col-lg-5">
                            <input
                              type="checkbox"
                              id="pick"
                              name="volunteer_pick"
                              value="1"
                              onChange={(e) => {
                                handleDetails(e);
                              }}
                            />
                            <label class="ml-2" for="pick">
                              Pick & Drop
                            </label>
                          </div>
                          <div class="col-lg-4">
                            <input
                              type="checkbox"
                              id="admin"
                              name="volunteer_admin"
                              value="0"
                              onChange={(e) => {
                                handleDetails(e);
                              }}
                            />
                            <label class="ml-1" for="Admin">
                              Admin
                            </label>
                          </div>
                          <div class="col-lg-6">
                            <input
                              class="form-control"
                              type="text"
                              name="volunteer_other"
                              placeholder="Other"
                              onChange={(e) => {
                                handleDetails(e);
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                </div>
                <div class="col-lg-6">
                  <p>Are you ready to support in emergency</p>
                  <div class="row">
                    <div class="col-lg-3">
                      <input
                        type="radio"
                        id="yes"
                        name="emergencysupport"
                        value="1"
                        onChange={(e) => {
                          handleDetails(e);
                        }}
                      />
                      <label class="ml-2" for="yes">
                        {" "}
                        Yes
                      </label>
                    </div>
                    <div class="col-lg-3">
                      <input
                        type="radio"
                        id="no"
                        name="emergencysupport"
                        value="0"
                        onChange={(e) => {
                          handleDetails(e);
                        }}
                      />
                      <label class="ml-2" for="No">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: "45%" }}>
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
                    Register
                  </button>
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
                  <p>
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
                    <a href="mailto:info@omniscientitsolutions.com">
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
                    <a href="tel:+91-9811027310">+91-9811027310</a>
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
