import React from 'react';
import github from '../images/github.png';
import { Link } from 'react-router-dom';
import linkedin from '../images/linkedin.png'

const Contact = () => {
  return (
    <div className='flex gap-3 justify-center mobile:translate-y-5 lg:absolute lg:top-[34rem] lg:translate-y-0'>
            
        <div className='border rounded-full w-10 '>
            <Link to='https://www.linkedin.com/in/surendhar-gn-28a61a270/' target="_blank"><img className='w-10 p-2' src= {linkedin} alt='linkedin-logo'></img></Link>
            
        </div>
        
        <Link to='mailto:work.surendhar@gmail.com' className='border border-white px-4 rounded-full p-2'>CONTACT ME</Link>

        <div className='border rounded-full w-10 '>
            <Link to='https://github.com/SurendharGN' target='_blank'><img className='w-10 ' src= {github} alt='github-logo'></img></Link>
            
        </div>
        </div>
  )
}

export default Contact