import React from 'react'
import { CheckCircle2 } from 'lucide-react';
export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

const Price = () => {
  return (
    <section id='pricing' className='mt-16 sm:px-14 max-sm:px-5 flex flex-col justify-center items-center space-y-4'>
        <p className='text-lg text-purple-400'>Pricing plans</p>
        <h1 className='text-center max-sm:text-4xl text-5xl font-bold'>Flexible plans and features</h1>
        <p className='mt-3 text-center text-lg max-sm:text-md text-wrap'>All the lorem ipsum generators on the Internet tend to repeat predefined chunks as<br className='hidden lg:block'/> necessary, making this the first true generator on the Internet.</p>
        <div className="flex flex-wrap  hover:border-purple-500 transition">
            {pricingOptions.map((options) => (
                <div key={options.price} className="w-full sm:w-1/2 lg:w-1/3 p-2  hover:border-purple-500 transition">
                   <div className="p-10 border border-neutral-700 rounded-xl">
                    <p className="text-4xl mb-8">
                        {options.title}
                        {options.title === "Pro" && (
                            <span className="bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                (Most Popular)
                            </span>
                        )}
                    </p>
                    <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{options.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {options.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-500 border border-purple-300 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
                    </div> 
                </div>
            ))}
        </div>
    </section>
  )
}

export default Price