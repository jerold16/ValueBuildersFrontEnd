import React from "react";
import { testimonialdata } from "./Datas";
import Slider from "react-slick";

const HomeTestimonial = () => {
  let data = testimonialdata;
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
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
  return (
    <div className=" bgpattern xl:min-h-[86vh] flex 2xl:my-5 2xl:min-h-[50vh]">
      <div className="my-auto container mx-auto">
        <div className="relative right-4 w-fit mx-auto">
          <div className="w-[40px] h-[40px] border-4 border-lime-600"></div>
          <p className="absolute top-2 fw-semibold worksan left-6 uppercase">
            Testimonial
          </p>
        </div>
        <p className="text-3xl mx-auto relative left-4 my-4 w-fit fw-semibold poppins">
          What People say
        </p>
        <div className="container my-5">
          <Slider {...settings}>
            {data.map((info) => {
              return (
                <div
                  className=" mx-3 h-[330px] sm:h-[280px] bg-white border-s-4
       border-lime-500 p-2 px-4"
                >
                  <div className="flex gap-4 align-items-center sm:my-8">
                    <img
                      className="rounded-full w-[100px] h-[100px]"
                      src={info.img}
                      alt=""
                    />
                    <div className="">
                      <p className="text-slate-600">{info.para}</p>
                      <div className="flex justify-between">
                        <p className="fw-bolder">
                          {info.name}
                          <span className="block text-slate-600 uppercase text-sm fw-medium">
                            {info.position}
                          </span>
                        </p>
                        <img
                          className="w-[50px] h-[50px] "
                          src={require("../Asset/right-quote-sign.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
