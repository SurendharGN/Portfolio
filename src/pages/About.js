import React from 'react';
import countryroad from '../images/countryroad.jpg';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='font-melodrama  lg:flex lg:flex-col lg:gap-5 lg:justify-center text-center lg:items-center text-white lg:translate-y-24  '>
        <div className='md:-translate-y-20 mobile:-translate-y-10'>
            <Navbar className='z-10 absolute top-0'/>
        </div>
        <div className='bg-white w-3/4 h-px -translate-y-5 '></div>
        <h2 className='text-5xl mb-10 mt-5'>I'm a web developer based in INDIA</h2>
        <p className='text-3xl w-[72rem] tracking-wide'>I specialize in HTML, CSS, JavaScript and other frontend technologies. I'm always excited to learn new tool and techniques to be in-line with the standards of the field.</p>
        <div className='bg-white w-48 h-px mt-4 '></div>
        <ul className='flex gap-10 text-[1.5rem] '>
            <li className='hoverTransition hover:text-black'>JavaScript</li>
            <li className='hoverTransition hover:text-black'>ReactJS</li>
            <li className='hoverTransition hover:text-black'>NextJS</li>
            <li className='hoverTransition hover:text-black'>TailwindCSS</li>
            <li className='hoverTransition hover:text-black'>Figma</li>
            
        </ul>

        <img src={countryroad} alt='sea' className='absolute lg:-top-24 lg:right-0 -z-10 h-screen w-screen 
        lg:object-fill mobile:object-cover mobile:-top-20 sm:right-0'></img>
        </div>
  )
}

export default About