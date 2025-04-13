import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] px-16 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              {/* Replace this with your actual logo */}
              <Image
                              src="/logo.svg"
                               alt='Logo'
                               width={41}
                               height={37}
                             
                              />
            </div>
            <p className="text-sm text-gray-400 mb-6">© Cruip.com – All rights reserved.</p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
           <Link href="#"><X  className='text-purple-700 w-[34px] h-[34px] font-extrabold hover:text-purple-900 transition' /></Link>
              <Link href="#"><Github className='text-purple-700 w-[27px] h-[27px]  hover:text-purple-900 transition'  /></Link>
              <Link href="#"><Instagram  className='text-purple-700 w-[27px] h-[27px]  hover:text-purple-900 transition'  /></Link>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-3">Products</h4>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing & Plans</li>
                <li>Changelog</li>
                <li>Our method</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Diversity & Inclusion</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Financial statements</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>Community</li>
                <li>Terms of service</li>
                <li>Report a vulnerability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legals</h4>
              <ul className="space-y-2">
                <li>Refund policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy policy</li>
                <li>Brand Kit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer