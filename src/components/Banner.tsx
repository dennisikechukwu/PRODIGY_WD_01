import React from 'react'

const Banner = () => {
  return (
    <section className="bg-[#0f172a] py-14 max-md:py-8">
    <div className="max-w-6xl mx-auto px-4 flex  justify-center max-sm:justify-start gap-10 overflow-x-scroll no-scrollbar snap-x scroll-smooth text-white text-xl sm:text-2xl md:text-3xl">
      <span className="font-bold font-sans opacity-80 hover:opacity-100 transition">facebook</span>
      <span className="font-medium font-sans italic tracking-wide opacity-80 hover:opacity-100 transition">Hubspot</span>
      <span className="font-semibold font-sans tracking-wider opacity-80 hover:opacity-100 transition">airbnb</span>
      <span className="font-cursive font-sans text-lg md:text-2xl opacity-80 hover:opacity-100 transition">Cadbury</span>
      <span className="font-bold font-sans tracking-tight opacity-80 hover:opacity-100 transition">Canon</span>
      <span className="font-handwriting font-sans italic opacity-80 hover:opacity-100 transition">Spark</span>
      <span className="font-semibold opacity-80 font-sans hover:opacity-100 transition">Quora</span>
    </div>
  </section>
  )
}

export default Banner