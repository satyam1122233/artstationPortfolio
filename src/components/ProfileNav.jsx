import React, { useState } from 'react'
import profilePic from '../Images/images.jpeg'
function ProfileNav() {
    
  return (
    <>
       <div className='flex flex-col  md:flex-row gap-2 '>
        <div className="imgDiv 
   w-[50px] h-[50px] overflow-hidden">
              <img src={profilePic} alt="" />
        </div>
        <div className="pfTxt">
             <h1 className='font-extrabold'>Keshav joshi</h1>
             <p className='font-bold shadow-[2px_2px_2px_1px_snow] rounded-lg pr-1 border-b-orange-500'>Sr.<span className='text-orange-500'>
             Unreal Artist
             </span>  
             
             </p>

        </div>
        </div>
    </>
  )
}

export default ProfileNav
