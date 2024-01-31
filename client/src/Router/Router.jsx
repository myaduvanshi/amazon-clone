import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from '../Root'
import Home from '../Components/Home/Home'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import CartPage from '../Components/Home/CartPage'

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='' element={<Home />} />
        <Route path='/user/register' element={<RegisterPage/>}/>
        <Route path='/signin' element={<LoginPage/>}/>
        <Route path='/cart' element={<CartPage/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export { Router } 