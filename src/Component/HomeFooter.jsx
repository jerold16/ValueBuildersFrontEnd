import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const HomeFooter = () => {
    let navigate =useNavigate()
  return (
    <div className='mt-20'>
        <Row className='justify-around mx-auto'>
            <Col md={3}  className='sourcesan'>
                <img src={require("../Asset/ValueBuilderLogo.png")} alt="logo" className='w-[180px] ' />
                <p className='text-slate-500'>Building your own home is about desire,
                     fantasy. But it’s achievable anyone can do it.</p>
            </Col>
            <Col md={2}  className='sourcesan'>
                <p className='poppins fw-bolder mb-0 my-2'>Company</p>
                <p onClick={()=>navigate("/about")} className='cursor-pointer text-slate-500 mb-0 my-1'>About Us</p>
                <p className='text-slate-500 mb-0 my-1'>Our Services</p>
                <p className='text-slate-500 mb-0 my-1'>Client Reviews</p>
                <p className='text-slate-500 mb-0 my-1'>Contact Us</p>
            </Col>
            <Col md={3} className='sourcesan'>
                <p className='poppins fw-bolder mb-0 my-2'>Headquaters</p>
                <p className='text-slate-500 mb-0 my-1'>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                <p className='text-slate-500 mb-0 my-1'> info@valuebuilder.com</p>
                <p className='text-slate-500 mb-0 my-1'>+91 9794985624</p>
            </Col>
            <Col md={3}>
                <p className='poppins fw-bolder mb-0 my-2'>NewsLetter Subscription</p>
                <p className='text-slate-500 mb-0 my-1'>Subscribe and get 10% off from our
architecture company.</p>
<input type="email" placeholder='Enter the email address' className='p-2 my-2 border-2 border-slate-200' />
<input type="button" value="Subscribe" className='p-2 bgclr text-slate-50 uppercase poppins' />
            </Col>
        </Row>
        <h1 className='h-[40px]'></h1>
        <hr />
        <p className='text-center sourcesan'>© 2019 Arkit Powered by DynamicLayers</p>
    </div>
  )
}

export default HomeFooter