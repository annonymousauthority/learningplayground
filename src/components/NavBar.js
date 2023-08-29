import React from 'react'
import Image from "next/image";
import googleMeetImg from "../../public/images/google_image.png";
import {AiOutlineSetting} from "react-icons/ai";
import { GoReport } from "react-icons/go";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { HiViewGrid } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";


function NavBar() {
  return (
    
    <div className ="flex justify-between w-full cursor-pointer">

      <div className='flex items-center space-x-1 p-4'> <Image src={googleMeetImg} alt="googleMeetImg" sizes={80}/><span className="text-2xl tracking-tight text-stone-600 text-normal pb-2"> Meet </span>
      </div>

      <div className="ms-auto px-5">
        <ul className="flex flex-row -space-x-0.5">
            <li className="p-4">Time and Date</li>
            <li className="p-4"><HiOutlineExclamationCircle className="w-6 h-6 "/></li>
            <li className="p-4"><GoReport className="w-6 h-6"/></li>
            <li className="p-4"><AiOutlineSetting className="w-6 h-6"/></li>
           
        </ul>
        </div>

        <div className=''>
          <ul className='flex flex-row -space-x-0.5'>

          <li className="p-4 "><HiViewGrid className="w-7 h-7"/></li>
           <li className="p-4"><HiUserCircle className="w-7 h-7"/></li>

          </ul>
        </div>
      </div>





  )
}
export default NavBar