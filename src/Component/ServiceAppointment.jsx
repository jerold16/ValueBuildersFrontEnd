import React from 'react'

const ServiceAppointment = () => {
  return (
    <div style={{
        backgroundPosition : 'center' ,
        backgroundSize : 'cover',
        backgroundAttachment : 'fixed'
    }}  className='bgappointment my-10 text-center text-slate-50'>
     <div className='py-20'>
    <p className='text-3xl fw-bold poppins p-1'>We know that good  
     <span className='block'>
         design means good business!</span></p>
<p className='p-2'>
We offer a fully integrated service that complements the architectural
 <span className='inline  sm:block'> concept, we ensure all projects.</span>
</p>
<button className='bgclr hover:bg-slate-900 transi p-2 px-3 uppercase  text-[12px] fw-semibold'>
    Get Appointment</button>
</div>


    </div>
  )
}

export default ServiceAppointment