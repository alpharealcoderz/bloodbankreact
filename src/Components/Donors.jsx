import React, { useState, useEffect } from "react";
import { Table,Button } from "antd";
import "antd/dist/antd.css";
import { api_base_url } from "../Constants";
import axios from "axios";
import "../style.css";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { updateDonorsData } from "../redux/actions/donors";
export const Donors = ({ donorsData, updateDonorsData, canFetchDonors}) => {
  const [data, setData] = useState([]);
  const [permanent,setPermanent]=useState([])
  const [st, setSt] = useState([]);
  const [district,setDistrict]=useState([])
  const [ct,setCt]=useState([])
  const bloodType = useSelector((state) => state.donors.bloodType);
  useEffect(() => {
    console.log(donorsData.length);
    if(canFetchDonors){
      setData(donorsData);setPermanent(donorsData)
    }else{
      updateDonorsData()
    }

  }, [donorsData]);
  let searchObj={}
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
const search = async() => {
  console.log('saransh',searchObj)
  let temp = [...permanent]
  let newData=[]
if(searchObj.hasOwnProperty('state')){
 
let temp1= await temp.filter(el=>{return el.state==searchObj.state})
newData=[...newData,...temp1]
setData(newData)
}
if(searchObj.hasOwnProperty('district')){
 let temp2=await temp.filter(el=>{return el.district==searchObj.district})
  newData=[...newData,...temp2]
  setData(newData)
  }
  if(searchObj.hasOwnProperty('city')){
    let temp2=await temp.filter(el=>{return el.city==searchObj.city})
     newData=[...newData,...temp2]
     setData(newData)
     }
     if(searchObj.hasOwnProperty('blood_type')){
      let temp2=await temp.filter(el=>{return el.blood_type==searchObj.blood_type})
       newData=[...newData,...temp2]
       setData(newData)
       }

}
const handleStateFilter = (e) => {
// const temp = data.filter(el=>{return el.st==e.target.name} )
let name=document.getElementsByName(e.target.value+'state')[0].innerText

searchObj.state=name

// setData(temp)
}  
const handleDistrictFilter = (e) => {
  // const temp = data.filter(el=>{return el.st==e.target.name} )
  searchObj.district=e.target.name
  
  // setData(temp)
  }  
  const handleCityFilter = (e) => {
    // const temp = data.filter(el=>{return el.st==e.target.name} )
    searchObj.city=e.target.name
    
    // setData(temp)
    }  

const handleBloodFilter = (e) => {
//   const temp = data.filter(el=>{return el.blood_type==e.target.value})
// setData(temp)
searchObj.blood_type=e.target.value
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
                        return <option value={stt.state_id} name={stt.state_id+'state'}>{stt.state_title}</option>;
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
                      handleDistrictFilter(e)
                      }}
                    >
                      <option>All</option>;
                      {district.map((dt) => {
                        return <option name={dt.district_title}value={dt.districtid}>{dt.district_title}</option>;
                      })}
                    </select>            
                    </div>
            <div>
              <div>Select City</div>
              <select
                      class="form-control"
                      name="city"
                      onChange={(e) => {
                        handleCityFilter(e)
                      }}
                    >
                      <option>All</option>;
                      {ct.map((ctt) => {
                        return <option name={ctt.name} value={ctt.id}>{ctt.name}</option>;
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
<Button type="primary" onClick={search}> Search</Button>
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
