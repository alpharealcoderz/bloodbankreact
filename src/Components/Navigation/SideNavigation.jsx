import React from "react";
import styled from "styled-components";
export default function SideNavigation() {
  const toggleNav = () => {
    // document.getElementById("navToggle").classList.toggle("active");
    document.getElementById("topNavigation").classList.toggle("active");
  };

  return (
    <StyledNav>
      <div
        onClick={() => toggleNav()}
        class="sidemenu_btn"
        id="sidemenu_toggle"
      ></div>{" "}
      <div class="site-nav navbarActive" id="navToggle">
        <ul class="site-main-menu alt-font" id="nav">
          <div style={{ height: "150px", backgroundColor: "white" }}></div>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="58"
              data-goto="1"
              href="#home"
            >
              <span>Home</span>
            </a>
          </li>

          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="58"
              data-goto="7"
              href="#about"
            >
              <span>About Us</span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="59"
              data-goto="8"
              href="#donate"
            >
              <span>Donate Now</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="3"
              href="#achievements"
            >
              <span>Achivements</span>
            </a>
          </li>

          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="58"
              data-goto="4"
              href="#clients"
            >
              <span>Our Volunteer</span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="5"
              href="#request"
            >
              <span>Request Donation Now</span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="6"
              href="#login"
            >
              <span>Login</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="9"
              href="#facts"
            >
              <span>Facts</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="10"
              href="#faq"
            >
              <span>
                Who Can/
                <br />
                Can't Donate
              </span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="11"
              href="#donors"
            >
              <span>All Donors</span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="19"
              href="#register"
            >
              <span>Register</span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="11"
              href="#donors"
            >
              <span>All Donors</span>
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="12"
              href="#allRequest"
            >
              <span>All Request</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="13"
              href="#contributions"
            >
              <span>Contributions</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="14"
              href="#visionmission"
            >
              <span>Vision Mission</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="15"
              href="#presscoverage"
            >
              <span>
                Press <br />
                Coverage{" "}
              </span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="16"
              href="#projectcompleted"
            >
              <span>
                Project <br />
                Completed
              </span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="17"
              href="#projectinprocess"
            >
              <span>
                Project In
                <br /> Process{" "}
              </span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
              }}
              data-animation="61"
              data-goto="18"
              href="#privacypolicy"
            >
              <span>Privacy Policy</span>
            </a>
          </li>
          <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
                display: "none",
              }}
              data-animation="61"
              data-goto="11"
              href="#profile"
            >
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  .flex {
    display: flex;
  }
`;
