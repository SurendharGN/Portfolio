import React from 'react';
import { Link } from 'react-router-dom';
import Frame1 from '../images/Frame1.png';


const Main = () => {
  return (
    <div className='lg:flex font-melodrama border-2 border-black h-[43rem] bg-[#EFEFEF]'>
        <div id='start' className='lg:flex  lg:flex-col items-left '>
            <div id="nameBanner" className='lg:flex lg:flex-col lg:ml-10 '>
                <h1 className='lg:text-2xl translate-y-5'>SurendharGN</h1>

                <div id="buttons" className='lg:flex lg:gap-5 translate-y-10'>
                    
                    <div className=' flex items-center justify-center text-2xl h-12  w-28 bg-white border border-black'>
                        <Link to='/'>RESUME</Link>
                    </div>
                </div>

            </div>

            <div id="title" className='lg:flex lg:flex-col lg:ml-10  z-10'>
                <h2 className='text-[16rem] m-0 '>Web</h2>
                <h2 className='text-[10rem] font-stardom m-0 -translate-y-24 '>Enthusiast</h2>

            </div>

        </div>

        <div id="center" className='lg:w-72 lg:h-64 lg:-translate-x-72 translate-y-16'>
            <div>
                        <Link className=' flex items-center justify-center lg:text-2xl lg:h-12  lg:w-28 bg-white border border-black' to='/projects'>PROJECTS</Link>
                    </div>
            <img alt='gritty' src={Frame1}></img>
        </div>

        <div id="end" className='lg:flex lg:flex-col lg:text-3xl justify-around lg:w-48 items-left'>
            <p className='mt-20'>I'm a web developer based in INDIA.</p>
            <p className='lg:-translate-y-7'>I look forward to the amazing opportunities this niche holds for me</p>

            <div id="hireMe" className='lg:h-28 lg:w-28 bg-white rounded-full flex items-center justify-center border border-black lg: -translate-y-10'>
                <Link>Hire me</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Main