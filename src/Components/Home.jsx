import React from 'react'
import Intro from '../Sections/Intro'
import About from '../Sections/About'
import Tech from '../Sections/Tech'
import Projects from '../Sections/Projects'
import Contact from '../Sections/Contact'

export default function Home() {

  return (
    <div className='Home'>
      <div className="section">
        <Intro />
      </div>
      <div className="section mid-padding">
        <About />
      </div>
      <div className="section low-padding">
        <Tech />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section contact-padding">
        <Contact />
      </div>
    </div>
  )
}
