import React from "react";
import Link from "next/link";
// import { HomeIcon, UserIcon, BellIcon } from "@heroicons/react/24/outline";
import {Home , User , Bell} from 'lucide-react' 

const Sidebar = () => {
  return (
    <div
      id="sidebar-mini"
      className="fixed top-0 start-0 bottom-0 z-[60] w-20 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      role="dialog"
      aria-label="Mini Sidebar"
    >
      <div className="flex flex-col justify-center items-center gap-y-2 py-4">
        {/* Sidebar Header */}
        <div className="mb-4">
          <Link href="/admin">
            {/* Logo */}
          </Link>
        </div>

        {/* Sidebar Links */}
        <div className="space-y-4">
          {/* Blogs */}
          <div className="hs-tooltip [--placement:right] inline-block">
            <Link href="/admin/blogLists">
              <span
                className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Blogs"
              >
                <Home className="h-6 w-6 text-gray-500" />
              </span>
            </Link>
          </div>

          {/* Subscribers */}
          <div className="hs-tooltip [--placement:right] inline-block">
            <Link href="/admin/subscribers">
              <span
                className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Subscribers"
              >
                <User className="h-6 w-6 text-gray-500" />
              </span>
            </Link>
          </div>

          {/* Notifications */}
          <div className="hs-tooltip [--placement:right] inline-block">
            <Link href="/admin/notifications">
              <span
                className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Notifications"
              >
                <Bell className="h-6 w-6 text-gray-500" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
