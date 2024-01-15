import React from 'react'
// import SlidetopMain from '../Home/SlideBars/SlidetopMain'
import CardsContainer1 from './CardsContent/CardsContainer1'
import Slide1 from './SlideBars/Slide1'

function Home() {
  return (
    <>
    <div className='mx-auto w-full max-w-7xl bg-[#E3E6E6]'>
    {/* <SlidetopMain/> */}
    <CardsContainer1/>
    <Slide1/>
    </div>
    </>
  )
}

export default Home