import React from 'react'
import '../Styles/About.scss'

export default function About() {
  return (
    <>
      <p className='heading-p'>About</p>
      <div className="about-info-container">
        <p className="yellow">Nash Andrew M. Ocenar &#8226; naocenar@gmail.com</p>
        <p>
          Hi! I'm a passionate web developer who likes building web applications 
          with various technologies. I focus mainly on tools such as React.js, Sass 
          and Express.js but I've also dabbled with Flask and SQLite in the past. Now I 
          focus mainly on the front-end side of the web. Some of the techs I'm looking 
          forward to exploring are Typescript and Next.js. I genuinely enjoy creating web 
          applications so hit me up anytime if you have any queries!
        </p>
      </div>
    </>
  )
}
