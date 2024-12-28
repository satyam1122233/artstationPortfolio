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
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true"
        
        >
 <PropsImageComp img={[e1]} coverPic={e1} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>



  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true"
        >

 <PropsImageComp img={[e4]} coverPic={e4} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e6]} coverPic={e6} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e7]} coverPic={e7} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e8]} coverPic={e8} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e9]} coverPic={e9} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e10]} coverPic={e10} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e11]} coverPic={e11} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e12]} coverPic={e12} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
 
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">
 <PropsImageComp img={[e13]} coverPic={e13} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>
 
  <div  className='item w-full m-auto'
        data-aos="fade-In"
        data-aos-delay="50"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-mirror="true">
 <PropsImageComp img={[e14]} coverPic={e14} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>



 





  </div>
    </div>
  )
}

export default Environment
