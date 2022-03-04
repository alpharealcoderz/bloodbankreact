import React, { useState, useEffect } from "react";
import { logout, updateUser } from "../../Service/AuthService";
import { connect, useDispatch, useSelector } from "react-redux";
import { Input, Modal, Button, Table } from "antd";
import { getAllRequestByUser } from "../../redux/actions/request";
export default function Profile() {
  const dispatch = useDispatch();
  const [columns, setColumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "adress",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Hospital Name",
      dataIndex: "hospital_name",
      key: "hospital_name",
    },
    {
      title: "Hospital City",
      dataIndex: "hospital_city",
      key: "hospital_city",
    },
    {
      title: "Hospital State",
      dataIndex: "hospital_state",
      key: "hospital_state",
    },
  ]);
  // const [details, setDetails] = useState({
  //   name: "",
  //   email: "",
  //   phone: 0,
  //   age: 0,
  //   gender: "male",
  //   address: "",
  //   city: "",
  //   state: "",
  //   password: "",
  //   blood_type: "",
  // });
  const data = useSelector((state) => state.requests.usersRequest);
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") == null) window.location.hash = "home";
    else dispatch(getAllRequestByUser());
  }, []);
  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
  const update = (e) => {
    e.preventDefault();
    console.log("saransh", details);
    updateUser(details);
  };
  if (localStorage.getItem("token") == null) return <></>;
  return (
    <section
      id="profile"
      class="pt-page pt-page-6 pt-5"
      data-id="profile"
      style={{ overflowY: "scroll", paddingTop: "67px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          {/* <div class="col-6"> */}
          <div class="heading-area">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2 class="title">Your Request</h2>
              <div>
                <Button type="danger" onClick={() => setVisible(true)}>
                  Edit Profile
                </Button>
                <Button
                  type="danger"
                  onClick={() => logout()}
                  style={{ marginLeft: "10px" }}
                >
                  Logout
                </Button>
              </div>
            </div>
            <h6 class="sub-title main-color">Omniscient BloodBank</h6>
          </div>
          <Modal
            title="Edit Profile"
            visible={visible}
            onOk={(e) => update(e)}
            onCancel={() => setVisible(false)}
          >
            <form
              class="contact-form"
              id="contact-form-data"
              onSubmit={(e) => {
                update(e);
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
                      value={details.name}
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
                      value={details.email}
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
                      value={details.phone}
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
                      value={details.age}
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
                      value={details.gender}
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
                      value={details.address}
                      placeholder="address"
                    ></input>
                  </div>
                  <div class="col-sm-3">
                    <input
                      class="form-control"
                      name="blood_type"
                      value={details.blood_type}
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
                    <input
                      class="form-control"
                      type="text"
                      placeholder="City"
                      name="city"
                      value={details.city}
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type=""
                      placeholder="State"
                      value={details.state}
                      name="state"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    handleDetails(e);
                  }}
                />
              </div> */}
            </form>
          </Modal>
          <Table dataSource={data} columns={columns} scroll={{ x: 400 }} />;
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
