import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="font-[var(--font-geist-sans)] flex justify-between items-center px-6 py-6 bg-transparent w-full">
      { /* Logo */ }
        <div className=''>
        <h1 className="sm:text-5xl font-extrabold bg-white border border-t-2 border-black text-black font-mono transform rotate-[-3deg] pl-8 text-3xl duration-300 shadow-[6px_10px_0px_#000]">
            Echoed <span className="text-gray-500 italic transform rotate-[-10deg]">Words</span>
            <span className="text-gray-300 duration-300">.</span>
        </h1>
        </div>


      {/* Nav Links */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-6 text-gray-700">
          {["Home", "About", "Contact"].map((item, index) => (
            <li key={index} className="relative group text-base font-semibold cursor-pointer border-b-2 border-black">
              <span className="hover:text-gray-900">{item}</span>
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Auth Buttons and Search */}
      <div className="items-center gap-4 hidden md:flex shadow-[-7px_7px_0px_#000]">
        {/* Subscribe Button */}
        <div className="flex w-full max-w-sm items-center ">
            <Input type="email" placeholder="Email" className='border rounded-none' />
            <Button type="submit" className='border rounded-none' >Subscribe</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
