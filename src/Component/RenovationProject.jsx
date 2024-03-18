import React from 'react'
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick'

const RenovationProject = () => {
    let projectdata=[
        {
            "id":1,
            "title":"Heading",
            "content":`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Tempore ducimus, adipisci odit, quos laudantium voluptatum officiis debitis repellat, qui
             libero voluptatem impedit in maiores!`,
             "img":"../Asset/banner2.jpg"
        },
        {
            "id":2,
            "title":"Heading2",
            "content":`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Tempore ducimus, adipisci odit, quos laudantium voluptatum officiis debitis repellat, qui
             libero voluptatem impedit in maiores!`,
             "img":"../Asset/banner1.jpg"
        },
        {
            "id":3,
            "title":"Heading3",
            "content":`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Tempore ducimus, adipisci odit, quos laudantium voluptatum officiis debitis repellat, qui
             libero voluptatem impedit in maiores!`,
             "img":"../Asset/banner3.jpg"
        },
        {
            "id":4,
            "title":"Heading",
            "content":`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Tempore ducimus, adipisci odit, quos laudantium voluptatum officiis debitis repellat, qui
             libero voluptatem impedit in maiores!`,
             "img":"../Asset/HomeBanner1.jpg"
        },
        {
            "id":5,
            "title":"Heading5",
            "content":`Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Tempore ducimus, adipisci odit, quos laudantium voluptatum officiis debitis repellat, qui
             libero voluptatem impedit in maiores!`,
             "img":"../Asset/HomeBanner2.jpg"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className='xl:min-h-[86vh] 2xl:min-h-[50vh]  2xl:my-20  my-20 xl:my-0 flex'>
   <div className='container my-auto mx-auto'>
    <div className='relative right-4 w-fit mx-auto'>
           <div className='w-[40px] h-[40px] border-4 border-lime-600'>
           </div>
           <p className='absolute top-2 fw-semibold worksan mb-0 left-6 uppercase'>Project</p>
       </div>
       <p className='text-3xl mx-auto relative left-4 my-4 w-fit fw-semibold poppins'>Latest work</p>
    
    <Slider {...settings} className='container'>
    {
        projectdata.map((data)=>{
            return(
        <div>
            <div className='container min-h-[350px] p-3 flex flex-col sm:flex-row'>
            <img className='sm:w-2/5 h-11/12' src={data.img} alt="" />
            <div className='m-4 flex align-items-center'>
                <div>
                <p className='text-2xl fw-semibold poppins'>{data.title} </p>
                <p className='text-slate-500 sourcesan sm:w-4/5'>{data.content} </p>
                <button className='uppercase p-3 text-sm bgclr text-slate-50'>view project</button>
                </div>
            </div>
        </div>
    </div>
            )
        })
    }
</Slider>

    


    </div>
   </div>

  )
}

export default RenovationProject