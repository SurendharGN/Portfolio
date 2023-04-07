import React from 'react';
import { Link } from 'react-router-dom';
import featherspot from '../images/featherspot.png';
import expenseTracker from '../images/expenseTracker.png';
import boatClone from '../images/boatClone.png';
import {useState} from 'react'


const Projects = () => {

    
  return (
    <div className={`lg:flex-col lg:translate-y-20 lg:flex  
     lg:justify-center lg:items-center font-melodrama text-black font-bold tracking-widest lg:relative `}>
        
        <div className='bg-white w-3/4 h-px justify-center'></div>
        <div className={`lg:flex lg:gap-5 lg:absolute lg:top-12 lg:right-44 transition ease-in-out duration-500 hover:scale-x-125 hover:scale-y-125 hover:blur-xs `}>
            <div className='lg:flex lg:flex-col'>
            <div className='lg:flex lg:gap-3'>
                <p className='font-bold text-3xl translate-y-1'>1.</p>
                <h2 className='font-bold lg:text-6xl'>FEATHERSPOT</h2>

            </div>
            
            <div className='lg:flex lg:justify-between mx-6 mt-3 text-white font-thin'>
                <p>IN-PROGRESS</p>
                <p>MARCH-APRIL 2023</p>
            </div>
            

        </div>
        <img alt='featherspot' src={featherspot} className='w-[28rem]'></img>

        </div>
        
        

        <div className={`lg:flex lg:flex-col lg:w-[40rem] absolute top-48 left-36 transition ease-in-out duration-500 hover:scale-x-125 hover:scale-y-125  `}>
            <div className='lg:flex lg:gap-4'>
                
                <p>2.</p>
                <img alt='boat clone' src={boatClone} className='w-[20rem] rounded-xs'></img>
                <div className='lg:flex lg:flex-col '>
                    <h2 className='font-bold text-2xl'>BOAT CLONE</h2>
                <div className='flex lg:gap-10 mt-1 lg:justify-between font-thin text-white'>
                    
                    <p>COMPLETED</p>
                    <p>MARCH 2023</p>
                </div>

                </div>
                
            </div>
            
            <p className='text-white mt-3 translate-x-7 text-2xl font-thin'>An e-commerce clone of a headphones brand</p>

        </div>

        <div className={`lg:flex w-[42rem] absolute top-[26rem] right-60 mt-5 transition ease-in-out duration-500 hover:scale-x-125 hover:scale-y-125 `} >
            <div className='lg:flex lg:flex-col'>
            <div className='flex gap-2'>
                <p>3.</p>
                <h2 className='text-4xl font-bold'>EXPENSE TRACKER</h2>
                
            </div>
            
            <div className='lg:flex  lg:justify-between text-white lg:text-md font-thin'>
                <p>
                    IN-PROGRESS
                </p>
                <p className='mr-4'>
                    APRIL 2023
                </p>
            </div>
            <p className='text-white text-xl font-thin '>
                Generates doughnut  charts of the expenses and income of the user. Can store the history of finances.
            </p>

        </div>
        <img src={expenseTracker} alt='expense tracker' className='w-[20rem] rou'></img>
        </div>

        
        
    </div>

  )
}

export default Projects