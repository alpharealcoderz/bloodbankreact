import React from "react";

export default function Clients() {
  return (
    <section
      id="clients"
      class="pt-page pt-page-5"
      data-id="clients"
      style={{ paddingTop: "67px" }}
    >
      <div class="container">
        <div class="row d-flex align-content-lg-center min-height-100vh">
          <div class="col-lg-4 pr-lg-5 p-0">
            <div class="heading-area">
              <h6 class="sub-title main-color"></h6>
              <h2 class="title">Our Volunteers</h2>
              <p class="paragraph">
                Our volunteers are always ready to help you.
              </p>
            </div>
            <div id="client-nav"></div>
          </div>

          <div class="col-lg-8">
            <div id="owl-client" class="owl-carousel owl-theme">
              <div class="client-box">
                <i class="lni-quotation q-icon"></i>
                <p>
                  I will be at your service anytime you require blood in Delhi
                  24*7.
                </p>

                <div class="client-img">
                  <img
                    src="https://megaone.acrothemes.com/personal/img/avatar-1.png"
                    alt="client"
                  />
                </div>
                <h5 class="client-name mb-0">Saurabh</h5>
                <span class="client-designation">Delhi</span>
              </div>

              <div class="client-box">
                <i class="lni-quotation q-icon"></i>
                <p>
                  Sometimes you just need someone, i am that someone whi can
                  help you without anything in return.
                </p>

                <div class="client-img">
                  <img
                    src="https://megaone.acrothemes.com/personal/img/avatar-2.png"
                    alt="client"
                  />
                </div>
                <h5 class="client-name mb-0">Krutika</h5>
                <span class="client-designation">Mumbai</span>
              </div>

              <div class="client-box">
                <i class="lni-quotation q-icon"></i>
                <p>
                  Helping the needy is my hobby, and i am one the best at it..
                </p>

                <div class="client-img">
                  <img
                    src="https://megaone.acrothemes.com/personal/img/avatar-3.png"
                    alt="client"
                  />
                </div>
                <h5 class="client-name mb-0">Aditya</h5>
                <span class="client-designation">Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
