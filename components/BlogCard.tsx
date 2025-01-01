"use client";

import React from "react";
import Image from "next/image";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  image: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  category,
  createdAt,
  image,
  href,
}) => {
  return (
    <a
      href={href}
      className="block rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl transform bg-white dark:bg-gray-800"
    >
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-64 md:h-72">
        <Image
          src={image}
          alt={title}  // Added alt for accessibility
          width={500}  // You can set a fixed width for images
          height={300} // You can set a fixed height as well
          className="transition-transform duration-300 hover:scale-110 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white dark:bg-gray-800">
        {/* Date */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(createdAt).toLocaleDateString()}
        </div>

        {/* Title */}
        <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white truncate">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        {/* Category */}
        <div className="mt-4 text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
          {category}
        </div>

        {/* Read more button */}
        <div className="mt-4">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500">
            Read More
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
