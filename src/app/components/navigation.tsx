import React from 'react'
import TransitionLink from './transition'

function Navigation() {
  return (
    <div className='flex justify-between items-center px-10  '>
        <div className='text-xl tracking-wide font-bold'>
            Hello 
        </div>
    <div className='flex gap-5 justify-center items-center '>
    <TransitionLink href='/Home' label='home'></TransitionLink>
    <TransitionLink href='/About' label='about'></TransitionLink>

    </div>
    </div>
  )
}

export default Navigation