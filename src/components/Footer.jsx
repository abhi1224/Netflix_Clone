import React from 'react'

function Footer() {
  return (
    <>
        <footer className='w-full py-10'>
           <h1 className='text-gray-400 px-24'>Questions? Call 000-800-919-1694 </h1> 
            <div className='flex justify-between space-y-16 flex-wrap px-10 md:w-[90%] text-gray-400 m-auto py-5'>
                <div className='flex justify-around flex-grow items-center w-full md:w-1/2'>
                   
                    <div className="flex flex-col gap-y-3 underline">
                        {["FAQ","Investor Relations","Privacy","Speed Test"].map((item, index) => (
                            <a href="" key={index}>{item}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-y-3 underline">
                        {["Help Center","Jobs","Cookies Preferences","Legal Notice"].map((item, index) => (
                            <a href="" key={index}>{item}</a>
                        ))}
                    </div>
                                        
                </div>
                
                <div className='flex justify-around flex-grow items-center w-full md:w-1/2'>
                    <div className="flex flex-col gap-y-3 underline">
                        {["FAQ","Investor Relations","Privacy","Speed Test"].map((item, index) => (
                            <a href="" key={index}>{item}</a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-y-3 underline">
                        {["Help Center","Jobs","Cookies Preferences","Legal Notice"].map((item, index) => (
                            <a href="" key={index}>{item}</a>
                        ))}
                    </div>      
                </div>
            </div>
        </footer> 
    </>
  )
}

export default Footer
