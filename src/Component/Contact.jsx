import React, { useEffect, useState } from 'react'
import TittleBanner from './TittleBanner'
import { Col, Row } from 'react-bootstrap'
import NavBarHome from './NavBar'

const Contact = () => {
  
  let [anime,setanime]=useState("")
  useEffect(()=>{
    setanime("animate__fadeIn");
    window.scrollTo(0, 0);
    sessionStorage.setItem("page","contact");
    const element = document.querySelector('.durationani');
    element.style.setProperty('--animate-duration', '4s');
  },[])
return (
  <section id='home' className={`${anime} animate__animated transi durationani `}>
    <NavBarHome/>
      <TittleBanner img={"../Asset/HomeBanner3.jpg"} name={"Contact"} />
      <p className='h-10'></p>
        <Row className=' justify-content-around mx-auto bgpattern lg:min-h-[50vh] xl:min-h-[78vh]'>
          <Col lg={5} xl={4} className='align-items-center  flex'>
            <div>
              <h1 className='poppins text-3xl fw-bold'>Get in touch with us & send us message today!</h1>
               <p className='text-slate-400'>Arkit is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
              <p className='w-7/12 sourcesan text-2xl fw-semibold'>198 West 21th Street, Suite 721 New York, NY 10010</p>
              <p className='uppercase fw-semibold'>Email: <span className='lowercase'>info@meridatechminds.com</span> </p>
              <p className='uppercase fw-semibold'>Phone: +91 9791584208</p>
            </div>
          </Col>
          <Col lg={6} xl={5} className='flex  align-items-center'>
            <form action="">
             <div className='flex flex-col sm:flex-row gap-4'>
             <input type="text" placeholder='Name' 
              className='p-3 border-1 my-2 text-slate-600 border-slate-400 focus:outline-lime-400' />
               <input type="email" placeholder='Email' 
              className='p-3 border-1 my-2 text-slate-600 border-slate-400 focus:outline-lime-400' />
               </div>
              <textarea className='p-3 my-4 w-full border-1 text-slate-600 border-slate-400 focus:outline-lime-400'
               name="" placeholder='Message' id="" cols="30" rows="5"></textarea>
              <button className='uppercase text-xs p-3 px-4 text-white bgclr fw-semibold hover:bg-slate-800'>Send Message</button>
            </form>
          </Col>
        </Row>
    </section>
  )
}

export default Contact