"use client"
import React from 'react'
import Image from 'next/image'
import { Menu,X } from 'lucide-react'
import { useState,useEffect } from 'react'
import Link from 'next/link'


const Nav = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    function toggleNavbar() {
        setTimeout(() => setOpen((prev) => !prev)); // Small delay to prevent race conditions
    }

   

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className= {`px-16 py-5 max-md:px-10 max-md:py-5  sticky top-0 z-50 transition-all duration-300 ${scrolled ? ' bg-[#0f172a] backdrop-blur-md shadow-lg' : 'bg-transparent'} `}>
            <div className="flex justify-between items-center text-[#e8dede] ">
                <Link href="/">
                <Image
                 src="/logo.svg"
                 alt='Logo'
                 width={41}
                 height={37}
               
                />
                </Link>
                <div className='lg:flex gap-6 justify-center ml-5 hidden '>
                    <Link href="/#about"><p className='text--white cursor-pointer'>About</p></Link>
                    <Link href="/#integrations"><p className='text--white cursor-pointer'>Integrations</p></Link>
                    <Link href='/#pricing'><p   className='text--white cursor-pointer'>Pricing</p></Link>
                    <Link href='/#customers'><p  className='text--white cursor-pointer'>Customers</p></Link>
                    <Link href='/#changelog'><p  className='text--white cursor-pointer'>
                    Changelog</p></Link>
                </div>
                <div className='flex gap-3 max-md:gap-5 justify-center items-center'>
                    <span className='text--white cursor-pointer'>Sign in</span>
                    <span className='py-1 px-5 max-sm:px-3.5 flex justify-center items-center border rounded-full border--purple cursor-pointer text--white'>Sign up </span>
                    <div className='justify-center items-center hidden max-lg:flex ' onClick={toggleNavbar}>
                    {open ? <X className="text-white w-[27px] h-[27px]" /> : <Menu className="text-white w-[27px] h-[27px]" />}
                </div>
                </div>
                
            </div>

             {/* Mobile Menu Dropdown */}
             {open && (
                <div className='flex justify-center p-5'>
                <div
                    key={open ? "open" : "closed"} // Forces fresh render
                    className="lg:hidden  border border-[#7f8491]  flex flex-col justify-center gap-3 bg-[#151414] p-4 rounded-lg text-left fixed w-[90%]   z-10"
                >
                    {[
                        { name: "About", href: "/#about" },
                        { name: "Integrations", href: "/#integrations" },
                        { name: "Pricing", href: "/#pricing" },
                        { name: "Customers", href: "/#customers" },
                        { name: "Changelog", href: "/#changelog" },
                    ].map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span
                                className="block text-white py-2  cursor-pointer"
                                onClick={toggleNavbar}

                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
                </div>
            )}
            
            </nav>
  )
}

export default Nav