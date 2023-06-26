import React from 'react'
import moment from 'moment'
import './_comment.scss'
const Comment = () => {
   return (
      <div className='comment p-2 d-flex'>
         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeitT1f5FcSxOWPcPs0DSY1yHIn7CyA6kGg&usqp=CAU"
            alt=''
            className='rounded-circle mr-3'
         />
         <div className='comment__body'>
            <p className='comment__header mb-1'>
               Triasha Roy • {moment('2020-05-05').fromNow()}
            </p>
            <p className='mb-0'>Whatta Video Man!!!</p>
         </div>
      </div>
   )
}

export default Comment