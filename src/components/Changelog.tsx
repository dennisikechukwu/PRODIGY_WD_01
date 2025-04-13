import React from 'react'
import { ArrowRight } from 'lucide-react'

const Changelog = () => {
  return (
    <section id='changelog' className='mt-16 sm:px-14 max-sm:px-5 flex flex-col justify-center items-center space-y-3'>
    <p className='text-lg text-purple-400'>The security first platform</p>
    <h1 className='text-center max-sm:text-3xl text-5xl font-bold'>Take control of your business</h1>
    <p className='mt-3 text-center text-lg max-sm:text-md text-wrap'>All the lorem ipsum generators on the Internet tend to repeat predefined chunks as<br className='hidden lg:block'/> necessary, making this the first true generator on the Internet.</p>
    <div className='flex justify-center'>
    <div className='flex justify-center items-center gap-2.5 bg-[#e8dede] py-1.5 px-4 rounded-full'>
              <p className='text-[#282626]'>Get Started</p>
              <ArrowRight className='text-purple-500 w-[23px] h-[23px]'/>
          </div>
    </div>
    </section>
  )
}

export default Changelog