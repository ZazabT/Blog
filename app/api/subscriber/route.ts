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

// Get All Subscribers
export async function GET(req: Request) {
    try {
        // Connect to the database
        await connect();

        // Fetch all subscribers from the database
        const subs = await Subscriber.find();  // Await the result here

        return NextResponse.json({ success: true, message: 'Successfully fetched subscribers', subscribers: subs }, { status: 200 });

    } catch (error) {
        console.error('Error during getting subscribers: ', error);
        return NextResponse.json({ success: false, message: 'Failed fetching subscribers' }, { status: 500 });
    }
}
