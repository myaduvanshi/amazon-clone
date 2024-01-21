import React from 'react'
// import SlidetopMain from '../Home/SlideBars/SlidetopMain'
import CardsContainer from './CardsContent/CardsContainer'
// import Slide1 from './SlideBars/Slide1'

function Home() {
  return (
    <>
    <div className='mx-auto w-full max-w-7xl bg-[#E3E6E6]'>
    {/* <SlidetopMain/> */}
    <CardsContainer/>
    {/* <Slide1/> */}
    </div>
    </>
  )
}

export default Home