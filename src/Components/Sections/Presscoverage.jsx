import React from "react";
import { Carousel } from "antd";
import img1 from "./press/img1.jpeg";
import img2 from "./press/img2.jpeg";
import img3 from "./press/img3.jpeg";
import img4 from "./press/img4.jpeg";
import img5 from "./press/img5.jpeg";
import img6 from "./press/img6.jpeg";
import img7 from "./press/img7.jpeg";
import img8 from "./press/img8.jpeg";
import img9 from "./press/img9.jpeg";
import img10 from "./press/img10.jpeg";
import img11 from "./press/img11.jpeg";
import img12 from "./press/img12.jpeg";
import img13 from "./press/img13.jpeg";
import img14 from "./press/img15.jpeg";
import img15 from "./press/img15.jpeg";
export default function Presscoverage() {
  const contentStyle = {
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    width: "100%",
    background: "#364d79",
    // marginLeft: "25%",
   
  };
  const headstyle ={
    borderStyle: "solid",
    borderColor: "rgb(237, 45, 52)",
    marginTop:'0%',
  }
  return (
    <section
      id="visionmission"
      class="pt-page pt-page-6 pt-5"
      data-id="visionmission"
      style={{ overflowY: "scroll", display: "block", paddingTop: "67px" }}
    >
      <div  class="container">
        <div class=" align-items-lg-center dot-box">
          <div style={headstyle}>
            <Carousel autoplay>
              {/* <div >
              <img style={contentStyle} height='50px' width='600px' src={img5}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img6}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img10}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img7}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img1}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img2}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img3}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img4}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img8}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img9}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img11}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img12}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img13}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img14}></img>
              </div>
              <div>
              <img style={contentStyle} height='50px' width='600px' src={img15}></img>
              </div> */}
            <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                    <img style={contentStyle} height='50px' width='600px' src={img5}></img>
                  </div>
                  <div class="col-6 " >
                    <img style={contentStyle} height='50px' width='600px' src={img6}></img>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                  <img style={contentStyle} height='50px' width='600px' src={img8}></img>
                 
                    
                  </div>
                  <div class="col-6 " >
                  <img style={contentStyle} height='50px' width='600px' src={img9}></img>
                   
                  </div>
                </div>
              </div> 
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                  <img style={contentStyle} height='50px' width='600px' src={img10}></img>
                  </div>
                  <div class="col-6 ">
                  <img style={contentStyle} height='50px' width='600px' src={img7}></img>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                    <img style={contentStyle} height='50px' width='600px' src={img1}></img>
                  </div>
                  <div class="col-6 " >
                    <img style={contentStyle} height='50px' width='600px' src={img2}></img>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                    <img style={contentStyle} height='50px' width='600px' src={img3}></img>
                  </div>
                  <div class="col-6 " >
                    <img style={contentStyle} height='50px' width='600px' src={img4}></img>
                  </div>
                </div>
              </div>                        
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                    <img style={contentStyle} height='50px' width='600px' src={img11}></img>
                  </div>
                  <div class="col-6 " >
                    <img style={contentStyle} height='50px' width='600px' src={img12}></img>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                    <img style={contentStyle} height='50px' width='600px' src={img13}></img>
                  </div>
                  <div class="col-6 " >
                    <img style={contentStyle} height='50px' width='600px' src={img14}></img>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 row">
                  <div class="col-6">
                    <img style={contentStyle} height='50px' width='600px' src={img15}></img>
                  </div>
                  <div class="col-6 " >
                    <img style={contentStyle} height='50px' width='600px' src={img6}></img>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <iframe
            loading="lazy"
            style={{ height: "100vh" }}
            src="https://bloodbankreal.herokuapp.com/htmls/presscoverage.html"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
