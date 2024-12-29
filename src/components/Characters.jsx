import React from 'react';
import PropsImageComp from './PropsImageComp';
import c1 from '../Images/c1.png';
import c2 from '../Images/c2.png';
import c3 from '../Images/c3.png';
import c4 from '../Images/c4.png';
import c5 from '../Images/c5.png';
import c6 from '../Images/c6.png';
import c7 from '../Images/c7.png';
import c8 from '../Images/c8.png';
import c9 from '../Images/c9.png';
import c10 from '../Images/c10.png';
import c11 from '../Images/c11.png';
import c12 from '../Images/c12.png';
import c13 from '../Images/c13.png';
import c14 from '../Images/c14.png';
import c15 from '../Images/c15.png';
import c16 from '../Images/c16.png';
import c17 from '../Images/c17.png';
import c18 from '../Images/c18.png';

function Characters() {
  const characterImgs = [
    // { img: [c1], coverPic: c1, path: '/img', navigatePath: '/a', dataAos: 'fade-right' },
    // { img: [c2], coverPic: c2, path: '/img', navigatePath: '/a', dataAos: 'fadeIn' },
    // { img: [c3], coverPic: c3, path: '/img', navigatePath: '/a', dataAos: 'fade-left' },
    { img: [c4], coverPic: c4, path: '/img', navigatePath: '/a', dataAos: 'fade-right' },
    // { img: [c5], coverPic: c5, path: '/img', navigatePath: '/a', dataAos: 'fadeIn' },
    // { img: [c6], coverPic: c6, path: '/img', navigatePath: '/a', dataAos: 'fade-left' },
    // { img: [c7], coverPic: c7, path: '/img', navigatePath: '/a', dataAos: 'fade-right' },
    // { img: [c8], coverPic: c8, path: '/img', navigatePath: '/a', dataAos: 'fadeIn' },
    // { img: [c9], coverPic: c9, path: '/img', navigatePath: '/a', dataAos: 'fade-left' },
    // { img: [c10], coverPic: c10, path: '/img', navigatePath: '/a', dataAos: 'fade-right' },
    // { img: [c11], coverPic: c11, path: '/img', navigatePath: '/a', dataAos: 'fadeIn' },
    // { img: [c12], coverPic: c12, path: '/img', navigatePath: '/a', dataAos: 'fade-left' },
    // { img: [c13], coverPic: c13, path: '/img', navigatePath: '/a', dataAos: 'fade-right' },
    // { img: [c14], coverPic: c14, path: '/img', navigatePath: '/a', dataAos: 'fadeIn' },
    // { img: [c15], coverPic: c15, path: '/img', navigatePath: '/a', dataAos: 'fade-left' },
    // { img: [c16], coverPic: c16, path: '/img', navigatePath: '/a', dataAos: 'fade-right' },
    // { img: [c17], coverPic: c17, path: '/img', navigatePath: '/a', dataAos: 'fadeIn' },
    // { img: [c18], coverPic: c18, path: '/img', navigatePath: '/a', dataAos: 'fade-left' }
  ];

  return (
    <>
      <div className="mainDiv md:justify-between flex flex-col md:grid md:grid-cols-3 w-full p-2 gap-4">
        
        {characterImgs.map((item, index) => {
          return (
            <div
              key={index}
              className="item w-full m-auto"
              data-aos={item.dataAos}
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-mirror="true"
                       >
              <PropsImageComp
                imgTxtArr={[
                   
                    {img:c1,txtHdng:"Render_1",txtDesc:""},
                    {img:c2,txtHdng:"Render_2",txtDesc:""},
                    {img:c3,txtHdng:"Render_3",txtDesc:""},
                    {img:c4,txtHdng:"Render_4",txtDesc:""},
                    {img:c5,txtHdng:"Render_5",txtDesc:""},
                    {img:c6,txtHdng:"Render_6",txtDesc:""},
                    {img:c7,txtHdng:"Render_7",txtDesc:""},
                    {img:c8,txtHdng:"Render_8",txtDesc:""},
                    {img:c9,txtHdng:"Render_9",txtDesc:""},
                    {img:c10,txtHdng:"Render_10",txtDesc:""},
                    {img:c11,txtHdng:"Render_11",txtDesc:""},
                    {img:c12,txtHdng:"Render_12",txtDesc:""},
                    {img:c13,txtHdng:"Render_13",txtDesc:""},
                    {img:c14,txtHdng:"Render_14",txtDesc:""},
                    {img:c15,txtHdng:"Render_15",txtDesc:""},
                    {img:c16,txtHdng:"Render_16",txtDesc:""},
                    {img:c17,txtHdng:"Render_17",txtDesc:""},
                    {img:c18,txtHdng:"Render_18",txtDesc:""},
                  ]}  
                coverPic={item.coverPic}
                path={item.path}
                navigatePath={item.navigatePath}  titleTxt="Unreal" descriptionTxt="An intensive realtime environment"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Characters;
