import React from "react";
export default function Facts() {
  return (
    <section
      id="about"
      class="pt-page pt-page-6 pt-5"
      data-id="about"
      style={{ overflowY: "scroll", display: "block", marginTop: "47px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          {/* <div class="col-6"> */}
          <iframe
            loading="lazy"
            style={{ height: "100vh" }}
            src="https://bloodbankreal.herokuapp.com/htmls/facts.html"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
