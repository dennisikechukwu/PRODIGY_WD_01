"use client"

import React from 'react'
import { Zap } from 'lucide-react';
import { ScanEye } from 'lucide-react';
import { Signature } from 'lucide-react';

import Image from 'next/image';
import { useState } from 'react';

const Simplify = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First button is active by default

  const buttons = [
    {
      name:"Simplify your security",
      icon: <Zap/>
    },
    {
      name:"Customer Identity",
      icon: <ScanEye/>
    },
    {
      name:"Authentication",
      icon: <Signature/>
    },
   
  ];
  return (
    <section id='about' className='mt-32 flex justify-between items-center max-lg:flex-col-reverse max-lg:gap-10  sm:px-14 max-sm:px-5'>
            <div className='space-y-5 flex flex-col items-start'>
                <p className='text-lg text-purple-400'>The security first platform</p>
                <h1 className='sm:text-4xl text-3xl font-bold  '>Simplify your security with <br className='hidden lg:block'/> authentication services</h1>
                <p className='text-lg'>Define access roles for the end-users, and extend your<br className='hidden lg:block'/> authorization capabilities to implement dynamic access<br className='hidden lg:block'/> control.</p>

                <div className="space-y-2 ">
                  {buttons.map((text, index) => (
                    <button
                     key={index}
                     onClick={() => setActiveIndex(index)}
                     className={`flex gap-2 justify-start items-center w-[320px] sm:w-[360px] p-3 border rounded-md transition-colors duration-300 ${
                     activeIndex === index ? 'border-purple-500' : 'border-gray-300'
                 }`}
        >
          {text.icon}
          <p>{text.name}</p>
        </button>
      ))}
    </div>
            </div>
            <div className='max-sm:w-[300px]'>
                <Image
                 src="/about-illustration.svg"
                 width={500}
                 height={300}
                 alt='Power'
                 className=' '
                />
            </div>
    </section>
  )
}

export default Simplify