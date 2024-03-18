import React, { useEffect, useState } from 'react'
import TittleBanner from './TittleBanner'
import NavBarHome from './NavBar'
import { Col, Row } from 'react-bootstrap'
import HomeTestimonial from './HomeTestimonial'
import HomeServices from './HomeServices'
import HomeFooter from './HomeFooter'
import CompanySlider from './CompanySlider'

const About = () => {
    let [anime,setanime]=useState("")
    useEffect(()=>{
      setanime("animate__fadeIn");
      window.scrollTo(0, 0);
      sessionStorage.setItem("page","about");
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
    },[])
  return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
        <NavBarHome/>
        <TittleBanner img="../Asset/aboutBanner.jpg" name="About Company" line="Architecture & Interior Html Template." />
    <p className='h-32 '></p>

    <div>
      <Row
      className='container bgpattern mx-auto align-items-center'>
        <Col md={6} className='my-3'>
          <h1 className='text-3xl poppins '>
          Creating place that enhance the human experience.
          </h1>
          <p className='worksan'>
          Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input
          </p>
          <p className='worksan'>
          Today we have more than 150 people in London, Hong Kong and Sydney providing architecture, interior and urban design services from concept to completion.
          </p>
          <button className='bgclr text-slate-50 p-3 px-4'>More about us</button>
        </Col>
        <Col md={6} className='relative my-3'>
          <img className='w-[350px] h-[500px] mx-auto' src={require("../Asset/homepagepc=ic1.avif")} alt="homepik" />
          <div className='absolute bottom-60 sm:left-16  w-fit'>
            <div className='w-[120px] h-[120px]  border-5 border-lime-600'>

            </div>
            <div className='absolute top-11 text-slate-50 sm:text-slate-950 left-3'>
              <h2 className='text-8xl'>12</h2>
              <h6 className='w-[190px]'>YEARS OF EXPERIENCE</h6>

            </div>
          </div>
        </Col>
      </Row>
    </div>
    <p className='h-32 '></p>
    <HomeServices/>
    
    <HomeTestimonial/>
    <p className='h-32 '></p>

    <CompanySlider/>
    {/* <HomeFooter/> */}
    </section>
  )
}

export default About