import { useState } from 'react'

import './App.css'

import { Link } from 'react-router-dom'

function App() {


  return (
    <div>
        <header>
          <nav id='navbar'>
            <div >
              <Link id='gn.s'>GN.S</Link>
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

        <main>

          <h1>
            SURENDHAR GN.
            <span id='highlighter'></span>
          </h1>

          <div>
            <p>Designer-</p>
            <p>Developer</p>
          </div>

          <span id='separator'></span>

          <p>A geek based in <span id='india'>India</span>, willing to <Link className='underline-para'>freelance</Link> my career and buils a reputation around <Link className='underline-para'>FOSS</Link>.</p>

          <img id='hero-image'></img>

          <div id='project-section'>
            <div>
              <h3 id='project'>Projects.</h3>
              <p id='project-desc'>A curated list of work done as a part of my resume.</p>
            </div>

            <div>
              <h3 id='playground'>Playground.</h3>
              <p id='playground-desc'>A list of work done under my procrastinated ideas.</p>

            </div>

          </div>



        </main>

        <footer>

        </footer>
    </div>
  )
}

export default App
