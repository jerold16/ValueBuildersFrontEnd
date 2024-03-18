import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeServices = () => {
  return (
    <div className=' bgpattern py-4'>
        <Row className='container mx-auto'>
           <Col className='flex flex-column'>
           <div className='relative right-4 mx-auto'>
                <div className='w-[40px] h-[40px] border-4 border-lime-600'>
                </div>
                <p className='absolute top-2 fw-semibold worksan left-6'>SERVICES</p>
            </div>
            <div className='mx-auto'>
                <p className='text-3xl fw-semibold poppins'>Our Speciallization</p>
            </div>
            {/* Cards section */}
            <div className='flex gap-3 justify-around mx-auto container flex-wrap'>
                {/* Card one */}
                <div className='w-[18rem] relative bg-slate-50 shadow'>
                    <img src={require("../Asset/card1.jpg")} alt="" />
                    <div className='bgclr absolute top-[35%] left-4 w-fit p-2'>
                     <img width={50} src={require("../Asset/building.png")} alt="" />
                    </div>
                   <div className='mt-3 p-4'>
                   <h4>Construction</h4>
                    <p>We offer a fully integrated service that complements the architectural concept, we ensure all projects.

                    </p>
                    <Link to={"/construction"} className="text-decoration-none fw-semibold textclr">
                       <p className='poppins'>VIEW PROJECTS </p> </Link>
                   </div>
                </div>
{/* Card 2 */}
<div className='w-[18rem]  relative bg-slate-50 shadow'>
                    <img src={require("../Asset/card2.jpg")} alt="" />
                    <div className='bgclr absolute top-[35%]  left-4 w-fit p-2'>
                     <img width={50} src={require("../Asset/conveyor.png")} alt="" />
                    </div>
                   <div className='mt-3 p-4'>
                   <h4>Interior</h4>
                    <p>We offer a fully integrated service that complements the architectural concept, we ensure all projects.

                    </p>
                    <Link to={"/interiordesigning"} className="text-decoration-none fw-semibold textclr">
                       <p className='poppins'>VIEW PROJECTS </p> </Link>
                   </div>
                </div>

{/* Card 3 */}
                <div className='w-[18rem] relative bg-slate-50 shadow'>
                    <img src={require("../Asset/card3.jpg")} alt="" />
                    <div className='bgclr absolute top-[35%] left-4 w-fit p-2'>
                     <img width={50} src={require("../Asset/agreement.png")} alt="" />
                    </div>
                   <div className='mt-3 p-4'>
                   <h4>Renovation</h4>
                    <p>We offer a fully integrated service that complements the architectural concept, we ensure all projects.

                    </p>
                    <Link to={"/renovation"} className="text-decoration-none fw-semibold textclr">
                       <p className='poppins'>VIEW PROJECTS </p> </Link>
                   </div>
                </div>
                {/* Card 4  */}
                <div className='w-[18rem] relative bg-slate-50 shadow'>
                    <img src={require("../Asset/card1.jpg")} alt="" />
                    <div className='bgclr absolute top-[35%] left-4 w-fit p-2'>
                     <img width={50} src={require("../Asset/house.png")} alt="" />
                    </div>
                   <div className='mt-3 p-4'>
                   <h4>Real Estate</h4>
                    <p>We offer a fully integrated service that complements the architectural concept, we ensure all projects.

                    </p>
                    <Link to={"/realestate"} className="text-decoration-none fw-semibold textclr">
                       <p className='poppins'>VIEW PROJECTS </p> </Link>
                   </div>
                </div>
 
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default HomeServices