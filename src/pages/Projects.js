import React from 'react';
import { Link } from 'react-router-dom';
import featherspot from '../images/featherspot.png';
import expenseTracker from '../images/expenseTracker.png';
import boatClone from '../images/boatClone.png';
import {useState} from 'react';
import countryroad from '../images/countryroad.jpg';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';


const Projects = () => {

    
  return (
    <div className={`lg:flex-col lg:translate-y-20 lg:flex  
     lg:justify-center lg:items-center font-melodrama text-black tracking-widest lg:relative `}>
        <div className='md:-translate-y-5 mobile:translate-y-10 lg:-translate-y-16 m-auto'>
            <Navbar className='z-10 absolute top-0'/>
        </div>
        <div className='bg-white w-3/4 m-auto h-px justify-center mobile:translate-y-10 lg:-translate-y-2'></div>

        <div className='mobile:flex mobile:flex-col mobile:items-center mobile:gap-8 mobile:translate-y-24 mobile:-translate-x-5 
        
        lg:-translate-x-0
        lg:flex lg:flex-col lg:items-center lg:gap-8 lg:translate-y-0  '>
            <div className={`lg:flex lg:gap-14 lg:absolute lg:top-8 lg:-right-24 transition ease-in-out duration-500 hover:scale-x-125 hover:scale-y-125 `}>
            <div className='lg:flex lg:flex-col  w-3/4 text-center m-auto'>
            <div className='  mobile:flex'>
                
                <h2 className=' lg:text-6xl mobile:text-2xl'>1.FEATHERSPOT</h2>

            </div>
            
            <div className='lg:flex lg:justify-between lg:mx-6 lg:mt-3 mobile:flex text-white font-thin  mobile:justify-between mb-4 '>
                <p>IN-PROGRESS</p>
                <p>MARCH-APRIL 2023</p>
            </div>
            

        </div>
        <img alt='featherspot' src={featherspot} className='mobile:w-3/4 mobile:m-auto md:w-[28rem] '></img>

        <div className='bg-white w-3/4 h-px justify-center md:hidden mobile:block mt-3 m-auto'></div>

        </div>
        
        

        <div className={`lg:flex lg:flex-col lg:w-[40rem] lg:absolute lg:top-64 lg:-right-36 transition ease-in-out duration-500 hover:scale-x-125 hover:scale-y-125 mobile:w-3/4 `}>
            <div className='lg:flex lg:gap-4'>
                
                
                  <div className='lg:flex lg:flex-col '>
                    <h2 className='mobile:text-xl md:text-2xl lg:translate-x-72'>2. BOAT CLONE</h2>
                <div className='flex lg:gap-10 mt-1 lg:justify-between font-thin text-white mobile:justify-between mb-4 lg:translate-x-72'>
                    
                    <p>COMPLETED</p>
                    <p>MARCH 2023</p>
                </div>
                <img alt='boat clone' src={boatClone} className='w-[20rem] rounded-xs lg:-translate-y-20 lg:-translate-x-10'></img>

                </div>
                

                 <div className='bg-white w-3/4 h-px justify-center md:hidden mobile:block mt-3 m-auto'></div>
              
                
            </div>
            
            

        </div>

        <div className={`lg:flex w-[48rem] lg:w-72 lg:absolute lg:top-[20rem] lg:-right-64 mt-5 transition ease-in-out duration-500 hover:scale-x-125 hover:scale-y-125 mobile:w-3/4 `} >
            
            <div className='lg:flex '>
                

            <div className='lg:-translate-x-6'><div className='flex gap-2'>
                <p>3.</p>
                <h2 className='md:text-4xl mobile:text-xl '>EXPENSE TRACKER</h2>

            </div>
            
            <div className='lg:flex  lg:justify-between text-white lg:text-md font-thin mobile:flex mobile:justify-between lg:flex-col lg:translate-x-6'>
                <p>
                    IN-PROGRESS
                </p>
                <p className='mr-4'>
                    APRIL 2023
                </p>
            </div></div>
            
            <img src={expenseTracker} alt='expense tracker' className='w-[20rem] '></img>
            

        </div>
        
        </div>

        
        </div>


        

        
        <img src={countryroad} alt='sea' className='absolute lg:-top-20 lg:right-0 -z-10  w-screen mobile:h-[64rem] lg:object-cover lg:h-screen
        mobile:object-cover  mobile:-top-20 sm:right-0'></img>
    </div>

  )
}

export default Projects