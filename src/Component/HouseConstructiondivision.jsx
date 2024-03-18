import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBar";
import TittleBanner from "./TittleBanner";
import { useParams } from "react-router";
import { Carousel, Col, Row } from "react-bootstrap";
import Slider from "react-slick";

const HouseConstructiondivision = () => {
  let { category } = useParams();
  let [anime, setanime] = useState();
  useEffect(() => {
    setanime("animate__fadeIn");
    window.scrollTo(0, 0);
    // sessionStorage.setItem("page", "construction");
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "4s");
  }, []);
  return (
    <section
      id="home"
      className={`${anime} animate__animated transi durationani `}
    >
      <NavBarHome />
      <TittleBanner
        img="../Asset/PaintingBanner.webp"
        name={category}
        // line="Architecture & Interior Html Template."
      />
      {/* Content */}

      <div className="my-20 flex xl:my-0 xl:min-h-[80vh] bgpattern">
        <Row className="my-auto container justify-between mx-auto ">
          <Col lg={6} className="">
            <h1 className="poppins">Heading2</h1>
            <p className="sourcesan">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur iusto perspiciatis quos alias quas labore porro ad,
              magnam, doloribus illo neque? Sit tenetur eum optio deserunt.
              Sapiente voluptatem amet accusantium corporis quod voluptatum
              nisi, non natus impedit possimus veritatis commodi consequatur
              animi beatae doloremque repellat perspiciatis ratione labore a
              tenetur?
            </p>
            <p className="sourcesan">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore quis aperiam maxime rerum. Officiis culpa cupiditate
              facilis illum laudantium ipsum vel harum accusantium blanditiis
              nobis enim quasi explicabo, consequuntur eligendi! Ipsam
              molestias, voluptatem iste dolores ipsum ut rerum tenetur numquam
              suscipit similique illum aliquam enim quidem nihil corporis
              distinctio!
            </p>
          </Col>
          <Col lg={5} className="">
            <img
              className="rounded"
              src={require("../Asset/InteriorBanner3.jpg")}
              alt="Interior"
            />
          </Col>
        </Row>
      </div>
      {/* Slider */}
      <div className="my-20 flex xl:my-0 xl:min-h-[80vh] ">
        <Carousel className="container mx-auto">
            <Carousel.Item interval={1000}>
                <img src={require("../Asset/Homeplanlayout1.webp")} alt="homeplan layout" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={require("../Asset/Homeplanlayout2.webp")} alt="homeplan layout" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={require("../Asset/Homeplanlayout3.webp")} alt="homeplan layout" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={require("../Asset/Homeplanlayout4.webp")} alt="homeplan layout" />
            </Carousel.Item>


        </Carousel>
      </div>

      <div className="my-20 flex align-items-center xl:my-5 xl:min-h-[80vh] ">
        <div className="my-auto container">
          <h2 className="text-2xl fw-bold md:text-4xl w-5/6 poppins">
            Building Dreams with Quality, Trust, and Vastu-aligned Architecture
          </h2>
          <p className="sourcesan md:text-2xl">
            At Value Builder, we understand that your home is more than just a
            structure; it's where your dreams take shape. With our unwavering
            commitment to quality craftsmanship, trusted reputation, and
            adherence to Vastu principles, we ensure that every aspect of your
            home reflects excellence and harmony. Our team of experienced
            architects and builders meticulously craft each home, combining
            innovative design with traditional wisdom to create spaces that
            resonate with your lifestyle and values.
          </p>
          <p className="sourcesan md:text-2xl">
            From the moment you entrust us with your vision, we prioritize your
            satisfaction, working tirelessly to bring your dream home to life
            while keeping costs reasonable and transparent. By leveraging our
            expertise and industry connections, we source high-quality materials
            and employ efficient construction techniques to deliver superior
            results without compromising on quality. With 10 years of experience
            in the industry, we've earned the trust of countless homeowners who
            rely on us to transform their aspirations into reality. Whether
            you're looking for a modern masterpiece or a cozy retreat, trust
            Value Builders to build your dream home with integrity, innovation,
            and affordability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HouseConstructiondivision;
