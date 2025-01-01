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
        <Button className="w-32 px-6 py-2 border border-orange-950 rounded-sm bg-orange-950 hover:bg-orange-50 transition hover:text-orange-950">
          All
        </Button>
        <Button className="w-32 px-6 py-2 border border-orange-950 rounded-sm bg-orange-950 hover:bg-orange-50 transition hover:text-orange-950">
          Lifestyle
        </Button>
        <Button className="w-32 px-6 py-2 border border-orange-950 rounded-sm bg-orange-950 hover:bg-orange-50 transition hover:text-orange-950">
          Technology
        </Button>
        <Button className="w-32 px-6 py-2 border border-orange-950 rounded-sm bg-orange-950 hover:bg-orange-50 transition hover:text-orange-950">
          Startup
        </Button>
        <Button className="w-32 px-6 py-2 border border-orange-950 rounded-sm bg-orange-950 hover:bg-orange-50 transition hover:text-orange-950">
          Coding
        </Button>
      </div>

    </section>
  );
};

export default Category;
