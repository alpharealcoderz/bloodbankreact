import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { api_base_url } from "../Constants";
import axios from "axios";
import "../style.css";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { updateDonorsData } from "../redux/actions/donors";
export const Donors = ({ donorsData, updateDonorsData, canFetchDonors}) => {
  const [data, setData] = useState([]);
  const [st, setSt] = useState([]);
  const [district,setDistrict]=useState([])
  const [ct,setCt]=useState([])
  const bloodType = useSelector((state) => state.donors.bloodType);
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
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
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

  const handleStateChange = (e) => {
    axios.post(api_base_url+'/getAllDistrictByStates',{state_id:e.target.value}).then(res=>
     setDistrict(res.data))
 
   };
   const handleDistrictChange = (e) => {
     axios.post(api_base_url+'/getAllCityByDistrict',{districtid:e.target.value}).then(res=>
      setCt(res.data))
  
    };
    useEffect(() => {
      axios.post(api_base_url+'/getAllStates').then((res) => {
        const st = res.data;
        setSt(st);
      })
    }, [])

const handleStateFilter = (e) => {
const temp = data.filter(el=>{return el.st==e.target.value} )

setData(temp)
}  

const handleBloodFilter = (e) => {
  const temp = data.filter(el=>{return el.blood_type==e.target.value})
setData(temp)
}
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
          <div style={{display:'flex'}}>
            <div >
              <div>Select State</div>
              <select
                      class="form-control"
                      name="st"
                      onChange={(e) => {
                        handleStateChange(e);
                        handleStateFilter(e)
                        }}
                    >
                      <option>All</option>;
                      {st.map((stt) => {
                        return <option value={stt.state_id}>{stt.state_title}</option>;
                      })}
              </select>
            </div>
            <div  style={{marginLeft:'20px',marginRight:'20px'}}>
              <div>Select District</div>
              <select
                      class="form-control"
                      name="District"
                      onChange={(e) => {
                      handleDistrictChange(e);

                      }}
                    >
                      <option>All</option>;
                      {district.map((dt) => {
                        return <option value={dt.districtid}>{dt.district_title}</option>;
                      })}
                    </select>            
                    </div>
            <div>
              <div>Select City</div>
              <select
                      class="form-control"
                      name="city"
                      onChange={(e) => {
                      }}
                    >
                      <option>All</option>;
                      {ct.map((ctt) => {
                        return <option value={ctt.id}>{ctt.name}</option>;
                      })}
                    </select>            
                    </div>
            <div style={{marginLeft:'20px'}}>
              <div>Select Blood Type</div>
              <select
                      class="form-control"
                      name="blood_type"
                      onChange={(e) => {
                        handleBloodFilter(e)
                      }}
                    >
                      <option>All</option>;
                      {bloodType.map((st) => {
                        return <option>{st}</option>;
                      })}
                    </select>            
                    </div>
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
