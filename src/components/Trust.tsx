import React from 'react'
import {
    MessageCircle,
    Settings,
    Search,
    BarChart3,
    Bell,
    Plug,
    ShieldCheck,
    Download,
    RefreshCcw,
  } from 'lucide-react';

  const sections = [
    {
      title: 'API Authorization',
      features: [
        { icon: <MessageCircle className="w-6 h-6 text-white" />, title: 'Discussions' },
        { icon: <Settings className="w-6 h-6 text-white" />, title: 'Team views' },
        { icon: <Search className="w-6 h-6 text-white" />, title: 'Powerful search' },
      ],
    },
    {
      title: 'User Management',
      features: [
        { icon: <BarChart3 className="w-6 h-6 text-white" />, title: 'Analytics' },
        { icon: <Bell className="w-6 h-6 text-white" />, title: 'Notifications' },
        { icon: <Plug className="w-6 h-6 text-white" />, title: 'Integrations' },
      ],
    },
    {
      title: 'Standard Security',
      features: [
        { icon: <ShieldCheck className="w-6 h-6 text-white" />, title: 'Privacy' },
        { icon: <Download className="w-6 h-6 text-white" />, title: 'Data export' },
        { icon: <RefreshCcw className="w-6 h-6 text-white" />, title: 'Real-time sync' },
      ],
    },
  ];

const Trust = () => {
  return (
    <div className='mt-16 sm:px-14 max-sm:px-5 '>
        <div className='space-y-2.5'>
        <h1 className='text-left max-sm:text-4xl text-4xl font-bold'>Why trust us?</h1>
        <p className='text-left text-gray-400 text-lg'>Many desktop publishing packages and web page editors now use lorem ipsum as their<br className='hidden lg:block'/> default model text, and a search will uncover many web sites still in their infancy.</p>
        </div>

        <div className=" min-h-screen text-white  py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-purple-400 font-semibold mb-6">{section.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {section.features.map((feature, j) => (
                <div
                  key={j}
                  className=" px-5 py-7 rounded-lg border border-white/10 hover:border-purple-500 transition"
                >
                    <div className='flex gap-2.5'>
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    </div>
                  
                  <p className="text-sm text-gray-300">
                    Login box must find the right balance for the user convenience, privacy and security.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
        
    </div>
  )
}

export default Trust