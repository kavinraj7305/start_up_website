import React from 'react'
import HeroContent from '../sub/HeroContent'

const hero = () => {
  return (
    <div id='about-us' className='relative flex flex-col h-full w-full'>
      <video
      autoPlay
      muted 
      loop
      className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full xs:collapse object-cover'
      >
        <source src='blackhole.webm' type='video/webm'/>
      </video>
      <HeroContent/>
    </div>
  )
}

export default hero
