import React from 'react';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='font-melodrama  lg:flex lg:flex-col lg:gap-5 lg:justify-center text-center lg:items-center text-white lg:translate-y-24  '><div className='bg-white w-3/4 h-px '></div>
        <h2 className='text-5xl mb-10 mt-5'>I'm a web developer based in INDIA</h2>
        <p className='text-3xl w-[72rem] tracking-wide'>I specialize in HTML, CSS, JavaScript and other frontend technologies. I'm always excited to learn new tool and techniques to be in-line with the standards of the field.</p>
        <div className='bg-white w-56 h-px mt-4 '></div>
        <Link to='/Skills' className=' text-black text-3xl hover:scale-x-150 hover:scale-y-150 transition ease-in-out duration-200'>SKILLS</Link>
        </div>
  )
}

export default About