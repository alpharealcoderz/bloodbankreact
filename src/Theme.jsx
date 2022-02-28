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
export const Theme = ({ getBloodType, getAllStates }) => {
  useEffect(() => {
    getBloodType();
    getAllStates();
  }, []);

  return (
    <div>
      <PreLoader />
      <header class="header-left">
        <a class="logo" href="#home">
          <h1 class="logo-text">
            <img style={{ borderRadius: "50%" }} src="/logo.png" alt="logo" />
          </h1>
        </a>

        <SideNavigation />
      </header>

      <div class="main-left" id="main">
        <div class="pt-wrapper">
          <div class="subpages">
            <TopNavigation />
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
