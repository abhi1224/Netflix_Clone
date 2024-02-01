import React, { useState } from 'react'

function Accordian({data}) {

   const[openAccordian , setOpenAccordian] = useState(false)
   
  return (
    <>
      <div className='bg-[#101010] hover:bg-[#101010bc] w-[90%] md:w-3/4  m-auto cursor-pointer' onClick={() => setOpenAccordian(!openAccordian)}>
            <div className="md:text-3xl text-xl flex justify-between items-center md:px-10 px-2 py-5 m-2">
                <h2>{data.question}</h2>
                {openAccordian ? "✖": "➕"}  
            </div>
            {openAccordian && <div className='transition-all duration-500 md:text-2xl text-lg md:px-10 px-2 py-5  border-t-2 border-black' dangerouslySetInnerHTML={{ __html: data.answer}}></div>}
      </div>
    </>
  )
}

export default Accordian
