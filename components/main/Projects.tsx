import React from 'react'
import project1 from '@/public/project_1.png'
import project2 from "@/public/project_2.png"
import project3 from '@/public/project_3.png'
import {motion} from "framer-motion"




const projects =[
  {
    id:1,
    title:"AI based task management website",
    category:"web app with ai chatBot",
    imageSrc:project1,
  },
  {
    id:2,
    title:"Smart yoga mat",
    category:"personalised yoga teacher with instatnt posture correction",
    imageSrc:project2,
  },
  {
    id:3,
    title:"sample_yatra 2K25 website",
    category:"animated website with AI chatbot ",
    imageSrc:project3,
  },
  
]


const Projects = () => {
  return (
    <section className='py-16'>
      {projects.map((project,index)=>(
        <motion.div
          key={project.id}
          className='border border-white/20 flex flex-col md:flex-row text-white rounded-3xl bg-gradient-to-r from'
        >

        </motion.div>
      ))}
      
    </section >
  )
}

export default Projects
