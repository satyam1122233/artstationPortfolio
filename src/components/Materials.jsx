import React from 'react'

import m1 from '../Images/m1.jpg'
import m2 from '../Images/m2.jpg'
import m3 from '../Images/m3.jpg'
import m4 from '../Images/m4.jpg'
import m5 from '../Images/m5.jpg'
import m6 from '../Images/m6.jpg'

import PropsImageComp from './PropsImageComp'
import userPic from '../Images/userPic.png'


import './props.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function All() {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'linear',
        });
      }, []);
}

function Materials() {
  return (
    <div className='mainDiv md:justify-between flex flex-col md:grid md:grid-cols-3 w-full p-2 gap-4'>
      
  
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

 <PropsImageComp 
 imgTxtArr={[
    
     {img:m1,txtHdng:"QR code",txtDesc:""},
     {img:m2,txtHdng:"Maps",txtDesc:""},
     {img:m3,txtHdng:"Render_1",txtDesc:""},
     {img:m4,txtHdng:"Render_2",txtDesc:""},
     {img:m5,txtHdng:"Substance Designer Screenshot",txtDesc:""},
     {img:m6,txtHdng:"Render_3",txtDesc:""}
   ]}  
    coverPic={m6} path={'/img'} navigatePath={'/a'}  titleTxt="Unreal " descriptionTxt="An intensive realtime environment"/>
  </div>



  </div>
  )
}

export default Materials
