import React from 'react'

function TestimonialCard({avatar ,name ,testimonial}) {
  return (
 <>
 <div className='h-36 min-w-[70vh] rounded-xl mt-14 bg-blue-800 p-2  border-s-2 border-t-2 shadow-xl shadow-cyan-900/50'>
    <div className='flex '>
    <img className='h-20 w-20 object-cover rounded-lg mt-[-5vh] ml-8' src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
    <p className='text-xl font-semibold m-4'>{name}</p>
    </div>
    <p className='text-[2.6vh] font-normal mt-2 text-zinc-200 pl-6'> {testimonial}</p>

 </div>
 </>
)
}

export default TestimonialCard