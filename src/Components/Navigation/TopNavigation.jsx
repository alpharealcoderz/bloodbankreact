import React from "react";
import { connect } from "react-redux";
import { updateDonorsData } from "../../redux/actions/donors";
export const TopNavigation = ({ updateDonorsData }) => {
  const toggle = () => {
    document
      .getElementsByClassName("site-nav")[0]
      .classList.toggle("navbarActive");
    document
      .getElementsByClassName("main-left")[0]
      .classList.toggle("leftActive");
    document.getElementById("header-left").classList.toggle("header-left");
  };
  const toggler = [
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      key={0}
      onClick={toggle}
    >
      <path
        fill="white"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      ></path>
    </svg>,
  ];
  return (
    <div
      id="topNavigation"
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        justifyContent: "center",
        width: "100%",
        zIndex: 1000,
        height: "53px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ed2d34",
          width: "calc(100% - 1050px)",
          overflow: "hidden",
        }}
      >
        <a class="logo" style={{ marginLeft: "93px" }}>
          <h1 class="logo-text">
            <a href="#home">
              {" "}
              <img style={{ borderRadius: "50%" }} src="/logo.png" alt="logo" />
            </a>{" "}
            <span style={{ marginLeft: "20px", color: "white" }}>
              {toggler}
            </span>
          </h1>
        </a>
      </div>

      <div>
        <a
          data-animation="61"
          data-goto="5"
          href="#request"
          class="btn btn-large btn-green  "
          style={{ color: "white", height: "53px" }}
        >
          Request Blood
        </a>
      </div>
      <div>
        <a
          data-animation="61"
          data-goto="12"
          href="#donors"
          class="btn btn-large btn-green  "
          style={{ color: "white", height: "53px" }}
          onClick={() => updateDonorsData()}
        >
          All Donors
        </a>
      </div>
      <div>
        <a
          data-animation="61"
          data-goto="11"
          href="#allRequest"
          class="btn btn-large btn-green  "
          style={{ color: "white", height: "53px" }}
          onClick={() => updateDonorsData()}
        >
          All Request
        </a>
      </div>
      {localStorage.getItem("token") == null ? (
        <>
          {" "}
          <div>
            <a
              data-animation="61"
              data-goto="6"
              href="#login"
              class="btn btn-large btn-green  "
              style={{ color: "white", height: "53px" }}
            >
              Login
            </a>
          </div>
          <div>
        <a
          data-animation="58"
          data-goto="8"
          href="#donate"
          class="btn btn-large btn-green topNavHover"
          style={{
            color: "white",
            height: "53px",
            textAlign: "center",
          }}
        >
          Register
        </a>
      </div>

          {/* <div>
            <a
              data-animation="61"
              data-goto="18"
              href="#register"
              class="btn btn-large btn-green  "
              style={{ color: "white", height: "53px" }}
            >
              Register
            </a>
          </div> */}
        </>
      ) : (
        <div>
          <a
            data-animation="61"
            data-goto="11"
            href="#profile"
            class="btn btn-large btn-green  "
            style={{ color: "white", height: "53px" }}
          >
            Profile
          </a>
        </div>
      )}
      <div
        style={{
          backgroundColor: "#ed2d34",
          width: "calc(100% - 912px)",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { updateDonorsData };

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
