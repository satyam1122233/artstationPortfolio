import React from 'react';
import { useLocation } from 'react-router-dom'; // Correct hook for accessing state
import './props.css'
function PropsImageView() {
  const location = useLocation();
  const data = location.state;

  console.log(data); // Check if ImgArray contains the expected data


  return (



    <div className=''>
      {data.map((img, index) => {

         const isVideo = img.endsWith('.mp4')

        return (  // Explicit return statement here

          
          <div key={index}
            className="innerImg cursor-pointer m-auto transition-all duration-[0.3s] ease-linear w-auto h-auto "
            
          >
            <div className="img w-fit m-auto ">
              {isVideo?(
                 <video
                 style={{objectFit:'fill'}}
                 className="w-auto h-auto md:h-[96vh] m-auto  rounded-xl"
                 controls
                 autoPlay
                 loop
                 muted
                 src={img}
                 alt=""
               />
              ):(

                    <img className='w-auto h-auto md:h-[96vh] m-auto rounded-xl' src={img} alt=""                 style={{objectFit:'fill'}}
                    />

              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PropsImageView;
