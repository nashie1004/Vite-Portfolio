import React from 'react'
import '../Styles/Tech.scss'
import LanguangeCard from '../Components/LanguangeCard'

import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import ts from '../Assets/typescript.png'
import sass from '../Assets/sass.png'
import react from '../Assets/react.png'
import jsnode from '../Assets/jsnode.png'
import git from '../Assets/git.png'
import mysql from '../Assets/mysql.png'
import mongoDB from '../Assets/newMongoDB.png'
const vite = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'

const IMG_ARRAY = [
    {url: html, name: 'HTML5'}, 
    {url: css, name: 'CSS3'},
    {url: sass, name: 'SASS'},
    {url: js, name: 'Javascript'},
    {url: ts, name: 'Typescript'},
    {url: react, name: 'React.js'},
    {url: jsnode, name: 'Node.js'},
    {url: mysql, name: 'MySQL'},
    {url: mongoDB, name: 'MongoDB Atlas'},
    {url: git, name: 'Git'},
];

export default function Tech() {
  return (
    <>
        <p className='heading-p'>Tech</p>
        <div className="languanges-container">
            {
                IMG_ARRAY.map((item, i) => {
                    return (
                        <LanguangeCard
                            key={i} 
                            image={item.url} 
                            name={item.name} 
                        />
                    )
                })
            }
        </div> 
    </>
  )
}
