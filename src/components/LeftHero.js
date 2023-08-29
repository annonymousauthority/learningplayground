import Link from 'next/link'
import React from 'react'
import {HiOutlineVideoCamera} from "react-icons/hi";
import { CiKeyboard } from "react-icons/ci";


export default function leftHero() {
    return (
        <div className='flex flex-col space-y-6 my-32 ms-20 w-2/4'>

            <div className='space-y-6 mb-8'>
                <h1 className='font-normal text-5xl'>
                    Premium video meetings.
                 <br/> Now free for everyone.</h1>
                <p classNames=" items-center text-center justify center text-3xl W-full"> We re-engineered the service that we built for secure business meetings, <br/>Google Meet, to make it free and available for all.</p>
            </div>

            <div className="flex flex-row gap-7">

              <div className='flex space-x-2 items-center'>
                <HiOutlineVideoCamera className="w-5 h-5 absolute my-5 mx-5 text-white"/>
                <button className="flex bg-blue-600 text-white text-center py-4 px-12 shadow-sm focus:outline-none text-sm border border-slate-300 rounded-md" >
                <p className="font-medium">New Meeting</p>
                    </button>
              </div>

              <div className='flex -space-x-1 relative items center text-gray-700'>
              <CiKeyboard className='w-6 h-6 absolute my-4 mx-auto'/>
              <input className=" bg-white text-black text-left py-4 px-8 shadow-sm focus:outline-none text-sm border border-gray-500 rounded-md font-semibold placeholder-gray-600" placeholder='Enter a code or link' type="url" name="search"
               />
              </div>

            </div>

            <div>
              <hr className= "w-3/4 border-t-1 border-gray-300 my-2"></hr>
             </div>

            <div>
                <span className="">
                  <a href =""> Learn more</a> about Google Meet
                  </span>
                  
              
            </div>
           
        </div>
    )
}

