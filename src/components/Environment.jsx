import React from 'react'

import aPic from '../Images/a.jpg'
import bPic from '../Images/b.jpg'
import cPic from '../Images/c.jpg'
import PropsImageComp from './PropsImageComp'
import userPic from '../Images/userPic.png'

import e1 from '../Images/e1.mp4';
import e4 from '../Images/e4.mp4';
import e6 from '../Images/e6.mp4';
import e7 from '../Images/e7.mp4';
import e8 from '../Images/e8.mp4';
import e9 from '../Images/e9.mp4';
import e10 from '../Images/e10.mp4';
import e11 from '../Images/e11.mp4';
import e12 from '../Images/e12.mp4';
import e13 from '../Images/e13.mp4';
import e14 from '../Images/e14.mp4';


import AOS from 'aos';
import 'aos/dist/aos.css';
import './props.css'



function All() {
      useEffect(() => {
          AOS.init({
            duration: 15000,
            easing: 'linear',
          });
        }, []);
  }
function Environment() {



  return (
    <div>

      
      <div className='mainDiv md:justify-between flex flex-col md:grid md:grid-cols-3 w-full p-2 gap-4'>


        
  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

            
 <PropsImageComp imgTxtArr={[
    
     {img:e6,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={e6} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>  
  
  {/* <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true"
        
        >
 <PropsImageComp imgTxtArr={[
    
     {img:e1,txtHdng:"headingpp3",txtDesc:"Description"}

   ]}   coverPic={e1} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div> */}



  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true"
        >

 <PropsImageComp imgTxtArr={[
    
     {img:e4,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}   coverPic={e4} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
 
 
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e7,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
   coverPic={e7} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e8,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={e8} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e9,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={e9} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e10,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}   coverPic={e10} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e11,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}   coverPic={e11} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e12,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={e12} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e13,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={e13} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-mirror="true">
 <PropsImageComp imgTxtArr={[
    
     {img:e14,txtHdng:"headingpp3",txtDesc:"Description"}
   ]}  
    coverPic={e14} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>



 





  </div>
    </div>
  )
}

export default Environment
