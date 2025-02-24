"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Importing icon from lucide-react

interface BlogCardProps {
  _id: number;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  title,
  description,
  category,
  createdAt,
  image,
}) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="max-w-sm w-full mx-auto hover:shadow-xl hover:scale-95 transition-all border border-gray-200 rounded-xl">
        {/* Image Section */}
        <div className="relative w-full overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-48 sm:h-56 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="px-4 py-2 flex flex-col justify-between">
          {/* Category & Date */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-orange-900 uppercase bg-orange-100 px-2 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(createdAt).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short', 
                day: 'numeric', 
                year: '2-digit', 
              })}
            </span>

          </div>

          {/* Title */}
          <h4 className="mb-3 text-xl font-semibold text-gray-800 hover:text-orange-900 transition-all duration-200 line-clamp-2">
            {title}
          </h4>

          {/* Description */}
          <p className="mb-6 text-sm font-normal text-gray-700 line-clamp-3">
            {description}
          </p>

          {/* Read More Button */}
          <Link href={`/blog/${_id}`}>
            <button
              className="flex items-center gap-2 text-xs font-bold uppercase text-orange-900 hover:text-white hover:bg-orange-900 transition-all rounded-lg py-2 px-4 mt-auto"
              type="button"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default BlogCard;
