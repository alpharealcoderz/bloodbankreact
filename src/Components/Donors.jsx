import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
import "antd/dist/antd.css";
import { api_base_url } from "../Constants";
import axios from "axios";
import "../style.css";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { updateDonorsData } from "../redux/actions/donors";
export const Donors = ({ donorsData, updateDonorsData, canFetchDonors }) => {
  const [data, setData] = useState([]);
  const [permanent, setPermanent] = useState([]);
  const [st, setSt] = useState([]);
  const [distance, setDistance] = useState(0);
  const [district, setDistrict] = useState([]);
  const [ct, setCt] = useState([]);
  const [city, setCity] = useState(
    localStorage.getItem("userDetails") &&
      JSON.parse(localStorage.getItem("userDetails"))
  );
  const [hospitalCity, setHospitalCity] = useState("");
  const bloodType = useSelector((state) => state.donors.bloodType);
  useEffect(() => {
    console.log(donorsData.length);
    if (canFetchDonors) {
      setData(donorsData);
      setPermanent(donorsData);
    } else {
      updateDonorsData();
    }
  }, [donorsData]);
  const [searchObj, setSearchObj] = useState({});
  const [columns, setColumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "sex",
    },
    {
      title: "Blood Type",
      dataIndex: "blood_type",
      key: "blood_type",
    },
    {
      title: "No of times donated",
      dataIndex: "no_times_do",
      key: "no_times_do",
    },
    {
      title: "Last donation date",
      dataIndex: "last_do_date",
      key: "last_do_date",
    },
    {
      title: "Last donation place",
      dataIndex: "last_do_place",
      key: "last_do_place",
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
      title: "time of contact",
      dataIndex: "convt_time_int",
      key: "convt_time_int",
    },
    {
      title: "Availability",
      dataIndex: "",
      key: "",
      render: (text, record) =>
      (<>{record.do_av_blood=="BLOOD"&&'blood,'}
      {record.do_av_sdp=="SDP"&&'sdp,'}
      {record.do_av_ffp=="FFP"&&'ffp,'}
      {record.do_av_rdp=="RDP"&&'rdp,'}
      {record.do_av_wbc=="WBC"&&'wbc'}
  </>
    ),
    },
    {
      title: "Distance",
      dataIndex: "hospital_state",
      key: "hospital_state",

      render: (text, record) =>
        distance == 0 && (
          <Button
            type="danger"
            onClick={() => {
              getDistance(record.city);
            }}
            style={{ marginLeft: "10px" }}
          >
            Get Distance
          </Button>
        ),
    },
  ]);
  const getDistance = (record) => {
    fetch(
      `https://www.mapquestapi.com/directions/v2/route?key=AXj4OC6T2gtJyy0WDsu9pI0PGHlqFhPA&from=${city.city}&to=${record}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDistance(data.route.distance * 1.60934);
        setHospitalCity(record);
      });
  };
  const handleStateChange = (e) => {
    axios
      .post(api_base_url + "/getAllDistrictByStates", {
        state_id: e.target.value,
      })
      .then((res) => setDistrict(res.data));
  };
  const handleDistrictChange = (e) => {
    axios
      .post(api_base_url + "/getAllCityByDistrict", {
        districtid: e.target.value,
      })
      .then((res) => setCt(res.data));
  };
  useEffect(() => {
    axios.post(api_base_url + "/getAllStates").then((res) => {
      const st = res.data;
      setSt(st);
    });
  }, []);
  const search = async () => {
    console.log("saransh", searchObj);
    let temp = [...permanent];
    if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("district") &&
      searchObj.hasOwnProperty("city") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.state == searchObj.state &&
          el.district == searchObj.district &&
          el.city == searchObj.city &&
          el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("district") &&
      searchObj.hasOwnProperty("city")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.state == searchObj.state &&
          el.district == searchObj.district &&
          el.city == searchObj.city
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("district") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.state == searchObj.state &&
          el.district == searchObj.district &&
          el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("city") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.state == searchObj.state &&
          el.city == searchObj.city &&
          el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("district") &&
      searchObj.hasOwnProperty("city") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.district == searchObj.district &&
          el.city == searchObj.city &&
          el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("district")
    ) {
      let temp1 = temp.filter((el) => {
        return el.state == searchObj.state && el.district == searchObj.district;
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("city")
    ) {
      let temp1 = temp.filter((el) => {
        return el.state == searchObj.state && el.city == searchObj.city;
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("state") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.state == searchObj.state && el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("district") &&
      searchObj.hasOwnProperty("city")
    ) {
      let temp1 = temp.filter((el) => {
        return el.district == searchObj.district && el.city == searchObj.city;
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("district") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.district == searchObj.district &&
          el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (
      searchObj.hasOwnProperty("city") &&
      searchObj.hasOwnProperty("blood_type")
    ) {
      let temp1 = temp.filter((el) => {
        return (
          el.city == searchObj.city && el.blood_type == searchObj.blood_type
        );
      });

      setData(temp1);
    } else if (searchObj.hasOwnProperty("city")) {
      let temp1 = temp.filter((el) => {
        return el.city == searchObj.city;
      });

      setData(temp1);
    } else if (searchObj.hasOwnProperty("blood_type")) {
      let temp1 = temp.filter((el) => {
        return el.blood_type == searchObj.blood_type;
      });

      setData(temp1);
    } else if (searchObj.hasOwnProperty("state")) {
      let temp1 = temp.filter((el) => {
        return el.state == searchObj.state;
      });

      setData(temp1);
    } else if (searchObj.hasOwnProperty("district")) {
      let temp1 = temp.filter((el) => {
        return el.district == searchObj.district;
      });

      setData(temp1);
    }
  };
  const handleStateFilter = (e) => {
    // const temp = data.filter(el=>{return el.st==e.target.name} )
    let name = document.getElementsByName(e.target.value + "state")[0]
      .innerText;

    setSearchObj({ ...searchObj, state: name });

    // setData(temp)
  };
  const handleDistrictFilter = (e) => {
    // const temp = data.filter(el=>{return el.st==e.target.name} )
    let name = document.getElementsByName(e.target.value + "district")[0]
      .innerText;

    setSearchObj({ ...searchObj, district: name });
    // setData(temp)
  };
  const handleCityFilter = (e) => {
    // const temp = data.filter(el=>{return el.st==e.target.name} )
    let name = document.getElementsByName(e.target.value + "city")[0].innerText;

    setSearchObj({ ...searchObj, city: name });

    // setData(temp)
  };

  const handleBloodFilter = (e) => {
    //   const temp = data.filter(el=>{return el.blood_type==e.target.value})
    // setData(temp)
    searchObj.blood_type = e.target.value;
    setSearchObj({ ...searchObj, blood_type: e.target.value });
  };
  return (
    <section
      id="donors"
      class="pt-page pt-page-6 pt-5"
      data-id="donors"
      style={{ overflow:'scroll', paddingTop: "67px",minHeight:'1500px' ,display:'block'}}
    >
      <div class="container mt-4" id='content'>
        <div class=" align-items-lg-center dot-box">
          
          {/* <div class="col-6"> */}
          <div class="heading-area">
            <h2 class="title">Donor's Data</h2>
            <h6 class="sub-title main-color">Omniscient BloodBank</h6>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <div>Select State</div>
              <select
                class="form-control"
                name="st"
                onChange={(e) => {
                  handleStateChange(e);
                  handleStateFilter(e);
                }}
                value={localStorage.getItem('state')}
              >
                
                <option>All</option>;
                {st.map((stt) => {
                  return (
                    <option value={stt.state_id} name={stt.state_id + "state"}>
                      {stt.state_title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <div>Select District</div>
              <select
                class="form-control"
                name="District"
                onChange={(e) => {
                  handleDistrictChange(e);
                  handleDistrictFilter(e);
                }}
              >
                       {localStorage.getItem('district')&&         <option selected disabled>{localStorage.getItem('district')}</option>}
                <option>All</option>;
                {district.map((dt) => {
                  return (
                    <option
                      name={dt.districtid + "district"}
                      value={dt.districtid}
                    >
                      {dt.district_title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <div>Select City</div>
              <select
                class="form-control"
                name="city"
                onChange={(e) => {
                  handleCityFilter(e);
                }}

              >    {localStorage.getItem('city')&& <option selected disabled>{localStorage.getItem('city')}</option>}
               
                <option>All</option>;
                {ct.map((ctt) => {
                  return (
                    <option name={ctt.id + "city"} value={ctt.id}>
                      {ctt.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div>Select Blood Type</div>
              <select
                class="form-control"
                name="blood_type"
                onChange={(e) => {
                  handleBloodFilter(e);
                }}
                value={localStorage.getItem('blood_type')}
              >
                <option>All</option>;
                {bloodType.map((st) => {
                  return <option>{st}</option>;
                })}
              </select>
            </div>
            <div>
              <div></div>{" "}
              <Button
                style={{ marginTop: "20px", marginLeft: "20px" }}
                type="danger"
                onClick={search}
              >
                {" "}
                Search
              </Button>
            </div>
          </div>
          <Table dataSource={data} columns={columns} scroll={{ x: 600 }} />;
        </div>
      </div>
      <Modal
        title="Distance"
        visible={distance != 0}
        onOk={() => setDistance(0)}
        onCancel={() => setDistance(0)}
      >
        Your Distance From Your city {city?.city} to Hospital City
        {hospitalCity} is {distance} km
      </Modal>
    </section>
  );
};

const mapStateToProps = (state) => ({
  donorsData: state.donors.donorsData,
  canFetchDonors: state.donors.canFetchDonors,
});

const mapDispatchToProps = { updateDonorsData };

export default connect(mapStateToProps, mapDispatchToProps)(Donors);
