'use client'
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
  }, []); // Empty array to ensure it runs once

  return (
    <div className="bg-red-300">
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500 ">{error}</p>}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Ensure blogs is an array before mapping */}
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard key={blog.id || blog.title} {...blog} />
          ))
        ) : (
          <p className="bg-purple-400">No blogs found.</p>
        )}
      </section>

    </div>
  );
};

export default BlogList;
