import React from 'react'
import Image from 'next/image';

const brands = [
  'Spark', 'tinder', 'airbnb',
  'Cadbury', '', 'Canon',
  'facebook', 'Quora', 'Disney',
  'SAMSUNG', '', 'Booking.com'
];


const Customers = () => {
  return (
    <section id='customers' className='mt-16 sm:px-14 max-sm:px-5 flex flex-col justify-center items-center space-y-3'>
    <p className='text-lg text-purple-400'>Leaders love Stellar</p>
    <h1 className='text-center max-sm:text-4xl text-5xl font-bold'>Trusted by leading companies</h1>
    <p className='mt-3 text-center text-lg max-sm:text-md text-wrap'>Stellar powers thousands of high-impact product teams. From next-gen startups who reach<br className='hidden lg:block'/> for the stars to established greats who change the world.</p>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1a] rounded-2xl min-h-[160px] flex items-center justify-center text-xl font-semibold text-center px-8 py-7"
          >
            {brand === '' && idx === 4 && (
              <div>
                <p className="text-sm italic leading-relaxed">
                  “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.”
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs">
                  <Image
                    src="/customer-avatara.jpg"
                    alt="avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span>Mirko Mitt - <span className="text-purple-400">Mildrink</span></span>
                </div>
              </div>
            )}

            {brand === '' && idx === 10 && (
              <div>
                <p className="text-sm italic leading-relaxed">
                  “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.”
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs">
                  <Image
                    src="/customer-avatarb.jpg"
                    alt="avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span>Mike Hunt - <span className="text-purple-400">Thunderbolt</span></span>
                </div>
              </div>
            )}

            {brand !== '' && <span className="capitalize">{brand}</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Customers