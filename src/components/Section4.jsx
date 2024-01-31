import React from 'react'

function section4() {
  return (
    <div className='w-3/4 m-auto mt-20'>
         <div className="w-3/4 m-auto">
          <p className="text-gray-400 font-semibold text-xl">Ready to watch? Enter your email to create or restart your membership.</p>

            <div className='flex flex-col md:flex-row gap-5 justify-start md:items-center mt-5'>
                <input type="text" placeholder='Email Address' className="md:w-[60%] w-full px-3 py-5 rounded bg-gray-800/45 border " />
                <button className=" w-48 px-5 py-4 rounded bg-red-600 font-bold text-2xl text-left">Get Started</button>
            </div>
         </div>
    </div>
  )
}

export default section4
