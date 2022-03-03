import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import blood from "./bloodlogo.jpg";
import { api_base_url } from "../../Constants";
import axios from "axios";

import { updateDonorsData } from "../../redux/actions/donors";
import {
  getBloodType,
  getAllCityByStates,
} from "../../redux/actions/constants";
export const Home = ({
  updateDonorsData,
  bloodType,
  states,
  city,
  getAllCityByStates,
}) => {
  const [searchParameters, setSearchParameters] = useState({
    blood_type: "All",
    state: "All",
    city: "All",
  });
  const [st, setSt] = useState([]);
  const [dt, setDt] = useState([]);
  const [ct, setCt] = useState([]);
  // const [donorsData, setDonorsData] = useState([]);
  const handleSearchParam = (e) => {
    let payload = {};
    let name = e.target.name;
    let value = e.target.value;
    payload[name] = value;
    setSearchParameters({ ...searchParameters, ...payload });
  };
  const handleCity = (e) => {
    let filter = states.find((name) => {
      return name.name == e.target.value;
    });
    filter && getAllCityByStates(filter.id);
    console.log(filter);
  };

  const searchDonors = async () => {
    await updateDonorsData(searchParameters);
    window.location.hash = "#donors";
  };
  useEffect(() => {

  return (
    <section
      id="home"
      class="pt-page pt-page-1"
      data-id="home"
      style={{ fontSize: "14px", color: "black", fontWeight: "300" }}
    >
      <div class="container slider-container">
        <div class="row align-items-lg-center">
          <div style={{ marginTop: "-15%" }} class="col-lg-7 order-lg-2 ">
            <div class="">
              <img
                src="https://i.pinimg.com/originals/0d/0f/85/0d0f85b1504a9ebe9a080b5b1dd95c0b.gif"
                style={{
                  borderRadius: "50%",
                  height: "70%",
                  width: "70%",
                  marginLeft: "100px",
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: "-20%" }} class="col-lg-5 wow fadeInRight">
            <img src={blood} />
            <div class="heading-box">
              <h3>
                <span class="main-color">Check Blood Availability</span>{" "}
              </h3>
              <p>
                This is an organization that brings voluntary blood donors and
                those in need of blood on to a common platform. Through this
                website, we seek donors who are willing to donate blood, as well
                as provide the timeliest support to those in frantic need of it.
                <a
                  href="javascript:void(0);"
                  data-text="Read More"
                  class="btn btn-link"
                >
                  Read More
                </a>
              </p>

              <form class="contact-form" id="contact-form-data">
                <div class="row">
                  <div class="col-sm-4" style={{ marginTop: "6px" }}>
                    <label>Blood Type</label>
                  </div>
                  <div class="col-sm-6">
                    <select
                      class="form-control"
                      name="blood_type"
                      onChange={(e) => {
                        handleSearchParam(e);
                      }}
                    >
                      <option>All</option>;
                      {bloodType.map((st) => {
                        return <option>{st}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4" style={{ marginTop: "6px" }}>
                    <label>State</label>
                  </div>
                  <div class="col-sm-6">
                    <select
                      class="form-control"
                      name="state"
                      onChange={(e) => {
                        handleSearchParam(e);
                        handleCity(e);
                      }}
                    >
                      <option>All</option>;
                      {st.map((stt) => {
                        return <option>{stt.state_title}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4" style={{ marginTop: "6px" }}>
                    <label>District</label>
                  </div>
                  <div class="col-sm-6">
                    <select
                      class="form-control"
                      name="District"
                      onChange={(e) => {
                        handleSearchParam(e);
                      }}
                    >
                      <option>All</option>;
                      {dt.map((dtt) => {
                        return <option>{dtt.district_title}</option>;
                      })}
                    </select>
                    {/* </div> */}
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4" style={{ marginTop: "6px" }}>
                    <label>City</label>
                  </div>
                  <div class="col-sm-6">
                    <select
                      class="form-control"
                      name="city"
                      onChange={(e) => {
                        handleSearchParam(e);
                      }}
                    >
                      <option>All</option>;
                      {city.map((ct) => {
                        return <option></option>;
                      })}
                    </select>
                    {/* </div> */}
                  </div>
                </div>

                <a
                  onClick={() => searchDonors()}
                  data-animation="61"
                  data-goto="11"
                  style={{ color: "white" }}
                  id="submit_btn"
                  class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
                >
                  <i
                    class="fa fa-spinner fa-spin mr-2 d-none"
                    aria-hidden="true"
                  ></i>
                  Search Donor
                </a>
              </form>
            </div>
          </div>
        </div>
        {/* <span class="shape-square"></span>
        <span class="shape-triangle"></span>
        <span class="shape-plus"></span>
        <span class="shape-circle"></span> */}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  bloodType: state.donors.bloodType,
  states: state.donors.states,
  city: state.donors.city,
});

const mapDispatchToProps = {
  updateDonorsData,
  getBloodType,
  getAllCityByStates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
