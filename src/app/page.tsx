import { ArrowRight } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import Banner from '@/components/Banner';
import Simplify from '@/components/Simplify';
import Fast from '@/components/Fast';
import Integration from '@/components/Integration';
import Trust from '@/components/Trust';
import Price from '@/components/Price';
import Customers from '@/components/Customers';
import Changelog from '@/components/Changelog';

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center flex-wrap md:my-[23vh] my-[10vh] space-y-5 p-6">
        <div className="flex gap-4 py-1 px-3.5 border rounded-full border-purple-500 cursor-pointer">
        <p>Api studio is now in beta</p>
        <ArrowRight/>

        </div>
        <h1 className='lg:text-6xl md:text-4xl sm:text-4xl max-sm:text-4xl  max-md:font-extrabold md:font-bold text-[#e8dede] text-center font-sans'>The API Security Framework</h1>
        <p className='text-center text-[#e8dede] sm:text-lg text-md'>Our landing page template works on all devices, so you only have to set it up once, and get <br className='hidden lg:block'/>
         beautiful results forever.</p>
        <div className='flex max-sm:flex-col gap-4 flex-wrap'>
          <div className='flex justify-center items-center gap-2.5 bg-[#e8dede] py-2 px-6 rounded-full'>
              <p className='text-[#282626]'>Get Started</p>
              <ArrowRight className='text-purple-500 w-[23px] h-[23px]'/>
          </div>
          <div className='flex justify-between items-center gap-2.5 bg-[#8e23f34d] p-2 px-6 rounded-full'>
            <PencilLine className='w-[23px] h-[23px]'/>
            <p>Read the docs</p>
          </div>
        </div>


    </section>
    <Banner/>
    <Simplify/>
    <Fast/>
    <Integration/>
    <Trust/>
    <Price/>
    <Customers/>
    <Changelog/>
    </>
  )
}