"use client";
import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Encryption = () => {
  const [scope, animate] = useAnimate();
  const [clicked, setIsClicked] = useState(false);
  const [hovered,setIsHovered] =useState(false);
  const [hovered_1,setIsHovered_1] =useState(false);
  const [hovered_2,setIsHovered_2] =useState(false);
  const [hovered_3,setIsHovered_3] =useState(false);
  const [hovered_4,setIsHovered_4] =useState(false);
  const [hovered_5,setIsHovered_5] =useState(false);

  const generateTeamDetails_1 = async () => {
    await animate(
      scope.current.querySelector("#first_circle"), 
      {
        x: 40,
        y: 110,
        scale: 1.5,
      },
      {
        duration: 1,
        ease: "easeInOut",
      }
    );
  };
  const generateTeamDetails_2 = async () => {
    await animate(
      scope.current.querySelector("#second_circle"), 
      {
        x: 270,
        y: -90,
        scale: 1.7,
      },
      {
        duration: 1.3,
        ease: "easeInOut",
      }
    );
  };
  const generateTeamDetails_3 = async () => {
    await animate(
      scope.current.querySelector("#third_circle"), 
      {
        x: 120,
        y: 140,
        scale: 1.3,
      },
      {
        duration: 1.3,
        ease: "easeInOut",
      }
    );
  };
  const generateTeamDetails_4 = async () => {
    await animate(
      scope.current.querySelector("#fourth_circle"), 
      {
        x: -220,
        y: -90,
        scale: 2.2,
      },
      {
        duration: 1.3,
        ease: "easeInOut",
      }
    );
  };
  const generateTeamDetails_5 = async () => {
    await animate(
      scope.current.querySelector("#fifth_circle"), 
      {
        x: -300,
        y: 50,
        scale: 1.2,
      },
      {
        duration: 1.3,
        ease: "easeInOut",
      }
    );
  };
  const generateTeamDetails_6 = async () => {
    await animate(
      scope.current.querySelector("#sixth_circle"), 
      {
        x: 200,
        y: 60,
        scale: 1.2,
      },
      {
        duration: 1.3,
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_1_enter = async () => {
    await animate(
      scope.current.querySelector("#first_circle"),
      {
        borderRadius: "12px", 
        x: 100,
        y: 100,
        scale: 7,
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        backdropFilter: "blur(15px)", 
        opacity: 0.85, 
        rotate: 10,
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  
  
  const hover_circle_1_leave = async () => {
    await animate(
      scope.current.querySelector("#first_circle"),
      {
        borderRadius: "100%", 
        x: 0, 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(20, 20, 20, 0.8)", 
        backdropFilter: "blur(4px)", 
        opacity: 1, 
        rotate: 0, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };


  const hover_circle_2_enter = async () => {
    await animate(
      scope.current.querySelector("#second_circle"),
      {
        borderRadius: "12px", 
        x: 200,
        y: 20,
        scale: 7,
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        backdropFilter: "blur(15px)", 
        opacity: 0.85, 
        rotate: -10, 
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  
  const hover_circle_2_leave = async () => {
    await animate(
      scope.current.querySelector("#second_circle"),
      {
        borderRadius: "100%", 
        x: 0, 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(20, 20, 20, 0.8)", 
        backdropFilter: "blur(4px)", 
        opacity: 1, 
        rotate: 0, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_3_enter = async () => {
    await animate(
      scope.current.querySelector("#third_circle"),
      {
        borderRadius: "12px", 
        x: 200,
        y: 20,
        scale: 7,
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        backdropFilter: "blur(15px)", 
        opacity: 0.85, 
        rotate: -6, 
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };

  const hover_circle_3_leave = async () => {
    await animate(
      scope.current.querySelector("#third_circle"),
      {
        borderRadius: "100%", 
        x: 0, 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(20, 20, 20, 0.8)", 
        backdropFilter: "blur(4px)", 
        opacity: 1, 
        rotate: 0, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_4_enter = async () => {
    await animate(
      scope.current.querySelector("#fourth_circle"),
      {
        borderRadius: "12px", 
        x: 50,
        y: -40,
        scale: 7,
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        backdropFilter: "blur(15px)", 
        opacity: 0.85, 
        rotate: 10, 
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_4_leave = async () => {
    await animate(
      scope.current.querySelector("#fourth_circle"),
      {
        borderRadius: "100%", 
        x: 0, 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(20, 20, 20, 0.8)", 
        backdropFilter: "blur(4px)", 
        opacity: 1, 
        rotate: 0, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_5_enter = async () => {
    await animate(
      scope.current.querySelector("#fifth_circle"),
      {
        borderRadius: "12px", 
        x: -110,
        y: -10,
        scale: 7,
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        backdropFilter: "blur(15px)", 
        opacity: 0.85, 
        rotate: 10, 
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_5_leave = async () => {
    await animate(
      scope.current.querySelector("#fifth_circle"),
      {
        borderRadius: "100%", 
        x: 0, 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(20, 20, 20, 0.8)", 
        backdropFilter: "blur(4px)", 
        opacity: 1, 
        rotate: 0, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_6_enter = async () => {
    await animate(
      scope.current.querySelector("#sixth_circle"),
      {
        borderRadius: "12px", 
        x: -50,
        y: -30,
        scale: 7,
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        backdropFilter: "blur(15px)", 
        opacity: 0.85, 
        rotate: -10, 
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };
  const hover_circle_6_leave = async () => {
    await animate(
      scope.current.querySelector("#sixth_circle"),
      {
        borderRadius: "100%", 
        x: 0, 
        y: 0,
        scale: 1,
        backgroundColor: "rgba(20, 20, 20, 0.8)", 
        backdropFilter: "blur(4px)", 
        opacity: 1, 
        rotate: 0, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", 
      },
      {
        duration: 0.7, 
        ease: "easeInOut",
      }
    );
  };

  

  return (
    <div ref={scope} className="flex flex-row relative items-center justify-center min-h-screen w-full h-full ">
      <div className="absolute w-auto h-auto top-0 z-[5] py-0">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Our Visionaries</span>
      
          
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-40px] absolute z-[20] w-auto h-auto mb-0 ">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"

            width={50}
            height={50}
            className="w-[50px] sm:w-[40px] translate-y-5 transition-all duration-200 group-hover:translate-y-11 sm:group-hover:translate-y-6
            "
          />
          <motion.button className="z-10" onClick={() => { generateTeamDetails_1(); setIsClicked(true);generateTeamDetails_2() ;generateTeamDetails_3(); generateTeamDetails_4();generateTeamDetails_5();generateTeamDetails_6()}}>
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className="z-10 sm:w-[50px]"
            />
          </motion.button>
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">The Thinkers, The Makers, The Doers.</h1>
        </div>
      </div>

      {/* first circle */}
      <motion.div 
        variants={slideInFromLeft(0.8)} 
        id="first_circle" 
        className={`w-10 h-10 bg-white rounded-full ${clicked ? "z-10" : "z-0"} ${hovered? "z-20" : "z-0" }`}
        onMouseEnter={()=>{hover_circle_1_enter();setIsHovered(true)}}
        onMouseLeave={()=>{hover_circle_1_leave();setIsHovered(false);generateTeamDetails_1()}}
      >
        {
          hovered ?(
            <p className="align-text-bottom text-xs translate-x-3 text-white">
              person 1
            </p>
          ):null
        }
        <Avatar className={`${hovered?"collapse":""}`}>
          <AvatarImage src="https://github.com/shadcn.png"  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>
      {/* second circle */}
      <motion.div 
        variants={slideInFromLeft(0.8)} 
        id="second_circle" 
        className={`w-10 h-10 bg-white rounded-full ${clicked ? "z-10" : "z-0"} ${hovered_1? "z-20" : "z-0" }`}
        onMouseEnter={()=>{hover_circle_2_enter();setIsHovered_1(true)}}
        onMouseLeave={()=>{hover_circle_2_leave();setIsHovered_1(false);generateTeamDetails_2()}}
      >
        {
          hovered_1 ?(
            <p className="align-text-bottom text-xs translate-x-3 text-white">
              person 2
            </p>
          ):null
        }
        <Avatar className={`${hovered_1?"collapse":""}`}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>
      {/* third circle */}
      <motion.div 
        variants={slideInFromLeft(0.8)} 
        id="third_circle" 
        className={`w-10 h-10 bg-white rounded-full ${clicked ? "z-10" : "z-0"} ${hovered_2? "z-20" : "z-0" }`}
        onMouseEnter={()=>{hover_circle_3_enter();setIsHovered_2(true)}}
        onMouseLeave={()=>{hover_circle_3_leave();setIsHovered_2(false);generateTeamDetails_3()}}
      >
        {
          hovered_2 ?(
            <p className="align-text-bottom text-xs translate-x-3 text-white">
              person 3
            </p>
          ):null
        }
        <Avatar className={`${hovered_2?"collapse":""}`}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>
      {/* fourth circle */}
      <motion.div 
        variants={slideInFromLeft(0.8)} 
        id="fourth_circle" 
        className={`w-10 h-10 bg-white rounded-full ${clicked ? "z-10" : "z-0"} ${hovered_3? "z-20" : "z-0" }`}
        onMouseEnter={()=>{hover_circle_4_enter();setIsHovered_3(true)}}
        onMouseLeave={()=>{hover_circle_4_leave();setIsHovered_3(false);generateTeamDetails_4()}}
        
      >
        {
          hovered_3 ?(
            <p className="align-text-bottom text-xs translate-x-3 text-white">
              person 4
            </p>
          ):null
        }
        <Avatar className={`${hovered_3?"collapse":""}`}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>
      {/* fifth circle */}
      <motion.div 
        variants={slideInFromLeft(0.8)} 
        id="fifth_circle" 
        className={`w-10 h-10 bg-white rounded-full ${clicked ? "z-10" : "z-0"} ${hovered_4? "z-20" : "z-0" }`}
        onMouseEnter={()=>{hover_circle_5_enter();setIsHovered_4(true)}}
        onMouseLeave={()=>{hover_circle_5_leave();setIsHovered_4(false);generateTeamDetails_5()}}
      >
        {
          hovered_4 ?(
            <p className="align-text-bottom text-xs translate-x-3 text-white">
              person 5
            </p>
          ):null
        }
        <Avatar className={`${hovered_4?"collapse":""}`}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>
      {/* sixth circle */}
      <motion.div 
        variants={slideInFromLeft(0.8)} 
        id="sixth_circle" 
        className={`w-10 h-10 bg-white rounded-full ${clicked ? "z-10" : "z-0"} ${hovered_5? "z-20" : "z-0" }`}
        onMouseEnter={()=>{hover_circle_6_enter();setIsHovered_5(true)}}
        onMouseLeave={()=>{hover_circle_6_leave();setIsHovered_5(false);generateTeamDetails_6()}}
      >
        {
          hovered_5 ?(
            <p className="align-text-bottom text-xs translate-x-3 text-white">
              person 6
            </p>
          ):null
        }
        <Avatar className={`${hovered_5?"collapse":""}`}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>

      

      <div className="w-10 h-10 bg-white rounded-full"></div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>

      <div className="w-10 h-10 bg-white rounded-full"></div>
    </div>
  );
};

export default Encryption;
