import React, { useState } from "react";
import { InteriorCommercial, InteriorHouse } from "./Datas";
import { Col, Modal, Row } from "react-bootstrap";

const InteriorServices = (props) => {
  let [show,setshow]=useState(false)
  let {id}=props
  let data = id=="house"? InteriorHouse : InteriorCommercial;
  return (
    <div className="xl:h-[88vh] flex container">
      <div className="my-auto">
        <div className="relative right-4 w-fit mx-auto">
          <div className="w-[40px] h-[40px] border-4 border-lime-600"></div>
          <p className="absolute top-2 fw-semibold worksan left-6 uppercase">
            Services
          </p>
        </div>
        <p className="text-3xl mx-auto relative left-4 my-4 w-fit fw-semibold poppins">
          Our Speciallization
        </p>

        <div className="flex justify-around flex-wrap gap-2">
          {data.map((info) => {
            return (
              <div onClick={()=>setshow(true)} className="flex cursor-pointer hover:scale-105 transition duration-500 gap-3 mt-4 align-items-center  w-[300px] lg:w-[380px] ">
                <div className="bgclr h-fit w-fit p-2">
                  <img className="w-[100px]" src={info.img} alt="Image" />
                </div>
                <div>
                  <p className="fw-bold text-xl poppins mb-1">{info.title}</p>
                  <p className="text-slate-400 sourcesan">{info.para} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal onHide={()=>setshow(false)} 
      
      dialogClassName="modal-90w"
      show={show}>
        <Modal.Body>
          <Row className="contanier justify-between">
            <Col md={5}>
               <img src={require("../Asset/CommercialInterior2.webp")} alt="Image5" />
            </Col>
            <Col md={5}>
               <img src={require("../Asset/CommercialInterior2.webp")} alt="Image5" />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InteriorServices;
