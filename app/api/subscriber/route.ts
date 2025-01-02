import { NextResponse } from "next/server";
import Subscriber from "@/lib/models/subscriber";
import { connectToDatabase } from "@/lib/config/db";


const connect = async () =>{
    await connectToDatabase();
}


export async function POST(req) {
    try {
        // Connect to the database
        await connect();

        // Extract the email from the body
        const { email } = await req.json();  // Parse the body

        if (!email) {
            return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
        }

        // Create a new Subscriber document
        const newSub = new Subscriber({ email });

        // Save the subscriber to the database
        await newSub.save();

        return NextResponse.json({ success: true, message: 'Subscribed successfully', subscribe: newSub }, { status: 201 });

    } catch (error) {
        console.error('Error during subscribing: ', error);
        return NextResponse.json({ success: false, message: 'Failed subscription' }, { status: 500 });
    }
}

// get all subs 
export async function GET(req:Request) {
    
}