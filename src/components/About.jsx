import React from 'react'
import FloatingBar from './FloatingBar'
import AboutCard from './AboutCard'

function About() {
  return (
    <div>
      
      



<div className='space-y-4'>
  <h1 className=' p-2 md:p-4 font-extrabold md:text-2xl text-xl rounded-md  bg-black shadow-sm shadow-white'>
  About Me      

  </h1>

  <h1 className=' p-2 md:p-4 font-bold md:text-2xl text-lg rounded-md  bg-green-900 shadow-sm shadow-white  hover:bg-blue-900 transition-all duration-[4s] '>
  Dedicated and detail
oriented Unreal Artist
 with  Creative
 enthusiastic and
 professional 3d art with
 excellent grasp of latest
 modeling tools and
 problem solving skiils
  </h1>

<AboutCard heading={'Artstation Profile'} navigateTo={'https://www.artstation.com/joshikeshav917/profile'}/>
 
<AboutCard heading={'LinkedIn Profile'} navigateTo={'https://www.linkedin.com/in/keshav-joshi-686563203'}/>

</div>

   <div  className='fixed bottom-2 w-full'>

      <FloatingBar currIn={1}/>
   </div>
    
    </div>
  )
}

export default About
