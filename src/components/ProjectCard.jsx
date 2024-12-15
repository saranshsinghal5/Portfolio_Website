import React from 'react'

function ProjectCard({ image, title , category}) {
  return (
    <>
    <div>
        <img className='h-48 w-[32vw] bg-blue-100 rounded-2xl object-cover' src={image} alt="" />
        <p className='text-normal font-semibold mt-2 ml-4'>{title}</p>
        <p className=' text-slate-500 font-normal leading-5 ml-4'>{category}</p>
    </div>
    </>
  )
}

export default ProjectCard