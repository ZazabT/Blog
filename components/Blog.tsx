'use client';
import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null); // Reset error before making a new request

      try {
        const response = await axios.get("http://localhost:3000/api/blog");
        if (response.status !== 200) {
          throw new Error("Failed to fetch blogs");
        }
        setBlogs(response.data.data); // Access the data from the response
      } catch (error) {
        console.log(error);
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs(); // Call the fetch function when the component mounts
  }, []); 
  

  return (
    <div className="p-4 w-full">

      {isLoading &&   
        <div className="w-full items-center flex justify-center">
          <div className="text-center w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-orange-900"></div>
        </div>
        
        }

      {error && (
        <p className="text-2xl text-center text-red-600 font-bold bg-red-100 p-4 rounded">
          {error}
        </p>
      )}

      {/* Ensure blogs is an array before mapping */}
      {Array.isArray(blogs) && blogs.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id || blog.title} {...blog} />
          ))}
        </section>
      ) : (
        !isLoading && error && (
          <p className="text-2xl text-center text-gray-700 font-bold p-4 rounded">
            No blogs available at the moment. Please check back later!
          </p>
        )
      )}
    </div>
  );
};

export default BlogList;
