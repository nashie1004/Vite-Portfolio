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
            <button>My Resume</button>
          </div>
        </div>
      </div>
    </>
  )
}
