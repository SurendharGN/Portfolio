import React from 'react';
import { Link } from 'react-router-dom';

const ProjectLink = (props) => {
  return (
    <div className='mobile:font-thin mobile:ml-11 mobile:flex mobile:gap-4 mobile:mt-5 mobile:text-lg mobile:items-center'>
            <a rel="noreferrer" target="_blank" href={props.siteLink}>Live site </a>
            <div className='w-px h-5 bg-white'></div>
            <a rel="noreferrer" target="_blank" href={props.github}>github </a>
            <div className='w-px h-5 bg-white'></div>
            <a rel="noreferrer" target="_blank" href="#">View case</a>
        </div>
  )
}

export default ProjectLink