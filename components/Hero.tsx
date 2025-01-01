import React from 'react';
import Image from 'next/image';
import book from '../public/book1.jpg';
// import desk from '../public/desk.jpg';
import code from '../public/code.jpg';
import model from '../public/model.jpg';
import startup from '../public/pexels-canvastudio-3194521-modified.jpg';
import tecnology from '../public/pexels-harschshivam-2007647-modified.jpg';

import {
  Facebook,
  Twitter as X,
  Instagram,
  Youtube,
  Github,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="px-5">
      {/* Social Media and Header Section */}
      <div className="flex flex-col md:flex-row justify-between my-5 items-center">

        {/* Social Media Icons */}
        <div className="flex sm:flex-col sm:gap-4 gap-8">
          <Facebook size={22} className="hover:text-blue-800" />
          <X size={22} className="hover:text-blue-700" />
          <Instagram size={22} className="hover:text-pink-700" />
          <Youtube size={22} className="hover:text-red-800" />
          <Github size={22} className="hover:text-gray-400" />
        </div>

        {/* Header Title and Subtitle */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-5xl font-bold py-6 uppercase">Innovating Tomorrow, One Idea at a Time</h1>
          <h3 className="mt-4 text-xl lowercase font-sans font-thin">
            Dive into the world of groundbreaking technologies, startup journeys, coding secrets, lifestyle hacks, and fascinating fun facts — where innovation meets inspiration.
          </h3>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex flex-wrap md:flex-nowrap gap-2">

        {/* Large Image */}
        <div className="w-full md:w-1/2 h-96">
          <Image
            src={model}
            alt="Large Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Smaller Images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-1">
          <div className="h-48">
            <Image
              src={book}
              alt="Small Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48">
            <Image
              src={code}
              alt="Small Image 2"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="h-48">
            <Image
              src={tecnology}
              alt="Small Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48">
            <Image
              src={startup}
              alt="Small Image 4"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;