import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {
  return (
    <>
    <div className='bg-white w-[19.5rem] px-2 h-auto m-[0.6rem]'>
      <h2 className='text-xl py-2 px-2'><b>{props.heading}</b></h2>
      <div className='w-full p-2 h-80 flex  flex-wrap'>
        <div className='w-max m-1 cursor-pointer'>
          <img className='w-[7.5rem] h-24' src={props.img1} alt="" />
          <p className='w-32 text-[0.8rem]'>{props.title1}</p>
        </div>
        <div className='w-max m-1 cursor-pointer'>
          <img className='w-[7.5rem] h-24' src={props.img2} alt="" />
          <p className='w-32 text-[0.8rem]'>{props.title2}</p>
        </div>
        <div className='w-max m-1 cursor-pointer'>
          <img className='w-[7.5rem] h-24' src={props.img3} alt="" />
          <p className='w-32 text-[0.8rem]'>{props.title3}</p>
        </div>
        <div className='w-max m-1 cursor-pointer'>
          <img className='w-[7.5rem] h-24' src={props.img4} alt="" />
          <p className='w-32 text-[0.8rem]'>{props.title4}</p>
        </div>
      </div>
      <div className='my-3'>
      <Link to="/" className='text-blue-600'>See all offers</Link>
      </div>
    </div>
    </>
  )
}

export default Cards