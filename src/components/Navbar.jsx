import React from 'react';
import {Link} from 'react-router-dom';





const Navbar = () => {
  return (
    <div className='lg:flex lg:flex-col '>
        
        <ul className='flex lg:gap-10 font-melodrama text-black justify-center items-center translate-y-10 mobile:gap-4  '>
        <li className='lg:text-2xl blur-none hoverTransition mobile:text-md hover:font-medium'>
            <Link to='/About'>ABOUT</Link>
        </li>

        <li className='lg:text-2xl hoverTransition hover:font-medium mobile:text-md'>
             <Link key='project' to='/projects'>PROJECTS</Link>
        </li>
        
        <li className='mobile:absolute mobile:-top-14 md:top-0 md:relative '>
             <Link to='/' className='text-white lg:text-4xl  hoverTransition  hover:font-medium mobile:text-3xl '>SurendharGN</Link>
        </li>
        
        <li className='lg:text-2xl hoverTransition hover:font-medium mobile:text-md'>

            <Link to='/Resume' target="_blank">RESUME</Link>
            
        </li>
        
        <li className='lg:text-2xl hoverTransition hover:font-medium'>
             <Link to='mailto:work.surendhar@gmail.com' className='lg:text-2xl  mobile:text-md'>HIRE ME</Link>
        </li>

      
        

    </ul>
    </div>
    
  )
}

export default Navbar