import React from 'react';
import { Button } from './ui/button';

const Category = () => {
  return (
    <section className="py-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">Explore Categories</h2>
        <p className="text-gray-600 mt-2">
          Discover blogs by category and dive into the topics that inspire you.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <Button className="px-6 py-2 border rounded-none hover:bg-gray-100 transition hover:text-black">
          All
        </Button>
        <Button className="px-6 py-2 border rounded-none hover:bg-gray-100 transition hover:text-black">
          Lifestyle
        </Button>
        <Button className="px-6 py-2 border rounded-none hover:bg-gray-100 transition hover:text-black">
          Technology
        </Button>
        <Button className="px-6 py-2 border rounded-none hover:bg-gray-100 transition hover:text-black">
          Startup
        </Button>
        <Button className="px-6 py-2 border rounded-none hover:bg-gray-100 transition hover:text-black">
          Coding
        </Button>
      </div>
    </section>
  );
};

export default Category;
