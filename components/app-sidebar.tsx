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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="w-64 flex-shrink-0">
        <div className="flex-auto bg-black h-full">
          <div className="flex flex-col overflow-y-auto">
            <ul className="relative m-0 p-0 list-none h-full">
              {/* Sidebar Title */}
              <li className="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-black border-b-2 border-gray-700">
                Echoed Words
              </li>

              {/* Menu Items */}
              {items.map((item) => (
                <li
                  key={item.title}
                  className="text-white p-4 w-full flex relative shadow-sm justify-start bg-black border-b-2 border-gray-700 hover:bg-gray-700 cursor-pointer"
                >
                  <div className="mr-4 flex-shrink-0 my-auto">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-auto my-1">
                    <Link href={item.url} className="text-white">
                      {item.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
