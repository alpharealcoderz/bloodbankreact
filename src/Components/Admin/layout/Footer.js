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
import apple from "./apple.png";
import wanna from "./wanna.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column2 */}
          <div style={{ textAlign:"center"}} className="col ">
          <div className="mt-5">
            <i style={{width:'30px',height:'30px'}} class="lni lni-facebook-filled mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-whatsapp mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-twitter mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-linkedin mr-2"></i>
            <i style={{width:'30px',height:'30px'}}class="lni lni-instagram-original mr-2"></i>
            <img style={{width:'55px'}} src={playstore}></img> <img style={{width:'55px'}} src={apple}></img>
            </div>
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