import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBar";
import HomeBanner from "./HomeBanner";
import TittleBanner from "./TittleBanner";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const HouseConstruction = () => {
  let navigate=useNavigate()
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let homecontent = [
    {
      category: "Individual",
      img: "../Asset/card2.jpg",
      content:
        "A charming individual house offering timeless elegance,modern comfort, and tranquil living in a serene neighborhood setting.",
    },
    {
      category: "Apartment",
      img: "../Asset/card3.jpg",
      content:
        "A modern apartment featuring sleek design, convenient amenities, and urban living at its finest in a bustling cityscape.",
    },
    {
      category: "Villas",
      img: "../Asset/card4.jpg",
      content:
        "A collection of luxurious villas offering elegant living spaces, private amenities, and nestled within a scenic and prestigious locale.",
    },
    {
      category: "Ethnic house",
      img: "../Asset/card5.jpg",
      content:
        " A traditional house characterized by timeless architecture, cultural authenticity, embodying the rich heritage and charm of its region.",
    },
  ];
  let [anime, setanime] = useState();
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
      {/* <HomeBanner img1="../Asset/banner1.jpg" img2="../Asset/banner2.jpg" img3="../Asset/banner3.jpg" /> */}
      <TittleBanner
        img="../Asset/HomeConstructionBanner.webp"
        name="Home Construction"
        line="Architecture & Interior Html Template."
      />

      {/* Content 1  */}
      <div className="my-20 flex  flex-col align-items-center justify-center xl:my-5 xl:min-h-[86vh] ">
        <Row className="justify-between container mx-auto">
          <Col lg={6}>
            <div>
              <h1 className="text-3xl fw-bold md:text-4xl w-5/6 poppins">
                Make is a different kind of architecture practice.
              </h1>
              <p className="text-slate-400 sourcesan w-5/6">
              we merge architectural innovation with Vastu Shastra, ensuring harmony and balance in every design. Our commitment to Vastu-compliant layouts and door facings reflects our understanding of traditional principles, enhancing the well-being and energy flow within your home. Contact us today to embark on a journey towards a harmonious living space that aligns with your values and aspirations.
              </p>
              <p className="flex gap-2 sourcesan mb-1">
                <img className="w-[20px] h-[23px]" src={require("../Asset/check.png")} alt=""  />
                Customized designs to suit your lifestyle.
              </p>
              <p className="flex gap-2 sourcesan mb-1">
                <img className="w-[20px] h-[23px]" src={require("../Asset/check.png")} alt="" />
                Meticulous craftsmanship for quality results.
              </p>
              <p className="flex gap-2 sourcesan mb-1">
                <img className="w-[20px] h-[23px]" src={require("../Asset/check.png")} alt=""  />
               Sustainable and energy-efficient solutions.
              </p>
              <p className="flex gap-2 sourcesan mb-1">
                <img className="w-[20px] h-[23px]" src={require("../Asset/check.png")} alt=""/>
                Architectural design integrates symmetry and aesthetics for balanced spaces.
              </p>
              <p className="flex gap-2 sourcesan mb-1">
                <img className="w-[20px] h-[23px]" src={require("../Asset/check.png")} alt=""/>
                Material selection aligns with Vastu for structural integrity and positivity.</p>
            </div>
          </Col>
          <Col lg={5} className="">
            <img className=" " src={require('../Asset/house section1.webp')} alt="" />

          </Col>
        </Row>
      </div>

      {/* Card for the sub construction page */}
      <div className="my-20  bgpattern xl:my-5 xl:py-6 xl:min-h-[87vh]">
        <div className="container mx-auto">
          <div className="relative right-4 w-fit mx-auto">
            <div className="w-[40px] h-[40px] border-4 border-lime-600"></div>
            <p className="absolute top-2 fw-semibold worksan mb-0 left-6 uppercase">
              Categories
            </p>
          </div>
          <p className="text-3xl mx-auto relative left-4 my-4 w-fit fw-semibold poppins">
            Our Speciallization
          </p>
        </div>

        <Slider className="container my-auto" {...settings}>
          {homecontent.map((content) => {
            return (
              <div className="col-lg-3 bg-slate-50 ">
                <img src={content.img} alt="" />
                <div className="p-3 flex flex-col justify-between">
                  <h4 className="urbanist ">{content.category} </h4>
                  <h6 className="mulish fw-bold">{content.content}</h6>
                </div>
                <button onClick={()=>navigate(`/homeconstruction/${content.category}`)} className="bgclr w-fit m-3 p-2 px-3 text-white mulish">
                  Know more
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="my-20 flex align-items-center xl:my-5 xl:min-h-[85vh] ">
        <div className="my-auto container">
        <h2 className="text-2xl fw-bold md:text-4xl w-5/6 poppins">
        Building Dreams with Quality, Trust, and Vastu-aligned Architecture
              </h2>
        <p className="sourcesan md:text-2xl">
        At Value Builder, we understand that your home is more than just a structure; it's where your
        dreams take shape. With our unwavering commitment to quality craftsmanship, trusted reputation, and adherence to Vastu principles, we ensure that 
        every aspect of your home reflects excellence and harmony. Our team of experienced architects and builders meticulously craft each home, combining innovative design
        with traditional wisdom to create spaces that resonate with your lifestyle and values.
        </p>
        <p className="sourcesan md:text-2xl">
        From the moment you entrust us with your vision, we prioritize your satisfaction, working tirelessly to bring your dream home to life while keeping costs reasonable and transparent. By leveraging our expertise and industry
         connections, we source high-quality materials and employ efficient construction techniques to deliver superior results without compromising on quality. With 10 years of experience in the industry, we've earned the trust of countless homeowners who rely on us to transform their aspirations into reality. Whether you're looking for a modern masterpiece or a cozy retreat, trust Value Builders to build your dream home with integrity, innovation, and affordability.
        </p>
            

        </div>


      </div>
    </section>
  );
};

export default HouseConstruction;
