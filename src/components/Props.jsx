import React from 'react'
import e6 from '../Images/e6.mp4'
import p1 from '../Images/p1.mp4'
import p2 from '../Images/p2.mp4'
import p3 from '../Images/p3.mp4'
import pp1 from '../Images/p1.png'
import pp2 from '../Images/p2.png'
import pp3 from '../Images/p3.png'
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

function Props() {
  return (
    <div className='mainDiv md:justify-between flex flex-col md:grid md:grid-cols-3 w-full p-2 gap-4'>
      
  
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

 <PropsImageComp img={[e6]} coverPic={e6} path={'/img'} navigatePath={'/a'} titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
  </div>


<div className='item w-full m-auto'
        data-aos="fadeIn"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

  <PropsImageComp coverPic={p1} img={[p2,p3,pp1,pp2,pp3]} path={'/img'} navigatePath={'/a'}  titleTxt="ZBrush end-to-end Creature Workshop " descriptionTxt="An intensive course to boost your skills and improve your creature design work." />
</div>




  </div>
    
  )
}

export default Props



