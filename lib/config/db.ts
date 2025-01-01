import mongoose from "mongoose";


// connect to database connection function 

export const connectToDatabase = async () => {
    
    if (mongoose.connections[0].readyState) {
        // Already connected
        console.log('Already connected to MongoDB');
        return;
      }

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

