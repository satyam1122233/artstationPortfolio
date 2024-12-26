import React, { useEffect } from 'react';
import aPic from '../Images/a.jpg';
import catPic from '../Images/allcat.jpg';
import catVideo from '../Images/e7.mp4';
import shipVideo from '../Images/e6.mp4';
import PropsImageComp from './PropsImageComp';
import './all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Props from './Props';
import Materials from './Materials';
import Environment from './Environment';

function All() {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'linear',
        });
      }, []);
      

  return (
    <div className="container  flex flex-col  w-full p-2  gap-4">
      {/* Item with left fade-in animation */}
      
      <Props/>
      <Materials/>
      <Environment/>


    </div>
  );
}

export default All;
