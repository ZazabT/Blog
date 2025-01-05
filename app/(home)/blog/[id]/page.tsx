import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

async function fetchBlogById(id: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // Ensure fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }

  return res.json();
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  try {
    const { data: blog } = await fetchBlogById(id);

    if (!blog) {
      return (
        <div className="text-center mt-10 text-lg text-gray-500">
          No blog found.
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto my-10 p-8">
        {/* Back icon - Fixed and responsive */}
        <div className="fixed top-42 left-40 z-10">
          <Link href="/" passHref>
            <div className="flex items-center text-orange-950 border hover:border-white border-orange-950 rounded-full   transition duration-500">
              <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </Link>
        </div>

        {/* Category and Date */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <span className="uppercase tracking-wide border px-3 py-1 rounded-2xl border-orange-800 bg-orange-100 font-semibold text-orange-800">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "2-digit",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
          {blog.title}
        </h1>

        {/* Image */}
        <div className="relative w-full h-96 overflow-hidden mb-8 rounded-2xl hover:scale-105 hover:shadow-xl hover:opacity-90 hover:bg-black transition-all ease-in-out duration-500">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
          {blog.description.split("\n").map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);

    return (
      <div className="text-center mt-10 text-lg text-red-500">
        Error loading blog details.
      </div>
    );
  }
};

export default BlogDetails;
