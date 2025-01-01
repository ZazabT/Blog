'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null, // To store image file
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const [isClient, setIsClient] = useState(false); // To track if it's client-side

  // Handle form Input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // Handle file Input
      const file = files[0];
      setFormData({ ...formData, image: file });
      
      // Create a preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validate form data
  const validateForm = () => {
    if (!formData.title || !formData.description || !formData.category || !formData.image) {
      setMessage("All fields are required.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);


    console.log(data)

    try {
      const response = await fetch("http://localhost:3000/api/blog",{
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setMessage("Blog added successfully!");
        toast.success("Your blog was added successfully!", {
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          title: "",
          description: "",
          category: "",
          image: null,
        });
        setImagePreview(null); // Reset the image preview
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to add the blog.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      setMessage("An error occurred while adding the blog.");
    } finally {
      setLoading(false);
    }
  };

  // Set isClient to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto flex-1 pt-5 sm:pt-12 sm:pl-15">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">Add Blog</h1>

      {message && (
        <p
          className={`mb-4 text-center ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-500 px-3 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-500 px-3 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-500 px-3 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="coding">Coding</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="funfact">Fun Fact</option>
            <option value="startup">Startup</option>
          </select>
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <Input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-500 px-3 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Image Preview */}
        {isClient && imagePreview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">Image Preview:</p>
            <Image
              width={50}
              height={50}
              src={imagePreview}
              alt="Image Preview"
              className="mt-2 w-full h-48 object-cover rounded-md"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            disabled={loading}
            className={` py-2 px-4 text-white font-semibold rounded-md shadow ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-600"
            } `}
          >
            {loading ? <div className="w-5 h-5  border-4 border-t-4 border-black border-solid rounded-full animate-spin"></div>
: "Add Blog"}
          </Button>
        </div>
      </form>
    </div>
  );
}
