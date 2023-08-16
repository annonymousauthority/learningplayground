import Link from 'next/link'
import React from 'react'

export default function LeftHero() {
    return (
        <div className='flex flex-col space-y-6 my-52 ms-20 w-3/5'>

            <div className='space-y-6 '>
                <h1 className='font-normal text-4xl '>
                    Premium video meetings.
                 <br/> Now free for everyone.</h1>
                <p classNames=" sm:items-center text-center justify center">We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all. </p>
            </div>

            <div className="flex flex-row gap-7 mt-40">

              <div>
                <button className="flex justify-center bg-blue-600 text-white text-center py-3 pl-12 pr-3 shadow-sm focus:outline-none text-sm border border-slate-300 rounded-md" > New Meeting </button>
              </div>
              <div>
              <input className="flex bg-white text-black text-left py-3 pl-9 pr-3 shadow-sm focus:outline-none text-sm border border-slate-300 rounded-md" placeholder='Enter Link' type="url" name="search"/>
              </div>
            </div>

            <div>
              <hr></hr>
             </div>

            <div>
                <span className="">
                  <a href =""> Learn more</a> about Google Meet
                  </span>
                  
              
            </div>
           
        </div>
    )
}

