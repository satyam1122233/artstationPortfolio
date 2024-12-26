import React from 'react'
import aPic from '../Images/a.jpg'
import bPic from '../Images/b.jpg'
import cPic from '../Images/c.jpg'
import e6 from '../Images/e6.mp4'
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

  <PropsImageComp coverPic={bPic} img={[bPic,bPic,bPic]} path={'/img'} navigatePath={'/a'} />
</div>


  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="100">

 <PropsImageComp coverPic={cPic} img={[cPic,cPic,cPic]} path={'/img'} navigatePath={'/a'} />
  </div>

  </div>
    
  )
}

export default Props



