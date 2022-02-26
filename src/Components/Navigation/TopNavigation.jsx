import React from "react";
import { connect } from "react-redux";
import { updateDonorsData } from "../../redux/actions/donors";
export const TopNavigation = ({ updateDonorsData }) => {
  return (
    <div
      id="topNavigation"
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        // backgroundColor: "#ed2d34",
        justifyContent: "center",
        width: "100%",
        zIndex: 1000,
        height: "47px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ed2d34",
          width: "calc(100% - 1050px)",
          overflow: "hidden",
        }}
      ></div>
      <div>
        <a
          data-animation="58"
          data-goto="8"
          href="#donate"
          class="btn btn-large btn-green topNavHover"
          style={{ color: "white", zIndex: 100000 }}
        >
          Donate Blood
        </a>
      </div>
      <div>
        <a
          data-animation="61"
          data-goto="5"
          href="#request"
          class="btn btn-large btn-green  "
          style={{ color: "white", zIndex: "1000" }}
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
          style={{ color: "white", zIndex: "1000" }}
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
          style={{ color: "white", zIndex: "1000" }}
          onClick={() => updateDonorsData()}
        >
          All Request
        </a>
      </div>
      {localStorage.getItem("token") == null ? (
        <div>
          <a
            data-animation="61"
            data-goto="6"
            href="#login"
            class="btn btn-large btn-green  "
            style={{ color: "white", zIndex: "1000" }}
          >
            Login
          </a>
        </div>
      ) : (
        <div>
          <a
            data-animation="61"
            data-goto="6"
            href="#profile"
            class="btn btn-large btn-green  "
            style={{ color: "white", zIndex: "1000" }}
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
