import React from "react";

export default function Achivements() {
  return (
    <section
      id="achievements"
      // class="pt-page pt-page-3"
      className="my_section"
      data-id="achievements"
      style={{  }}
    >
      {/* <div class="container mt-5">
        <div class="align-items-lg-center">
          <div class="row">
            <div class="col-5 pr-5">
              <div class="heading-area">
                <h6 class="sub-title main-color">45+ Year Of Experience</h6>
                <h2 class="title">Our Achievements</h2>
              </div>

              <ul class="services-skill text-left">
                <li class="progress-item">
                  <h6>
                    Units Donated
                    <span class="float-right">
                      <b class="count">433</b>
                    </span>
                  </h6>
                  <div class="progress">
                    <span
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></span>
                  </div>
                </li>

                <li class="progress-item">
                  <h6>
                    Total Donors
                    <span class="float-right">
                      <b class="count">380</b>
                    </span>
                  </h6>
                  <div class="progress">
                    <span
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></span>
                  </div>
                </li>
                <li class="progress-item">
                  <h6>
                    Lives Saved
                    <span class="float-right">
                      <b class="count">271</b>
                    </span>
                  </h6>
                  <div class="progress">
                    <span
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-7">
              <div class="services-about">
                <img
                  class="service-image"
                  src="https://ak.picdn.net/shutterstock/videos/1016039824/thumb/8.jpg"
                  alt="image"
                />
                <div class="content">
                  <p>
                    Have you at anytime witnessed a relative of yours or a close
                    friend searching frantically for a blood donor, when blood
                    banks say out of stock, the donors in mind are out of reach
                    and the time keeps ticking? Have you witnessed loss of life
                    for the only reason that a donor was not available at the
                    most needed hour? Is it something that we as a society can
                    do nothing to prevent? This thought laid our foundation.
                  </p>

                  <h5 class="mb-1">Blood Bank</h5>
                  <span>CEO, Abacus Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container" style={{  }}>
        <div class=" align-items-lg-center dot-box">
          <iframe
            loading="lazy"
            style={{ height: "100vh"}}
            src="https://bloodbankreal.herokuapp.com/htmls/Achievements.html"
          />
        </div>
      </div>
    </section>
  );
}
