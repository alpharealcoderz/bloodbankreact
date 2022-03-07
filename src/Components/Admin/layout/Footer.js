/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import "./Footer.css";
import playstore from "./app.png";
import apple from "./apple.png";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        {/* <div className="row">
          <div style={{ textAlign:"center"}} className="col ">
          <div style={{marginBottom:'-10px'}} className="mt-5 ">
            <i style={{width:'30px',height:'30px'}} class="lni lni-facebook-filled mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-whatsapp mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-twitter mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-linkedin mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-instagram-original mr-2"></i>
            <img style={{width:'55px',borderRadius:'5px'}} src={playstore}></img> <img style={{width:'55px',borderRadius:'5px'}} src={apple}></img>
            </div>
          </div>
          
        </div>
        <hr /> */}
        <div style={{height:"70px"}} className="row col-sm p-4">
        <p style={{ marginLeft:'25px', textAlign:"center", fontSize:'17px'}} >
          Copyright  &copy;{new Date().getFullYear()} Design and Develop Maintenance by Omniscient IT Solutions P(Ltd).
        </p>
          <a  href="#privacypolicy" style={{ color:"White",marginLeft:'25px' , fontSize:'17px' }}>PRIVACY POLICY</a>
          {/* <a href="#privacypolicy"  style={{color:"White", marginLeft:'25px' , fontSize:'17px' }}>TERMS OF USE</a> */}
          <img className="mt-1" style={{width:'55px',borderRadius:'5px', marginLeft:'25px',height:'17px'}} src={playstore}></img> <img className="mt-1" style={{width:'55px',borderRadius:'5px', marginLeft:'25px',height:'17px'}} src={apple}></img>

        </div>
      </div>
    </div>
  );
}

export default Footer;

