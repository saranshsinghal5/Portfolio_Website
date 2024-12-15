import React from 'react'
import SkillCard from './SkillCard'

function Summary() {

  const arr= [2,3,4,5,6]
  console.log(arr[0])

  return (
    <div className=" mt-[-3vh] m-7 text-white">
      <h1 className="text-3xl font-bold">Summary</h1>
    
      <div className='border-s-2 border-t-2 rounded-lg h-96 ' >
        
        <SkillCard percentage='w-[70%]'/>
      </div>
    </div>
  )
}

export default Summary