import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllFeed } from "../../../redux/actions/feed";
import { Table, Modal, Button } from "antd";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
export const Feed = ({ feeds }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.feeds.feedData);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(getAllFeed());
  }, []);

  const [columns, setColumns] = useState([
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Delete",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <div style={{ display: "flex" }}>
          <span
            onClick={(e) => {
              onDelete(record.id, e);
            }}
            style={{ marginRight: "20px" }}
          >
            <DeleteOutlined />
          </span>
          <span
            onClick={(e) => {
              onDelete(record.id, e);
            }}
          >
            <EditOutlined />
          </span>
        </div>
      ),
    },
  ]);
  const onDelete = (id) => {
    // console.log({ id: id });
    // deleteUser({ id: id });
  };
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: 0,
    age: 0,
    gender: "male",
    address: "",
    city: "",
    state: "",
    password: "",
    blood_type: "",
  });
  const handleDetails = (e) => {
    let object = {};
    object[e.target.name] = e.target.value;
    setDetails({ ...details, ...object });
  };
  const addNew = (e) => {
    e.preventDefault();
    console.log("saransh", details);
    // registerDonor(details);
  };
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add New Feed
      </Button>
      <Modal
        title="Add New User"
        visible={visible}
        onOk={(e) => addNew(e)}
        onCancel={() => setVisible(false)}
      ></Modal>
      <Table dataSource={data} columns={columns} scroll={{ x: 400 }} />;
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    feeds: state.users,
  };
};

const mapDispatchToProps = {};
export default Feed;
// export default connect(mapStateToProps)(Feed);
