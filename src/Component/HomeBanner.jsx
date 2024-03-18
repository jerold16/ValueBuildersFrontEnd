import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const HomeBanner = (props) => {
  let { img1, img2, img3 } = props;
  let navigate = useNavigate();
  let bg = {
    backgroundImage: `url(${img1})`,
  };
  let bg2 = {
    backgroundImage: `url(${img2})`,
  };
  let bg3 = {
    backgroundImage: `url(${img3})`,
  };
  return (
    <div>
      <Carousel fade className="z-0">
        <Carousel.Item interval={6000} style={bg} className="banner1">
          <div
            className="position-absolute top-0 ms-5 left-10 md:left-24 lg:left-44 flex worksan text-slate-50 align-items-center justify-center 
      w-[240px] xl:w-[350px] overflow-hidden h-100"
          >
            <div className="position-relative transi">
              <p className="animate__slideInRight w-fit animate__animated z-1">
                Residental
              </p>
              <h3
                className="fw-bolder text-4xl w-100 animate__animated animate__delay-1s 
          animate__slideInLeft worksan"
              >
                Dream home Might be closer than you think
              </h3>
              <p className="animate__animated animate__delay-2s animate__slideInLeft">
                Business is the activity of making money.
              </p>

              <button className="bgclr p-3 transi hover:bg-slate-50 animate__animated animate__fast animate__delay-3s animate__slideInLeft text-slate-50 hover:text-slate-950 mulish">
                View Project
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={6000} style={bg2} className="banner2">
          <div
            className="position-absolute top-0 ms-5 left-10 md:left-24 lg:left-44 flex worksan text-slate-50 align-items-center justify-center 
      w-[240px] xl:w-[350px] overflow-hidden h-100"
          >
            <div className="position-relative transi">
              <p className="animate__slideInRight w-fit animate__animated z-1">
                Residental
              </p>
              <h3
                className="fw-bolder text-4xl w-100 animate__animated animate__delay-1s 
          animate__slideInLeft worksan"
              >
                Dream home Might be closer than you think
              </h3>
              <p className="animate__animated animate__delay-2s animate__slideInLeft">
                Business is the activity of making money.
              </p>

              <button className="bgclr p-3 transi hover:bg-slate-50 animate__animated animate__fast animate__delay-3s animate__slideInLeft text-slate-50 hover:text-slate-950 mulish">
                View Project
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={6500} style={bg3} className="banner3">
          <div
            className="position-absolute top-0 ms-5 left-10 md:left-24 lg:left-44 flex worksan text-slate-50 align-items-center justify-center 
      w-[240px] xl:w-[350px] overflow-hidden h-100"
          >
            <div className="position-relative transi">
              <p className="animate__slideInRight w-fit animate__animated z-1">
                Residental
              </p>
              <h3
                className="fw-bolder text-4xl w-100  animate__animated animate__delay-1s 
          animate__slideInLeft worksan"
              >
                Dream home Might be closer than you think
              </h3>
              <p className=" animate__animated animate__delay-2s animate__slideInLeft">
                Business is the activity of making money.
              </p>

              <button className="bgclr animate__fast p-3 transi hover:bg-slate-50 animate__animated animate__delay-3s animate__slideInLeft text-slate-50 hover:text-slate-950 mulish">
                View Project
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
