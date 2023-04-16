import React from 'react';
import Contact from './Contact';
import countryroad from '../images/countryroad.jpg'
import Navbar from './Navbar';







const Main = () => {
  return (
    <div className='text-center lg:flex justify-center font-melodrama items-center lg:flex-col text-white translate-y-20 '>
        <div className='md:-translate-y-16 mobile:-translate-y-10'>
            <Navbar className='z-10 absolute top-0'/>
        </div>

        <div className='translate-y-2  w-3/4 h-px bg-white mobile:m-auto'></div>

        <h1 className='lg:text-[23rem] md:-translate-y-10 font-bold blur-xs mobile:text-[12rem] text-center md:text-[18rem]'>WEB</h1>
        
        <h2 className='text-center font-stardom lg:text-6xl md:-translate-y-36 mobile:-translate-y-10  blur-xs mobile:text-3xl'>Enthusiast</h2>
        
        <Contact />
        
        
        

        <img src={countryroad} alt='sea' className='absolute lg:-top-20 lg:right-0 -z-10 h-screen w-screen 
        lg:object-fill mobile:object-cover mobile:-top-20 sm:right-0'></img>
        
    </div>
  )
}

export default Main