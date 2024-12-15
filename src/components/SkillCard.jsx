import React from 'react'

function SkillCard({percentage}) {

   
  return (
     <>
     <div>
        <div>
            <p>skills</p>
            <p>percentage</p>
            </div>
             <div className='py-1'>
                <div className='h-2 w-[60vw] bg-gray-100 rounded-xl'>
                <div className={`h-2 ${percentage} bg-red-500 rounded-xl`}></div>
                 
                </div>
             </div>
     </div>
     </>
  )
}

export default SkillCard