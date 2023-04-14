import React from 'react';
import countryroad from '../images/countryroad.jpg';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import Contact from '../components/Contact';

const About = () => {
  return (
    <div className='bg-[#e7d7c1] lg:flex justify-center font-melodrama items-center lg:flex-col text-white translate-y-20 '>
        <div className='md:-translate-y-20 mobile:-translate-y-10 '>
            <Navbar className='z-10'/>
        </div>
        <div className='bg-white w-3/4 h-px lg:-translate-y-4 m-auto mobile:-translate-y-10'></div>
        <h2 className='lg:text-5xl mb-10 mt-5 mobile:text-3xl mobile:text-center'>I'm a web developer based in INDIA</h2>
        <p className='text-center text-black  lg:text-3xl font-bold tracking-wide mobile:w-3/4 mobile:text-2xl mobile:m-auto'>I specialize in HTML, CSS, JavaScript and other frontend technologies.<br></br><br></br>I'm always excited to learn new tool and techniques to be in-line with the standards of the field.</p>
        <div className='bg-white lg:w-48 h-px my-4 mobile:w-24 m-auto'></div>
        <ul className='md:flex  lg:gap-10 lg:text-[1.5rem] w-screen justify-center m-auto mobile:mt-5 mobile:gap-2 mobile:text-lg mobile:hidden'>
            <li className='hoverTransition hover:text-black'>JavaScript</li>
            <li className='hoverTransition hover:text-black'>ReactJS</li>
            <li className='hoverTransition hover:text-black'>NextJS</li>
            <li className='hoverTransition hover:text-black'>TailwindCSS</li>
            <li className='hoverTransition hover:text-black'>Figma</li>
            
        </ul>
        <Contact className='translate-y-5'/>

        <img src={countryroad} alt='sea' className='absolute lg:-top-20 lg:right-0 -z-10 h-screen w-screen 
        lg:object-fill mobile:object-cover mobile:-top-20 sm:right-0'></img>
        </div>
  )
}

export default About