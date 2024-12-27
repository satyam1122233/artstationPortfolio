import React from 'react'
import ProfileNav from './profileNav'
import bgVideo from '../Images/e6.mp4'


function ProfileTopCard() {
  return (
    <>
<div className='overflow-hidden w-[100%]' style={{height:'100vh'}}>
  {/* border:'2px solid' */}
       <div className='profile p-1 justify-center md:justify-start  flex
       mb-2 mx-1'>


<ProfileNav/>
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
<span className='font-extrabold text-2xl md:text-3xl'>Welcome to the <br /> hub for <span className='p-0.5 rounded-lg text-orange-500' style={{boxShadow:'0 0 4px white'}}>3D</span> <br />concept artists</span>
<br />
<span className='text-lg md:text-xl '>
<span className='p-0.5 rounded-lg mr-1 text-orange-500' style={{boxShadow:'0 0 4px white'}}>
Specialised training </span>
to help you <br />materialise your ideas and take <br /> your creations to the next level!
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
