'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { toast } from 'react-toastify';

const SubscribeInput = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle submit function
  const handleSubmit = async () => {
    // Reset loading state
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/subscriber', { email });

      // Check if the response status is 201 (Created)
      if (response.status === 201) {
        toast.success('You have successfully subscribed!');
        setEmail(''); // Reset email input
      } else {
        throw new Error('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm items-center space-y-4">
      <div className="flex w-full items-center">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="border rounded-none"
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="border rounded-none hover:bg-orange-900 bg-orange-950 flex items-center justify-center"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
              ></path>
            </svg>
          ) : (
            'Subscribe'
          )}
        </Button>
      </div>
    </div>
  );
};

export default SubscribeInput;
