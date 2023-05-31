import React, { useState } from 'react'
import './_categoriesBar.scss'

const keywords = [
   'All',
   'React js',
   'Computer Science',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Study Vlog ',
   'Baking',
   'Mukbang',
   'Cafe',
   'Playlists',
   'K-Pop',
   'Recently uploaded',
]

const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All')

   const handleClick = value => {
      setActiveElement(value)
   }

   return (
      <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar