import React from "react";
export default function ProjectCompleted() {
  return (
    <section
      id="projectcompleted"
      class="pt-page pt-page-6 pt-5"
      data-id="projectcompleted"
      style={{ overflowY: "scroll", display: "block", marginTop: "47px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          <iframe
            style={{ width: "100%", height: "100vh" }}
            src="http://bloodbankreal.herokuapp.com/htmls/projectCompleted.html"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
