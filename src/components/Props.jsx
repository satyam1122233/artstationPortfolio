import React from 'react'

import bPic from '../Images/b.jpg'
import cPic from '../Images/c.jpg'

import e6 from '../Images/e6.mp4'
import p1 from '../Images/p1.mp4'
import p2 from '../Images/p2.mp4'
import p3 from '../Images/p3.mp4'
import pp1 from '../Images/p1.png'
import pp2 from '../Images/p2.png'
import pp3 from '../Images/p3.png'

import anT1 from '../Images/anT1.jpg'
import anT2 from '../Images/anT2.jpg'
import anT3 from '../Images/anT3.jpg'

import anTH1 from '../Images/anTH1.jpg'
import anTH2 from '../Images/anTH2.jpg'
import anTH3 from '../Images/anTH3.jpg'
import anTH4 from '../Images/anTH4.jpg'
import anTH5 from '../Images/anTH5.jpg'
import anTH6 from '../Images/anTH6.jpg'
import anTH7 from '../Images/anTH7.jpg'
import anTH8 from '../Images/anTH8.jpg'
import anTH9 from '../Images/anTH9.jpg'
import anTH10 from '../Images/anTH10.jpg'
import anTH11 from '../Images/anTH11.jpg'
import anTH12 from '../Images/anTH12.jpg'
import anTH13 from '../Images/anTH13.jpg'
import anTH14 from '../Images/anTH14.jpg'

import anTL1 from '../Images/anTL1.jpg'
import anTL2 from '../Images/anTL2.jpg'
import anTL3 from '../Images/anTL3.jpg'
import anTL4 from '../Images/anTL4.jpg'
import anTL5 from '../Images/anTL5.jpg'
import anTL6 from '../Images/anTL6.jpg'
import anTL7 from '../Images/anTL7.jpg'
import anTL8 from '../Images/anTL8.jpg'
import anTL9 from '../Images/anTL9.jpg'
import anTL10 from '../Images/anTL10.jpg'
import anTL11 from '../Images/anTL11.jpg'

import arT1 from '../Images/arT1.jpg'
import arT2 from '../Images/arT2.jpg'
import arT3 from '../Images/arT3.jpg'
import arTH1 from '../Images/arTH1.jpg'
import arTH2 from '../Images/arTH2.jpg'
import arTH3 from '../Images/arTH3.jpg'
import arTH4 from '../Images/arTH4.jpg'
import arTH5 from '../Images/arTH5.jpg'
import arTH6 from '../Images/arTH6.jpg'
import arTH7 from '../Images/arTH7.jpg'
import arTH8 from '../Images/arTH8.jpg'
import arTH9 from '../Images/arTH9.jpg'
import arTH10 from '../Images/arTH10.jpg'
import arTH11 from '../Images/arTH11.jpg'
import arTH12 from '../Images/arTH12.jpg'
import arTH13 from '../Images/arTH13.jpg'
import arTH14 from '../Images/arTH14.jpg'
import arTH15 from '../Images/arTH15.jpg'






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
      
  



<div className='item w-full m-auto'
        data-aos="fadeIn"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

  <PropsImageComp coverPic={p1} imgTxtArr={[
    {img:p2,txtHdng:"Render_1",txtDesc:""},
    {img:p3,txtHdng:"Render_2",txtDesc:""},
    {img:pp1,txtHdng:"Render_3",txtDesc:""},
    {img:pp2,txtHdng:"Reference",txtDesc:""},
    {img:pp3,txtHdng:"Wireframe",txtDesc:""}
  ]}  
  path={'/img'} navigatePath={'/a'}  titleTxt="Antique Wooden Riser Stool" descriptionTxt="This is an antique wooden riser stool to test my texturing skills. The rustic farmhouse stool has chippy white and black paint. CONDITION In good condition with wear consistent with age and use.
I want to give it a look like kids are used to play and draw on it.your comments will tell did i succeed to showcase it as kids wooden riser stool. Hope you all like
" />
</div>




{/* Army Telephone */}

<div className='item w-full m-auto'
        data-aos="fadeIn"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">

  <PropsImageComp coverPic={bPic} 
  imgTxtArr={[
     
      {img:arT1,txtHdng:"Render_1",txtDesc:""},
      {img:arT2,txtHdng:"Render_2",txtDesc:""},
      {img:arTH1,txtHdng:"High poly",txtDesc:""},
      {img:arTH2,txtHdng:"High poly",txtDesc:""},
      {img:arTH3,txtHdng:"High poly",txtDesc:""},
      {img:arTH4,txtHdng:"High poly",txtDesc:""},
      {img:arTH5,txtHdng:"High poly",txtDesc:""},
      {img:arTH6,txtHdng:"High poly",txtDesc:""},
      {img:arTH7,txtHdng:"High poly",txtDesc:""},
      {img:arTH8,txtHdng:"High poly",txtDesc:""},
      {img:arTH9,txtHdng:"High poly",txtDesc:""},
      {img:arTH10,txtHdng:"High poly",txtDesc:""},
      {img:arTH11,txtHdng:"High poly",txtDesc:""},
      {img:arTH12,txtHdng:"High poly",txtDesc:""},
      {img:arTH13,txtHdng:"High poly",txtDesc:""},
      {img:arTH14,txtHdng:"High poly",txtDesc:""},
      {img:arTH15,txtHdng:"High poly",txtDesc:""},
      {img:arT3,txtHdng:"Refrance",txtDesc:""},
    ]}  
     path={'/img'} navigatePath={'/a'}  titleTxt="Army Telephone" descriptionTxt="Texturing is something which excite me always so here we go all to advance texturing. It is Army phone made by the company Funke + Huster, West Germany, 2nd half of 20th century thanks to Maksim Skidanov for references
"/>
</div>


  <div  className='item w-full m-auto'
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-mirror="true">




{/* Antique Telephone*/ }
 <PropsImageComp coverPic={cPic} 
 imgTxtArr={[
    
     {img:anT1,txtHdng:"Renders",txtDesc:""},
     {img:anTH1,txtHdng:"High poly",txtDesc:""},
     {img:anTH2,txtHdng:"High poly",txtDesc:""},
     {img:anTH3,txtHdng:"High poly",txtDesc:""},
     {img:anTH4,txtHdng:"High poly",txtDesc:""},
     {img:anTH5,txtHdng:"High poly",txtDesc:""},
     {img:anTH6,txtHdng:"High poly",txtDesc:""},
     {img:anTH7,txtHdng:"High poly",txtDesc:""},
     {img:anTH8,txtHdng:"High poly",txtDesc:""},
     {img:anTH9,txtHdng:"High poly",txtDesc:""},
     {img:anTH10,txtHdng:"High poly",txtDesc:""},
     {img:anTH11,txtHdng:"High poly",txtDesc:""},
     {img:anTH12,txtHdng:"High poly",txtDesc:""},
     {img:anTH13,txtHdng:"High poly",txtDesc:""},
     {img:anTH14,txtHdng:"High poly",txtDesc:""},
  
     {img:anTL1,txtHdng:"Low poly",txtDesc:""},
     {img:anTL2,txtHdng:"Low poly",txtDesc:""},
     {img:anTL3,txtHdng:"Low poly",txtDesc:""},
     {img:anTL4,txtHdng:"Low poly",txtDesc:""},
     {img:anTL5,txtHdng:"Low poly",txtDesc:""},
     {img:anTL6,txtHdng:"Low poly",txtDesc:""},
     {img:anTL7,txtHdng:"Low poly",txtDesc:""},
     {img:anTL8,txtHdng:"Low poly",txtDesc:""},
     {img:anTL9,txtHdng:"Low poly",txtDesc:""},
     {img:anTL10,txtHdng:"Low poly",txtDesc:""},
     {img:anTL11,txtHdng:"Low poly",txtDesc:""},

     {img:anT2,txtHdng:"Refrance",txtDesc:""},
     {img:anT3,txtHdng:"UV Unwraping",txtDesc:""},
    

   ]}  
    path={'/img'} navigatePath={'/a'}  titleTxt="Telephone" descriptionTxt="Old Antique Telephone
To test my modeling skills, This is also from Jolie Zoe Deux which just happens to be across from the Rutherford Antique store where I got my chair and some other goodies. its game ready prop hope you all like it"/>
  </div>


  </div>
    
  )
}

export default Props



