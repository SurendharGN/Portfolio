import { useState } from 'react'

import './App.css'

import { Link } from 'react-router-dom'

function App() {


  return (
    <div id='main'>

      <div id='left'>
        <Link id='gns'>GN.S</Link>
        <h1>
            SURENDHAR GN.
            <span id='highlighter'></span>
          </h1>

          <div id='title'>
            <p>Designer-</p>
            <p>Developer</p>
          </div>

          <div id='separator'></div>
          

          <p id='description'>A geek based in <span id='india'>India</span>, willing to <Link className='underline-para'>freelance</Link> my career and build a reputation around <Link className='underline-para'>FOSS</Link>.</p>
      </div>

      <div id='center'>
        
      </div>
      

      <div id='right'>
        <img id='hero-image' src='../public/homepage.png'></img>
        <header>
          <nav id='navbar'>
            <div >
              <img id='theme-selector'></img>
            </div>
            <ul id='links-container'>
              <Link className='nav-link'>Home.</Link>
              <Link className='nav-link'>About.</Link>
              <Link className='nav-link'>Links.</Link>
              <Link className='nav-link'>Contact.</Link>
            </ul>
          </nav>
        </header>
        <div id='project-section'>
            <div id='projects'>
              <h3 id='project-title'>Projects.</h3>
              <p id='project-desc'>A curated list of work done as a part of my resume.</p>
            </div>

            <div id='separator'></div>

            <div id='playground'>
              <h3 id='playground-title'>Playground.</h3>
              <p id='playground-desc'>A list of work done under my procrastinated ideas.</p>

            </div>

          </div>
      </div>
        

        
    </div>
  )
}

export default App
