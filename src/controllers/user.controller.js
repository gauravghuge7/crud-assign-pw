import { User } from '../models/user.model.js';
import mongoose from 'mongoose';


const registerUser = async (req, res) => {

    try {
        
        const {name, email, date, username, password} = req.body

        if(!(name || email || date || username || password )) {
            throw new Error(" all fields are required")
        }

        const existedUser = await User.findOne({email, username})

        if(existedUser) {
            throw new Error(" user is already existed");
        }

        const user = await User.create({
            name, 
            email, 
            date, 
            username, 
            password,

        })


        res.status(200).json({
            success: true,
            message: " user created successfully",
            user
        })

    } 
    catch (error) {
        console.log('error while registering user',error);
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}


const deleteUser = async (req, res) => {

    try {
        
        
    } catch (error) {
        
    }
}

export {
    registerUser
}
