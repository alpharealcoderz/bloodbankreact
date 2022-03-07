import React from "react";
export default function Contributions() {
  return (
    <section
      id="contributions"
      class="pt-page pt-page-6 pt-5"
      data-id="contributions"
      style={{ overflowY: "scroll", display: "block", paddingTop: "67px" }}
    >
      <div style={{marginTop:'5%'}} class="container">
        <div class=" align-items-lg-center dot-box">
          <iframe
            loading="lazy"
            style={{ height: "100vh" }}
            src="https://bloodbankreal.herokuapp.com/htmls/contribution.html"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
