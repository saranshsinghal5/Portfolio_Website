import React from 'react'
import SkillCard from './SkillCard'

function Summary() {

  const skills = [{
    skill:"c",
    sPercent:"50%",
    inpercentage:"w-[70%]"
  },
  {
    skill:"c++",
    sPercent:"90%",
    inpercentage:"w-[90%]"
  },
  {
    skill:"React",
    sPercent:"50%",
    inpercentage:"w-[50%]"
  }
]


  return (
    <div className=" mt-[-3vh] m-7 text-white">
      <h1 className="text-3xl font-bold">Summary</h1>
       <h2 className='font-bold text-2xl my-2  '>My Skills</h2>
      <div className='border-s-2 border-t-2 rounded-lg bg-orange-300 h-fit  ' >
        <div className='m-5 pb-3 px-2'>
        {
          skills.map((elem,index)=>(
            <SkillCard skill={elem.skill} sPercent={elem.sPercent} inpercentage={elem.inpercentage}/>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default Summary