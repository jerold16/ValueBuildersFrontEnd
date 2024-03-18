import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBar";
import TittleBanner from "./TittleBanner";
import Contentsection1 from "./Contentsection1";
import { Carousel, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Paint = () => {
  let navigate = useNavigate();
  let contentobj = {
    img: "../Asset/house5.jpeg",
    title: "Painting Heading",
    para1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto perspiciatis quos alias quas labore porro ad, magnam, doloribus illo neque? Sit tenetur eum optio deserunt. Sapiente voluptatem amet accusantium corporis quod voluptatum nisi, non natus impedit possimus veritatis commodi consequatur animi beatae doloremque repellat perspiciatis ratione labore a tenetur?`,
    para2: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto perspiciatis quos alias quas labore porro ad, magnam, doloribus illo neque? Sit tenetur eum optio deserunt. Sapiente voluptatem amet accusantium corporis quod voluptatum nisi, non natus impedit possimus veritatis commodi consequatur animi beatae doloremque repellat perspiciatis ratione labore a tenetur?`,
  };
  let [anime, setanime] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    setanime("animate__fadeIn");
    sessionStorage.setItem("page", "paint");
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "4s");
  }, []);
  return (
    <section
      id="home"
      className={`${anime} animate__animated transi durationani `}
    >
      <NavBarHome />
      <TittleBanner img="../Asset/PaintingBanner.webp" name="Paint Works" />
      <Contentsection1 content={contentobj} />
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
              <h4 className="urbanist mb-4 text-2xl text-center">
                Home Painting
              </h4>
              <Carousel>
                <Carousel.Item interval={600}>
                  <div>
                    <img
                      className="h-[300px] w-full "
                      src={require("../Asset/house5.jpeg")}
                      alt="house1"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                  <div>
                    <img
                      className="h-[300px] w-full "
                      src={require("../Asset/house4.jpeg")}
                      alt="house2"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                  <div>
                    <img
                      className="h-[300px] w-full "
                      src={require("../Asset/house3.jpeg")}
                      alt="house3"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
              <button
                onClick={() => navigate("/paintworks/House")}
                className="bgclr text-white w-fit mx-auto mulish rounded p-3 my-2 px-4"
              >
                Know more
              </button>
            </Col>
            <Col lg={5} className=" flex flex-col">
              <h4 className="urbanist mb-4 text-2xl text-center">
                Commercial Painting
              </h4>
              <Carousel>
                <Carousel.Item interval={600}>
                  <div>
                    <img
                      className="h-[300px] w-full "
                      src={require("../Asset/card3.jpg")}
                      alt="Commercial1"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                  <div>
                    <img
                      className="h-[300px] w-full "
                      src={require("../Asset/card4.jpg")}
                      alt="Commercial2"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={600}>
                  <div>
                    <img
                      className="h-[300px] w-full "
                      src={require("../Asset/card5.jpg")}
                      alt="Commercial3"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
              <button
                onClick={() => navigate("/paintworks/Commercial")}
                className="bgclr text-white w-fit mx-auto mulish rounded p-3 my-2 px-4"
              >
                Know more
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Paint;
