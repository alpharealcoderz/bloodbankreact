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

}) => {
  const [searchParameters, setSearchParameters] = useState({
    blood_type: "All",
    state: "All",
    city: "All",
  });
const [st, setSt] = useState([]);
const [district,setDistrict]=useState([])
const [ct,setCt]=useState([])
  // const [donorsData, setDonorsData] = useState([]);
  const handleSearchParam = (e) => {
    let payload = {};
    let name = e.target.name;
    let value = e.target.value;
    payload[name] = value;
    localStorage.setItem(name, value)
    setSearchParameters({ ...searchParameters, ...payload });
  };
  const handleSearchParams = (e,type) => {
    let payload = {};
    let name = type;
    let value=document.getElementById(e.target.value+type).innerText
    payload[name] = value;

    if(name=='district'||'city'){
      localStorage.setItem(name, value)
    }else{
      localStorage.setItem(name, e.target.value)
    }
    setSearchParameters({ ...searchParameters, ...payload });
  };
  
  const handleStateChange = (e) => {
    axios.post(api_base_url+'/getAllDistrictByStates',{state_id:e.target.value}).then(res=>
     setDistrict(res.data))
 
   };
   const handleDistrictChange = (e) => {
     axios.post(api_base_url+'/getAllCityByDistrict',{districtid:e.target.value}).then(res=>
      setCt(res.data))
  
    };
  
  const searchDonors = async () => {
    await updateDonorsData(searchParameters);
    window.location.hash = "#donors";
  };
  useEffect(() => {
    axios.post(api_base_url+'/getAllStates').then((res) => {
      const st = res.data;
      setSt(st);
    })
  }, [])
  console.log(st)
  console.log(st);
  return (
    <section
      id="home"
      class="pt-page pt-page-1"
      data-id="home"
      style={{ fontSize: "14px", color: "black",display:'block', fontWeight: "300" }}
    >   
     <div style={{marginTop:'7%', alignItems:'center'}} className="container">
       <div className="row">
         <div className="col-6" style={{marginTop:'5%'}}>
         <h3>
        <span class="main-color">Post blood request</span>{" "}
      </h3>
      <p>
        This is an organization that brings voluntary blood donors and
        those in need of blood on to a common platform. Through this
        website, we seek donors who are willing to donate blood, as well
        as provide the timeliest support to those in frantic need of it.
      </p>
      <form class="contact-form" id="contact-form-data">
        <div class="row">
          <div class="col-sm-4" style={{ marginTop: "6px" }}>
            <label class="font-weight-bold">Blood Type</label>
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
            <label class="font-weight-bold">State</label>
          </div>
          <div class="col-sm-6">
            <select
              class="form-control"
              name="st"
              onChange={(e) => {
                handleSearchParams(e,'state');
                handleStateChange(e);
                // handleCity(e);
              }}
            >
              <option>All</option>;
              {st.map((stt) => {
                return <option id={stt.state_id+'state'} value={stt.state_id}>{stt.state_title}</option>;
              })}
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4" style={{ marginTop: "6px" }}>
            <label class="font-weight-bold">District</label>
          </div>
          <div class="col-sm-6">
            <select
              class="form-control"
              name="District"
              onChange={(e) => {
                handleSearchParams(e,'district');
                handleDistrictChange(e);

              }}
            >
              <option>All</option>;
              {district.map((dt) => {
                return <option id={dt.districtid+'district'} value={dt.districtid}>{dt.district_title}</option>;
              })}
            </select>
            {/* </div> */}
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4" style={{ marginTop: "6px" }}>
            <label class="font-weight-bold">City</label>
          </div>
          <div class="col-sm-6">
            <select
              class="form-control"
              name="city"
              onChange={(e) => {
                handleSearchParams(e,'city');
              }}
            >
              <option>All</option>;
              {ct.map((ctt) => {
                return <option id={ctt.id+'city'} value={ctt.id}>{ctt.name}</option>;
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
           <div className="col-6" style={{marginTop:'50px',marginLeft:'-5%'}}>
           <div class="">
      <img
        src="https://i.pinimg.com/originals/0d/0f/85/0d0f85b1504a9ebe9a080b5b1dd95c0b.gif"
        style={{
          borderRadius: "50%",
          height: "80%",
          width: "80%",
          marginLeft: "190px",
        }}
      />
    </div>
             </div>
         </div>
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


