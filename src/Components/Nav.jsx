import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Nav() {
  return (
    <div className='Nav'>
      <p className='heading-p'>Nash <span>Andrew</span></p>
      <span>
        <a href='/'>
          <FaGithub size='2.1rem' />
        </a>
        <a href='/'>
          <FaLinkedin size='2.1rem' />
        </a>
      </span>
    </div>
  )
}
