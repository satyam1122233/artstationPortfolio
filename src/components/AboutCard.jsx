import React from 'react'

const AboutCard = (props) => {
  return (
    <>
<h1 className=' p-2 md:p-4 w-fit font-extrabold md:text-2xl text-lg rounded-md  bg-black shadow-sm shadow-green-700 text-green-700 hover:text-green-500 hover:shadow-green-500'>
  <a target="_blank" href={props.navigateTo}>{props.heading}</a>     

  </h1>
    </>
  )
}

export default AboutCard
