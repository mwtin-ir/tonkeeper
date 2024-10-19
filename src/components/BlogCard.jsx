import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({img , title , date, dec , link }) {
  return (
    <Link to={link} className=' flex  flex-col items-start justify-center gap-[20px] overflow-hidden rounded-[24px] transform duration-500 hover:m-[0_0_15px_10px] bg-[--backgroundContent] '>
      
      <div className='flex flex-col gap-[4px] p-[18px_24px_0]  '>
        <span className='text-[20px] text-[--textSecondary]'>{date}</span>
        <h3 className='text-[28px] font-medium'>{title}</h3>
        <p  className='text-[20px] text-[--textSecondary] overflow-hidden txt  '> {dec}</p>
      </div>
        <img src={img} alt="" className='object-contain w-[100%] '/>
   

    </Link>
  )
}

export default BlogCard
