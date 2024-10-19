import React from 'react'

function ArticleItem({title}) {
  return (
    <div className='text-[18px] flex items-center gap-2 text-nowrap overflow-hidden text-ellipsis hover:bg-[--backgroundTint]  rounded-[12px] px-4 py-2  min-w-[100%]'>
      <span><img src="https://ddejfvww7sqtk.cloudfront.net/faq-assets/tonkeeper/icons/16/doc.svg" alt="" /></span>
      <p>{title}</p>
    </div>
  )
}

export default ArticleItem
