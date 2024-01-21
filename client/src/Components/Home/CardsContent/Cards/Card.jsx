import React from 'react'
// import { Link } from 'react-router-dom'

function Cards(props) {
  return (
    <>
    <div className='bg-white w-[19.5rem] px-2 h-[26rem] m-[0.6rem]'>
      <h2 className='py-2 px-2'><b>{props.heading}</b></h2>
        <div className='w-full m-1 cursor-pointer flex justify-center'>
          <img className='w-86 h-auto' src={props.img} alt="" />
      </div>
      <div className='
      w-72 ml-auto mr-auto 
      '>
        <div className='flex justify-center'>
        <p> <span className='text-xs text-gray-600'>&#x20b9;</span><span className='text-xl font-bold'>{props.price}</span></p>
        </div>
        <button className='
        bg-[#FFA41C] rounded-2xl py-1 px-[6.5rem] m-1 hover:bg-[#f39913]
        '>Buy Now</button>
        <button className='
        bg-[#FFD814] rounded-2xl py-1 px-24 m-1 hover:bg-[#ecc609]
        '>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default Cards