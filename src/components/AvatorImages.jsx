import React from 'react'

function AvatorImages({src, className}) {
  return (
<img src={src}alt=""  decoding='async'  className={` ${className} w-[70px] lg:w-[120px] lg:h-[100px]  rounded-xl `}/>
      
    
  )
}

export default AvatorImages
