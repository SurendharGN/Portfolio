import React from 'react';
import { Link } from 'react-router-dom';

const ProjectLink = () => {
  return (
    <div className='mobile:font-thin mobile:ml-11 mobile:flex mobile:gap-4 mobile:mt-5 mobile:text-lg mobile:items-center'>
            <Link>Live site </Link>
            <div className='w-px h-5 bg-white'></div>
            <Link>github </Link>
            <div className='w-px h-5 bg-white'></div>
            <Link>View case</Link>
        </div>
  )
}

export default ProjectLink