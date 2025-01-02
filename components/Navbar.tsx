import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="font-[var(--font-geist-sans)] flex justify-between items-center px-6 py-6 bg-transparent w-full">
      { /* Logo */ }
        <div className=''>
        <h1 className="hover:rotate-[2deg] sm:text-5xl font-extrabold bg-white border border-t-2 border-black text-black font-mono transform rotate-[-3deg] pl-8 text-3xl duration-500 shadow-[6px_18px_1px_#6F2C1F]">
            Echoed <span className="text-orange-950 italic transform rotate-[-10deg]">Words</span>
            <span className="text-orange-300 duration-300">.</span>
        </h1>
        </div>


      {/* Nav Links */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-6 text-gray-700">
          {[{name: "Home" , href:'/'} , {name: "About" , href:'/about'} , {name: "Contact" , href:'/contact'} ].map((item, index) => (
            <li key={index} className="relative group text-base font-semibold cursor-pointer border-b-2 border-black hover:line-through duration-300 ease-in-out transform">
               <Link href={item.href}>
               <span className="hover:text-gray-900">{item.name}</span>
               <span className="absolute left-0  bottom-0 h-1 w-0 bg-orange-950 transition-all duration-500 group-hover:w-[80%]"></span>
               </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Auth Buttons and Search */}
      <div className="items-center gap-4 hidden md:flex shadow-[-7px_7px_0px_#6F2C1F]">
        {/* Subscribe Button */}
        <div className="flex w-full max-w-sm items-center ">
            <Input type="email" placeholder="Email" className='border rounded-none' />
            <Button type="submit" className='border rounded-none hover:bg-orange-900 bg-orange-950' >Subscribe</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
