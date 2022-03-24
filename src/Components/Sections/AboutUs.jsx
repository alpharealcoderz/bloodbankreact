import { Tag } from "antd";
import React from "react";
export default function AboutUs() {
  return (
    <section
      id="about"
      // class="pt-page pt-page-6 pt-5"
      className="my_section"
      data-id="about"
      style={{  display: "block" }}
    >
      <div style={{marginTop:'2%'}} class="container">
        {/* <div class=" align-items-lg-center dot-box">
          <iframe
            loading="lazy"
            style={{ height: "100vh" }}
            src="https://bloodbankreal.herokuapp.com/htmls/aboutus.html"
            // color="#4c6d8f "
          />
        </div> */}
        <h2 style={{textAlign:"center",color:"#4c6d8f",fontFamily:"lato"}}><Tag color="red" style={{border:"none",fontSize:"36px"}}>About Us</Tag></h2>
        <p style={{fontWeight:500,fontFamily:"lato"}}>
          Have you at anytime witnessed a relative of yours or a close friend searching frantically for a blood donor, when blood banks say out of stock, the donors in mind are out of reach and the time keeps ticking? Have you witnessed loss of life for the only reason that a donor was not available at the most needed hour? Is it something that we as a society can do nothing to prevent? This thought laid our foundation.
          <br/>
          <br/>

"Friends2support" is an organization that brings voluntary blood donors and those in need of blood on to a common platform.  Through this website, we seek donors who are willing to donate blood, as well as provide the timeliest support to those in frantic need of it.
<br/>
<br/>

Started in the year 2005, on 14th Nov, in a small room with just 100 voluntary donors but with the zeal to serve our society, to inspire and spread the word, we dream to fulfill 100% blood need in India.
<br/>
<br/>

Our mission is to fulfill every blood request in the country with a promising web portal and motivated individuals who are willing to donate blood.
<br/>
<br/>
Our vision is to be “The hope of every Indian in search of a voluntary blood donor”
<br/>
<br/>
Our motto - “Donate blood to save the most precious human life”
<br/>
<br/>
To be a donor, Click here.
<br/>
<br/>

To search for a donor in your area, Click here.
<br/>
<br/>

"Friends2support" also works to provide educational support to brilliant students who have discontinued their studies because of unfortunate circumstances.
<br/>
<br/>
To know about “Support student education” and about “Present a Cycle to Merit Student” programmes, Click here
<br/>
<br/>
To let us know about the students who need help in continuing their education, Click here.
</p>
      </div>
      {/* </div> */}
    </section>
  );
}
