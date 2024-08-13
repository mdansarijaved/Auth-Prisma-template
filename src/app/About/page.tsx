'use client'
import React from 'react'
import useCount from '../store'

function About() {
  const count = useCount((state)=>state.count)
  const increment = useCount((state)=>state.increment)  
  return (
    <div className='text-7xl text-neutral-900 tracking-wide mt-10'>HomePage
    {count}
     <button onClick={increment} className="bg-blue-500 text-white p-4 rounded-md mt-5">Increment</button>
     <button onClick={()=>useCount.getState().resetCount()} className="bg-red-500 text-white p-4 rounded-md mt-5">Reset</button>
     </div>
  )
}

export default About