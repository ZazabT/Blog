import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },

        description: {
           type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['coding', 'technology', 'lifestyle', 'funfact' ,'startup'],
            required: true
          },

        image: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

    });
    
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);