import React from 'react'

function SkillCard({skill ,sPercent , inpercentage}) {

   
  return (
     <>
     <div className='my-2'>
        <div className='flex gap-2 '>
            <p className='font-bold text-sm'>{skill}</p>
            <p className='font-semibold text-xs text-gray-500 mt-1'>{sPercent}</p>
            </div>
             <div className='py-1'>
                <div className='h-2 w-[62vw] bg-gray-100 rounded-xl'>
                <div className={`h-2 ${inpercentage} bg-gradient-to-r from-red-400 to-red-600 rounded-xl`}></div>
                </div>
             </div>
     </div>
     </>
  )
}

export default SkillCard