import React from 'react';
import html from '../images/html.png';
import reactjs from '../images/reactjs.png';
import javascript from '../images/javascript.png';
import figma from '../images/figma.png';
import tailwind from '../images/tailwind.png';
import css from '../images/css.png';
import nextjs from '../images/nextjs.png';
import {Link} from 'react-router-dom'

const Skills = () => {

    // className='transition ease-in-out duration-900 hover:scale-x-125 hover:scale-y-125'
  return (
    <div className='flex flex-col gap-10 justify-center font-melodrama text-4xl  items-center translate-y-36 text-white '>
        <div className='bg-white w-3/4 h-px justify-center -translate-y-16'></div>
        <div className='flex  '>

            <div className='flex transition ease-in-out duration-900 hover:scale-x-110 hover:scale-y-110' >
                <h3 className='mr-5 text-black'>Markup language:</h3>
            <img src={html} alt='html' className='h-12 blur-xs mr-5'></img>
            <p  className='mr-5'>HTML</p>
            </div>
            
            <div  className='flex transition ease-in-out duration-900 hover:scale-x-110 hover:scale-y-110'>
                <div className='flex '>
                <h3  className='mr-5 text-black'>Styling:</h3>
            <img src={css} alt='css' className='h-12 blur-xs mr-5'></img>
            <p  className='mr-5'>CSS</p>
            </div>
            
        
            <div className='flex '>
                <img src={tailwind} alt='tailwind' className='h-10 blur-xs mr-5 '></img>
            <p  className='mr-5'>Tailwind CSS</p>
            </div>
            </div>
            
            
        
            <div className='flex transition ease-in-out duration-900 hover:scale-x-110 hover:scale-y-110'>
                <h3  className='mr-5 text-black'>Scripting language:</h3>
            <img src={javascript} alt='javascript' className='h-12 blur-xs mr-5'></img>
            <p>JavaScript</p>
            </div>
            
        </div>

        <div className='bg-white w-36 h-px justify-center'></div>

        <div className='flex transition ease-in-out duration-900 hover:scale-x-110 hover:scale-y-110'>
            <div className='flex '>
                <h3  className='mr-5 text-black'>Frameworks:</h3>
            <img src={reactjs} alt='reactJS' className='h-12 blur-xs mr-5'></img>
            <p  className='mr-5'>ReactJS</p>
            </div>
            
        
            <div className='flex '>
                <img src={nextjs} alt='nextJS' className='h-5 blur-xs mr-5 translate-y-2'></img>
            <p>NextJS</p>
            </div>
            
        </div>
        
        <div className='bg-white w-36 h-px justify-center'></div>

        <div className='flex text-white'>
            <div className='flex transition ease-in-out duration-900 hover:scale-x-110 hover:scale-y-110'> 
                <h3  className='mr-5 text-black'>Design:</h3>
                <img src={figma} alt='figma' className='h-12 mr-5 blur-xs'></img>
                <p>Figma</p>
                
            </div>

        </div>
        
        <Link to='/' className='text-4xl hover:scale-x-125 hover:scale-y-125 transition ease-in-out duration-300 '>Home</Link>
        
        
        
        
        
    </div>
  )
}

export default Skills