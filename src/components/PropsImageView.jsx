import React from 'react';
import { useLocation } from 'react-router-dom'; // Correct hook for accessing state
import './props.css'
function PropsImageView() {
  const location = useLocation();
  const data = location.state;

  console.log("data: ",data);
  console.log("data I: ",data[0]);
  console.log("data Img: ",data[0].img);



  


  return (



    <div className=''>
      {data.map((item, index) => {
console.log("item:",item.img)
         const isVideo = item.img.endsWith('.mp4')

        return (  // Explicit return statement here

          
          <div key={index}
            className="innerImg cursor-pointer m-auto transition-all duration-[0.3s] ease-linear w-fit h-auto text-left flex flex-row"
            
          >
            
            <div className='mainProDiv w-full  h-auto bg-black  flex flex-col md:flex-col md:justify-center'>
              {isVideo?(


                <>
                 <video
                 style={{objectFit:'fill'}}
                 className="w-auto h-auto md:h-[96vh] m-auto  rounded-xl"
                 controls
                 autoPlay
                 loop
                 muted
                 
                 src={item.img}
                 alt=""
                 />
                 
                 
                 <div className='p-[30px]' style={{lineHeight:'1.6',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                   <h4 className=' font-extrabold text-orange-500 shadow-[0_2px_4px_1px_white] shadow-white p-2 rounded-lg' style={{fontSize:'24px',fontWeight:'700'}}>{item.txtHdng}</h4>
                   <p className='p-2 ' style={{fontSize:'16px'}}>{item.txtDesc}</p>
                   
                 </div> 
                 </>
              ):(

                <>
                    <img 
                    className='w-auto h-auto md:h-[96vh] m-auto rounded-xl' src={item.img} alt=""           style={{objectFit:'fill'}}
                    />

                  <div className='p-[30px] ' style={{lineHeight:'1.6',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                   <h4 className=' font-extrabold text-orange-500 shadow-[0_2px_4px_1px_white] shadow-white p-2 rounded-lg' style={{fontSize:'24px',fontWeight:'700'}}>{item.txtHdng}</h4>
                   <p className='p-2 ' style={{fontSize:'16px'}}>{item.txtDesc}</p>
                   
                 </div> 
                    </>
              )}
            </div>
          </div>

        );




      })}
    </div>
  );
}

export default PropsImageView;
