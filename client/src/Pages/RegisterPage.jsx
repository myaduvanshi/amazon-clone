import React,{useEffect} from 'react'
import amazonImg from "./Image/amazonImg.png"
import { Link } from 'react-router-dom'
import axios from 'axios'

function RegisterPage() {
    useEffect(() => {
      axios.post('/register')
      .then((response) =>{
        
      })
    })
    
  return (
    <>
    <div className='flex justify-center' >
        <img 
        className='
        w-24 
        '
        src={amazonImg} alt="" />
        <span className='mt-2'>.in</span>
    </div>
    <div className='flex justify-center'>

    <form method='POST' className='
    border border-solid
    w-1/3 p-4 my-4 rounded-lg border-gray-300
    '>
        <p className='w-full text-3xl py-2'>Create Account</p>
        <label htmlFor="name" className='py-1 
        text-xs font-bold
        '>Your Name</label>
        <input
        className='
        border border-gray-400 rounded-md h-8 px-2 w-full
        '
        type="text" required placeholder='First and last name' />
        <label htmlFor="name" className='py-1 
        text-xs font-bold
        '>Mobile number</label>
        <input
        className='
        border border-gray-400 rounded-md h-8 px-2 w-full
        '
        type="tel" required maxLength="10" placeholder='Mobile number' />
        <label htmlFor="name" className='py-1 
        text-xs font-bold
        '>Email</label>
        <input
        className='
        border border-gray-400 rounded-md h-8 px-2 w-full
        '
        type="email" placeholder='email' />
        <label htmlFor="name" className='py-1 
        text-xs font-bold
        '>Password</label>
        <input
        className='
        border border-gray-400 rounded-md h-8 px-2 w-full
        '
        type="password" required placeholder='At least 6 characters' />
        <p className='text-sm my-4'>
        To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
        </p>
        <button className='bg-[#FFD814]
        w-full my-4 p-1 rounded-md
        '>
            Verify mobile number
        </button>
        <div className='flex text-sm'>
            <p className='mx-1'>
Already have an account? </p>
<Link to="/signin"
className='
text-sky-500
hover:text-orange-500
hover:underline-offset-1 hover:underline
' 
> Sign In</Link>
        </div>
    </form>
        </div>
    </>
  )
}

export default RegisterPage