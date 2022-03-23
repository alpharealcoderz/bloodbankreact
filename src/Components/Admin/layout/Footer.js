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
       <div className="col-12 row p-3">
         <div className="col-4">
            <h6>information</h6><hr />
             <li>Login</li>
             <li>Career</li>
             <li>Request Quote</li>
             <li>Contact us</li>
         </div>
         <div className="col-4">
            <h6>About company</h6><hr />
             <li>Our Milestone</li>
             <li>Purpose</li>
             <li>Core Values</li>
             <li>Review us</li>
         </div>
         <div className="col-4 ">
            <h6>Download our app</h6><hr />
            <img className="mt-1" style={{width:'55px',borderRadius:'5px', marginLeft:'25px',height:'17px'}} src={playstore}></img><br />
            <img className="mt-1" style={{width:'55px',borderRadius:'5px', marginLeft:'25px',height:'17px'}} src={apple}></img>
         </div>
       </div>
      </div>
    </div>
  );
}

export default Footer;

