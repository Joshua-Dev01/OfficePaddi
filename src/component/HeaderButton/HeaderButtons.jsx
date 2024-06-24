import React from 'react'

export const HeaderButtons = () => {
  return (
    <>
      <div className='flex gap-10 mr-10 mt-5 lap:hidden'>
        <button className="whitespace-nowrap ml-7">Sign in</button>
        <button className='py-2 px-3 bg-[#0D333E] text-white rounded-[0.4rem] whitespace-nowrap'>Start free trial</button>
    </div>
    </>
  )
}
