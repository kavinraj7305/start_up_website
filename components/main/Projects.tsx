"use client"
import React from "react";
import { motion } from "framer-motion";
import {AiOutlineCheck} from "react-icons/ai"
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "AI-based Task Management Website",
    category: "Web app with AI chatbot",
    imageSrc: "/project_1.png", 
    bulletPoint1:"Enchanced user experience by 40%",
    bulletPoint2:"faster loading by 30%",
    bulletPoint3:"user interaction incresed by 60%",
  },
  {
    id: 2,
    title: "Smart Yoga Mat",
    category: "Personalized yoga teacher with instant posture correction",
    imageSrc: "/project_2.png",
    bulletPoint1:"Enchanced user experience by 40%",
    bulletPoint2:"faster loading by 30%",
    bulletPoint3:"user interaction incresed by 60%",
  },
  {
    id: 3,
    title: "Sample_Yatra 2K25 Website",
    category: "Animated website with AI chatbot",
    imageSrc: "/project_3.png",
    bulletPoint1:"Enchanced user experience by 40%",
    bulletPoint2:"faster loading by 30%",
    bulletPoint3:"user interaction incresed by 60%",
  },
];

const Projects = () => {
  return (
    <section className="py-16 container mx-auto min-h-[300vh]">
      {projects.map((project,index) => (
        <motion.div
          key={project.id}
          className="border border-white/20 flex flex-col md:flex-row text-white rounded-3xl  backdrop-blur-md p-12 justify-between space-x-4 items-start mb-16 w-[300px] md:w-[1100px] sticky top-28"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,delay: index * 0.2}}
          viewport={{once:true}}
        >
          <div className="space-y-6">
          <p className="text-gray-200 text-sm">{project.category}</p>
          <h2 className="text-2xl font-bold md:text-4xl">{project.title}</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <AiOutlineCheck className="w-5 h-5 text-emerald-500"/>
              <p>Enchanced user experience by 40%</p>
            </li>
            <li className="flex items-center">
            <AiOutlineCheck className="w-5 h-5 text-emerald-500"/>
              <p>faster loading by 30%</p>
            </li>
            <li className="flex items-center">
            <AiOutlineCheck className="w-5 h-5 text-emerald-500"/>
              <p>user interaction incresed by 60%</p>
            </li>
          </ul>
          </div>
          <Image
            src={project.imageSrc}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-3xl"
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
