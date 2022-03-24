import React from "react";
export default function ProjectInprocess() {
  return (
    <section
      id="projectinprocess"
      // class="pt-page pt-page-6 pt-5"
      className="my_section"
      data-id="projectinprocess"
      // style={{ overflowY: "scroll", display: "block", paddingTop: "67px" }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          <iframe
            loading="lazy"
            style={{ height: "100vh" }}
            src="https://bloodbankreal.herokuapp.com/htmls/projectInprocess.html"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
