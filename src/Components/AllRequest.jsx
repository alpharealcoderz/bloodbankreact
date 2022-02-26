import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequest } from "../redux/actions/request";

export const AllRequest = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.requests.requestData);
  useEffect(() => {
    dispatch(getAllRequest());
  }, []);
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

  return (
    <section
      id="allRequest"
      class="pt-page pt-page-6 pt-5"
      data-id="allRequest"
      style={{ overflowY: "scroll", display: "block", marginTop: "47px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          {/* <div class="col-6"> */}
          <div class="heading-area">
            <h2 class="title">All Request</h2>
            <h6 class="sub-title main-color">BloodBank Name: Moto</h6>
          </div>
          <Table dataSource={data} columns={columns} scroll={{ x: 400 }} />;
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AllRequest;
