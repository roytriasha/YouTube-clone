import React from 'react'
import Comment from '../comment/Comment'
import './_comments.scss'
const Comments = () => {
   const handleComment = () => {}
   return (
      <div className='comments'>
         <p>1234 Comments</p>
         <div className='comments__form d-flex w-100 my-2'>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeitT1f5FcSxOWPcPs0DSY1yHIn7CyA6kGg&usqp=CAU"
               alt=''
               className='rounded-circle mr-3'
            />
            <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  className='flex-grow-1'
                  placeholder='Write a comment...'
               />
               <button className='border-0 p-2'>Comment</button>
            </form>
         </div>
         <div className='comments__list'>
            {[...Array(15)].map(() => (
               <Comment />
            ))}
         </div>
      </div>
   )
}

export default Comments