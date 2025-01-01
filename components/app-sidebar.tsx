import Link from "next/link";
import Image from "next/image";
import { Plus, UserPlus, SquarePen, Settings } from "lucide-react";

// Menu items.
const items = [
  {
    title: "Add Blog",
    url: "/admin/addBlog",
    icon: Plus,
  },
  {
    title: "Blog Lists",
    url: "/admin/blogLists",
    icon: SquarePen,
  },
  {
    title: "Subscribers",
    url: "/admin/subscribers",
    icon: UserPlus,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <div className="flex  min-h-screen">
      {/* Sidebar */}
      <nav className="w-64 flex-shrink-0 bg-gray-900 text-white shadow-lg">
        <div className="flex flex-col h-full">
          <ul className="flex flex-col m-0 p-0 list-none h-full">
            {/* Sidebar Title */}
            <li className="text-2xl p-4 bg-gray-800 border-b-2 border-gray-700 flex items-center space-x-3">
              <span className="font-bold text-white">Echoed Words</span>
            </li>

            {/* Menu Items */}
            {items.map((item) => (
              <li
                key={item.title}
                className="text-white p-4 flex items-center space-x-4 hover:bg-gray-700 cursor-pointer transition-all duration-200 ease-in-out"
              >
                <div className="flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gray-300 hover:text-pink-500 transition-all duration-200 ease-in-out" />
                </div>
                <div className="flex-auto">
                  <Link href={item.url} className="text-white hover:text-pink-500 transition-all duration-200 ease-in-out">
                    {item.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
