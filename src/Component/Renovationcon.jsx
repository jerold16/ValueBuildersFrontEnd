import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Renovationcon = () => {
  return (
    <div> <Row className='container mx-auto justify-around'>
    <Col lg={6} className='p-2 flex align-items-center justify-content-center'>
       <div>
       <p className='text-3xl fw-bold md:text-4xl w-5/6 poppins'>Make is a different kind of architecture practice.</p>
    <p className='text-slate-400 sourcesan w-5/6'>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
    <p className='flex gap-2 sourcesan mb-1'><img className='w-[20px] h-[23px]' src={require("../Asset/check.png")} alt="" />We are confident about our projects.</p>
    <p className='flex gap-2 sourcesan mb-1'><img className='w-[20px] h-[23px]' src={require("../Asset/check.png")} alt="" />We always try our best.</p>
    <p className='flex gap-2 sourcesan mb-1'><img className='w-[20px] h-[23px]' src={require("../Asset/check.png")} alt="" />Out dadicated team is very helpful.</p>
    <p className='flex gap-2 sourcesan mb-1'><img className='w-[20px] h-[23px]' src={require("../Asset/check.png")} alt="" />We provide high quality design services.</p>

       </div>
    </Col>
    <Col lg={4} className='relative my-4 flex align-items-center'>
     <img className='w-100' src={require("../Asset/renovation.jpg")} alt="" />
     <div style={{backgroundColor:"rgb(0,0,0,.4)"}} 
     className='w-[95%] h-100 text-slate-50 justify-center text-center flex align-items-center top-0 absolute'>
        <div >
        <p className='text-2xl fw-semibold'>Since 1991</p>
        <h1 className='text-9xl fw-bold'>25</h1>
        <p className='text-2xl fw-semibold'>Years Experience</p>
        </div>
     </div>
    </Col>
  </Row></div>
  )
}

export default Renovationcon