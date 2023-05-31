import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
   return (
      <div className='video'>
         <div className='video__top'>
            <img
               src='https://i.pinimg.com/564x/cf/90/da/cf90da753c938f7fcf62007c7b90aa97.jpg'
               alt=''
            />
            <span>05:43</span>
         </div>
         <div className='video__title'>
         Study vlog 🌷 waking up at 5am, note taking, lots of coffee, skincare, drawing
         </div>
         <div className='video__details'>
            <span>
               <AiFillEye /> 1m Views •
            </span>
            <span>5 days ago</span>
         </div>
         <div className='video__channel'>
            <img
               src='https://yt3.googleusercontent.com/wxrdOOWSMkQkzowmi9Jm81SA7Kkvi9mnnP_BDizsGnswxh_aoWQR3Z81fNtnic6XvFnJSeAsUw=s176-c-k-c0x00ffffff-no-rj'
               alt=''
            />
            <p>love,Tri</p>
         </div>
      </div>
   )
}

export default Video