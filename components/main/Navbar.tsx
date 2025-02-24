"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Drawer } from 'vaul';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Send } from "lucide-react";
import {useChat} from "ai/react"


const Navbar = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the latest message smoothly when messages update
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300  ">
            RIT
          </span>
        </a>

        <div className="xl:w-[500px] h-full flex flex-row items-center justify-between md:mr-20 fixed top-0 right-80 -translate-x-11 xs:hidden sm:flex sm:translate-x-28 sm:w-[300px] xl:-translate-x-20 lg:translate-x-14 lg:w-[420px]
        ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 lg:mr-[20px]">
            <a href="#about-us" className="cursor-pointer sm:text-sm xl:text-xl lg:text-xl">
              About Us            </a>
            <a href="#skills" className="cursor-pointer xl:text-2xl sm:text-sm lg:text-2xl">
              Skills
            </a>
            <a href="#Projects" className="cursor-pointer xl:text-xl sm:text-sm lg:text-xl">
              Projects
            </a>
          </div>
        </div>
        {/* chatbot*/ }
        <div className="">
  <Drawer.Root direction="right">
    <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white/20 backdrop-blur-xl text-white px-8 font-medium shadow-sm transition-all z-30 text-xl">
      ChatBot
    </Drawer.Trigger>
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 " />
      <Drawer.Content
        className="right-2 top-2 bottom-2 fixed z-[9999] outline-none w-[500px] xs:w-[350px] flex"
        style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
      >
        <div className="bg-white/30 backdrop-blur-lg h-full w-full grow p-5 flex flex-col rounded-[16px] ">
          <div className="max-w-md mx-auto">
            <Drawer.Title className="font-medium mb-2 text-zinc-900">
              Your AI Co-founder for startup Success!
            </Drawer.Title>
            {/* ✅ Chat UI moved outside Drawer.Description */}
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="fixed top-28 w-full max-w-2xl p-4 bg-transparent  rounded-lg z-20">
                <div className="overflow-y-auto h-96 p-4 space-y-2">
                  {messages.map((m, index) => (
                    <div
                      key={m.id}
                      ref={index === messages.length - 1 ? lastMessageRef : null}
                      className={`p-2 my-2 rounded-lg ${
                        m.role === 'user' ? 'bg-transparent border border-white text-right text-[#b4fed8] xs:text-2xs' : 'bg-transparent border border-white text-left text-purple-200 xs:text-2xs'
                      }`}
                    >
                      <span className="font-bold text-lime-20 text-xl xs:text-sm">
                        {m.role === 'user' ? 'User: ' : 'AI: '}
                      </span>
                      {m.content}
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSubmit} className="flex items-center mt-4">
                  <Input
                    className="flex-grow p-2 border-4 border-[#feeab4] rounded-lg text-white"
                    placeholder="Ask whatever you want..."
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    className="ml-2 p-2 bg-[#feb4da] text-white rounded-lg hover:bg-[#feeab4] hover:text-black"
                  >
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  </Drawer.Root>
</div>

      </div>
    </div>
  );
};

export default Navbar;