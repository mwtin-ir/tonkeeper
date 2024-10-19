import React from 'react'

function ConfidentialCard({children , title , dec }) {
  return (
    <div className='flex flex-col items-start  rounded-[24px] gap-2'>
      {children}
      <strong className='text-[1.9rem]'>{title}</strong>
      <p className='text-[--textTertiary] text-[1.3rem]  '>{dec}</p>
    </div>
  )
}

export default ConfidentialCard
