import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import NavBarHome from './NavBar'
import RenovationBanner from './RenovationBanner'
import RenovationService from './RenovationService'
import RenovationProject from './RenovationProject'
import HomeTestimonial from './HomeTestimonial'
import CompanySlider from './CompanySlider'
import HomeFooter from './HomeFooter'
import Renovationcon from './Renovationcon'

const Renovation = () => {
    let [anime,setanime]=useState("")
    useEffect(()=>{
      setanime("animate__fadeIn");
      window.scrollTo(0, 0);
      sessionStorage.setItem("page","renovation");
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
    },[])
  return (
    <section id='home'  className={`${anime} animate__animated transi durationani `}>
        <NavBarHome/>
        <RenovationBanner/>
        <h1 className='h-10'></h1>
        <Renovationcon/>
        <RenovationService/>
        <RenovationProject/>
        <HomeTestimonial/>
        <h1 className='h-10'></h1>
        <CompanySlider/>
        {/* <HomeFooter/> */}
    </section>
  )
}

export default Renovation