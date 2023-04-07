import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='lg:flex lg:flex-col'>
        
        <ul className='flex gap-10 font-melodrama text-black justify-center items-center translate-y-10 '>
        <li className='text-2xl hover:blur-none transition ease-in-out duration-300 hover:scale-x-150 hover:scale-y-150 hover:font-medium'>
            <Link to='/About'>ABOUT</Link>
        </li>

        <li className='text-2xl hover:blur-none transition ease-in-out duration-300 hover:scale-x-150 hover:scale-y-150 hover:font-medium'>
             <Link key='project' to='/projects'>PROJECTS</Link>
        </li>
        
        <li>
             <Link to='/' className='text-white text-4xl blur-xs  hover:blur-none transition ease-in-out duration-300 hover:scale-x-150 hover:scale-y-150 hover:font-medium'>SurendharGN</Link>
        </li>
        
        <li className='text-2xl hover:blur-none transition ease-in-out duration-300 hover:scale-x-150 hover:scale-y-150 hover:font-medium'>
             <Link>RESUME</Link>
        </li>
        
        <li className='text-2xl hover:blur-none transition ease-in-out duration-300 hover:scale-x-150 hover:scale-y-150 hover:font-medium'>
             <Link className=''>HIRE ME</Link>
        </li>

      
        

    </ul>
    </div>
    
  )
}

export default Navbar