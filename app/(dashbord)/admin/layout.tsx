import { AppSidebar } from "@/components/app-sidebar";
import "../../globals.css";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <html>
      <body className="flex">
      <AppSidebar />
      {/* Main Content Area */}
      <main className="w-full h-full">
        {/* Header */}
        <header className="text-white bg-gray-800 sticky left-auto top-0 right-0 px-2 py-2">
          <div className="h-12 px-6 flex relative items-center justify-end">
            {/* Notification Icon */}
            <button className="flex mx-4 text-white hover:text-gray-200 focus:outline-none">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Avatar */}
            <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
              <Image
                className="h-full w-full object-cover"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Avatar"
                width={32}
                height={32}
              />
            </button>
          </div>
        </header>

        {/* Main Content Placeholder */}
        <div className="p-6">{children}</div>
      </main>
   
      </body>
    </html>
    
  );
}
