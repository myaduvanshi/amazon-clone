import React from 'react'
import Cards from './Cards/Card'


function CardsContainer() {
  return (
    <>
    <div className='flex flex-wrap p-1 justify-center'>
    <Cards 
      heading="Realme narzo N55 (Prime Black, 6GB+128GB)"
      img="https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UY218_.jpg"
      price="9,499"
   />    
    <Cards 
      heading="TECNO POP 8 (Gravity Black,(8GB*+64GB)"
      img="https://m.media-amazon.com/images/I/61wbxpNaD1L._AC_UY218_.jpg"
      price="6,499"
   />    
    <Cards 
      heading="Samsung Galaxy M34 5G (Waterfall Blue,6GB,128GB)"
      img="https://m.media-amazon.com/images/I/91L9EF-OEGL._AC_UY218_.jpg"
      price="18,499"
   />    
    <Cards 
      heading="iQOO Z7s 5G by vivo (Pacific Night, 6GB RAM, 128GB)"
      img="https://m.media-amazon.com/images/I/51oW-QOqhaL._AC_UY218_.jpg"
      price="16,999"
   />    
    <Cards 
      heading="Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB)"
      img="https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY218_.jpg"
      price="17,999"
   />    
    <Cards 
      heading="Poco X3 Pro(Graphite Black, 6GB RAM, 128GB Storage)"
      img="https://m.media-amazon.com/images/I/31wh13R16iL._AC_UY218_.jpg"
      price="17,479"
   />    
    <Cards 
      heading="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB)"
      img="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UY218_.jpg"
      price="19,999"
   />    
    <Cards 
      heading="Redmi Note 13 5G (Stealth Black, 6GB RAM, 128GB Storage)"
      img="https://m.media-amazon.com/images/I/71NnrsYP63L._AC_UY218_.jpg"
      price="17,999"
   />    
    <Cards 
      heading="iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage)"
      img="https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UY218_.jpg"
      price="24,999"
   />    
   </div>
    </>
  )
}

export default CardsContainer