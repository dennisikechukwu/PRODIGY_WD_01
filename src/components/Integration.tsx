import React from 'react'
import Image from 'next/image'

const Integration = () => {
  return (
    <section  className='mt-16 sm:px-14 max-sm:px-5 flex flex-col justify-center items-center space-y-4'>
            <p className='text-lg text-purple-400'>The security first platform</p>
            <h1 className='text-center max-sm:text-4xl text-5xl font-bold'>Spot issues faster</h1>
            <p className='text-center text-lg max-sm:text-md text-wrap'>All the lorem ipsum generators on the Internet tend to repeat predefined chunks as<br className='hidden lg:block'/> necessary, making this the first true generator on the Internet.</p>
            <div className='border rounded-xl py-7 border-purple-800'>
                <Image
                src="/feature-image-04.png"
                width={850}
                height={850}  
                alt=''            
                />
            </div>
    </section>
  )
}

export default Integration