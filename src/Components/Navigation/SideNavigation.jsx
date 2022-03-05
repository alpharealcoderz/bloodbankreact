import { hover } from "@testing-library/user-event/dist/hover";
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
          <div style={{ height: "50px", backgroundColor: "white" }}></div>
          <li className="mt-2">
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
              <div style={{marginLeft:'10px'}} class="row ">
               <i style={{color:'white'}} class="fa fa-home hov" aria-hidden="true"></i> 
              <span className="ml-2"> Home</span>
              </div>
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
              data-goto="2"
              href="#donate"
            >
              <span className="ml-2"> Donate Now</span>
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
             <div style={{marginLeft:'10px'}} className="row">
             <i style={{color:'white'}} class="fa fa-trophy" aria-hidden="true"></i>
             <span className="ml-2">Achivements</span>
               </div>
              
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
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-users" aria-hidden="true"></i>
              <span className="ml-2">Our Volunteer</span>
                </div>
              
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
              <span className="ml-2">Request Donation Now</span>
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
              data-goto="6"
              href="#about"
            >
              <div style={{marginLeft:'10px'}} class="row" >
              <i style={{color:'white'}} class="fa fa-globe" aria-hidden="true"></i>
              <span className="ml-2"> About Us</span>
              </div>
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
              data-goto="7"
              href="#facts"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-lightbulb-o" aria-hidden="true"></i>
              <span className="ml-2">Facts</span>
                </div>
              
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
              data-goto="8"
              href="#faq"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-question" aria-hidden="true"></i>
              <span className="ml-2">Who Can Donate</span>
                </div>
              
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
              data-goto="9"
              href="#donors"
            >
              <span className="ml-2">All Donors</span>
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
              data-goto="10"
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
              data-goto="11"
              href="#contributions"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:"white"}} class="fa fa-handshake-o" aria-hidden="true"></i>
              <span className="ml-2">Contributions</span>
                </div>
              
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
              data-goto="12"
              href="#visionmission"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:"white"}} class="fa fa-diamond" aria-hidden="true"></i>
              <span className="ml-2">Vision Mission</span>
                </div>             
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
              href="#presscoverage"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-newspaper-o" aria-hidden="true"></i>
              <span className="ml-2">Press Coverage</span>
                </div>        
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
              href="#projectcompleted"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-bar-chart" aria-hidden="true"></i>
              <span className="ml-2">Project Completed</span>
                </div>             
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
              href="#projectinprocess"
            >
               <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-bar-chart" aria-hidden="true"></i>
              <span className="ml-2">Project In Process </span>
              </div>
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
              href="#privacypolicy"
            >
              <div style={{marginLeft:'10px'}} className="row">
              <i style={{color:'white'}} class="fa fa-user-secret" aria-hidden="true"></i>
              <span className="ml-2">Privacy Policy</span>
                </div>
              
            </a>
          </li>
          {localStorage.getItem("token") !== null ? (  <li>
            <a
              class="btn btn-large btn-green "
              style={{display:'none'}}
              data-animation="61"
              data-goto="17"
              href="#profile"
            >
              <span>Profile</span>
            </a>
          </li>):( <>  <li>
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
                display:'none'
              }}
              data-animation="61"
              data-goto="17"
              href="#login"
            >
              <span>Login</span>
            </a>
          </li>
          <li >
            <a
              class="btn btn-large btn-green "
              style={{
                color: "white",
                zIndex: "1000",
                fontSize: "12px",
                padding: "10px",
                display:'none'
              }}
              data-animation="61"
              data-goto="18"
              href="#donate"
            >
              <span>Register</span>
            </a>
          </li></>)}
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
