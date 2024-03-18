import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MoveUp = () => {
    const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
        const scrollHeightToShowColorChange = 600; // Adjust the scroll height as needed
        if (window.scrollY > scrollHeightToShowColorChange) {
          setScrolled(true);
          // Additional actions when scrolled beyond a certain height
          // For example, change other state variables, trigger animations, etc.
        }
         else {
          setScrolled(false);
          // Additional actions when scrolled back to the top or below the specified height
        }
      };
      window.addEventListener('scroll', handleScroll);
     
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <div style={{display:scrolled? "block" : "none"}} className='position-fixed bottom-3 left-10 z-10'>
      <a href="#home" className='bgclr p-2 w-[50px] h-[50px]  flex align-items-center justify-center rounded-full'>
        <img src={require("../Asset/arrowup.png")} className='w-[25px] h-[30px] ' alt="" />  
        </a>
    </div>
  )
}

export default MoveUp