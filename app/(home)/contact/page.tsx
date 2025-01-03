// pages/contact.js
import React from "react";
import { Send, Twitter, Instagram, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen mt-10 flex items-center justify-center px-6 py-12 mx-auto">
      <div className="w-full max-w-7xl mx-auto overflow-hidden">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black mb-4">
            Talk to Us, We’re Listening!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            Got questions, suggestions, or just want to say hi? Drop us a
            line, and we’ll get back to you in no time. Your feedback matters!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="p-8 mx-auto ">
            <form className="space-y-6">
              <div className="flex gap-4">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full border-gray-300 rounded-lg focus:ring-orange-200 focus:border-orange-200 py-3 px-4 text-gray-700 placeholder-gray-400"
                    placeholder="John"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-200 focus:border-orange-200 py-3 px-4 text-gray-700 placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-200 focus:border-orange-200 py-3 px-4 text-gray-700 placeholder-gray-400"
                  placeholder="John@somting.com"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-200 focus:border-orange-200 py-3 px-4 text-gray-700 placeholder-gray-400"
                  placeholder="+251 912 345 678"
                  pattern="\+?\d{1,4}\s?\d{3}\s?\d{3}\s?\d{3}"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-200 focus:border-orange-200 py-3 px-4 text-gray-700 placeholder-gray-400"
                  placeholder="Write your message here..."
                  rows="5"
                ></textarea>
              </div>

              {/* Suggestions/Checkbox Section */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="suggestion"
                    name="suggestion"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-200"
                  />
                  <label
                    htmlFor="suggestion"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Suggestion
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="feedback"
                    name="feedback"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-200"
                  />
                  <label
                    htmlFor="feedback"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Feedback
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="question"
                    name="question"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-200"
                  />
                  <label
                    htmlFor="question"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Question
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sayhi"
                    name="sayhi"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-200"
                  />
                  <label
                    htmlFor="sayhi"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Say Hi
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="complaint"
                    name="complaint"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-200"
                  />
                  <label
                    htmlFor="complaint"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Complaint
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="other"
                    name="other"
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-200"
                  />
                  <label
                    htmlFor="other"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Other
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <Button
                  type="submit"
                  className="w-full  text-orange-200 border bg-white border-orange-200 font-semibold py-4 px-6 rounded-md hover:bg-orange-900 hover:border-orange-900 hover:text-white transition duration-500"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="p-8 text-white flex flex-col space-y-8">
            {/* Chat Information Section */}
            <div className="">
              <h3 className="text-2xl font-semibold text-black">Chat with Us</h3>
              <h4 className="text-sm text-gray-400">Speak to our friendly team via message</h4>
              <div className="my-4 space-y-2">
                {/* Telegram */}
                <Link href={'/telegram'} className="flex items-center gap-2 text-base text-black underline transition duration-300">
                  <Send className="text-xl" />
                  Let's Talk on Telegram
                </Link>
                {/* Twitter */}
                <Link href={'/twitter'} className="flex items-center gap-2 text-base text-black underline transition duration-300">
                  <Twitter className="text-xl" />
                  Message us on X
                </Link>
                {/* Instagram */}
                <Link href={'/instagram'} className="flex items-center gap-2 text-base text-black underline transition duration-300">
                  <Instagram className="text-xl" />
                  See us on Instagram
                </Link>
              </div>
            </div>

            {/* Call Information Section */}
            <div className="">
              <h3 className="text-2xl font-semibold text-black">Call Us</h3>
              <h4 className="text-sm text-gray-400">Call our team from 8 am to 5 pm</h4>
              <div className="my-4 space-y-2">
                {/* Phone */}
                <Link href={'tel:+251913173163'} className="flex items-center gap-2 text-base text-black underline transition duration-300">
                  <Phone className="text-xl" />
                  +251-913-173-163
                </Link>
                {/* Phone */}
                <Link href={'tel:+251963190191'} className="flex items-center gap-2 text-base text-black underline  transition duration-300">
                  <Phone className="text-xl" />
                  +251-963-190-191
                </Link>
              </div>
            </div>

            {/* Location Section */}
            <div className="">
              <p className="flex items-center gap-2 text-lg text-orange-800">
                <MapPin className="text-xl" />
                Ethiopia, AA Signal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
