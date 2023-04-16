import React from 'react';
import { Link } from 'react-router-dom';
import featherspot from '../images/featherspot.png';
import expenseTracker from '../images/expenseTracker.png';
import boatClone from '../images/boatClone.png';
import {useState} from 'react';
import countryroad from '../images/countryroad.jpg';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import ProjectLink from '../components/ProjectLink';

const Projects = () => {


    

    
  return (
    <div className={`lg:flex-col lg:translate-y-20 lg:flex  
     lg:justify-center md:justify-center lg:items-center font-melodrama text-black tracking-widest lg:relative mobile:flex mobile:flex-col mobile:justify-start`}>
        <div className='md:-translate-y-5 mobile:translate-y-10 lg:-translate-y-16 m-auto'>
            <Navbar className='z-10 absolute top-0'/>
        </div>
        <div className='bg-white w-3/4 m-auto h-px justify-center mobile:translate-y-10 lg:-translate-y-2 '></div>

        <div className='mobile:flex mobile:flex-col mobile:items-center mobile:gap-8 mobile:translate-y-24 mobile:-translate-x-5 mobile:mt-5
        
        lg:-translate-x-0
        lg:flex lg:flex-col lg:items-center lg:gap-8 lg:translate-y-0
        
        font-bold'>
            <div className={`lg:flex lg:gap-14 lg:absolute lg:top-8 lg:-right-24 md:w-[32rem] md:text-left md:translate-x-64 `}>
            <div className='lg:flex lg:flex-col  mobile:w-3/4 text-left m-auto '>
            <div className=' mobile:flex'>
                
                <h2 className=' lg:text-6xl mobile:text-2xl '>1.FEATHERSPOT</h2>

            </div>
            <p className='text-[14px] tracking-widest mt-3 text-[rgb(83,83,83)]'>A Design-to-Code generator that can generate a prototype code that acts as a catalyst to the development of a MVP.</p>
            
            <div className='lg:flex lg:justify-between lg:mx-6 lg:mt-3 mobile:flex text-[rbg(73,73,73)] font-thin  mobile:justify-between mb-4 md:-translate-x-6'>
                <p>IN-PROGRESS</p>
                <p>MARCH-APRIL 2023</p>
            </div>
            <div className='mobile:hidden md:block md:-translate-x-11'>
            <ProjectLink/>
        </div>
            

        </div>
        <img alt='featherspot' src={featherspot} className='mobile:w-3/4 mobile:m-auto md:w-[28rem] '></img>
        <div className='md:hidden'>
            <ProjectLink/>
        </div>
        

        <div className='w-32 justify-center flex bg-white h-px ml-11 mt-8'></div>
        
        </div>
        
        
        
        
        

        <div className={`lg:flex lg:w-[30rem] lg:absolute lg:top-72 lg:right-40 transition ease-in-out duration-500 mobile:ml-12  md:w-[10rem] mobile:-translate-y-2 mobile:text-left `}>
            <div className='lg:flex lg:gap-4'>
                
                
                  <div className='lg:flex lg:flex-col  '>
                    <h2 className='mobile:text-xl md:text-2xl lg:translate-x-72'>2. BOAT CLONE</h2>
                    <p className='text-[14px] text-[rgb(83,83,83)] tracking-widest mt-3 md:translate-x-72'>Clone of a headphones brand upon which all the CRUD operations may be performed.</p>
                    
                <div className='flex lg:gap-10 mt-1 lg:justify-between font-thin text-[rgb(73,73,73)] mobile:gap-32 mb-4 lg:translate-x-72'>
                    
                    <p>COMPLETED</p>
                    <p>MARCH 2023</p>
                
                
                </div>
                <div className='md:translate-x-60 md:-translate-y-6'>
                    <ProjectLink/>
                </div>

                <img alt='boat clone' src={boatClone} className='mobile:w-[17rem] md:w-[20rem] rounded-xs lg:-translate-y-44 lg:-translate-x-10'></img>

                </div>
                <div className='mobile:-translate-x-11 mobile:w-80 md:hidden'>
                    <ProjectLink />
                </div>

                <div className='w-32 justify-center flex bg-white h-px  mt-8'></div>
                
                

              
                
            </div>
            
            

        </div>

        

        <div className={`lg:flex w-[48rem] lg:w-16 lg:absolute md:top-[23rem] md:-right-32 mt-5 transition ease-in-out duration-500   mobile:-translate-y-8 mobile:w-5/6 mobile:translate-x-4`} >
            
            <div className='lg:flex '>
                

            <div className=' lg:-translate-x-6'><div className='flex gap-2'>
                <p>3.</p>
                <h2 className=' md:text-4xl mobile:text-2xl'>EXPENSE TRACKER</h2>

            </div>
            <p className='text-[14px] tracking-widest mt-3 text-[rgb(83,83,83)]'>An expense tracker application that generates a doughnut chart of the incomes and expenses and stores the history of finances.</p>
            
            <div className='lg:flex  lg:justify-between  lg:text-md font-thin mobile:flex mobile:gap-32  lg:translate-x-6 text-[rgb(73,73,73)]'>
                <p>
                    IN-PROGRESS
                </p>
                <p className='mr-4'>
                    APRIL 2023
                </p>
            </div>
                 <div className='mobile:-translate-11 mobile:w-80 mobile:-translate-x-11'>
                <ProjectLink/>
            </div>
            </div>
           
            
            <img src={expenseTracker} alt='expense tracker' className='w-[17rem] '></img>

            <div className=' md:hidden mobile:-translate-11 mobile:w-80 mobile:-translate-x-11'>
                <ProjectLink/>
            </div>
            
            

        </div>
        
        </div>

        
        </div>


        

        
        <img src={countryroad} alt='sea' className='absolute lg:-top-20 lg:right-0 -z-10  w-screen mobile:h-[88rem] lg:object-cover lg:h-screen
        mobile:object-cover md:h-[72rem] mobile:-top-20 sm:right-0  opacity-50'></img>
    </div>

  )
}

export default Projects
