import Link from 'next/link'
import React from 'react'

export default function LeftHero() {
    return (
        <div className='flex flex-col space-y-6'>
            <div className='space-y-3 w-1/2 block'>
                <h1 className='font-bold text-3xl '>
                    Premium Text for Hero Example
                </h1>
                <p classNames=" sm:items-center text-center justify center">Mollit commodo eiusmod dolore ullamco elit deserunt laborum tempor aliqua aliquip eiusmod. </p>
            </div>

            <div className="flex flex-row gap-7">
              <div>
                <button className="flex justify-center bg-blue-600 text-white text-center py-3 pl-12 pr-3 shadow-sm focus:outline-none text-sm border border-slate-300 rounded-md" > New Meeting </button>
              </div>
              <div>
              <input className="flex bg-white text-black text-left py-3 pl-9 pr-3 shadow-sm focus:outline-none text-sm border border-slate-300 rounded-md" placeholder='Enter Link' type="url" name="search"/>
              </div>
            </div>

            <div>
              <hr className="w-1/2 "></hr>
             </div>

            <div>
                <span className="">
                  <a href =""> Learn more</a> about Google Meet
                  </span>
                  
              
            </div>
           
        </div>
    )
}

