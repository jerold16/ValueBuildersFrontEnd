import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { exteriorRenovation, interiorRenovation } from "./Datas";
import { useNavigate } from "react-router";

const RenovationService = () => {
  let navigate=useNavigate()
  let [id, setid] = useState(null);
  let [ed,sed]=useState(null)

  return (
    <div className="xl:min-h-[88vh] 2xl:my-5 2xl:min-h-[50vh] flex  bgpattern">
      <div className="container my-auto pt-10">
        <div className="relative w-fit right-4 mx-auto">
          <div className="w-[40px] h-[40px] border-4 border-lime-600"></div>
          <p className="absolute top-2 fw-semibold worksan left-6">SERVICES</p>
        </div>
        <p className="text-3xl xl:ms-5 text-center my-4 fw-semibold poppins">
          Our Speciallization
        </p>
        <div className="flex flex-wrap justify-center sm:justify-around mt-10">
          <div  className="col-md-5">
            <h3 className="mx-auto text-center poppins ">Interior Renovation</h3>
            <Carousel className="md:p-3  lg:p-14 lg:pt-5">
              {interiorRenovation.service.map((info, index) => {
                return (
                  <Carousel.Item className="" interval={1000}>
                    <div
                      onClick={() => {
                        if (id == info.id) setid("");
                        else setid(info.id);
                      }}
                      onMouseEnter={() => {
                        setid(info.id);
                      }}
                      onMouseLeave={() => {
                        setid(null);
                      }}
                      style={{
                        backgroundColor: id == info.id ? "#2182b0" : "white",
                      }}
                      className={`h-[280px] rounded shadow  transi m-3 m-sm-1 p-3`}
                    >
                      <img
                        style={{ display: id == info.id ? "none" : "block" }}
                        className="w-[70px] my-3 h-[70px]"
                        src={info.icon1}
                        alt="Img1"
                      />
                      <img
                        style={{ display: id == info.id ? "block" : "none" }}
                        className="w-[70px] my-3 h-[70px]"
                        src={info.icon2}
                        alt="Img2"
                      />
                      <p
                        style={{ color: id == info.id ? "white" : "black" }}
                        className="text-xl  mb-1 mt-2 poppins"
                      >
                        {info.category}{" "}
                      </p>
                      <p
                        style={{ color: id == info.id ? "white" : "" }}
                        className="text-slate-400 pe-1"
                      >
                        {info.content}{" "}
                      </p>
                      <button onClick={()=>navigate("/renovation/Interior")}
                        style={{ color: id == info.id ? "white" : "" }}
                        className="text-uppercase fw-semibold poppins text-sm"
                      >
                        View Service
                      </button>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div  className="col-md-5">
          <h3 className="mx-auto text-center poppins ">Exterior Renovation</h3>
            <Carousel className="md:p-3  lg:p-14 lg:pt-5">
              {exteriorRenovation.service.map((info, index) => {
                return (
                  <Carousel.Item interval={1000}>
                    <div
                      onClick={() => {
                        if (ed == info.id) sed("");
                        else sed(info.id);
                      }}
                      onMouseEnter={() => {
                        sed(info.id);
                      }}
                      onMouseLeave={() => {
                        sed(null);
                      }}
                      style={{
                        backgroundColor: ed == info.id ? "#2182b0" : "white",
                      }}
                      className={`transi h-[280px] m-3 m-sm-1 rounded shadow p-3`}
                    >
                      <img
                        style={{ display: ed == info.id ? "none" : "block" }}
                        className="w-[70px] my-3 h-[70px]"
                        src={info.icon1}
                        alt="Img3"
                      />
                      <img
                        style={{ display: ed == info.id ? "block" : "none" }}
                        className="w-[70px] my-3 h-[70px]"
                        src={info.icon2}
                        alt="Img4"
                      />
                      <p
                        style={{ color: ed == info.id ? "white" : "black" }}
                        className="text-xl  mb-1 mt-2 poppins"
                      >
                        {info.category}{" "}
                      </p>
                      <p
                        style={{ color: ed == info.id ? "white" : "" }}
                        className="text-slate-400 pe-1"
                      >
                        {info.content}{" "}
                      </p>
                      <button onClick={()=>navigate("/renovation/Exterior")}
                        style={{ color: ed == info.id ? "white" : "" }}
                        className="text-uppercase fw-semibold poppins text-sm"
                      >
                        View Service
                      </button>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovationService;
