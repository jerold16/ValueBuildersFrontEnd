import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBar";
import TittleBanner from "./TittleBanner";
import InteriorServices from "./InteriorServices";
import { Carousel, Col, Row } from "react-bootstrap";

const InteriorCommercial = () => {
  let galary = [
    "../Asset/CommercialInterior1.webp",
    "../Asset/CommercialInterior2.webp",
    "../Asset/CommercialSpace.webp",
    "../Asset/CommercialInterior5.jpeg",
    
    "../Asset/CommercialInterior4.jpeg",
  ];
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
      <TittleBanner img="../Asset/CommercialInterior3.jpeg" name="Commercial Interiors" />
      <div className="my-20 flex xl:my-0 xl:min-h-[87vh] bgpattern">
        <Row className="my-auto container justify-between mx-auto ">
          <Col lg={6} className="">
            <h1 className="poppins">Commercial Interiors</h1>
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
              src={require("../Asset/CommercialInterior2.webp")}
              alt="Interior"
            />
          </Col>
        </Row>
      </div>
      <InteriorServices id="commercial" />
      <div className="my-20 xl:my-0 flex flex-col xl:min-h-[86vh] ">
        <div className="relative right-4 w-fit mx-auto">
          <div className="w-[40px] h-[40px] border-4 border-lime-600"></div>
          <p className="absolute top-2 fw-semibold worksan left-6 uppercase">
            Gallery
          </p>
        </div>
        <p className="text-3xl mx-auto relative left-4 my-4 w-fit fw-semibold poppins">
          {/* Our Projects */}
        </p>
        <Carousel className="col-md-8 col-lg-9 col-xl-6 h-[22rem] lg:h-[30rem]  container mx-auto">
          {galary.map((item) => {
            return (
              <Carousel.Item interval={1000}>
                <div className="">
                  <img
                    className="mx-auto rounded h-[20rem] lg:h-[30rem] w-full "
                    src={item}
                    alt="Inetrior"
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      {/*Content 2 */}
      <div className="my-20 flex align-items-center xl:my-5 xl:min-h-[80vh] ">
        <div className="my-auto container">
          <h2 className="text-2xl fw-bold md:text-3xl w-5/6 poppins">
            Building Dreams with Quality, Trust, and Vastu-aligned Architecture
          </h2>
          <p className="sourcesan md:text-xl">
            At Value Builder, we understand that your home is more than just a
            structure; it's where your dreams take shape. With our unwavering
            commitment to quality craftsmanship, trusted reputation, and
            adherence to Vastu principles, we ensure that every aspect of your
            home reflects excellence and harmony. Our team of experienced
            architects and builders meticulously craft each home, combining
            innovative design with traditional wisdom to create spaces that
            resonate with your lifestyle and values.
          </p>
          <p className="sourcesan md:text-xl">
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

export default InteriorCommercial