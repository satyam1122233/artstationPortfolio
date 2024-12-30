import React from 'react'
import ProfileNav from './profileNav'
import bgVideo from '../Images/e6.mp4'
import shpIcon from '../Images/shpIcon.png'
import unRealIcon from '../Images/unRealIcon.png'


function ProfileTopCard() {
  return (
    <>
<div className='overflow-hidden w-[100%]' style={{height:'120vh'}}>
  {/* border:'2px solid' */}
       <div className='profile p-1 justify-center md:justify-start  flex
       mb-2 mx-1 bg-black'>


<ProfileNav/>


<div  className=' h-20 w-20  ml-auto flex justify-center '>
  <img className='h-full w-full'  src={shpIcon} alt="" />
  {/* <img className='h-full w-full'  src={shpIcon} alt="" /> */}


</div>
{/* 
 <div className='upArrow'>
<IoIosArrowUp size={20}/>
 </div> */}

</div>


{/* <div className='socialMediaNav gap-2'>

 <img src={instaIcon} alt="" />
 <img src={facebookIcon} alt="" />
 <img src={gmailIcon} alt="" />


</div> */}
<div className='bgNAv' style={{backgroundColor:'#0000009c'}}>

<div className="bgTxt flex w-[94%] h-[70%] flex-col text-center justify-center" style={{color:'white', backgroundColor:'transparent', position:'absolute',
      padding: '30px',
    textAlign: 'center' } }>
<span className='font-extrabold text-[2.5rem] md:text-[3rem]'>Welcome to the <br /> hub for <span className='p-0.5 rounded-lg text-orange-500' style={{boxShadow:'0 0 4px white'}}>3D</span> <br />
<div className=' w-fit m-auto flex flex-col md:flex-col'>
  Unreal World 


<div style={{margin:'auto'}} className='h-20 w-20  m-auto md:p2 shadow-md shadow-yellow-500 rounded-[50%] hover:rounded-2xl transition-all duration-[1s] hover:shadow-blue-500 hover:cursor-pointer '>
  <img className='h-full w-full'  src={unRealIcon} alt="" />
</div>

  {/* <iframe style={{margin:'auto'}} src="https://giphy.com/embed/5YMDSfui21JLi" frameBorder="0" className="giphy-embed" allowFullScreen ></iframe> */}
  
  </div>


</span>
<br />
<span className='text-[1.5rem] md:text-[2rem] '>
<span className='p-0.5 rounded-lg mr-1 text-orange-500' style={{boxShadow:'0 0 4px white'}}>
 Unreal Engine </span>

to help you <br />materialise your ideas and take your creations to the next level!
</span>
</div>

    <video className='bgNAvVideo' src={bgVideo}  loop 
          muted autoPlay >
    </video>
</div>

</div>
    </>
  )
}

export default ProfileTopCard
