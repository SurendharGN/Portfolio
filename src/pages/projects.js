import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='lg:flex lg:flex-col font-melodrama border-2 border-black h-[43rem] bg-[#EFEFEF] justify-center items-center'>
        <header className='lg:flex lg:justify-between w-3/4'>
            <h1>Projects</h1>
            <div className='flex gap-10'>
                <p>SurendharGN</p>
            <div id="email" className='lg:h-28 lg:w-28 bg-white rounded-full flex items-center justify-center border border-black lg: -translate-y-10'>
                <Link>Email</Link>
            </div>

            </div>
            
        </header>
        <main className='lg:flex lg:flex-col w-3/4   gap-10 '>
            <div className='bg-white h-64 '>

            </div>
            <div className='lg:flex h-48 gap-10 '>
                <div className='bg-white h-48 w-3/4'>

                </div>
                <div className='bg-white h-48 w-3/4'>

                </div>
            </div>

        </main>

    </div>
  )
}

export default Projects