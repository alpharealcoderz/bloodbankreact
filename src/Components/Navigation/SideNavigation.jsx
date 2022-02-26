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
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="site-nav" id="navToggle">
        <ul class="site-main-menu alt-font" id="nav">
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
              href="#services"
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
              <span>FAQ</span>
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
