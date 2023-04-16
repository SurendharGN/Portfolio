import React from 'react';
import countryroad from '../images/countryroad.jpg';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import Contact from '../components/Contact';

const About = () => {
  return (
    <div className=' lg:flex justify-center font-melodrama items-center lg:flex-col text-white translate-y-20 '>
        <div className='md:-translate-y-20 mobile:-translate-y-10 '>
            <Navbar className='z-10'/>
        </div>
        <div className='bg-white w-3/4 h-px lg:-translate-y-4 m-auto mobile:-translate-y-10'></div>
        <div className='flex flex-col mobile:text-left text-[rgb(73,73,73)] mobile:ml-8 mobile:font-bold tracking-[1px] mobile:w-3/4 mobile:text-[16px] mobile:mt-5 md:w-5/6 md:text-center md:items-center'>
            <h2 className='md:text-4xl'> Hey, I'm Surendhar and I'm based in <span className='text-black'>INDIA.</span></h2>
            <h3 className='md:text-2xl md:mb-10 mt-5    mobile:text-left mobile:mb-5 md:w-[80rem] md:text-center  md:tracking-[1px]  md:mt-10'>As a freshman pursuing a major in <span className='text-black'>Artificial Intelligence and Machine Learning</span>, I am passionate to crafting websites that combine cutting-edge technology with intuitive user interfaces to create seamless online experiences.</h3>
            
        
        <p className='text-center lg:text-2xl  md:text-center mobile:text-left md:w-[72rem]'>I specialize in HTML, CSS, JavaScript and other frontend technologies.<br></br><br></br>
        I'm always excited to learn new tool and techniques to be in-line with the standards of the field.</p>
        <div className='mt-5'>
            <p className='mobile:mb-5 md:text-xl md:text-center'>Here are the few technologies I love working with:
            </p>
            <ul className='flex gap-2 text-[16px] text-black md:hidden'>
                <li className='flex gap-2'>
                    JavaScript
                    <div className='w-px h-6 bg-black'></div>
                    
                </li>
                
                <li className='flex gap-2'>
                    TailwindCSS
                    <div className='w-px h-6 bg-black'></div>
                </li>
                <li className='flex gap-2'>
                    ReactJS
                    <div className='w-[0.5px] h-6 bg-black'></div>
                </li>
                <li>
                    NextJS
                </li>
            </ul>
        </div>

        </div>
        
        
        <ul className='md:flex  lg:gap-10 lg:text-[1.5rem] w-screen justify-center m-auto mobile:mt-5 mobile:gap-2 mobile:text-lg mobile:hidden'>
            <li className='hoverTransition hover:text-black'>JavaScript</li>
            <li className='hoverTransition hover:text-black'>ReactJS</li>
            <li className='hoverTransition hover:text-black'>NextJS</li>
            <li className='hoverTransition hover:text-black'>TailwindCSS</li>
            <li className='hoverTransition hover:text-black'>Figma</li>
            
        </ul>
        <Contact className='translate-y-5'/>

        <img src={countryroad} alt='sea' className='absolute lg:-top-20 lg:right-0 -z-10 md:h-screen mobile:h-[56rem] w-screen 
        lg:object-fill mobile:object-cover mobile:-top-20 mobile:opacity-80 md:opacity-100 sm:right-0 '></img>
        </div>
  )
}

export default About