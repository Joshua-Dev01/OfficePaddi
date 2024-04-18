import React from 'react'

export const HeaderButtons = () => {
  return (
    <>
      <div className='flex gap-10 mr-10 mt-3 lap:hidden'>
        <button>Sign in</button>
        <button className='py-2 px-3 bg-[#0D333E] text-white rounded-[0.4rem]'>Start free trial</button>
    </div>
    </>
  )
}
