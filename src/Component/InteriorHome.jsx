import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBar";
import { Carousel, Col, Row } from "react-bootstrap";
import InteriorServices from "./InteriorServices";
import HomeProjects from "./HomeProjects";
import HomeTestimonial from "./HomeTestimonial";
import CompanySlider from "./CompanySlider";
import HomeFooter from "./HomeFooter";
import ServiceAppointment from "./ServiceAppointment";
import { useNavigate } from "react-router";

const InteriorHome = () => {
  let navigate=useNavigate()
  let [anime, setanime] = useState("");
  useEffect(() => {
    setanime("animate__fadeIn");
    window.scrollTo(0, 0);
    sessionStorage.setItem("page", "interiordesigning");
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "4s");
  }, []);
  return (
    <section
      id="home"
      className={`${anime} animate__animated transi durationani `}
    >
      <NavBarHome />
      {/* Banner  */}
      <div className="h-[40vh] md:h-[50vh] xl:h-[86vh] interiorbanner flex justify-center align-items-center ">
        <div className="">
          <h1 className="text-slate-50 text-center fw-bolder poppins text-4xl sm:text-7xl">
            Interior & Design
          </h1>
          <p className="text-slate-50 text-xs sm:text-lg text-center">
            Business is the activity of making money.
          </p>
        </div>
      </div>
      {/* Make a difference sections */}
      <p className="h-16"></p>
      <Row className="container mx-auto mb-20 xl:h-[89vh]">
        <Col
          lg={6}
          className="p-2 flex align-items-center justify-content-center"
        >
          <div>
            <p className="text-3xl fw-bold md:text-4xl w-5/6 poppins">
              Make is a different kind of architecture practice.
            </p>
            <p className="text-slate-400 sourcesan w-5/6">
              Arkit is a different kind of architecture practice. Founded by
              LoganCee in 1991, we’re an employee-owned firm pursuing a
              democratic design process that values everyone’s input.
            </p>
            <p className="flex gap-2 sourcesan mb-1">
              <img
                className="w-[20px] h-[23px]"
                src={require("../Asset/check.png")}
                alt=""
              />
              We are confident about our projects.
            </p>
            <p className="flex gap-2 sourcesan mb-1">
              <img
                className="w-[20px] h-[23px]"
                src={require("../Asset/check.png")}
                alt=""
              />
              We always try our best.
            </p>
            <p className="flex gap-2 sourcesan mb-1">
              <img
                className="w-[20px] h-[23px]"
                src={require("../Asset/check.png")}
                alt=""
              />
              Out dadicated team is very helpful.
            </p>
            <p className="flex gap-2 sourcesan mb-1">
              <img
                className="w-[20px] h-[23px]"
                src={require("../Asset/check.png")}
                alt=""
              />
              We provide high quality design services.
            </p>
          </div>
        </Col>
        <Col lg={6} className="relative my-4 ">
          <img
            className="sm:h-[550px] md:w-[500px]"
            src={require("../Asset/towerinterior.jpeg")}
            alt=""
          />
          <div className="mt-20 sm:mt-0  sm:w-60 md:absolute md:w-72 top-56 left-36 md:top-80 md:left-56 lg:left-52 xl:top-64 xl:left-60 overflow-x-hidden">
            <Carousel className="">
              <Carousel.Item interval={1000}>
                <img
                  className=""
                  src={require("../Asset/interiorslide1.jpg")}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src={require("../Asset/interiorslide2.jpg")} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={200}>
                <img src={require("../Asset/interiorslide1.jpg")} alt="" />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      {/* Service */}
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
              <h4 className="urbanist mb-4 text-2xl text-center">Home interiors</h4>
              <Carousel>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/BedRoom1.webp")} alt="house1" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/LivingRoom1.webp")} alt="house2" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/kitchen1.webp")} alt="house3" />

                  </div>
                 </Carousel.Item>
              </Carousel>
              <button onClick={()=>navigate("/interiordesigning/homeInterior")} className="bgclr text-white w-fit mx-auto mulish rounded p-3 my-2 px-4">Know more</button>           
            </Col>
            <Col lg={5} className=" flex flex-col">
              <h4 className="urbanist mb-4 text-2xl text-center">Commercial interiors</h4>
              <Carousel>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/CommercialSpace.webp")} alt="Commercial1" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/CommercialInterior1.webp")} alt="Commercial2" />

                  </div>
                 </Carousel.Item>
                 <Carousel.Item interval={600}>
                  <div>
                    <img className="h-[300px] w-full " src={require("../Asset/CommercialInterior2.webp")} alt="Commercial3" />
                  </div>
                 </Carousel.Item>
              </Carousel>
              <button onClick={()=>navigate("/interiordesigning/CommercialInterior")} className="bgclr text-white w-fit mx-auto mulish rounded p-3 my-2 px-4">Know more</button>           
            </Col>
          </Row>
        </div>
      
      </div>
      {/* <InteriorServices/> */}
      <HomeProjects />
      <p className="h-10"></p>
      <ServiceAppointment />
      <HomeTestimonial />
      <CompanySlider />
      {/* <HomeFooter/> */}
    </section>
  );
};

export default InteriorHome;
