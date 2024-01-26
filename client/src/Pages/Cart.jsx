import React,{ useState } from 'react'
import blank from './Image/blank.jpg'
function Cart() {
  const [counter, setCounter] = useState(0)

  const addValue = () =>{
    if(counter< 10){setCounter(counter + 1)}return counter
  }
  const removeValue = () =>{
    if(counter > 0){setCounter(counter - 1) } return counter
  }

  return (
    <>
    <div className='flex w-100 h-screen'>
        <div className='border border-black border-solid 
        flex justify-center items-center
        w-1/2 h-screen'>
          <img
          className='
           w-11/12 h-96 rounded-md
          shadow-md
          '
          src={blank} alt="" />
        </div>
        <div className='
        h-screen w-1/2
        '>
          <p 
          className='
          text-2xl border border-solid border-black mt-5
          h-44
          '
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cumque!</p>
          <div className='flex mt-5 ml-5 items-center'>
            <p className='font-bold text-yellow-500'>Items</p>
            <div className='flex ml-2 justify-center items-center'>
              <button onClick={removeValue} className='m-3 px-2 rounded-md  
              bg-slate-300
              '>-</button>
              <p>{counter}</p>
              <button onClick={addValue} className='m-3 px-2 rounded-md
               bg-slate-300
              '>+</button>
            </div>
          </div>
          <div className='border border-solid border-black'>
            <p>Price </p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Cart