import React, { useEffect, useState } from "react";
import TittleBanner from "./TittleBanner";
import RenovationProject from "./RenovationProject";
import HomeTestimonial from "./HomeTestimonial";
import HomeFooter from "./HomeFooter";
import Renovationcon from "./Renovationcon";
import NavBarHome from "./NavBar";
import { Carousel, Col, Row } from "react-bootstrap";
import HomeBanner from "./HomeBanner";
import { Route, Routes, useNavigate } from "react-router";
import HouseConstruction from "./HouseConstruction";

const Construction = () => {
  let [anime, setanime] = useState("");
  let navigate=useNavigate()
  useEffect(() => {
    setanime("animate__fadeIn");
    window.scrollTo(0, 0);
    sessionStorage.setItem("page", "construction");
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "4s");
  }, []);
  return (
    <section
      id="home"
      className={`${anime} animate__animated transi durationani `}
    >
      <NavBarHome />
      <h1 className="d-none">Construction of our Valur builder</h1>

      {/* <div className="h-[40vh] constructionbanner md:h-[50vh] xl:h-[88vh] flex justify-center  align-items-center ">
        <div
          style={{ backgroundColor: "rgb(0,0,0,0.4)" }}
          className="w-100 h-100 flex justify-center align-items-center "
        >
          <div>
            <h1 className="text-slate-50 text-center fw-bolder poppins text-4xl sm:text-7xl">
              Construction
            </h1>
            <p className="text-slate-50 text-xs sm:text-lg text-center">
              Business is the activity of making money.
            </p>
          </div>
        </div>
      </div> */}
        <HomeBanner img1="../Asset/constructionBanner.webp" img2="../Asset/house5.jpeg" img3="../Asset/ConstructionBanner3.webp" />
      {/* Banner end */}
      <Renovationcon />
      <RenovationProject />
      {/* Services */}
      <div className="xl:min-h-[86vh] flex flex-col align-items-center  my-20 xl:my-0 ">
        
        <div className="container h-fit my-auto mx-auto">
          <div className="relative right-4 w-fit mx-auto">
            <div className="w-[40px] h-[40px] border-4 border-lime-600"></div>
            <p className="absolute top-2 fw-semibold worksan mb-0 left-6 uppercase">
              Services
            </p>
          </div>
          <p className="text-3xl mx-auto relative left-4 my-4 w-fit fw-semibold poppins">
            Our Services
          </p>

          <Row className="justify-between">
            <Col lg={5} className=" flex flex-col">
              <h4 className="urbanist mb-4 text-2xl text-center">Home constructions</h4>
              <Carousel>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/house5.jpeg")} alt="house1" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/house4.jpeg")} alt="house2" />
                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/house3.jpeg")} alt="house3" />

                  </div>
                 </Carousel.Item>
              </Carousel>
              <button onClick={()=>navigate("/homeconstruction")} className="bgclr text-white w-fit mx-auto mulish rounded p-3 my-2 px-4">Know more</button>           
            </Col>
            <Col lg={5} className=" flex flex-col">
              <h4 className="urbanist mb-4 text-2xl text-center">Commercial constructions</h4>
              <Carousel>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/card3.jpg")} alt="Commercial1" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/card4.jpg")} alt="Commercial2" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/card5.jpg")} alt="Commercial3" />

                  </div>
                 </Carousel.Item>
              </Carousel>
              <button onClick={()=>navigate("/commercialconstruction")} className="bgclr text-white w-fit mx-auto mulish rounded p-3 my-2 px-4">Know more</button>           
            </Col>
          </Row>
        </div>
      
      </div>
      <HomeTestimonial />
    </section>
  );
};

export default Construction;
