import React from "react";
export default function PrivacyPolicy() {
  return (
    <section
      id="privacypolicy"
      // class="pt-page pt-page-6 pt-5"
      className="my_section"
      data-id="privacypolicy"
      // style={{ overflowY: "scroll",marginTop:'-23%' }}
    >
      <div class="container">
        <div class=" align-items-lg-center dot-box">
          <iframe
            loading="lazy"
            style={{ height: "100vh" }}
            src="https://bloodbankreal.herokuapp.com/htmls/privacypolicy.html"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
