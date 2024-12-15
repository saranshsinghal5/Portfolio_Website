import React from 'react'
import { Link, Route,Router,Routes } from 'react-router-dom'
import About from './About'
import Summary from './Summary'
import Projects from './Projects'
import Contact from './Contact'
import Cv from './Cv'


function Right() {
  return (
    <div className='h-fit basis-3/4  bg-orange-400 rounded-2xl my-16 ml-6 mr-3'>
       
      <div className=' h-14 w-1/2 content-center rounded-bl-2xl rounded-tr-2xl bg-slate-500 place-self-end'>
      <nav>
     <div className=' text-white text-base flex justify-evenly content-center '>
    
      <Link to="/About">About</Link>
      <Link to="/Summary">Summary</Link>
      <Link to="/Cv">CV</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
     
     </div>
      </nav>
      </div>

      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Summary' element={<Summary/>}/>
        <Route path='/Cv' element={<Cv/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
     </div> 
        )
}

export default Right