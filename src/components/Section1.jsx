import React from 'react'
import Netflix_Logo from '/Netflix_Logo_PMS.png'
import hero from '/hero.jpg'

function Section1() {
  return (
    <>
      <div className="h-[90vh] w-full relative">
        <div className='absolute h-full w-full z-0'>
            <img className='h-full w-full object-cover object-center' src={hero} alt="hero_image" />
        </div>
        <div className="bg-black opacity-80 absolute z-10 h-full w-full">

        </div>
        
       <div className="absolute z-50 inset-0">
            <div className="h-20 w-full flex justify-between px-10 items-center">
                <img className='h-14 md:h-full' src={Netflix_Logo} alt="Netflix_Logo" />
                
                <div className="flex gap-5 items-center text-white">
                    <button className='px-5 py-1 border rounded hidden md:block'>English</button>
                    <button className='px-4 py-1 font-semibold bg-red-800 rounded'>Sign In</button>
                </div>
            </div>

            <div className="md:w-[70vw] w-full px-5  md:px-40 md:py-32 p-10  text-white">
                <h1 className='md:text-5xl text-4xl font-extrabold'>Unlimited movies, TV shows and more</h1>
                <p className='text-2xl font-semibold py-5 '>Starts at ₹151. Cancel anytime.</p>
                <p className="text-gray-400 font-semibold text-lg">Ready to watch? Enter your email to create or restart your membership.</p>

                <div className='flex flex-col md:flex-row gap-5 justify-start md:items-center mt-5'>
                    <input type="text" placeholder='Email Address' className="md:w-3/4 w-full px-3 py-5 rounded bg-gray-800/45 border " />
                    <button className=" w-64 px-5 py-4 rounded bg-red-600 font-bold text-2xl text-left">Get Started</button>

                </div>
            </div>
       </div>
      </div>
    </>
  )
}

export default Section1
