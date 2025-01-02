import { NextResponse } from "next/server";
import Subscriber from "@/lib/models/subscriber";
import { connectToDatabase } from "@/lib/config/db";







// delete sub
export async function DELETE(req:Request , {params} : {params: { id : string}}) {
    
}