"use client"
import React from 'react'
import {motion} from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import {SparklesIcon } from '@heroicons/react/24/solid' 
import RegisterForm from "@/components/sub/RegisterForm"
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start xs:mr-10'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[15px] px-[7px] border border-[#7042f88b] opacity-[0.9] '
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-6 xs:h-10 xs:w-24 xs:mr-0 '/>
            <h1 className='welcome-text text-[13px] xs:text-[20px] text-white pr-3 '>
                RIT STARTUP
            </h1>
        </motion.div> 
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto xs:text-lg'
        >
          <span>
          From Ideas to Identity – We Help Students 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Build, Register, and Protect </span>
          Their Online Presence!
          </span>
        </motion.div>
        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px] '
        >
          An interactive platform for our college startup club, connecting innovators, providing resources, and fostering collaboration through discussions, project showcases, and networking opportunities.
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        >
          <RegisterForm/>
        </motion.a>
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center'
      >
        <Image
        src="/mainIconsdark.svg"
        alt="work icons"
        height={650}
        width={650}
        />

      </motion.div>
    </motion.div>
  )
}

export default HeroContent
