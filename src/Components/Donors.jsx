import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "../style.css";
import { connect } from "react-redux";
import { updateDonorsData } from "../redux/actions/donors";
export const Donors = ({ donorsData, updateDonorsData, canFetchDonors }) => {
  const [data, setData] = useState([]);
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
  ]);

  return (
    <section
      id="donors"
      class="pt-page pt-page-6 pt-5"
      data-id="donors"
      style={{ overflowY: "scroll", display: "block", paddingTop: "67px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          {/* <div class="col-6"> */}
          <div class="heading-area">
            <h2 class="title">Donor's Data</h2>
            <h6 class="sub-title main-color">BloodBank Name: Moto</h6>
          </div>
          <Table dataSource={data} columns={columns} />;
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

const mapStateToProps = (state) => ({
  donorsData: state.donors.donorsData,
  canFetchDonors: state.donors.canFetchDonors,
});

const mapDispatchToProps = { updateDonorsData };

export default connect(mapStateToProps, mapDispatchToProps)(Donors);
