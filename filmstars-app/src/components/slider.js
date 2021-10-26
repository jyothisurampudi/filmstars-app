import React from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  return (
    <div class="row">
      <div class="col sm-4">
        <div className="slider-component">
          <div
            id="carouselExampleIndicators"
            class="carousel slide "
            data-interval="1000"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="data:image/jpeg;base64,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"
                  class="d-block w-100"
                  alt="first"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaElSdDaZ_-DH0tYq89qebhW0BqtiBSpiZg&usqp=CAU"
                  class="d-block w-100 "
                  alt="second"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_VOC92PfzmQGbNq8YM0u0TwDR-h7MEx31g&usqp=CAU"
                  class="d-block w-100"
                  alt="third"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col sm-2">
        <div class="card mb-3">
          <div class="card-shadow">
            <div class="card-body">
              <div class="card-header">
                <h2>ABOUT US</h2>
              </div>
              <div class="card-text">
                <h6>This app contains details about actors</h6>
              </div>
            </div>
          </div>{" "}
        </div>
        <div class="card mb-3">
          <div class="card-shadow">
            <div class="card-body">
              <div class="card-header">
                <h2>CONTACT US</h2>
              </div>
              <div class="card-text">
              <h6>jyothisurampudi54@gmail.com</h6>
                <h6>9398553098</h6>
              </div>
            </div>
          </div>{" "}
        </div>
        <div class="card mb-3">
          <div class="card-shadow">
            <div class="card-body">
              <div class="card-header">
                <h2>APP INFO</h2>
              </div>
              <div class="card-text">
              <h6>App information</h6>
               
              </div>
            </div>
          </div>{" "}
        </div>
        <div class="card">
          <div class="card-shadow">
            <div class="card-body">
              <div class="card-header">
                <h2>REPORT</h2>
              </div>
              <div class="card-text">
                <h6>Report Us</h6>
                
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default Slider;
