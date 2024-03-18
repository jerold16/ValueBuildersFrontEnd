import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { act } from 'react-dom/test-utils'
import { Link, useNavigate } from 'react-router-dom'

const NavBarHome = () => {
  let [show,setshow]=useState(false)
  const [activated,setactive]=useState("")
  useEffect(()=>{
    setactive(sessionStorage.getItem("page"))
    // console.log(activated);
  },[])
  let navigate=useNavigate()
  // console.log(activated);
  return (
    <section className='sticky-top'>
         <Navbar key="lg" expand="lg" className="bg-body-tertiary transi py-1">
          <Container fluid className='justify-content-lg-around '>
            <Navbar.Brand href="#">
               <img className='w-[150px] ' src={require("../Asset/ValueBuilderLogo.png")} alt="" />

            </Navbar.Brand>
            <div className=''>
            <Navbar.Toggle onClick={()=>setshow(true)} aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas className="transi p-3"
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              show={show}
            >
              <Offcanvas.Header >
             
                <img className='w-[100px] ' src={require("../Asset/LogoValueBuilders.png")} alt="" />
                <img onClick={()=>setshow(false)} className='w-[20px] h-[20px] ' src={require("../Asset/close (2).png")} alt="" />
               
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between worksan transi lg:align-items-center fw-light flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{setactive("home");sessionStorage.setItem("page","home");setshow(false);
                  navigate("/")}} ><p style={{color: activated=="home"? "rgb(191,202,2)": ""}}
                  className='text-slate-800 transition duration-700 px-xl-3 text-decoration-none mb-0 hover:text-lime-600'>Home</p>
                  </Nav.Link>
                  <Nav.Link onClick={()=>{setactive("construction");sessionStorage.setItem("page","construction");setshow(false);
                  navigate("/construction")}} ><p style={{color: activated=="construction"? "rgb(191,202,2)": ""}}
                  className='text-slate-800 transition duration-700  px-xl-3 text-decoration-none mb-0 hover:text-lime-600'>Contruction</p> 
                  </Nav.Link>
                  <Nav.Link onClick={()=>{setactive("interiordesigning");sessionStorage.setItem("page","interiordesigning");setshow(false);
                  navigate("/interiordesigning")}}>
                    <p style={{color: activated=="interiordesigning"? "rgb(191,202,2)": ""}} className={`text-slate-800 transition px-xl-3 duration-700 text-decoration-none mb-0 hover:text-lime-600`}>Interior</p> 
                  </Nav.Link>
                  <Nav.Link onClick={()=>{setactive("renovation");sessionStorage.setItem("page","renovation");setshow(false);
                  navigate("/renovation")}} ><p style={{color: activated=="renovation" ? "rgb(191,202,2)": ""}}  className='text-slate-800 transition duration-700 px-xl-3 text-decoration-none mb-0 hover:text-lime-600'>Renovation</p> 
                  </Nav.Link>
                  <Nav.Link onClick={()=>{setactive("realestate");sessionStorage.setItem("page","realestate");setshow(false);
                  navigate("/realestate")}} ><p style={{color: activated=="realestate" ? "rgb(191,202,2)": ""}} className='text-slate-800 transition duration-700  px-xl-3 text-decoration-none mb-0 hover:text-lime-600'>Real Estate</p> 
                  </Nav.Link>
                  {/* <Nav.Link href="#action2"><p className='text-slate-800 transition duration-700 text-decoration-none mb-0 hover:text-lime-600'>Blog</p> 
                  </Nav.Link> */}
                  <Nav.Link onClick={()=>{setactive("paint");sessionStorage.setItem("page","paint");setshow(false);
                  navigate("/paintworks")}} ><p style={{color: activated=="paint" ? "rgb(191,202,2)": ""}} className='text-slate-800 transition duration-700 px-xl-3 text-decoration-none mb-0 hover:text-lime-600'>Paint</p> 
                  </Nav.Link>
                  <Nav.Link onClick={()=>{setactive("contact");sessionStorage.setItem("page","contact");setshow(false);
                  navigate("/contact")}} ><p style={{color: activated=="contact" ? "rgb(191,202,2)": ""}} className='text-slate-800 transition duration-700 px-xl-3 text-decoration-none mb-0 hover:text-lime-600'>Contact</p> 
                  </Nav.Link>


                 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas></div>
            <div className='d-none w-[150px] d-lg-block'>
                (+123) 456789123
            </div>
          </Container>
         
        </Navbar>
    </section>
  )
}

export default NavBarHome