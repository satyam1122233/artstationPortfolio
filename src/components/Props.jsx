import React from 'react'
import aPic from '../Images/a.jpg'
import bPic from '../Images/b.jpg'
import cPic from '../Images/c.jpg'
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
    <div className='mainDiv justify-between flex flex-col md:flex-row w-full p-2 gap-4'>
  
  <div  className='item w-full m-auto'
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="100">

 <PropsImageComp img={[e6]} coverPic={e6} path={'/img'} navigatePath={'/a'} />
  </div>


<div className='item w-full m-auto'
        data-aos="fadeIn"
        data-aos-offset="0"
        data-aos-delay="100">

  <PropsImageComp coverPic={p1} img={[p2,p3,pp1,pp2,pp3]} path={'/img'} navigatePath={'/a'} />
</div>




  </div>
    
  )
}

export default Props



