import React, { useEffect, useState } from 'react'
import RealEstateProperties from './RealEstateProperties'
import REFilter from './REFilter'
import NavBarHome from './NavBar'

const RealEstate = () => {
  let [anime,setanime]=useState("")
  const [sharedData, setSharedData] = useState();
  let handletransfer=(d)=>{
    setSharedData(d)
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
    setanime("animate__fadeIn");
    sessionStorage.setItem("page","realestate");
    const element = document.querySelector('.durationani');
    element.style.setProperty('--animate-duration', '4s');
  },[])
  return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
        <NavBarHome/>
        <div 
       className='h-[40vh] realestateBanner md:h-[50vh] xl:h-[84vh] flex justify-center  align-items-center '>
        <div style={{backgroundColor:"rgb(0,0,0,0.4)"}} className='w-100 h-100 flex justify-center align-items-center '>
            <div>
            <h1 className='text-slate-50 text-center fw-bolder poppins text-4xl sm:text-8xl'>Real Estate</h1>
            <p className='text-slate-50 text-xs sm:text-lg text-center'>Business is the activity of making money.</p>
            </div>
        </div>
        </div>
       <div className='flex'>
       <REFilter setSharedData={handletransfer}/>
        <RealEstateProperties receivedData={sharedData}/>
       </div>
    </section>
  )
}

export default RealEstate