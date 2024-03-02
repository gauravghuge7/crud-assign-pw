import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true, 
        index: true,

    },

    email: {
        type: String,
        required: true,
        trim: true,

    },

    date: {
        type: Date,
        required: true,
        
    },
    
    username: {
        type: String,
        required: [true, 'username must be required '],

    },

    password: {
        type: String,
        required: true,

    }

}, {timestamps: true})


export const User = mongoose.model("User", userSchema);