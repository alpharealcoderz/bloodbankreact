import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Components/Login";
import SideNavigation from "./Components/Navigation/SideNavigation";
import TopNavigation from "./Components/Navigation/TopNavigation";
import PreLoader from "./Components/PreLoader";
import Donate from "./Components/Sections/Donate";
import Clients from "./Components/Sections/Clients";
import Request from "./Components/Sections/Request";
import Home from "./Components/Sections/Home";
import Achievements from "./Components/Sections/Achievements";
import AboutUs from "./Components/Sections/AboutUs";
import Facts from "./Components/Sections/Facts";
import FAQ from "./Components/Sections/FAQ";
import Donors from "./Components/Donors";
import { getBloodType, getAllStates } from "./redux/actions/constants";
import Profile from "./Components/Sections/Profile";
import AllRequest from "./Components/AllRequest";
import Presscoverage from "./Components/Sections/Presscoverage";
import ProjectCompleted from "./Components/Sections/ProjectCompleted";
import ProjectInprocess from "./Components/Sections/ProjectInprocess";
import Contributions from "./Components/Sections/Contributions";
import VisionMission from "./Components/Sections/VisionMission";
import PrivacyPolicy from "./Components/Sections/PrivacyPolicy";
import Register from "./Components/Sections/Register";
export const Theme = ({ getBloodType, getAllStates }) => {
  useEffect(() => {
    getBloodType();
    getAllStates();
  }, []);
  const toggler = [
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      key={0}
    >
      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
    </svg>,
  ];
  return (
    <div>
      <PreLoader />
      <header
        //  class="header-left"
        id="header-left"
      >
        <a class="logo" href="#home">
          <h1 class="logo-text">
            {/* <img style={{ borderRadius: "50%" }} src="/logo.png" alt="logo" />{" "} */}
            {/* {toggler} */}
          </h1>
        </a>

        <SideNavigation />
        <TopNavigation />
      </header>

      <div class="main-left leftActive" id="main">
        <div class="pt-wrapper">
          <div class="subpages">
            <Home />
            <Donate />
            <Achievements />
            <Clients />
            <Request />
            <Login />
            <AboutUs />
            <Donate />
            <Facts />
            <FAQ />
            <Profile />
            <Donors />
            <AllRequest />
            <Contributions />
            <VisionMission />
            <Presscoverage />
            <ProjectCompleted />
            <ProjectInprocess />
            <PrivacyPolicy />
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getBloodType,
  getAllStates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);

// export default Theme;
