import React from 'react'
import Slider from 'react-slick'
import { Projectdatahome } from './Datas';

const HomeProjects = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
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
  let data=Projectdatahome
  return (
    <div className='my-5'>
        <div className='relative right-4 w-fit mx-auto'>
                <div className='w-[40px] h-[40px] border-4 border-lime-600'>
                </div>
                <p className='absolute top-2 fw-semibold worksan left-6'>Projects</p>
            </div>
        <p className='poppins mx-auto w-fit my-2 fw-bolder text-3xl'>Latest Works</p>
      
        <Slider {...settings} className='my-5'>
        {
            data.map((info)=>{
                return(
                    <div className='w-[18rem] relative'>
                    <img className='block' src={info.img} alt="" />
                    <div id='opchi' className='absolute w-[100%] h-[100%] top-0 transi p-4'>
                        <img id='expandicon' src={require("../Asset/fullscreen.png")} alt="" />
                         <p  className='text-white worksan text-lg relative top-64'>{info.category}</p>
                         <p  className='text-white poppins fw-bold text-3xl  cursor-pointer relative top-64'>
                            {info.title}</p>
                    </div>
        
                </div>
                )
            })
        }
       </Slider>
    </div>
  )
}

export default HomeProjects
