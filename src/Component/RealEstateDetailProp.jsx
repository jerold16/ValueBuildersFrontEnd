import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import TittleBanner from './TittleBanner'
import { Modal } from 'react-bootstrap'
import Slider from 'react-slick' 
import NavBarHome from './NavBar'
import axios from 'axios'
const RealEstateDetailProp = () => {
    let {pid}=useParams() //we have to destucture the object with {}
    const settings = {
        className: "center",
        infinite: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      let [data,setdata]=useState([])
    let propertydetail={
        "id":12,
        "title":"Lyon",
        "category":"plot",
        "img":[
          "../Asset/project-6.jpg",
          "../Asset/project-2.jpg",
          "../Asset/project-3.jpg",
          "../Asset/project-4.jpg",
          "../Asset/project-5.jpg",
          "../Asset/project-1.jpg",
        ],
        "price":345,
        "door_facing":"east",
        "bedroom":"2BHK"
      }
      let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0,0)
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
        setTimeout(() => {
          setanime("")
        }, 2000);
      // console.log(anime); 
      },[])
      useEffect(()=>{
        let getdata=async()=>{
          await axios.get(`https://backendapi.valuebuilders.in/api/unique_property/${pid}`)
          .then((response)=>{
            setdata(response.data);
            console.log(response.data);
          })
          .catch((err)=>{
            console.log(err);
          })
        }
        getdata();
      },[])
      let [show,setshow]=useState(false)
      let currentPageUrl=window.location.href;
  return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
    <NavBarHome/>
    {/* Property */}
    <h1 className='d-none'>Property Page of the Value Builders</h1>
     <div className='p-4 container mx-auto row'>
        {/* Image */}
       <div onClick={()=>setshow(true)} className='col-lg-7 my-2 flex cursor-pointer min-h-[450px]'>
         <div className='p-2 lg:w-[60%]'>
            <img className='h-[450px] md:w-full' src={propertydetail.img[0]} alt="Image2" />
         </div>
         <div className='d-none w-[38%] d-md-flex justify-between flex flex-col p-2 ps-0'>
                        <img src={propertydetail.img[1]} className='h-[220px] w-full' alt="Image2" />
                  <div className='relative'>
                       <img src={propertydetail.img[2]} className='h-[220px] w-full' alt="Image3" />
                        <p className='absolute flex align-items-center justify-content-center w-full h-full top-0 ' style={{backgroundColor:"rgb(0,0,0,0.7)"}}>
                      { propertydetail.img.length>3 ? 
                        <span className=' text-white w-fit text-3xl'>
                       {propertydetail.img.length-3} </span> : " "
                      }
                        </p>
                  </div>
         </div>
        </div>
 {/* Content */}
           <div className='col-lg-5 flex align-items-center min-h-[450px] xl:h-[450px] xl:overflow-y-scroll scroll-bar my-2'>
                 <div>
                 <div className='row'>
                <p className='col-sm-6 rounded p-2'> <span className='textclr'> Total Area </span>  : Vidhaya villas </p>
                <p className='col-sm-6 rounded p-2'> <span className='textclr'> Build type </span>  : Vidhaya villas </p>
               </div>
               <p className=''><span className='textclr'>Description :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error, molestias at ducimus placeat pariatur aperiam culpa consectetur velit sit? </p>
               <p className=''><span className='textclr'>Address :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error, molestias at ducimus placeat pariatur aperiam culpa consectetur velit sit? </p>
               <div className='row'>
               {
                (propertydetail.door_facing) ? <p className='col-sm-6'>
                  <span className='textclr'> Door facing </span>  : {propertydetail.door_facing} 
                </p>  : ""
               }
               {
                (propertydetail.bedroom) ? <p className='col-sm-6'>
                  <span className='textclr'> Rooms </span>  : {propertydetail.bedroom} 
                </p>  : ""
               }
               </div>
              <button className='p-2 bg-red-600 text-slate-50 rounded'>Get Owner Details</button>
          
                 </div>
           
           </div>


     </div>
        
     <Modal dialogClassName="dark-modal" show={show} fullscreen={true}>
        <Modal.Header>
          <div>
           <div className='d-flex justify-between w-[95vw] mx-auto'>
              <p className='w-fit text-xl lg:text-3xl'>2BHK Apartment in the HSR Layout</p> 
              <img onClick={()=>setshow(false)} className='w-[20px] h-[20px] cursor-pointer' src={require("../Asset/letter-x.png")} alt="Image4" />
           </div>
          <div className='w-[95vw] flex justify-between '>  
             <div className='flex align-items-center w-fit gap-2 lg:text-2xl'>
            Share : 
             <a href={`https://wa.me/?text=${currentPageUrl}`} target='_blank'> <img className='w-[23px] h-[23px] cursor-pointer ' src={require("../Asset/whatsapp (1).png")} /></a>            
              </div>
            {/* Get Owner button */}                         
                 <button className='p-2 bg-red-600  text-slate-50 rounded'>Get Owner Details</button>  
              </div>
          </div>
        </Modal.Header>
        <div className=' h-[80vh] p-2'>
            <div className='p-3 container my-20 lg:my-40 xl:my-20' >
            <Slider {...settings}>
               
                {
                    propertydetail.img.map((im)=>{
                        return(
                           <div className='xl:h-[50vh]'> 
                                <img className='' src={im} alt="Image5" />
                            </div>
                        )
                    })
                }
            </Slider>
            </div>


        </div>
      </Modal>
    </section>
  )
}

export default RealEstateDetailProp