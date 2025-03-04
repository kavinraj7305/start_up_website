import React from 'react'
import MeteorsDemo from './meteor_effect'
import BackgroundBeamsWithCollisionDemo from './center'

const Projects = () => {
  return (
    <div className=' min-h-full px-4 w-full py-12 text-lime-400 z-30 mb-96 mt-0'>
      <div className='mx-auto grid max-w-full grid-flow-dense grid-cols-12 gap-1'>
        <div className='col-span-2  p-4 '>
          <MeteorsDemo title='Centre for Artificial Intelligence' description=''/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for Energy and Mobility ' description=''/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for Cyber Security ' description=''/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for AR VR' description=''/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for Apple ' description=''/>
        </div>
        <div className='col-span-2  p-4'>
          <MeteorsDemo title='Centre for Advance Manufacturing' description=''/>
        </div>
        <div className='col-span-2  p-4'>
          <MeteorsDemo title='Centre for IOT' description=''/>
        </div>
        <div className='col-span-8 row-span-2  p-4'>
          <BackgroundBeamsWithCollisionDemo/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for Data Science' description=''/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for Image Process' description=''/>
        </div>
        <div className='col-span-4  p-4'>
        <MeteorsDemo title='Centre for Cloud Computing ' description=''/>
        </div>
        <div className='col-span-4  p-4'>
        <MeteorsDemo title='Centre for Enterpernurship' description=''/>
        </div>
        <div className='col-span-4  p-4'>
        <MeteorsDemo title='Centre for Advanced Materials' description=''/>
        </div>
        <div className='col-span-2  p-4'>
        <MeteorsDemo title='Centre for space' description=''/>
        </div>
      </div>
    </div>
  )
}

export default Projects
