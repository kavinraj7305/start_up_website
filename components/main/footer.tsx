"use client"
import { useRef } from 'react'
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiFacebook,
  SiTiktok,
  SiTwitch,
  SiX,
  SiThreads,
} from 'react-icons/si'
import { motion, useAnimate, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap, useAnimationFrame } from 'framer-motion';
import React from 'react'

interface ParallaxProps {
    children: string;
    baseVelocity: number;
  }
  
  function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);    
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  
    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="overflow-hidden whitespace-nowrap flex items-center relative w-full text-4xl font-bold uppercase  ">
        <motion.div className="flex space-x-10" style={{ x }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} className="px-4 bg-gradient-to-r from-purple-500 to-cyan-500">{children}</span>
          ))}
        </motion.div>
      </div>
    );
  }
  

const footer = () => {
    return (
        <motion.div
        className='h-[calc(100vh-6rem)] w-full'
        initial={{y:"-100vh"}}
        animate={{y:"0vh"}}
        transition={{duration:1,ease:"easeOut"}}
        >
        <div className='flex flex-col items-center justify-center z-[30] text-white '>
          <div>
          <ParallaxText baseVelocity={-5}>STARTUP</ParallaxText>
          </div>
          <div className='max-h-screen w-full mx-4 bg-white/50 z-50'>
            <div className='border divide-y '>
    
    
    
    
              <div className='grid grid-cols-2 divide-x '>
              <LinkBox Icon={SiGithub} href='https://github.com'/>
              <LinkBox Icon={SiLinkedin} href='https://linkedin.com'/>
              </div>
              <div
              className='grid grid-cols-4 divide-x '>
              <LinkBox Icon={SiInstagram} href='https://instagram.com'/>
              <LinkBox Icon={SiYoutube} href='https://youtube.com'/>
              <LinkBox Icon={SiFacebook} href='https://facebook.com'/>
              <LinkBox Icon={SiTiktok} href='https://tiktok.com'/>
              </div>
              <div
              className='grid grid-cols-3 divide-x '>
              <LinkBox Icon={SiThreads} href='https://threads.net'/>
              <LinkBox Icon={SiTwitch} href='https://twitch.tv'/>
              <LinkBox Icon={SiX} href='https://x.com'/>
              </div>  
            </div>
          </div>
        </div>
         </motion.div>
      )
    };
    
    interface LinkBoxProps{
      Icon:React.ElementType;
      href:string;
    }
    
    const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
    const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
    const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
    const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
    const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
    
    const ENTRANCE_KEYFRAMES = {
      left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
      bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
      top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
      right: [TOP_LEFT_CLIP, NO_CLIP],
    };
    
    const EXIT_KEYFRAMES = {
      left: [NO_CLIP, TOP_RIGHT_CLIP],
      bottom: [NO_CLIP, TOP_RIGHT_CLIP],
      top: [NO_CLIP, TOP_RIGHT_CLIP],
      right: [NO_CLIP, BOTTOM_LEFT_CLIP],
    };
    const LinkBox = ({Icon,href}:LinkBoxProps) =>{
      const [scope, animate] = useAnimate();
    
    
    
      const handleMouseEnter = (e:React.MouseEvent<HTMLAnchorElement>) =>{
    
        const side = getNearestSide(e);
        animate(scope.current,{
          clipPath: ENTRANCE_KEYFRAMES[side],
        })
    
      }
      
    
      const handleMouseLeave = (e:React.MouseEvent<HTMLAnchorElement>) =>{
        const side = getNearestSide(e);
        animate(scope.current,{
          clipPath: EXIT_KEYFRAMES[side],
        })
      }
    
    
      const getNearestSide = (e:React.MouseEvent<HTMLAnchorElement>) : keyof typeof ENTRANCE_KEYFRAMES =>{
        const box = e.currentTarget.getBoundingClientRect();
    
        const proxymityToLeft ={
          proximity : Math.abs(box.left - e.clientX),
          side : "left"
        }
        const proxymityToRight ={
          proximity : Math.abs(box.right - e.clientX),
          side : "right"
        }
        const proxymityToBottom ={
          proximity : Math.abs(box.bottom - e.clientY),
          side : "bottom"
        }
        const proxymityToTop ={
          proximity : Math.abs(box.top - e.clientY),
          side : "top"
        }
        
        const sortedProxymities = [proxymityToLeft,proxymityToRight,proxymityToBottom,proxymityToTop].sort((a,b)=>a.proximity - b.proximity);
    
        return sortedProxymities[0].side as keyof typeof ENTRANCE_KEYFRAMES;
    
      }
    
    
    
    
    
      return(
    
        <a
    
        onMouseEnter={(e)=>{
          handleMouseEnter(e);
        }}
    
        onMouseLeave={(e)=>{
          handleMouseLeave(e);
        }} 
    
    
    
    
    
        href={href}
        className='relative grid h-20 w-full place-content-center sm:h-28 md:h-36'
        >
          <Icon className='text-xl sm:text-3xl lg:text-4xl'/>
          <div 
          ref={scope}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 0, 0 100%)',
          }}
          className='absolute inset-0 grid place-content-center bg-[#030014]' >
            
          <Icon className='text-xl sm:text-3xl lg:text-4xl text-white'/>
          </div>
    
        </a>
    
      )
}

export default footer
