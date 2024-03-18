import React, { useEffect, useState } from 'react'
import NavBarHome from './NavBar';
import { useParams } from 'react-router';
import TittleBanner from './TittleBanner';
import Contentsection1 from './Contentsection1';
import ContentSection2 from './ContentSection2';

const PaintSubpage = () => {
    let {type}=useParams()
    let [anime, setanime] = useState("");
    useEffect(() => {
      window.scrollTo(0, 0);
      setanime("animate__fadeIn");
      sessionStorage.setItem("page", "paint");
      const element = document.querySelector(".durationani");
      element.style.setProperty("--animate-duration", "4s");
    }, []);
    let contentobj = {
        img: "../Asset/house5.jpeg",
        title: `${type} painting`,
        para1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto perspiciatis quos alias quas labore porro ad, magnam, doloribus illo neque? Sit tenetur eum optio deserunt. Sapiente voluptatem amet accusantium corporis quod voluptatum nisi, non natus impedit possimus veritatis commodi consequatur animi beatae doloremque repellat perspiciatis ratione labore a tenetur?`,
        para2: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iusto perspiciatis quos alias quas labore porro ad, magnam, doloribus illo neque? Sit tenetur eum optio deserunt. Sapiente voluptatem amet accusantium corporis quod voluptatum nisi, non natus impedit possimus veritatis commodi consequatur animi beatae doloremque repellat perspiciatis ratione labore a tenetur?`,
      };
    let contentsection2={
        "para1":` At Value Builder, we understand that your home is more than just a
        structure; it's where your dreams take shape. With our unwavering
        commitment to quality craftsmanship, trusted reputation, and adherence
        to Vastu principles, we ensure that every aspect of your home reflects
        excellence and harmony. Our team of experienced architects and
        builders meticulously craft each home, combining innovative design
        with traditional wisdom to create spaces that resonate with your
        lifestyle and values.`,
        "para2":`From the moment you entrust us with your vision, we prioritize your
        satisfaction, working tirelessly to bring your dream home to life
        while keeping costs reasonable and transparent. By leveraging our
        expertise and industry connections, we source high-quality materials
        and employ efficient construction techniques to deliver superior
        results without compromising on quality. With 10 years of experience
        in the industry, we've earned the trust of countless homeowners who
        rely on us to transform their aspirations into reality. Whether you're
        looking for a modern masterpiece or a cozy retreat, trust Value
        Builders to build your dream home with integrity, innovation, and
        affordability.`,
        "title":` Building Dreams with Quality, Trust, and Vastu-aligned Architecture`
    }
    return (
      <section
        id="home"
        className={`${anime} animate__animated transi durationani `}
      >
        <NavBarHome />
        <TittleBanner img="../Asset/PaintingBanner.webp" 
        name={type + ` Painting`} 
        line="Architecture & Interior Html Template." />
        <Contentsection1 content={contentobj}/>
        <ContentSection2 content={contentsection2}/>
        


    </section>
  )
}

export default PaintSubpage