import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";
import "../style.css";
import axios from "axios";
import { api_base_url } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequest } from "../redux/actions/request";

export const AllRequest = () => {
  const dispatch = useDispatch();
  const [permanent, setPermanent] = useState([]);
  const [searchObj, setSearchObj] = useState({});
  const requestData = useSelector((state) => state.requests.requestData);
  const bloodType = useSelector((state) => state.donors.bloodType);
  const [st, setSt] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ct, setCt] = useState([]);
  const [data, setData] = useState(requestData);
  useEffect(() => {
    dispatch(getAllRequest());
  }, []);
  useEffect(() => {
    setData(requestData);
    setPermanent(requestData);
  }, [requestData]);
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
      id="allRequest"
      class="pt-page pt-page-6 pt-5"
      data-id="allRequest"
      style={{ overflowY: "scroll", display: "block", paddingTop: "67px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          {/* <div class="col-6"> */}
          <div class="heading-area">
            <h2 class="title">All Request</h2>
            <h6 class="sub-title main-color">Omniscient BloodBank</h6>
          </div>
          {/* <div style={{ display: "flex" }}>
            <div>
              <div>Select State</div>
              <select
                class="form-control"
                name="st"
                onChange={(e) => {
                  handleStateChange(e);
                  handleStateFilter(e);
                }}
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
              >
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
              >
                <option>All</option>;
                {bloodType.map((st) => {
                  return <option>{st}</option>;
                })}
              </select>
            </div>
            <div>
              <div></div>{" "}
              <Button type="primary" onClick={search}>
                {" "}
                Search
              </Button>
            </div>
          </div> */}
          <Table dataSource={data} columns={columns} scroll={{ x: 400 }} />;
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AllRequest;
