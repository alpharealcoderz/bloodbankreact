import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";
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
  const [city, setCity] = useState(
    localStorage.getItem("userDetails") &&
      JSON.parse(localStorage.getItem("userDetails"))
  );
  const [hospitalCity, setHospitalCity] = useState("");
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    dispatch(getAllRequest());
  }, []);
  useEffect(() => {
    setData(requestData);
    setPermanent(requestData);
  }, [requestData]);
  useEffect(() => {
    console.log("distance", distance);
  }, [distance]);

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
    {
      title: "Distance",
      dataIndex: "hospital_state",
      key: "hospital_state",

      render: (text, record) =>
        distance == 0 && (
          <Button
            type="danger"
            onClick={() => {
              getDistance(record.hospital_city);
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
      id="allRequest"
      class="pt-page pt-page-6 pt-5"
      data-id="allRequest"
      style={{
        // overflowY: "scroll",
        display: "block",
        paddingTop: "67px",
      }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          {/* <div class="col-6"> */}
          <div class="heading-area">
            <h2 class="title">All Request</h2>
            <h6 class="sub-title main-color">Omniscient BloodBank</h6>
          </div>
          <Table
            style={{ width: "100vw" }}
            dataSource={data}
            columns={columns}
            scroll={{ x: 600 }}
          />
          ;
        </div>
      </div>
      <Modal
        title="Add New User"
        visible={distance != 0}
        onOk={() => setDistance(0)}
        onCancel={() => setDistance(0)}
      >
        Your Distance From Your city {city?.city} to Hospital City{" "}
        {hospitalCity} is {distance} km
      </Modal>
    </section>
  );
};

export default AllRequest;
