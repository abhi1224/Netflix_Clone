import React from 'react'
import hand from '/hand.svg'

function Card({data, index}) {
  return (
    <>     
      <div className="text-white w-[90%] flex justify-center items-center m-auto">
        <div className="h-96 w-64 rounded-xl  bg-gradient-to-tl from-pink-800/20 via-[#1C1D3A] to-[#1C1D3A]">
            <h2 className='text-3xl font-semibold px-2 py-5'>{data.text}</h2>
        </div>
      </div>
    </>
  )
}

export default Card
