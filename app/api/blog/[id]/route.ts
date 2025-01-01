import { connectToDatabase } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Blog from "@/lib/models/blog";
import { ObjectId } from 'mongodb'; // If using MongoDB

// connect to db
const connect = async () => {
  await connectToDatabase();
};

// get a blog by id
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    // call the connect to database function 
    await connect();

    // Extract the blog ID from the URL parameters
    const blogId = params.id;
    console.log('Blog ID: ' + blogId);

    // Check if the blogId is valid
    if (!ObjectId.isValid(blogId)) {
      return NextResponse.json({ success: false, message: 'Invalid Blog ID format' }, { status: 400 });
    }

    // Fetch the blog by the ID
    const blog = await Blog.findById(blogId);

    // Check if the blog exists
    if (!blog) {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    // Return the blog data if found
    return NextResponse.json({ success: true, data: blog }, { status: 200 });

  } catch (error) {
    console.error(`Error fetching blog:`, error);
    return NextResponse.json({ success: false, message: 'Failed to fetch blog' }, { status: 500 });
  }
}
