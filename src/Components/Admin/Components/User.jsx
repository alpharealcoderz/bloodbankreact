import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateDonorsData, deleteUser } from "../../../redux/actions/donors";
import { registerDonor } from "../../../Service/DonorService";
import { Table, Modal, Button } from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
export const User = ({
  updateDonorsData,
  canFetchDonors,
  donorsData,
  deleteUser,
}) => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(donorsData.length);
    canFetchDonors ? setData(donorsData) : updateDonorsData();
  }, [donorsData]);
  const [columns, setColumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Blood Type",
      dataIndex: "blood_type",
      key: "blood_type",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
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
      title: "Delete",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <span
          onClick={(e) => {
            onDelete(record.id, e);
          }}
        >
          <DeleteOutlined />
        </span>
      ),
    },
  ]);
  const onDelete = (id) => {
    // console.log({ id: id });
    deleteUser({ id: id });
  };
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: 0,
    age: 0,
    gender: "male",
    address: "",
    city: "",
    state: "",
    password: "",
    blood_type: "",
  });
  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
  const addNew = (e) => {
    e.preventDefault();
    console.log("saransh", details);
    registerDonor(details);
  };
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add New User
      </Button>
      <Modal
        title="Add New User"
        visible={visible}
        onOk={(e) => addNew(e)}
        onCancel={() => setVisible(false)}
      >
        <form
          class="contact-form"
          id="contact-form-data"
          onSubmit={(e) => {
            addNew(e);
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
                <input
                  class="form-control"
                  name="blood_type"
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
                  name="state"
                  onChange={(e) => {
                    handleDetails(e);
                  }}
                />
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
        </form>
      </Modal>
      <Table dataSource={data} columns={columns} scroll={{ x: 400 }} />;
    </div>
  );
};

const mapStateToProps = (state) => ({
  donorsData: state.donors.donorsData,
  canFetchDonors: state.donors.canFetchDonors,
});

const mapDispatchToProps = { updateDonorsData, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(User);
