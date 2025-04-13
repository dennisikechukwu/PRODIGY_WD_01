import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Heart, Settings, ShieldCheck, ClipboardList, Hammer } from 'lucide-react'


const features = [
    { icon: <Heart className="w-6 h-6" />, title: 'Filters' },
    { icon: <Settings className="w-6 h-6" />, title: 'Configurable' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Authorization' },
    { icon: <ClipboardList className="w-6 h-6" />, title: 'Management' },
    { icon: <Hammer className="w-6 h-6" />, title: 'Building' },
    
  ];
  
import Image from 'next/image'

const Fast = () => {
  return (
        <section id='integrations' className='mt-44 sm:px-14 max-sm:px-5'>
            <h1 className='text-center max-sm:text-4xl text-5xl font-bold'>Faster. Smarter.</h1>
            <p className='mt-3 text-center text-lg max-sm:text-md text-wrap'>There are many variations available, but the majority have suffered alteration in some form<br className='hidden lg:block'/> by injected humour, or randomised words which donnt look even slightly believable.</p>
            <div className='p-6 m-auto mt-3.5 flex max-lg:flex-col-reverse  justify-around border border-purple-800 rounded-xl'>
                <div className='flex flex-col justify-center items-start space-y-4 '>
                    <h1 className='text-2xl font-semibold'>Optimized for security</h1>
                    <p className='text-md'>Optimize for user experience and privacy. Use social login<br className='hidden lg:block'/> integrations, lower user  friction, incorporate rich user <br className='hidden lg:block'/> profiling, and facilitate more transactions.</p>
                    <div className='flex justify-between items-center gap-2.5 bg-[#8e23f34d] p-2 px-4 rounded-full'>
                            <p className='text-md'>Learn more</p>
                            <ArrowRight className='w-[20px] h-[20px]'/>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Image src="/feature-image.png" alt='Feature' width={450} height={450}/>
                </div>
            </div>
            <div className='flex justify-center gap-3 items-center mt-6 max-lg:flex-col'>
            <div className='w-[60%] max-lg:w-full border border-purple-800 rounded-xl flex flex-col justify-center items-start space-y-4 p-7'>
            <h1 className='text-2xl font-semibold'>Extensibility</h1>
            <p className='text-md'>Your login box must find the right balance between user<br className='hidden md:block'/> convenience, privacy and security.</p>
            <Image src="/feature-image-02.png" width={500} height={500} alt=''/>
            </div>

            <div className='w-[40%] max-lg:w-full  border border-purple-800 rounded-xl flex flex-col justify-center items-start space-y-4 px-7 max-lg:py-6 py-7'>
            <h1 className='text-2xl font-semibold'>Infinite options</h1>
            <p className='text-md'>Quickly apply filters to refine your issues lists and<br className='hidden md:block'/> create custom views.</p>
            <div className='flex justify-center items-center'>
            <Image src="/feature-image-03.png" width={213} height={200} alt=''/>
            </div>
          
            </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10 ">
           {features.map(({ icon, title }, index) => (
            <div key={index} className='flex flex-col items-start space-y-2'>
        <div  className="flex justify-center items-center space-x-2">
           <div className='text-gray-400'>{icon}</div>
           <p className='text-white text-lg'>{title}</p>
        </div>
        <p className='text-gray-400'>Login box must find the right balance for the user convenience, privacy and security.</p>
        </div>
        
      ))}
    </div>

            

        </section>
  )
}

export default Fast