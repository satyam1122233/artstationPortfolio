import React, { useState } from 'react'
import ProfileNav from './profileNav';
import './props.css';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { video } from 'motion/react-client';
import { div } from 'motion/react-m';



function PropsImageComp(props) {
const navigate=useNavigate();



function handleClick(){

//navigate to inner image/video part
console.log(props.imgTxtArr);

navigate(props.navigatePath,{state:props.imgTxtArr?props.imgTxtArr:[]})
}


    const [hover,setHover]=useState(true);
    const isVideo=props.coverPic.endsWith('.mp4')|| props.coverPic.endsWith('.mov')

    function handleHover(){
        setHover(!hover)
    }

  return (
    <>

    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='mainProDiv flex w-full  h-auto  flex-col
'>

       <div style={{backgroundColor:'black'}}  className='image cursor-pointer opacity-1 hover:opacity-80 m-auto  transition-all duration-[0.3s] ease-linear w-full h-auto'
       >
        {isVideo?
        (
          <>
          <video onClick={handleClick}  src={props.coverPic} 
          className="w-full h-full" loop 
          muted autoPlay style={{objectFit:'fill'}} ></video>


<div className='p-[30px]' style={{lineHeight:'1.6'}}>
  <h4 className=' font-extrabold' style={{fontSize:'24px',fontWeight:'700'}}>{props.titleTxt}</h4>
  <p className=' ' style={{fontSize:'16px'}}>{props.descriptionTxt}</p>
  
</div>         
 </>
        )
      :(
     <>
        <img
        className="w-full h-full object-fill"
        src={props.coverPic}
        />
       
       
       <div className='p-[30px]' style={{lineHeight:'1.6'}}>
  <h4 className=' font-extrabold' style={{fontSize:'24px',fontWeight:'700'}}>{props.titleTxt}</h4>
  <p className=' ' style={{fontSize:'16px'}}>{props.descriptionTxt}</p>
  
</div> 

        </>
      )
      }
    
        <div className='pfOnImg'><ProfileNav/>
      </div>
  </div>





    </div>


    
  
    </>
  )
}

export default PropsImageComp
