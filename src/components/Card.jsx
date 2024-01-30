import React from 'react'
import hand from '/hand.svg'
import doublehand from '/doublehand.svg'

function Card({data, index}) {
  return (
    <>      
      <div className="h-80 flex-grow w-64 px-5 rounded-3xl bg-gradient-to-tl from-pink-800/20 via-[#1E1629] to-[#1C1D3A] relative">
            <h2 className='text-4xl font-bold px-2 py-5'>{data.text}</h2>
            <img className='h-20 w-20 object-cover object-center absolute bottom-4 right-4 mix-blend-difference' src={data.image} alt="loading......." />
        </div>
    </>
  )
}

export default Card
