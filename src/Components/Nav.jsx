import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Nav() {
  return (
    <div className='Nav'>
      <p className='heading-p'>Nash <span>Andrew</span></p>
      <span>
        <a href='https://github.com/nashie1004'>
          <FaGithub size='2.1rem' />
        </a>
        <a href='https://www.linkedin.com/in/nash-ocenar-447b63253/'>
          <FaLinkedin size='2.1rem' />
        </a>
      </span>
    </div>
  )
}
