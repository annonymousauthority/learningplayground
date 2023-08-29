import React from 'react'
import Image from "next/image";
import userGoogleImg from "../../public/images/user-individual.png";
import ChevronLeft from "../../public/chevron-left.svg";
import ChevronRight from "../../public/images/chevron-right.svg";

export default function rightHero() {
  return (
    <div className='relative my-16 ms-14 space-y-1 space-x-2'>

      <div className="flex flex-row ">

      <div className="flex">
      <Image src={ChevronLeft} alt="ChevronLeft" className='w-5 mr-4'/>
      </div>

      <div className="my-5">
      <Image src={userGoogleImg} alt="userGoogleImg" className='w-80 h-80'/>
      </div>

      <div className="flex">
      <Image src={ChevronRight} alt="ChevronRight" className='w-5 ml-4'/>
      </div>

      </div>


      <div className="space-y-2 justify-items-center text-center">
      <h2 className="text-3xl text-center">Your meeting Is safe</h2>
      <p className="text-sm font-normal">Enjoy longer group vidoe calls, noise cancellation, and <br className=" "/>more with a Google One Premium plan.<a href =""> Explore plan</a></p>      
      </div> 

    </div>




  )}