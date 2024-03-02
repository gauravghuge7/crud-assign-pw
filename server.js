import express from "express";
import app from './src/app.js';
import { connectDB } from "./src/db/db.js";

// define the port 

const PORT = 6000 || process.env.PORT;

/// connection of db

connectDB()

// 

.then( () => {

    app.listen(PORT, () => {
        console.log(` server at running the port : ${PORT}`);
    })

    
    
})

.catch( (error) => {
    console.log('error while connecting to the server ',error);
})



