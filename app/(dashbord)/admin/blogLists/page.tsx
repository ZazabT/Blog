'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

export default function BlogLists() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-pink-500"></div>
      </div>
    );
  }

  if (error) return <div className="text-red-700 w-full items-center bg-red-200 px-4 py-2">{error}</div>;

  return (
    <div className="flex-1 pt-5 sm:pt-12 sm:pl-15">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 items-center flex justify-center">All Blogs</h1>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-500 border-collapse border border-gray-200">
          <thead className="text-sm text-black bg-gray-100 uppercase border-b border-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 hidden sm:block text-left border-r border-gray-200">No</th>
              <th scope="col" className="px-6 py-3 text-left border-r border-gray-200">Blog Title</th>
              <th scope="col" className="px-6 py-3 text-left border-r border-gray-200">Created At</th>
              <th scope="col" className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  <div className="flex justify-center items-center space-x-2">
                    <div className="w-5 h-5 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-pink-500"></div>
                    <span>Loading...</span>
                  </div>
                </td>
              </tr>
            ) : blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <tr key={blog._id} className="border-b border-gray-200 transition-colors hover:bg-gray-50">
                  <td className="px-6 py-4 text-center hidden sm:block border-r border-gray-200">{index + 1}</td>
                  <td className="px-6 py-4 border-r border-gray-200">{blog.title}</td>
                  <td className="px-6 py-4 border-r border-gray-200">
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      weekday: 'short',  // Mon, Tue, etc.
                      month: 'short',    // Jan, Feb, etc.
                      day: 'numeric',    // 1, 2, 3, etc.
                      year: '2-digit',   // 2025
                    })}
                  </td>
                  <td className="px-6 py-4 flex gap-2 justify-center">
                    <button className="text-red-500 hover:text-red-700 hover:scale-110 transition-transform">
                      <X className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No blogs available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
