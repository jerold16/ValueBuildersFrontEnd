import React from 'react'
import Slider from 'react-slick'

const CompanySlider = () => {
    var symbolsettings = {
        speed: 500,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows : false,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true
    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      };
      let company=[
        {
            "img":"../Asset/sponsor1.png"
        },
        {
            "img":"../Asset/sponsor2.png"
        },
        {
            "img":"../Asset/sponsor3.png"
        },
        {
            "img":"../Asset/sponsor4.png"
        },
        {
            "img":"../Asset/sponsor5.png"
        },
        {
            "img":"../Asset/sponsor6.png"
        },
        {
            "img":"../Asset/sponsor7.png"
        },
        {
            "img":"../Asset/sponsor8.png"
        }
      ]
  return (
    <div className='container'>
        <Slider {...symbolsettings}>
            {
                company.map((com)=>{
                    return(
                        <div className=''>
                            <img src={com.img} alt="" />
                        </div>
                    )
                })

            }

        </Slider>
    </div>
  )
}

export default CompanySlider