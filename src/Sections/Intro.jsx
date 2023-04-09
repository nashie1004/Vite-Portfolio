import React from 'react'
import '../Styles/Intro.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Intro() {
  return (
    <>
      <div className="present">
        <div className="home-texts">
          <h1>Hi, my name is Nash</h1>
          <h1>I'm a web developer.</h1>
          <div className="btn">
            <button onClick={() => window.location.href = 'https://drive.google.com/file/d/17jCRhTY6XYz2tjOv6xlJFgt5G8txrQDi/view?usp=share_link'}>My Resume</button>
          </div>
        </div>
      </div>
    </>
  )
}
