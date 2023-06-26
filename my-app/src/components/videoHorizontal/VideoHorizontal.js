import React from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = () => {
   const seconds = moment.duration('100').asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

   return (
      <Row className='videoHorizontal m-1 py-2 align-align-items-center'>
         <Col xs={6} md={4} className='videoHorizontal__left'>
            <LazyLoadImage
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeitT1f5FcSxOWPcPs0DSY1yHIn7CyA6kGg&usqp=CAU"
               effect='blur'
               className='videoHorizontal__thumbnail'
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
            <span className='video__top__duration'>{_duration}</span>
         </Col>
         <Col xs={6} md={8} className='videoHorizontal__right p-0'>
            <p className='videoHorizontal__title mb-1'>
               Be a full stack developer in 1 month
            </p>
            <div className='videoHorizontal__details'>
               <AiFillEye /> {numeral(1000000).format('0.a')} Views •
               {moment('2020-06-09').fromNow()}
            </div>

            <div className='videoHorizontal__channel d-flex align-items-center my-1'>
               {/* <LazyLoadImage
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeitT1f5FcSxOWPcPs0DSY1yHIn7CyA6kGg&usqp=CAU"
               effect='blur'
             
            /> */}
               <p>Backbench Coder</p>
            </div>
         </Col>
      </Row>
   )
}

export default VideoHorizontal