import { connectToDatabase } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Blog from "@/lib/models/blog";
import { writeFile } from "fs/promises";
// connect to db
const connect =  async () => {
    await connectToDatabase();
}


// get all blogs
export async function GET(req: Request) {
    try {
      // Call the connect function to ensure DB is connected
      await connect();
      
      // Fetch all blogs from the database
      const blogs = await Blog.find();
      
      // Return a success response with the blogs data
      console.log(blogs)
      return NextResponse.json({ success: true, data: blogs }, { status: 200 });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      
      // Return a generic error message to the client (avoid sending raw error details)
      return NextResponse.json({ success: false, message: 'Failed to fetch blogs' }, { status: 500 });
    }
  }

// get a blog by id
// export async function GET_BY_ID(req: Request) {

//     return NextResponse.json({ message: "Hello" });         
// }

// create a blog
export async function POST(req: Request) {
    try {
      // Call the connect function to ensure DB is connected
      await connect();
  
      // Get the request body (form data)
      const formData = await req.formData();
      const title = formData.get("title");
      const description = formData.get("description");
      const category = formData.get("category");
      const image = formData.get("image");
  
      // Check if all required fields are provided
      if (!title || !description || !category || !image) {
        return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
      }
  
      // Check if the image is a valid file
      if (!(image instanceof File)) {
        return NextResponse.json({ success: false, message: 'Invalid image file' }, { status: 400 });
      }
  
      // Work on the image: convert image to buffer
      const imageBytesData = await image.arrayBuffer();
      const buffer = Buffer.from(imageBytesData);
      const timestamp = Date.now();
  
      // Define the file path in the public directory
      const path = `./public/blogs/${timestamp}-${image.name}`;
      const imageUrl = `/blogs/${timestamp}-${image.name}`;
      // Write the file to disk
      await writeFile(path, buffer);
  
      // save the blog details to the database
      const newBlog = new Blog({ title, description, category, image:imageUrl });
      await newBlog.save();
  
      return NextResponse.json({ success: true, message: 'Blog created successfully', blog: newBlog }, { status: 201 });
  
    } catch (error) {
      console.error('Error during blog creation:', error);
      return NextResponse.json({ success: false, message: 'Failed to create blog' }, { status: 500 });
    }
  }


// delete a blog
// export async function DELETE(req : Request) {
    
//     return NextResponse.json({ message: "Hello" });         
// }


// update a blog
// export async function PUT(req) {
    
//     return NextResponse.json({ message: "Hello" });         
// }
