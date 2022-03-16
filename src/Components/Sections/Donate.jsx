import { Form, Input, Steps, Modal, Button, message } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import tlogo from "./tname.jpg";
import { api_base_url } from "../../Constants";
import jsPDF from "jspdf";
import blood from "./bloodgif.gif";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const Donate = () => {
  const bloodType = useSelector((state) => state.donors.bloodType);
  const [st, setSt] = useState([]);
  const [visible, setVisible] = useState(false);
  const [district, setDistrict] = useState([]);
  const [vehicle, setVehicle] = useState(false);
  const [volunteer, setVolunteer] = useState(false);
  const [dateofbirth, setDateofbirth] = useState(false);
  const [gard, setGard] = useState(false);
  const [ct, setCt] = useState([]);
  const [da, setDa] = useState();
  const [ay, setAy] = useState();
  console.log("shiv", ay);
  const [result, setResult] = useState();
  const [url, setUrl] = useState();
  const [otp, setOtp] = useState();

  const [details, setDetails] = useState({
    name: "",
    wodoso: "",
    wod: "",
    phone: "",
    address: "",
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
    no_times_do: "",
    votp: "",
  });
  const fd = () => {
    const cy = new Date().getFullYear();
    const d = new Date(da);
    const ay = d.getFullYear();
    setAy(cy - ay);
  };

  console.log(details.votp);
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
      age: details.age != "" ? details.age : ay,
      gender: details.gender,
      address: details.address,
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

    axios
      .post(api_base_url + "/beuserregister", data)
      .then((res) => {
        window.location.hash = "#login";
        message.success("Register successfully", 10);
        setResult(res.data.data.token);
        localStorage.setItem("registerToken", res.data.data.token);
        fetch(api_base_url + "/email/verification-notification", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${res.data.data.token}`,
          },
        });
      })
      .catch((err) => {
        // const er = err.response.data;
        message.error(
          "something went wrong .. please fill all details correctly!",
          12
        );
      });
  };

  const handleOtpChange = (e) => {
    axios.post(api_base_url + "/otp", { phone: details.phone }).then((res) => {
      message.success("Otp has been sent to your number", 10);
      setOtp(res.data.otp);
    });
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
    let temp = district.find((el) => {
      return el.district_title == e.target.value;
    });
    axios
      .post(api_base_url + "/getAllCityByDistrict", {
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

  useEffect(() => {
    console.log("saransh", window.location.href);
    var url = new URL(window.location.href);
    url && axios.get(url);
  }, []);
  const PdfGenerate = () => {
    var doc = new jsPDF("p", "pt", [2000, 7000]);
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save(details.name + "omnicent.pdf");
      },
    });
  };

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section id="donate" class="pt-page pt-page-6" data-id="request">
      <div
        style={{ marginTop: "-25%", marginLeft: "15%" }}
        class="container"
        id="content"
      >
        <div class="row align-items-lg-center makeWrap">
          <div style={{ width: "60%" }} className="wrapWidth">
            <div class="heading-area">
              <h2 class="title">Register</h2>
              <div class="mb-2" style={{ marginTop: "-2%" }}>
                <a
                  style={{ color: "#ed2d34", fontWeight: "bold" }}
                  href="#login"
                >
                  Click to login ?
                </a>
              </div>
              <h6 class="sub-title main-color">Please fill All Details.</h6>
            </div>

            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>

            {current + 1 == 1 && (
              <>
                <Form
                  class=""
                  name="basicform"
                  onFinish={handleSubmit}
                  id="contact-form-data"
                  onSubmit={(e) => {
                    e.preventDefault();
                    //  handleOtpChange()
                    setVisible(true);
                  }}
                >
                  <div class="row mt-4">
                    <div class="col-sm-12" id="result"></div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "Please enter username",
                            },
                          ]}
                          class="form-control"
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          defaultValue={details.name}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            type="text"
                            defaultValue={details.name}
                            class="form-control"
                            name="name"
                            placeholder="Full Name"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          type=""
                          name="wod"
                          defaultValue={details.wod}
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
                            <Form.Item
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter wo/do/so",
                                },
                              ]}
                              class="form-control"
                              type="text"
                              placeholder="Name"
                              name="wodoso"
                              defaultValue={details.wodoso}
                              onChange={(e) => {
                                handleDetails(e);
                              }}
                            >
                              <Input
                                type="text"
                                defaultValue={details.wodoso}
                                class="form-control"
                                name="wodoso"
                                placeholder="Name"
                              />
                            </Form.Item>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                  <div class="row">
                    <div class="col-sm-12" id="result"></div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <Form.Item
                          rules={[
                            { required: true, message: "Please enter number" },
                          ]}
                          class="form-control"
                          type="number"
                          min={1111111111}
                          max={9999999999}
                          placeholder="Phone"
                          defaultValue={details.phone}
                          name="phone"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            type="number"
                            defaultValue={details.phone}
                            min={1111111111}
                            max={9999999999}
                            name="phone"
                            class="form-control"
                            placeholder="Phone"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <Form.Item
                          rules={[
                            { required: true, message: "Please enter Email" },
                          ]}
                          class="form-control"
                          type="email"
                          placeholder="Email"
                          defaultValue={details.email}
                          name="email"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            name="email"
                            defaultValue={details.email}
                            type="email"
                            class="form-control"
                            placeholder="Email"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <Form.Item
                          rules={[
                            { required: true, message: "Please enter DOB" },
                          ]}
                          class="form-control"
                          type="date"
                          min={"1975-01-02"}
                          max={"2006-01-02"}
                          placeholder="Dob"
                          name="dob"
                          defaultValue={details.dob}
                          onChange={(e) => {
                            handleDetails(e);
                            setDa(e.target.value);
                            fd();
                          }}
                          onMouseEnter={() => setDateofbirth(true)}
                          onMouseLeave={() => setDateofbirth(false)}
                        >
                          <Input
                            defaultValue={details.dob}
                            type="date"
                            min={"1975-01-02"}
                            max={"2006-01-02"}
                            name="dob"
                            class="form-control"
                            placeholder="Dob"
                          />
                        </Form.Item>
                        {dateofbirth && (
                          <label style={{ color: "red" }}>date of birth</label>
                        )}
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <input
                          rules={[
                            { required: true, message: "Please enter age" },
                          ]}
                          class="form-control"
                          type="number"
                          min={11}
                          max={99}
                          placeholder="Age"
                          defaultValue={details.age}
                          name="age"
                          value={ay}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          {/* <Input min={11} max={99} value={ay}  onChange={(e) => {
                        handleDetails(e);
                      }} defaultValue={details.age} type="number" name="age" class="form-control" placeholder="enter age"/> */}
                        </input>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <select
                          class="form-control"
                          placeholder="Gender"
                          name="gender"
                          defaultValue={details.gender}
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

                  <div class="col-sm-12" id="result"></div>

                  <div class="form-group">
                    <Form.Item
                      rules={[
                        { required: true, message: "Please enter address" },
                      ]}
                      class="form-control"
                      type="text"
                      placeholder="Address"
                      name="address"
                      defaultValue={details.address}
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      <Input
                        type="text"
                        defaultValue={details.address}
                        name="address"
                        class="form-control"
                        placeholder="enter address"
                      />
                    </Form.Item>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <select
                          class="form-control"
                          type=""
                          placeholder="State"
                          defaultValue={details.st}
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
                          defaultValue={details.district}
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
                          defaultValue={details.city}
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
                          defaultValue={details.blood_type}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <option>Blood Group</option>;
                          <option>Don't know</option>;
                          {bloodType.map((st) => {
                            return <option>{st}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "Please enter Password",
                            },
                          ]}
                          class="form-control"
                          type="Password"
                          placeholder="Create password"
                          defaultValue={details.password}
                          name="password"
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            name="password"
                            defaultValue={details.password}
                            type="Password"
                            class="form-conrol"
                            placeholder="enter password"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </Form>
              </>
            )}
            {current + 1 == 2 && (
              <>
                <Form
                  name="basicform"
                  onFinish={handleSubmit}
                  class=""
                  id="contact-form-data"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setVisible(true);
                  }}
                >
                  <div class="row mt-4">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <p>
                          <b>Donation availability ?</b>
                        </p>
                        <div class="row">
                          <div class="col-sm-3">
                            <input
                              type="checkbox"
                              id="SDP"
                              name="SDP"
                              value="SDP"
                              defaultChecked={details.SDP}
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
                              defaultChecked={details.FFP}
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
                              defaultChecked={details.RDP}
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
                              defaultChecked={details.WBC}
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
                              defaultChecked={details.BLOOD}
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
                        <p style={{ marginLeft: "-20px" }}>
                          <b>Last Donated date</b>
                        </p>
                        <Form.Item
                          style={{ marginLeft: "-20px" }}
                          class="form-control"
                          type="Date"
                          placeholder="date"
                          name="lastdonateddate"
                          defaultValue={details.lastdonateddate}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            defaultValue={details.lastdonateddate}
                            type="Date"
                            placeholder="last donated date"
                            name="lastdonateddate"
                            class="form-control"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <p>
                          <b>Donated Place</b>
                        </p>
                        <Form.Item
                          class="form-control"
                          type="text"
                          placeholder="Place"
                          name="lastdonatedplace"
                          defaultValue={details.lastdonatedplace}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            type="text"
                            defaultValue={details.lastdonatedplace}
                            placeholder="donted place"
                            class="form-control"
                            name="lastdonatedplace"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <p>
                          <b>Type of donation?</b>
                        </p>
                        <div class="row">
                          <div class="col-sm-3">
                            <input
                              type="checkbox"
                              id="SDP"
                              name="DoSDP"
                              value="SDP"
                              defaultChecked={details.DoSDP}
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
                              defaultChecked={details.DoFFP}
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
                              defaultChecked={details.DoRDP}
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
                              defaultChecked={details.DoWBC}
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
                              defaultChecked={details.DoBLOOD}
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
                        <p style={{ marginLeft: "-22%" }}>
                          <b>what distance you can travel?</b>
                        </p>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "enter distance you can travel",
                            },
                          ]}
                          style={{ marginLeft: "-15%" }}
                          class="form-control"
                          type="number"
                          min={0}
                          placeholder="in km"
                          name="distancetravel"
                          defaultValue={details.distancetravel}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            type="number"
                            min={0}
                            placeholder="in km"
                            defaultValue={details.distancetravel}
                            name="distancetravel"
                            class="form-control"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <p>
                          <b>Number of times donated</b>
                        </p>
                        <Form.Item
                          class="form-control"
                          type="number"
                          min={0}
                          placeholder="times"
                          name="no_times_do"
                          defaultValue={details.no_times_do}
                          onChange={(e) => {
                            handleDetails(e);
                          }}
                        >
                          <Input
                            type="number"
                            defaultValue={details.no_times_do}
                            min={0}
                            placeholder="times"
                            name="no_times_do"
                            class="form-control"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </Form>
              </>
            )}
            {current + 1 == 3 && (
              <>
                <form
                  class=""
                  id="contact-form-data"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setVisible(true);
                  }}
                >
                  <div class="row mt-4">
                    <div class="col-lg-5">
                      <div class="form-group">
                        <p>
                          <b>Do you own a vehicle ?</b>
                        </p>
                        <div class="row ">
                          <div class="col-lg-5">
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
                              <div class="col-lg-5">
                                <input
                                  type="checkbox"
                                  id="Car"
                                  name="vehicle_car"
                                  value="1"
                                  defaultChecked={details.vehicle_car}
                                  onChange={(e) => {
                                    handleDetails(e);
                                  }}
                                />
                                <label class="ml-2" for="Car">
                                  Car
                                </label>
                              </div>
                              <div class="col-lg-4">
                                <input
                                  type="checkbox"
                                  id="bike"
                                  name="vehicle_bike"
                                  defaultChecked={details.vehicle_bike}
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

                    <div class="col-sm-4">
                      <div class="form-group">
                        <p style={{ marginLeft: "-5%" }}>
                          <b>Do you want to donate?</b>
                        </p>
                        <div class="row ">
                          <div class="col-lg-4">
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
                          <div class="col-lg-5">
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
                    <div class="col-sm-3">
                      <div class="form-group">
                        <p>
                          <b>time to interact ?</b>
                        </p>
                        <input
                          class="form-control"
                          type="time"
                          name="convtime"
                          defaultValue={details.convtime}
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
                        <p>
                          <b>Are you interested to work as a volunteer also?</b>
                        </p>
                        <div class="row ">
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
                                  defaultChecked={details.volunteer_pick}
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
                                  defaultChecked={details.volunteer_admin}
                                  onChange={(e) => {
                                    handleDetails(e);
                                  }}
                                />
                                <label class="ml-1" for="Admin">
                                  Admin
                                </label>
                              </div>
                              <div class="col-lg-6 ">
                                <input
                                  class="form-control"
                                  type="text"
                                  name="volunteer_other"
                                  defaultChecked={details.volunteer_other}
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
                      <p style={{ marginLeft: "5%" }}>
                        <b>Are you ready to support in emergency</b>
                      </p>
                      <div class="row ml-2 ">
                        <div class="col-lg-6">
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
                </form>
              </>
            )}

            <div className="steps-content"></div>
            <div className="steps-action">
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="danger" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="danger"
                  onClick={() => {
                    setVisible(true);
                    handleOtpChange();
                    message.success("Processing");
                  }}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
          <div
            style={{ width: "40%", height: "30%", backgroundColor: "white" }}
            className="wrapWidth mt-4 "
          >
            <ul class="address-item">
              <li class="w-100 mb-4">
                <img src={tlogo}></img>
              </li>
              <li class="w-100 mb-4 ">
                <img style={{ height: "300px" }} src={blood} />
              </li>

              <li class="w-100 mb-4">
                <i class="lni-apartment main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Address</h6>
                  <p style={{ color: "black", fontWeight: "bold" }}>
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
                    <a
                      style={{ color: "black" }}
                      href="mailto:info@omniscientitsolutions.com"
                    >
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
                    <a style={{ color: "black" }} href="tel:+91-9811027310">
                      +91-9811027310
                    </a>
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
                  onClick={() => (window.location.hash = "#login")}
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
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="DECLARATION"
        visible={visible}
        onOk={(e) =>
          details.votp == otp
            ? [handleSubmit(e, "register"), setVisible(false)]
            : message.error("wrong otp")
        }
        onCancel={() => setVisible(false)}
      >
        <p>
          I <b> {details.name} </b> hereby declare that the information given
          here is correct to my knowledge and i will be responsible for any
          discrepancy.
        </p>
        <label for="fname">Enter Otp:</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            handleDetails(e);
          }}
          placeholder="Enter otp sent on phone"
          id="otp"
          name="votp"
        />
      </Modal>
    </section>
  );
};
export default Donate;
