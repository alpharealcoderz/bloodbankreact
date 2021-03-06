import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { addRequest } from "../../redux/actions/request";
import { api_base_url } from "../../Constants";
import axios from "axios";
import tlogo from './tname.jpg';
import blood from './bloodgif.gif';
import { Form,Input,Modal, Button  } from 'antd';

export const Request = (props) => {
  const dispatch = useDispatch();
  const bloodType = useSelector((state) => state.donors.bloodType);
  const city = useSelector((state) => state.donors.city);
  const states = useSelector((state) => state.donors.states);
  const [state, setSt] = useState([]);
  const [hospital_state, setHosstate] = useState([]);
  const [ct, setCt] = useState([]);
  const [hospital_city, setHosct] = useState([]);
  const [dob, setDt] = useState(false);
  const [rdt, setRdt] = useState(false);
  const [district, setDistrict] = useState([]);
  const [address, setAddress] = useState([]);
  const [hospital_district, setHosdistrict] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
    address:"",
    district: "",
    city: "",
    state: "",
    phone: 0,
    hospital_name: "",
    hospital_district: "",
    hospital_city: "",
    hospital_state: "",
    hospital_phone: "",
    blood_type: "",
    unit: "",
    date_required: "",
    id: JSON.parse(localStorage.getItem("userDetails"))?.id,
  });


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    window.location.hash = "login";
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Checklogin = (e) => {
  if (localStorage.getItem("token") == null){
   showModal()
  // message.success("Please Login To Post Request",10);
  }
}

  const addRequests = (e) => {
    if (localStorage.getItem("token") == null)
      message.success("Please Login To Post Request");
    //  console.log('saransh',JSON.parse(localStorage.getItem('userDetails').id));
    else dispatch(addRequest(details));
  };
  useEffect(() => {}, []);

  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
  // const handleStateChange = (e) => {
  //   let filter = states.find((name) => {
  //     return name.name == e.target.value;
  //   });
  //   filter && dispatch(getAllCityByStates(filter.id));
  //   console.log(filter);
  // };
  const handleStateChange = (e) => {
    let temp = state.find((el) => {
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
  useEffect(() => {
    axios.post(api_base_url + "/getAllStates").then((res) => {
      const st = res.data;
      setSt(st);
    });
  }, []);

  const handlehosStateChange = (e) => {
    let temp = hospital_state.find((el) => {
      return el.state_title == e.target.value;
    });
    axios
      .post(api_base_url + "/getAllDistrictByStates", {
        state_id: temp.state_id,
      })
      .then((res) => setHosdistrict(res.data));
  };
  const handlehosDistrictChange = (e) => {
    let temp = hospital_district.find((el) => {
      return el.district_title == e.target.value;
    });
    axios
      .post(api_base_url + "/getAllCityByDistrict", {
        districtid: temp.districtid,
      })
      .then((res) => setHosct(res.data));
  };
  useEffect(() => {
    axios.post(api_base_url + "/getAllStates").then((res) => {
      const st = res.data;
      setHosstate(st);
    });
  }, []);

  return (
    <section id="request" class="pt-page pt-page-6" data-id="request">
      <div style={{ marginTop: "-30%",marginLeft:'15%' }} class="container">
        <div class="row align-items-lg-center makeWrap">
          <div style={{width:'50%'}} className="wrapWidth">
            <div class="heading-area">
              <h5 class="title">Post Blood Request!</h5>
              <p style={{marginTop:'-15px'}}class="sub-title main-color">
                Make sure you are login before you fill this form.*
              </p>
              <h6 class="sub-title main-color">
                Please fill Patient's Details.
              </h6>
              
            </div>
            <Modal title="You have not logged in" visible={isModalVisible} onOk={(e)=>[handleOk(),setIsModalVisible(false)]} onCancel={handleCancel}>
        <h5 style={{textAlign:'center'}}>Please login before fill this form.</h5>
      </Modal>

            <Form
              name="basicform"
              onFinish={addRequests}
              initialValues={{ remember: true }}
              class="contact-form"
              id="contact-form-data"
            >
              <div class="row">
                <div class="col-sm-12" id="result"></div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <Form.Item
                     rules={[{ required: true, message: 'Please enter username' }]}
                      class="form-control"
                      name="name"
                      type="text"
                      onClick ={(e)=>Checklogin(e)}
                      onChange={(e) =>handleDetails(e)}
                    >
                      <Input type="text" class="form-control" name="name" style={{fontWeight:'bold'}} placeholder="Patient's Name"/>
                      </Form.Item>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <Form.Item
                      rules={[{ required: true, message: 'Please enter Email' }]}
                      type="email"
                      name="email"
                      onChange={(e) => handleDetails(e)}
                    >
                    <Input type="email" name="email" class="form-control" placeholder="Email"/>
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <Form.Item
                    rules={[{ required: true, message: 'Please enter Phone Number' }]}
                      type="number"
                      name="phone"
                      onChange={(e) => handleDetails(e)}
                    >
                      <Input name="phone" class="form-control" type="number" min={1111111111} max={9999999999} placeholder="Phone Number"/>
                    </Form.Item>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <select
                      onChange={(e) => handleDetails(e)}
                      class="form-control"
                      placeholder="Gender"
                      name="gender"
                    >
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <Form.Item
                    rules={[{ required: true, message: 'Please enter age' }]}
                      type="number"
                      name="age"
                      onChange={(e) => handleDetails(e)}
                    >
                      <Input class="form-control" type="number" min={0} max={100} name="age" placeholder="Patient's age"/>
                      </Form.Item>

                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <select
                      class="form-control"
                      name="blood_type"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      <option>Blood Group</option>;
                      {bloodType.map((bt) => {
                        return <option>{bt}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div style={{ display: "none" }} class="col-sm-3">
                  <div class="form-group">
                    <select
                      class="form-control"
                      name="blood_type"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      <option>Blood Type</option>;<option>WBC</option>;
                      <option>RDP</option>;<option>FFP</option>;
                      <option>SDP</option>;
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-lg-12">
                  <div class="form-group" style={{marginLeft:'-14px',marginRight:'-14px'}}>
                    <Form.Item
                    rules={[{ required: true, message: 'Please enter Address' }]}
                      type="text"
                      name="address"
                      onChange={(e) => handleDetails(e)}
                    >
                      <Input type="text" class="form-control" name="address" placeholder="Address"/>
                      </Form.Item>

                  </div>
               </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <select
                      class="form-control"
                      type=""
                      placeholder="State"
                      name="state"
                      onChange={(e) => {
                        handleDetails(e);
                        handleStateChange(e);
                      }}
                    >
                      <option>State</option>
                      {state.map((stt) => {
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
              <br></br>
              <h6 class="sub-title main-color">
                Please fill Hospital Details.
              </h6>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <Form.Item
                    rules={[{ required: true, message: 'Please enter Hospital name' }]}
                      type="text"
                      name="hospital_name"
                      onChange={(e) => handleDetails(e)}
                    >
                      <Input type="text" class="form-control" name="hospital_name" placeholder = "Hospital's Name"/>
                      </Form.Item>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <Form.Item
                    rules={[{ required: true, message: 'Please enter phone number' }]}
                      min={1111111111}
                      max={9999999999}
                      name="hospital_phone"
                      placeholder="Hospital phone number"
                      onChange={(e) => handleDetails(e)}
                    >
                      <Input min={1111111111} max={9999999999} name="hospital_phone" class="form-control" placeholder = 'Hospital Phone Number'/>
                      </Form.Item>
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
                      name="hospital_state"
                      onChange={(e) => {
                        handleDetails(e);
                        handlehosStateChange(e);
                      }}
                    >
                      <option>State</option>
                      {hospital_state.map((stt) => {
                        return (
                          <option value={stt.state_title} name={stt.state_id}>
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
                      name="hospital_district"
                      onChange={(e) => {
                        handleDetails(e);
                        handlehosDistrictChange(e);
                      }}
                    >
                      <option>District</option>
                      {hospital_district.map((dt) => {
                        return (
                          <option
                            value={dt.district_title}
                            name={dt.districtid}
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
                      name="hospital_city"
                      onChange={(e) => {
                        handleDetails(e);
                      }}
                    >
                      <option>City</option>
                      {hospital_city.map((ctt) => {
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
              <br></br>
              <h6 class="sub-title main-color">Blood Requirement</h6>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <Form.Item
                    name="unit"
                    rules={[{ required: true, message: 'Blood Unit Required' }]}
                     onChange={(e) => handleDetails(e)}
                    >
                      <Input name="unit"  type="number" min={0} placeholder="How much unit blood needed"/>
                    </Form.Item>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="Date"
                      placeholder="Date needed"
                      name="date_required"
                      onChange={(e) => handleDetails(e)}
                      onMouseEnter={() => setRdt(true)}
                      onMouseLeave={() => setRdt(false)}
                    />
                    {rdt && (
                      <label style={{ color: "red" }}>
                        date of Requirement
                      </label>
                    )}
                  </div>
                </div>
              </div>
                      
              <div style={{ align: "right" }}>
              
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <button class="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"  htmlType="submit">
                  <i
                    class="fa fa-spinner fa-spin mr-2 d-none"
                    aria-hidden="true"
                  ></i>
                    Submit Request
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
          <div style={{width:'50%',marginTop:'-15%'}} className="wrapWidth">
            <ul class="address-item">
              <li class="w-100 mb-4">
                <img src={tlogo}></img>
              </li>
              <li class="w-100 mb-4 ">
              <img style={{height:'300px',width:'100%'}} src={blood} />
            </li>

              <li class="w-100 mb-4">
                <i class="lni-apartment main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Address</h6>
                  <p style={{color:'black',fontWeight:'bold'}}>
                    Omniscient IT Solutions Pvt Ltd, 4/28, Saraswati Marg, Block
                    4, WEA, Karol Bagh, New Delhi, Delhi 110005
                  </p>
                </div>
              </li>

              <li class="pr-1">
                <i class="lni-comment-reply main-color"></i>
                <div class="content">
                  <h6 class="main-color m-0">Email:</h6>
                  <p >
                    <a style={{color:'black'}} href="mailto:info@omniscientitsolutions.com">
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
                    <a style={{color:'black'}} href="tel:+91-9811027310">+91-9811027310</a>
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

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Contact)
export default Request;
