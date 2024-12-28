import React from 'react'

import aPic from '../Images/a.jpg'
import bPic from '../Images/b.jpg'
import cPic from '../Images/c.jpg'
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
    
     {img:aPic,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={aPic} path={'/img'} navigatePath={'/a'}  titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work."/>
  </div>


<div className='item w-full m-auto'
        data-aos="fadeIn"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

  <PropsImageComp coverPic={bPic} 
  imgTxtArr={[
     
      {img:bPic,txtHdng:"headingpp3",txtDesc:"Description"}
    ]}  
     path={'/img'} navigatePath={'/a'}  titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work."/>
</div>


  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

 <PropsImageComp coverPic={cPic} 
 imgTxtArr={[
    
     {img:cPic,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    path={'/img'} navigatePath={'/a'}  titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work."/>
  </div>

  </div>
  )
}

export default Materials
