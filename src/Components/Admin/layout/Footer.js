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
import footerimg from "./foot.png";
import playstore from "./app.png";
import wanna from "./wanna.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

          {/* Column1 */}
          <div style={{marginLeft:"2%"}} className="col">
          <img src={footerimg} alt="BigCo Inc. logo"/>
            {/* <h4>THICC MEMES INC</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1> */}
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Information</h4><hr></hr>
            <ui className="list-unstyled">
              <li>login</li>
              <li>Career</li>
              <li>Request Quote</li>
              <li>Our portfolio</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>About Company</h4><hr></hr>
            <ui className="list-unstyled">
              <li>Our Milestone</li>
              <li>Purpose</li>
              <li>Core Values</li>
              <li>Why OITSPL</li>
              <li>Testimonial</li>
              <li>Review us</li>
              <h6 style={{color:"black"}}>Download Our App</h6>
              <hr></hr>
              <img style={{height:"30px"}} src={playstore} alt="BigCo Inc. logo"/>
            </ui>
          </div>
          {/* Column4 */}
          <div style={{marginTop:'3%'}} className="col">
          <ui className="list-unstyled">
              <img src={wanna} alt="BigCo Inc. logo"/>
              <li>011-41548185, 25814379</li>
              <li>+91-9811027310</li>
              <h4>info@Omniscient.com</h4>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
        <p style={{ textAlign:"center"}} className="col-sm">
            &copy;{new Date().getFullYear()} Omniscient IT Solutions Pvt Ltd. All rights reserved. Terms and Conditions Privacy Policy Resources
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// import { Layout, Row, Col } from "antd";
// import { HeartFilled } from "@ant-design/icons";

// function Footer() {
//   const { Footer: AntFooter } = Layout;

//   return (
//     <AntFooter style={{ background: "#fafafa" }}>
//       <Row className="just">
//         <Col xs={24} md={12} lg={12}>
//           <div className="copyright">
//             © 2022, made with
//             {<HeartFilled />} by
//             <a className="font-weight-bold" target="_blank">
//               RealCoderZ
//             </a>
//             for a better world.
//           </div>
//         </Col>
//         {/* <Col xs={24} md={12} lg={12}>
//           <div className="footer-menu">
//             <ul>
//               <li className="nav-item">
//                 <a
//                   href="#pablo"
//                   className="nav-link text-muted"
//                   target="_blank"
//                 >
//                   Creative Tim
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="#pablo"
//                   className="nav-link text-muted"
//                   target="_blank"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="#pablo"
//                   className="nav-link text-muted"
//                   target="_blank"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="#pablo"
//                   className="nav-link pe-0 text-muted"
//                   target="_blank"
//                 >
//                   License
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </Col> */}
//       </Row>
//     </AntFooter>
//   );
// }

// export default Footer;
