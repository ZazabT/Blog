import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="hover:scale-95 text-gray-700 bg-orange-100 bg-opacity-20 mt-[20vh] mx-5 border rounded-md border-none">
      <div className="container mx-auto px-5 py-16 flex flex-wrap md:justify-between justify-center">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
        <Link href="/" className="text-gray-900 font-bold text-2xl transform ">
        <span className="px-2 font-mono text-orange-950 shadow-[3px_2px_0px_#6F2C1F]">
            Echoed Words
        </span>
        </Link>

          <p className="mt-4 text-gray-500 text-sm">
            Discover, create, and share amazing experiences.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 m-6">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-gray-500 hover:text-blue-900">
              <Facebook size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-gray-500 hover:text-blue-500">
              <Twitter size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-950">
              <Linkedin size={24} />
            </Link>
          </div>

          {/* Subscribe Section */}
          <div className="flex w-full max-w-sm items-center">
            <Input type="email" placeholder="Enter your email" className='border rounded-none' aria-label="Email Address" />
            <Button type="submit" className='border rounded-none hover:bg-orange-900 bg-orange-950'>Subscribe</Button>
          </div>
        </div>

        {/* Links Sections */}
        <nav className="w-full md:w-3/4 flex flex-wrap justify-center md:justify-between space-y-8 md:space-y-0">
          {[
            { title: 'About', links: ['Company', 'Careers', 'Blog'] },
            { title: 'Support', links: ['Contact Support', 'Help Resources', 'Release Updates'] },
            { title: 'Platform', links: ['Terms & Privacy', 'Pricing', 'FAQ'] },
            { title: 'Contact', links: ['Send a Message', 'Request a Quote', '+251 -913 -173 -163'] },
          ].map((section, index) => (
            <div key={index} className="w-1/2 md:w-1/4">
              <h3 className="text-sm font-semibold uppercase text-gray-900">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.startsWith('+') ? (
                      <a href={`tel:${link.replace(/\D/g, '')}`} className="text-gray-500 hover:text-gray-900 hover:underline">
                        {link}
                      </a>
                    ) : (
                      <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-gray-900 hover:underline">
                        {link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="bg-orange-50 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} All rights reserved. Built with <span aria-label="pen emoji">💻</span> by Tizazab.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
