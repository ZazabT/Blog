import mongoose from "mongoose";


const subscriberSchema = new mongoose.Schema({

    email:{
       type:String,
       require:true,
       unique: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})





export default mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);