import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex  items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className='mt-8 text-center tracking-tighter text-neutral-500'>
            &copy;2024 Developed by&nbsp;
            <a href="https://www.linkedin.com/in/pranavvpatil/" rel="nofollow" className='mt-8 text-center tracking-tighter text-neutral-50'>
               Pranav Patil - GC recycling
            </a>
        </p>
        
    </div>
  )
}

export default Footer